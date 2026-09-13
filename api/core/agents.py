import os
import json
from dotenv import load_dotenv
load_dotenv()
from openai import OpenAI
from api.core.models import BlogSection, BlogPlan, FinalBlog
from typing import Type, TypeVar, Any
from pydantic import BaseModel

T = TypeVar('T', bound=BaseModel)

def get_client(is_gemini: bool) -> OpenAI:
    if is_gemini:
        return OpenAI(
            base_url="https://generativelanguage.googleapis.com/v1beta/openai",
            api_key=os.environ.get("GEMINI_API_KEY"),
            timeout=60.0
        )
    return OpenAI(
        base_url="https://api.groq.com/openai/v1",
        api_key=os.environ.get("GROQ_API_KEY"),
        timeout=60.0
    )

def call_structured_llm(model: str, system_prompt: str, user_prompt: str, response_model: Type[T]) -> T:
    """
    Call the LLM and enforce a structured Pydantic response format.
    """
    is_gemini = "gemini" in model.lower()
    client = get_client(is_gemini)
    
    if is_gemini:
        model = "gemini-3.6-flash"
    else:
        model = "openai/gpt-oss-120b"

    schema_json = json.dumps(response_model.model_json_schema())
    full_system_prompt = (
        f"{system_prompt}\n\n"
        "### OUTPUT REQUIREMENT ###\n"
        "You MUST return a valid JSON object that follows the schema below. "
        "IMPORTANT: Do not return the schema itself. Return a JSON INSTANCE that represents the data.\n"
        f"SCHEMA: {schema_json}"
    )
    
    try:
        response = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": full_system_prompt},
                {"role": "user", "content": user_prompt}
            ],
            response_format={"type": "json_object"}
        )
        content = response.choices[0].message.content
        if not content:
            raise ValueError("Empty response from LLM")
        
        # Clean markdown code block fences if returned by LLM
        if content.startswith("```"):
            lines = content.splitlines()
            if lines[0].startswith("```"):
                lines = lines[1:]
            if lines and lines[-1].startswith("```"):
                lines = lines[:-1]
            content = "\n".join(lines).strip()
            
        try:
            return response_model.model_validate_json(content)
        except Exception:
            # Fallback handling for unescaped control characters in long Markdown strings
            import re
            cleaned_content = re.sub(r'(?<!\\)[\r\n\t]', ' ', content)
            return response_model.model_validate_json(content, strict=False)
    except Exception as e:
        print(f"[DEBUG] LLM Error or Validation Fail: {str(e)}")
        raise

def run_pydantic_ai_pipeline(topic: str, model_type: str = "groq") -> FinalBlog:
    """
    Structured multi-agent pipeline using Pydantic for validation.
    """
    
    llm_model = "gemini-1.5-flash" if model_type == "gemini" else "llama-3.3-70b-versatile"

    print(f"[AI] Planning: {topic} using {llm_model}...")
    plan = call_structured_llm(
        model=llm_model,
        system_prompt="You are a high-level Blog Planner. Create a structured 5+ section outline for a blog post.",
        user_prompt=f"Topic: {topic}",
        response_model=BlogPlan
    )
    
    print(f"[AI] Researching: {plan.suggested_title} using {llm_model}...")
    researched_plan = call_structured_llm(
        model=llm_model,
        system_prompt=(
            "You are a Researcher. For each section in the provided BlogPlan JSON, add in-depth research_notes. "
            "CRITICAL: You MUST preserve the 'topic' and 'suggested_title' fields exactly as they are in the input. "
            "The research_notes field MUST be a single cohesive Markdown string. DO NOT use lists or objects."
        ),
        user_prompt=f"Please research this plan and fill in the missing research_notes: {plan.model_dump_json()}",
        response_model=BlogPlan
    )
    
    print(f"[AI] Writing: {researched_plan.suggested_title} using {llm_model}...")
    final_blog = call_structured_llm(
        model=llm_model,
        system_prompt=(
            "You are a Professional Blogger. Write a comprehensive, high-quality long-form blog post (1000+ words) in Markdown format. "
            "Use the provided research_notes and outline to create a structured, engaging, and SEO-optimized post. "
            "Your output must be a JSON object with 'title', 'content' (Markdown), and 'word_count' fields."
        ),
        user_prompt=f"Please write the final blog post based on this researched plan: {researched_plan.model_dump_json()}",
        response_model=FinalBlog
    )
    
    return final_blog