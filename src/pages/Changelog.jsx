import React, { useEffect, useState } from 'react';
import { GitCommit, Bug, Sparkles, Wrench, Shield, Filter } from 'lucide-react';
import { gsap } from 'gsap';

const changelogEntries = [
  {
    date: "Sept 14, 2026",
    version: "v1.2.0",
    type: "Feature",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    title: "Added Custom Error Pages & React Error Boundary",
    description: "Built dedicated 404 Not Found and 500 Server Error pages. Wrapped the whole application in a React Error Boundary to capture runtime exceptions cleanly.",
    tags: ["UI/UX", "Routing", "Stability"]
  },
  {
    date: "Sept 14, 2026",
    version: "v1.2.0",
    dateGroup: "Today",
    type: "Fix",
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    title: "Vercel SPA Client Routing Fallback Rule",
    description: "Added filesystem handling and catch-all rewrite rules in vercel.json to resolve 404 errors when visiting direct routes like /upcoming and /whats-new.",
    tags: ["Vercel", "Configuration", "SPA"]
  },
  {
    date: "June 20, 2026",
    version: "v1.1.0",
    type: "Refactor",
    badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    title: "React 18 & Vite Migration",
    description: "Migrated frontend codebase to React 18 with Vite build tooling, reducing bundle startup times and enabling instant HMR.",
    tags: ["Frontend", "Performance"]
  },
  {
    date: "June 15, 2026",
    version: "v1.1.0",
    type: "UI",
    badgeColor: "bg-brand-orange/10 text-brand-orange border-brand-orange/20",
    title: "Sovereign Noir Bento Layout & GSAP Animations",
    description: "Redesigned visual theme with glassmorphic cards, smooth GSAP scroll-triggered reveals, and 3D card flips.",
    tags: ["Design", "Animation"]
  },
  {
    date: "May 28, 2026",
    version: "v1.0.5",
    type: "Feature",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    title: "Gemini 3.6 Flash Engine Integration",
    description: "Integrated Google Gemini API alongside Groq API for dual-engine LLM inference with user selection in Workspace.",
    tags: ["AI Engine", "Backend"]
  },
  {
    date: "May 10, 2026",
    version: "v1.0.5",
    type: "Security",
    badgeColor: "bg-red-500/10 text-red-600 border-red-500/20",
    title: "Pydantic Schema Validation Layer",
    description: "Enforced strict Pydantic v2 data models for BlogPlan and FinalBlog to guarantee zero JSON parsing errors.",
    tags: ["Pydantic", "Validation"]
  }
];

const Changelog = () => {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo(".changelog-card", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }
    );
  }, [filter]);

  const filteredEntries = filter === "All" 
    ? changelogEntries 
    : changelogEntries.filter(entry => entry.type === filter);

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-white relative">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6">
            <GitCommit className="w-4 h-4 text-brand-orange" />
            <span className="text-[10px] uppercase font-black tracking-widest text-brand-orange">Developer Logs</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-6">
            System <span className="text-black/30">Changelog</span>
          </h1>
          <p className="text-xl text-black/50 font-medium max-w-2xl mx-auto">
            Granular technical log of bug fixes, feature commits, security patches, and performance optimizations.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {["All", "Feature", "Fix", "UI", "Refactor", "Security"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
                filter === type 
                  ? 'bg-black text-white shadow-md' 
                  : 'bg-neutral-100 text-black/60 hover:bg-neutral-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Entries List */}
        <div className="space-y-6">
          {filteredEntries.map((entry, idx) => (
            <div 
              key={idx}
              className="changelog-card bg-neutral-50 border border-black/10 rounded-2xl p-6 hover:border-black/25 transition-all shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${entry.badgeColor}`}>
                    {entry.type}
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest bg-black text-white px-2 py-0.5 rounded-md">
                    {entry.version}
                  </span>
                </div>
                <span className="text-xs font-bold text-black/40">{entry.date}</span>
              </div>

              <h3 className="text-lg font-black text-black mb-2">{entry.title}</h3>
              <p className="text-sm font-medium text-black/60 mb-4">{entry.description}</p>

              <div className="flex items-center gap-2 flex-wrap pt-3 border-t border-black/5">
                {entry.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-bold text-black/50 bg-white border border-black/10 px-2.5 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Changelog;
