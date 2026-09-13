import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = ({ onStart }) => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section pt-40 pb-24 text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-radial from-neutral-100/80 to-transparent opacity-60"></div>
      </div>

      <div className="hero-content relative z-10 w-full max-w-6xl mx-auto">
        <div className="scroll-reveal inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-50 border-2 border-black/10 mb-10 shadow-sm">
          <div className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse shadow-[0_0_8px_rgba(255,107,0,0.6)]"></div>
          <span className="text-[10px] uppercase font-black tracking-[0.3em] text-black/50">INDIA'S 1ST VEDA AGENT ORCHESTRATION</span>
        </div>

        <h1 className="scroll-reveal text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.9] tracking-[-0.04em] text-black mb-10">
          <span className="block text-[clamp(2rem,5vw,4rem)] text-black/30 mb-2 tracking-tighter">INDIA'S #1</span>
          The future of knowledge<br />is <span className="text-brand-orange">autonomous.</span>
        </h1>

        <p className="scroll-reveal text-lg md:text-xl text-black/50 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
          Leverage a collective of Pydantic AI agents to research, outline, and generate
          high-performance long-form content seamlessly.
        </p>

        <div className="scroll-reveal flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStart}
            className="group relative bg-black text-white px-10 py-5 rounded-full font-black text-base flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] active:scale-95 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            <span className="relative z-10 flex items-center gap-2">
              Start Generating
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>

          <button
            onClick={() => scrollTo('architecture')}
            className="group relative px-10 py-5 rounded-full font-black text-base border-2 border-black/20 bg-white text-black transition-all duration-300 hover:border-black hover:shadow-md active:scale-95 overflow-hidden"
          >
            <span className="absolute inset-0 bg-black scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 rounded-full"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Architecture</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
