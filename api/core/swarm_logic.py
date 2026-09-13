import os
import json
from api.core.agents import run_pydantic_ai_pipeline

latest_result = {
    "status": "idle",
    "logs": [],
    "title": "",
    "content": ""
}

def log_event(message):
    print(f"[AI LOG] {message}")
    latest_result["logs"].append(message)

def run_swarm_backend(topic, model_type="groq"):
    """
    Interface for app.py to run the new Pydantic AI pipeline.
    """
    global latest_result
    latest_result["status"] = "running"
    latest_result["logs"] = [f"Starting generation for topic: {topic}"]
    
    try:
        blog = run_pydantic_ai_pipeline(topic, model_type)
        
        latest_result["title"] = blog.title
        latest_result["content"] = blog.content
        latest_result["status"] = "completed"
        log_event("Blog post generation completed successfully!")
        
    except Exception as e:
        err_msg = f"Error in pipeline: {type(e).__name__} - {str(e)}"
        log_event(err_msg)
        latest_result["status"] = "failed"
    
    return latest_result

