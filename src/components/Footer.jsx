import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const Footer = () => {
  const [showDeveloper, setShowDeveloper] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDeveloper((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-16 px-6 border-t-2 border-black/8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">

        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-brand-orange fill-brand-orange" />
          <span className="font-black text-sm tracking-tighter text-black">VEDA Agent</span>
        </div>

        <div className="py-2 flex items-center justify-center [perspective:1000px]">
          <div 
            className={`transition-transform duration-700 [transform-style:preserve-3d] flex items-center justify-center ${
              showDeveloper ? '[transform:rotateX(180deg)]' : '[transform:rotateX(0deg)]'
            }`}
          >
            {/* Front Side: POWERED BY VEDA */}
            <span className="[backface-visibility:hidden] text-[10px] font-black tracking-[0.2em] text-black uppercase whitespace-nowrap px-2 py-1">
              © 2026 CONTENT INTELLIGENCE SYSTEMS. POWERED BY VEDA.
            </span>
            
            {/* Back Side: DEVELOPED BY VIVEK */}
            <span className="absolute [backface-visibility:hidden] [transform:rotateX(180deg)] text-[10px] font-black tracking-[0.2em] text-brand-orange uppercase whitespace-nowrap px-2 py-1">
              © 2026 CONTENT INTELLIGENCE SYSTEMS. DEVELOPED BY{' '}
              <a 
                href="https://vivek01.vercel.app/" 
                target="_blank" 
                rel="noreferrer" 
                className="underline hover:text-black transition-colors cursor-pointer"
              >
                VIVEK
              </a>.
            </span>
          </div>
        </div>

        <div className="flex gap-8 text-[10px] uppercase font-black tracking-widest text-black/60">
          <a href="#" className="hover:text-black transition-colors duration-200 relative group">
            Docs
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#architecture" className="hover:text-black transition-colors duration-200 relative group">
            Architecture
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="https://github.com/Arfazrll/Swarm-Agent-Orchestrator" target="_blank" rel="noreferrer" className="hover:text-black transition-colors duration-200 flex items-center gap-1.5 relative group">
            <FiGithub className="w-3.5 h-3.5" />
            GitHub
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
