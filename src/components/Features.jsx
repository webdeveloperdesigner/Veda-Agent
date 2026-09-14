import React from 'react';
import { Cpu, Search, ShieldCheck, Database, ArrowRight } from 'lucide-react';

const Features = () => {
  return (
    <section id="technology" className="py-32 px-4 max-w-7xl mx-auto relative overflow-hidden">
      <div className="scroll-reveal text-center mb-20">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-3">Technology</p>
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Built for Reliability.</h2>
        <p className="text-base text-black/40 max-w-xl mx-auto font-medium leading-relaxed">
          Enterprise-grade infrastructure ensuring every draft is accurate, validated, and secure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="scroll-reveal-stagger md:col-span-8 bento-card p-8 sm:p-12 flex flex-col justify-between overflow-hidden relative group">
          <div className="mb-6 xl:mb-0">
            <Database className="w-8 h-8 mb-6 sm:mb-10 text-black/15 group-hover:text-brand-orange transition-colors duration-500" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Pydantic Validation</h3>
            <p className="text-neutral-500 text-base sm:text-lg max-w-xs xl:max-w-sm font-medium leading-relaxed">
              Every section, fact, and draft is validated against strict Pydantic schemas, ensuring 100% data integrity.
            </p>
          </div>
          
          <div className="mt-6 xl:mt-0 xl:absolute xl:right-8 xl:top-1/2 xl:-translate-y-1/2 bg-neutral-50 border border-brand-border p-4 sm:p-6 rounded-2xl sm:rounded-3xl w-full xl:w-72 shadow-sm transform group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">Strict Schema V2</span>
            </div>
            <pre className="text-[10px] sm:text-[11px] font-mono text-neutral-400 leading-relaxed overflow-x-auto">
{`class Blog(BaseModel):
    title: str
    content: List[Section]
    status: str = "validated"`}
            </pre>
          </div>
        </div>

        <div className="scroll-reveal-stagger md:col-span-4 bento-card !bg-black p-12 text-white flex flex-col justify-between group overflow-hidden !shadow-hyper-premium border-none">
          <Cpu className="w-8 h-8 mb-10 text-brand-orange" />
          <div>
            <h3 className="text-3xl font-bold mb-4">Groq 70B & Gemini</h3>
            <p className="text-neutral-400 text-lg font-medium leading-relaxed">
              Ultra-fast inference rates powered by dual LLMs for near-instant intelligence handoffs.
            </p>
          </div>
        </div>

        <div className="scroll-reveal-stagger md:col-span-4 bento-card p-12 group flex flex-col justify-between">
          <Search className="w-8 h-8 mb-10 text-black/15 group-hover:text-brand-orange transition-colors duration-500" />
          <div>
            <h3 className="text-3xl font-bold mb-4">Deep Research</h3>
            <p className="text-neutral-500 text-lg font-medium leading-relaxed">
              Autonomous search across knowledge graphs to provide verified depth to every article.
            </p>
          </div>
        </div>

        <div className="scroll-reveal-stagger md:col-span-8 bento-card p-8 sm:p-12 flex flex-col justify-between group">
          <ShieldCheck className="w-8 h-8 mb-10 text-black/15 group-hover:text-brand-orange transition-colors duration-500" />
          <div>
            <h3 className="text-3xl font-bold mb-4">Production Ready</h3>
            <p className="text-neutral-500 text-lg font-medium leading-relaxed">
              Battle-tested agent logic ready for integration into high-scale content marketing workflows.
            </p>
          </div>
        </div>

        {/* VK Auth Coming Soon Bento Card */}
        <div className="scroll-reveal-stagger md:col-span-12 bento-card p-8 sm:p-12 border-2 border-brand-orange/20 bg-gradient-to-r from-neutral-50 via-brand-orange/5 to-neutral-50 flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-brand-orange transition-all duration-500">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-[#255be6] text-white font-black text-2xl flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform">
              VK
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-0.5 rounded-full bg-brand-orange text-white text-[9px] font-black uppercase tracking-widest animate-pulse">
                  Coming Soon
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-black/40">v2.0 Integration</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black">VK Auth Single Sign-On (SSO)</h3>
              <p className="text-neutral-500 text-sm sm:text-base font-medium max-w-xl mt-1 leading-relaxed">
                Universal Single Sign-On gateway connecting VEDA Agent and all Vivek projects with one master VK account for seamless cross-platform security.
              </p>
            </div>
          </div>

          <a 
            href="https://vksecure.pages.dev/" 
            target="_blank" 
            rel="noreferrer"
            className="w-full md:w-auto px-8 py-4 rounded-full bg-black text-white text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:bg-brand-orange transition-colors shrink-0"
          >
            <span>Explore VK Auth</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
