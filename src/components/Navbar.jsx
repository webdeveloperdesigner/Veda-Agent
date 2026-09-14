import React from 'react';
import { Zap } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1000px] px-4">
      <div className="bg-white/85 backdrop-blur-2xl border-2 border-black/12 rounded-full px-2 py-2 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-2 pl-4 cursor-pointer" onClick={() => navigate('/')}>
          <Zap className="w-5 h-5 text-black fill-black" />
          <span className="font-black text-base tracking-tighter">VEDA Agent</span>
          <span className="hidden sm:inline-block ml-1 px-2.5 py-0.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[9px] font-black tracking-widest uppercase shadow-sm">
            India's #1
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[13px] font-bold text-neutral-500">
          {/* <Link to="/upcoming" className="hover:text-black transition-colors duration-200 cursor-pointer relative group">
            Upcoming
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/whats-new" className="hover:text-black transition-colors duration-200 cursor-pointer relative group">
            What's New
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
          </Link> */}
          <a onClick={(e) => handleScrollTo(e, 'technology')} href="/#technology"
             className="hover:text-black transition-colors duration-200 cursor-pointer relative group">
            Technology
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a onClick={(e) => handleScrollTo(e, 'architecture')} href="/#architecture"
             className="hover:text-black transition-colors duration-200 cursor-pointer relative group">
            Architecture
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="https://github.com/webdeveloperdesigner/Veda-Agent" target="_blank" rel="noreferrer"
             className="hover:text-black transition-colors duration-200 flex items-center gap-1.5 relative group">
            <FiGithub className="w-4 h-4" />
            GitHub
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <button
          onClick={(e) => handleScrollTo(e, 'workspace-anchor')}
          className="relative overflow-hidden bg-black text-white px-8 py-3 rounded-full text-[13px] font-bold shadow-lg transition-all duration-300 active:scale-95 group">
          <span className="absolute inset-0 bg-brand-orange scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-full"></span>
          <span className="relative z-10">Get Started</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
