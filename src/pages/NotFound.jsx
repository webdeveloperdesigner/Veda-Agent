import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle, ArrowLeft } from 'lucide-react';
import { gsap } from 'gsap';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo(".error-reveal", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        <div className="error-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <span className="text-[10px] uppercase font-black tracking-widest text-red-500">Error 404</span>
        </div>

        <h1 className="error-reveal text-8xl md:text-9xl font-black tracking-tighter text-black mb-4">
          40<span className="text-brand-orange">4</span>
        </h1>

        <h2 className="error-reveal text-2xl md:text-3xl font-black text-black mb-4">
          Page Not Found
        </h2>

        <p className="error-reveal text-base text-black/60 font-medium mb-8 max-w-md mx-auto">
          Oops! The page you are looking for might have been moved, deleted, or doesn't exist.
        </p>

        <div className="error-reveal flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-lg hover:bg-neutral-800 transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-100 border border-black/10 text-black px-8 py-3.5 rounded-full text-sm font-bold hover:bg-neutral-200 transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
