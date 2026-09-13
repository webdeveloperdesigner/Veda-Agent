# VEDA Agent — Virtual Engine for Documentation, Exploration, Discovery & Automation

A production-grade, multi-agent AI knowledge system powered by **Pydantic AI structured validation**, **Groq Engine**, and **Google Gemini 3.6 Flash**. Specialized AI agents orchestrate in a synchronized pipeline to transform human thoughts into structured intelligence and export high-fidelity PDF reports.

---

## Features

- **Multi-Agent Pipeline**: Planner, Researcher, and Writer agents work in a Pydantic-validated workflow to eliminate hallucinations.
- **Dual AI Engine Support**: Switch seamlessly between **VEDA Groq Engine** (`openai/gpt-oss-120b` / `llama-3.3-70b`) and **VEDA Gemini Engine** (`gemini-3.6-flash`).
- **Comprehensive Content Generation**: Generates 1000+ word, SEO-optimized, research-backed articles and documentation.
- **State-of-the-Art SaaS UI**: Built with React 18 + Tailwind CSS 3 + GSAP animations featuring dynamic 3D elements and a minimalist Bento layout.
- **Professional PDF Export Engine**: Automated Markdown-to-PDF rendering via FPDF2 with live progress logging.
- **Vercel Serverless Architecture**: Flat, single-call synchronous API backend for 100% Vercel Serverless deployment compatibility.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite 5, Tailwind CSS 3, GSAP 3, React Router v7 |
| Icons | Lucide React, React Icons |
| Backend | Flask (Python 3.12), Vercel Serverless Functions |
| AI Inference | Groq API (`openai/gpt-oss-120b`) & Google Gemini API (`gemini-3.6-flash`) |
| Validation | Pydantic v2 |
| PDF Engine | FPDF2 |
| Deployment | Vercel (`vercel.json`) |

---

## Getting Started

### Prerequisites

- Python 3.10+
- Node.js 18+
- Groq API Key & Gemini API Key

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd veda

# Install frontend dependencies
npm install

# Install backend dependencies
pip install -r requirements.txt
```

### Configuration

Create a `.env` file in the root directory:

```env
GROQ_API_KEY=gsk_your_groq_key_here
GEMINI_API_KEY=your_gemini_key_here
```

### Running (Development)

```bash
# Terminal 1: Start Python Backend API (Port 5000)
python api/index.py

# Terminal 2: Start Vite React Frontend Dev Server (Port 5173)
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building & Deploying to Vercel

```bash
# Build for production
npm run build

# Deploy directly to Vercel
npm run deploy
```

---

## Project Structure

```text
veda/
├── api/                      # Python Serverless Backend
│   ├── index.py              # Flask entry point & synchronous API handlers
│   └── core/                 
│       ├── agents.py         # LLM pipeline & structured Pydantic callers
│       ├── models.py         # Pydantic data schemas (BlogPlan, FinalBlog)
│       ├── swarm_logic.py    # Pipeline execution & status logging
│       └── pdf_generator.py  # FPDF2 Markdown-to-PDF engine
├── src/                      # React 18 Frontend
│   ├── components/           # Navbar, Hero, VedaVision, Workspace, Features, AgentSwarm, Footer
│   ├── pages/                # Home, Upcoming, WhatsNew
│   ├── App.jsx               # React Router root component
│   └── main.jsx              # Vite React entry point
├── public/                   # Static assets & custom branded favicon.svg
├── dist/                     # Built production frontend (Vite bundle)
├── vercel.json               # Vercel deployment & routing config
├── requirements.txt          # Python dependencies
└── package.json              # React frontend dependencies & deployment scripts
```

---

## Multi-Agent Workflow

```
User Directive Prompt
          │
          ▼
   Planner Agent      ──► Generates structured section outline (Pydantic Schema)
          │
          ▼
  Researcher Agent    ──► Injects deep-dive technical research & background
          │
          ▼
    Writer Agent      ──► Synthesizes 1000+ word Markdown content
          │
          ▼
   PDF Generator      ──► Sanitizes content & exports downloadable PDF report
```

---

## Deployment

This project is configured for **Vercel** serverless deployment with zero background thread reliance.

```bash
npm run deploy
```

Live Demo: [https://veda-ivory.vercel.app](https://veda-ivory.vercel.app)

---

## Developer & Credit

- **Developed By:** [Vivek](https://vivek01.vercel.app/)
- **Core Engine:** VEDA Content Intelligence Systems

---

## License

MIT License — Feel free to use and modify for your own projects.
