import React, { useEffect } from 'react';
import { Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';

const updates = [
  {
    version: "v1.1.0",
    date: "June 2026",
    title: "Sovereign Noir UI Redesign",
    type: "Major",
    changes: [
      "Completely overhauled the frontend from Vue to React JS (Vite).",
      "Implemented 'Sovereign Noir' premium aesthetic with glassmorphism and GSAP animations.",
      "Added fluid dynamic typography and completely responsive bento-grid layouts.",
      "Introduced the animated VEDA Vision dark-mode section."
    ]
  },
  {
    version: "v1.0.5",
    date: "May 2026",
    title: "Dual-Model Architecture",
    type: "Feature",
    changes: [
      "Added support for both Groq (Llama 3) and Google Gemini (1.5 Flash).",
      "Dynamic prompt routing based on user model selection.",
      "Optimized payload chunking for PDF generation.",
      "Improved orchestrator error handling and fallbacks."
    ]
  },
  {
    version: "v1.0.0",
    date: "April 2026",
    title: "Initial Alpha Release",
    type: "Launch",
    changes: [
      "Launched the core Pydantic AI Swarm architecture.",
      "Sequential agent pipeline (Planner -> Researcher -> Writer).",
      "In-memory job tracking system.",
      "Markdown to PDF export pipeline."
    ]
  }
];

const WhatsNew = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo(".changelog-reveal", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-white relative">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="changelog-reveal mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6">
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span className="text-[10px] uppercase font-black tracking-widest text-brand-orange">Changelog</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-6">
            What's <span className="text-black/30">New</span>
          </h1>
          <p className="text-xl text-black/50 font-medium">
            Keep track of the latest updates, improvements, and architectural changes to the VEDA Agent.
          </p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-black/10 before:to-transparent">
          
          {updates.map((update, idx) => (
            <div key={idx} className="changelog-reveal relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-black text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              
              {/* Content Box */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-neutral-50 border border-black/5 p-6 rounded-3xl hover:border-black/20 transition-colors shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-black/40 flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> {update.date}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-black text-white rounded-md">
                    {update.version}
                  </span>
                </div>
                
                <h3 className="text-xl font-black text-black mb-4">{update.title}</h3>
                
                <ul className="space-y-3">
                  {update.changes.map((change, i) => (
                    <li key={i} className="text-sm font-medium text-black/60 flex items-start gap-2">
                      <span className="text-brand-orange mt-1">•</span>
                      {change}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
