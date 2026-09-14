import React, { useEffect } from 'react';
import { Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';

const updates = [
  {
    version: "v1.2.5",
    date: "September 2026",
    title: "Mobile Optimization & Layout Polish",
    type: "Major",
    changes: [
      "Added responsive mobile hamburger menu for smooth navigation on phones & tablets.",
      "Added 3D card flip animation in the main Hero section (knowledge ↔ writing).",
      "Fixed Pydantic code box overlap on iPad Pro / 1024px tablet screens.",
      "Optimized footer copyright flip banner for small 320px phone displays."
    ]
  },
  {
    version: "v1.2.0",
    date: "September 2026",
    title: "Official GitHub Repository Launch",
    type: "Release",
    changes: [
      "Uploaded full source code to GitHub (webdeveloperdesigner/Veda-Agent).",
      "Added direct Documentation links pointing straight to GitHub README.",
      "Fixed page routing (SPA 404 issue) for direct page links like /upcoming and /whats-new.",
      "Added custom Error pages (404 Page Not Found & 500 Server Error) for smooth browsing.",
      "Built automatic React Error Boundary protection to prevent application crashes."
    ]
  },
  {
    version: "v1.1.0",
    date: "June 2026",
    title: "Brand New Look & Better Design",
    type: "Major",
    changes: [
      "Redesigned the website with React JS for faster loading and super smooth screens.",
      "Added modern glass visual effects, smooth animations, and clean cards.",
      "Made the layout look great on all mobile screens, tablets, and laptops.",
      "Added a new interactive VEDA Vision section."
    ]
  },
  {
    version: "v1.0.5",
    date: "May 2026",
    title: "Dual AI Engine Power",
    type: "Feature",
    changes: [
      "Now you can pick between two top AI engines: Groq (Llama 3.3) or Google Gemini.",
      "Smart automatic switching ensures you get fast and accurate results.",
      "Faster PDF creation with quick report generation.",
      "Better error handling so your AI tasks run cleanly without stopping."
    ]
  },
  {
    version: "v1.0.0",
    date: "April 2026",
    title: "First Release of VEDA Agent",
    type: "Launch",
    changes: [
      "Launched the smart Multi-Agent AI system to create full blogs automatically.",
      "Simple 3-step process: Planner outlines, Researcher gathers facts, Writer writes content.",
      "Instant PDF downloading for all generated reports.",
      "Simple live progress updates while the AI works."
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
