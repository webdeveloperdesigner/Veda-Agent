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

        <div className="py-2 flex items-center justify-center [perspective:1000px] w-full md:w-auto">
          <div 
            className={`transition-transform duration-700 [transform-style:preserve-3d] flex items-center justify-center ${
              showDeveloper ? '[transform:rotateX(180deg)]' : '[transform:rotateX(0deg)]'
            }`}
          >
            {/* Front Side: POWERED BY VEDA */}
            <span className="[backface-visibility:hidden] text-[9px] sm:text-[10px] font-black tracking-[0.12em] sm:tracking-[0.2em] text-black uppercase text-center px-1 py-1">
              © 2026 CONTENT INTELLIGENCE SYSTEMS. POWERED BY VEDA.
            </span>
            
            {/* Back Side: DEVELOPED BY VIVEK */}
            <span className="absolute [backface-visibility:hidden] [transform:rotateX(180deg)] text-[9px] sm:text-[10px] font-black tracking-[0.12em] sm:tracking-[0.2em] text-brand-orange uppercase text-center px-1 py-1">
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

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[10px] uppercase font-black tracking-widest text-black/60">
          <a href="https://github.com/webdeveloperdesigner/Veda-Agent/blob/main/README.md" target="_blank" rel="noreferrer" className="hover:text-black transition-colors duration-200 relative group">
            Docs
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="/#architecture" className="hover:text-black transition-colors duration-200 relative group">
            Architecture
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="https://github.com/webdeveloperdesigner/Veda-Agent" target="_blank" rel="noreferrer" className="hover:text-black transition-colors duration-200 flex items-center gap-1.5 relative group">
            <FiGithub className="w-3.5 h-3.5" />
            GitHub
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          {/* More Dropdown */}
          <div className="relative group/dropdown">
            <button className="hover:text-black transition-colors duration-200 flex items-center gap-1 py-1 uppercase font-black tracking-widest cursor-pointer">
              More
              <span className="text-[8px] transition-transform duration-200 group-hover/dropdown:rotate-180">▼</span>
            </button>
            
            <div className="absolute bottom-full right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 mb-2 w-40 bg-white border border-black/10 rounded-2xl p-2 shadow-2xl opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 z-50">
              <a href="/whats-new" className="block px-3 py-2 rounded-xl text-[10px] font-bold text-black/70 hover:text-black hover:bg-neutral-100 transition-colors">
                What's New
              </a>
              <a href="/changelog" className="block px-3 py-2 rounded-xl text-[10px] font-bold text-black/70 hover:text-black hover:bg-neutral-100 transition-colors">
                Changelog
              </a>
              <a href="/versions" className="block px-3 py-2 rounded-xl text-[10px] font-bold text-black/70 hover:text-black hover:bg-neutral-100 transition-colors">
                Versions
              </a>
              <a href="/status" className="block px-3 py-2 rounded-xl text-[10px] font-bold text-black/70 hover:text-black hover:bg-neutral-100 transition-colors">
                Status
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
