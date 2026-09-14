import React, { useEffect } from 'react';
import { Tag, Download, GitCommit, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';

const versionData = [
  {
    version: "v1.2.0",
    releaseDate: "Sept 14, 2026",
    tag: "Latest Release",
    commit: "a662c5c",
    status: "Stable",
    highlights: [
      "Official public repository launch on GitHub.",
      "Integrated full SPA routing fallback for direct sub-page navigation.",
      "Added custom 404 Not Found & 500 Server Error pages.",
      "Global React Error Boundary protection added."
    ],
    githubUrl: "https://github.com/webdeveloperdesigner/Veda-Agent/tree/v1.2.0"
  },
  {
    version: "v1.1.0",
    releaseDate: "June 2026",
    tag: "Major Update",
    commit: "7f92b1a",
    status: "Stable",
    highlights: [
      "Frontend migration from Vue 3 to React 18 & Vite 5.",
      "Sovereign Noir glassmorphism aesthetic with GSAP animations.",
      "Added dark-mode VEDA Vision showcase component.",
      "Fully responsive Bento grid layout."
    ],
    githubUrl: "https://github.com/webdeveloperdesigner/Veda-Agent"
  },
  {
    version: "v1.0.5",
    releaseDate: "May 2026",
    tag: "Feature Patch",
    commit: "3e14c09",
    status: "Stable",
    highlights: [
      "Added dual AI engine support: Groq Engine & Gemini 3.6 Flash.",
      "Pydantic schema validation for zero hallucination structured outputs.",
      "Streamlined FPDF2 Markdown-to-PDF compilation pipeline."
    ],
    githubUrl: "https://github.com/webdeveloperdesigner/Veda-Agent"
  },
  {
    version: "v1.0.0",
    releaseDate: "April 2026",
    tag: "Initial Launch",
    commit: "1b88e42",
    status: "Stable",
    highlights: [
      "First public release of VEDA Swarm AI Blog Engine.",
      "Multi-Agent sequential pipeline: Planner -> Researcher -> Writer.",
      "Vercel Serverless synchronous REST backend implementation."
    ],
    githubUrl: "https://github.com/webdeveloperdesigner/Veda-Agent"
  }
];

const Versions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo(".versions-reveal", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-white relative">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="versions-reveal mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6">
            <Tag className="w-4 h-4 text-brand-orange" />
            <span className="text-[10px] uppercase font-black tracking-widest text-brand-orange">Version History</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-6">
            Releases & <span className="text-black/30">Tags</span>
          </h1>
          <p className="text-xl text-black/50 font-medium max-w-2xl mx-auto">
            Technical build history, release tags, commit references, and official version downloads for VEDA Agent.
          </p>
        </div>

        {/* Version List */}
        <div className="space-y-8">
          {versionData.map((item, index) => (
            <div 
              key={index}
              className="versions-reveal bg-neutral-50 border border-black/10 rounded-3xl p-6 md:p-8 hover:border-black/30 transition-all shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/10">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black tracking-tight text-black">{item.version}</span>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                    index === 0 ? 'bg-brand-orange text-white' : 'bg-black text-white'
                  }`}>
                    {item.tag}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-bold text-black/50">
                  <span className="flex items-center gap-1">
                    <GitCommit className="w-4 h-4 text-black" /> {item.commit}
                  </span>
                  <span>•</span>
                  <span>{item.releaseDate}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:flex items-center gap-1 text-emerald-600 font-black">
                    <ShieldCheck className="w-4 h-4" /> {item.status}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="py-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-black/40 mb-3">Key Technical Highlights</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.highlights.map((point, i) => (
                    <li key={i} className="text-sm font-medium text-black/70 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-black/5 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-black hover:text-brand-orange transition-colors"
                >
                  View Commit Source <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/webdeveloperdesigner/Veda-Agent/archive/refs/heads/main.zip"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-bold hover:bg-neutral-800 transition-all active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" /> Download Source (.zip)
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Versions;
