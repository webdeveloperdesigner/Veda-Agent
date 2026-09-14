import React from 'react';
import { Send } from 'lucide-react';

const Workspace = ({ topic, setTopic, loading, onSubmit, model, setModel }) => {
  return (
    <section id="workspace" className="py-24 px-4 max-w-5xl mx-auto text-center">
      <div className="scroll-reveal mb-16">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-4">Workspace.</h2>
        <p className="text-black/40 font-bold text-base">Initialize VEDA Agent with your directive.</p>
        
        <div className="mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          <button 
            onClick={() => setModel('groq')}
            className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all border-2 ${model === 'groq' ? 'bg-black text-white border-black shadow-md' : 'bg-transparent text-neutral-400 border-neutral-200 hover:border-black/30 hover:text-black'}`}
          >
            VEDA Groq Engine
          </button>
          <button 
            onClick={() => setModel('gemini')}
            className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all border-2 ${model === 'gemini' ? 'bg-black text-white border-black shadow-md' : 'bg-transparent text-neutral-400 border-neutral-200 hover:border-black/30 hover:text-black'}`}
          >
            VEDA Gemini Engine
          </button>
        </div>
      </div>

      <div
        id="workspace-anchor"
        className="scroll-reveal relative max-w-3xl mx-auto group px-2 md:px-0"
      >
        <div className="flex flex-col md:flex-row items-center bg-white border-2 border-black/15 rounded-[2rem] md:rounded-full shadow-[0_0_0_4px_rgba(0,0,0,0.03),0_20px_60px_-10px_rgba(0,0,0,0.12)] transition-all duration-300 focus-within:border-black focus-within:shadow-[0_0_0_4px_rgba(0,0,0,0.06),0_20px_60px_-10px_rgba(0,0,0,0.18)] overflow-hidden">
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') onSubmit();
            }}
            className="w-full md:flex-1 h-16 md:h-20 px-8 bg-transparent border-none focus:outline-none text-base font-medium placeholder:text-black/20 text-black text-center md:text-left"
            placeholder="The Role of AI in Cybersecurity: Opportunities and Risks"
            disabled={loading}
          />
          <div className="w-full md:w-auto p-2 md:p-3 md:pr-3">
            <button
              onClick={onSubmit}
              disabled={loading}
              className="w-full md:w-auto group/btn relative overflow-hidden h-12 md:h-14 bg-black text-white px-8 rounded-full flex items-center justify-center gap-3 font-bold text-sm hover:bg-neutral-800 disabled:opacity-40 transition-all active:scale-95 shadow-lg"
            >
              <span className="absolute inset-0 bg-brand-orange scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-300 rounded-full"></span>
              {!loading && <Send className="w-4 h-4 relative z-10 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />}
              <span className="relative z-10">{loading ? 'Deploying...' : 'Generate Blog'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workspace;
