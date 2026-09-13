import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal } from 'lucide-react';

const vedaWords = [
  "Documentation",
  "Exploration",
  "Discovery",
  "Analysis",
  "Generation",
  "Automation",
  "Transformation",
  "Execution",
  "Research",
  "Intelligence",
  "Visualization"
];

const VedaVision = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % vedaWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 px-4 bg-white overflow-hidden border-y border-black/5">
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 border border-black/10 mb-8">
          <Terminal className="w-3.5 h-3.5 text-black" />
          <span className="text-[10px] uppercase font-black tracking-[0.3em] text-black/70">The Core Engine</span>
        </div>

        {/* Main Acronym */}
        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-12 flex items-center gap-4">
          <span>
            What is VEDA?
          </span>
        </h2>

        {/* Rotator Box */}
        <div className="w-full max-w-5xl bg-neutral-50 border border-brand-border rounded-3xl p-6 md:p-16 shadow-premium relative overflow-hidden group">
          
          <div className="flex flex-row flex-wrap justify-center items-center gap-x-2 gap-y-1 text-[clamp(1.1rem,4vw,4rem)] font-black tracking-tight text-center leading-tight">
            <span className="text-black/40 font-bold whitespace-nowrap">Virtual Engine for</span>
            
            <div className="relative inline-flex items-center">
              <span 
                key={wordIndex}
                className="text-black inline-block text-left animate-[revealWord_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards] whitespace-nowrap"
              >
                {vedaWords[wordIndex]}
              </span>
              <Sparkles className="hidden md:block absolute -right-12 top-0 w-8 h-8 text-brand-orange opacity-0 animate-[sparkle_2.5s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes revealWord {
          0% { 
            opacity: 0; 
            transform: translateY(20px) scale(0.95);
            filter: blur(10px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
      `}} />
    </section>
  );
};

export default VedaVision;
