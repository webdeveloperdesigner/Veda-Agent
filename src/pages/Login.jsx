import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, Mail, Smartphone, ArrowRight, CheckCircle2, Globe, Search, User, Menu, Info, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo(".vk-auth-reveal", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" }
    );
  }, []);

  const handleRequestOtp = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
    }, 1000);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsAuthenticated(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#f8fafe] text-neutral-800 font-plus flex flex-col justify-between">
      
      {/* Top Header Bar */}
      <header className="bg-[#255be6] text-white py-2 px-6 flex items-center justify-between text-xs font-bold shadow-md">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-white" />
          <span className="font-black text-sm tracking-wide">VK AUTH</span>
        </div>

        <div className="flex items-center gap-6 text-[11px]">
          <span className="hidden sm:inline text-white/80">Skip main content</span>
          <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-md cursor-pointer hover:bg-white/20">
            <Globe className="w-3.5 h-3.5" />
            <span>English ▼</span>
          </div>
        </div>
      </header>

      {/* Main Sub Navigation */}
      <nav className="bg-white border-b border-neutral-200 py-3 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#255be6] text-white font-black text-xl flex items-center justify-center shadow-md">
              VK
            </div>
            <div>
              <h1 className="font-black text-lg text-[#1e3a8a] leading-none">VK AUTH</h1>
              <span className="text-[10px] text-neutral-400 font-bold tracking-wider">One Account. All Access.</span>
            </div>
          </div>

          {/* Search Box */}
          <div className="hidden md:flex items-center gap-2 max-w-md w-full">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search in VK Ecosystem" 
                className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-2 text-xs font-medium focus:outline-none focus:border-[#255be6]"
              />
            </div>
            <button className="bg-[#255be6] text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-[#1d4ed8] transition-colors">
              Search
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-xl border border-neutral-200 text-neutral-600 hover:bg-neutral-50">
              <Menu className="w-5 h-5" />
            </button>
            <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 border border-neutral-200">
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>
      </nav>

      {/* Login Portal Section */}
      <main className="max-w-6xl mx-auto w-full px-4 py-12 flex-grow">
        
        {/* Coming Soon Banner */}
        <div className="vk-auth-reveal mb-8 bg-gradient-to-r from-amber-500/10 via-brand-orange/10 to-amber-500/10 border border-brand-orange/30 p-4 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-brand-orange text-white text-[10px] font-black uppercase tracking-widest rounded-full animate-pulse">
              Coming Soon
            </span>
            <p className="text-xs font-bold text-neutral-700">
              <strong className="text-black">VK Auth Single Sign-On (SSO)</strong> is currently under integration for VEDA Agent v2.0!
            </p>
          </div>
          <Link to="/upcoming" className="text-xs font-black text-brand-orange hover:underline whitespace-nowrap">
            View Roadmap &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: SSO Options (VK Auth & VEDA Agent) */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm vk-auth-reveal">
            
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-neutral-900 mb-2">New Here? Log In or Register with VK Auth</h2>
              <p className="text-xs text-neutral-500 font-medium">Access using any of the supported platforms below.</p>
            </div>

            {/* Provider Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              
              {/* VK Auth Provider Box */}
              <div className="border-2 border-[#255be6]/30 bg-blue-50/50 p-6 rounded-2xl text-center relative overflow-hidden group hover:border-[#255be6] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#255be6] text-white font-black text-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  VK
                </div>
                <h3 className="font-black text-base text-[#1e3a8a]">VK AUTH</h3>
                <p className="text-[10px] text-neutral-500 font-bold mb-4">One Account. All Access.</p>
                <span className="text-xs font-bold text-[#255be6] group-hover:underline">
                  Log In / Register via VK Auth
                </span>
              </div>

              {/* VEDA Agent Provider Box */}
              <div className="border border-brand-orange/30 bg-brand-orange/5 p-6 rounded-2xl text-center relative overflow-hidden group hover:border-brand-orange transition-all">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange text-white font-black text-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Zap className="w-6 h-6 text-white fill-white" />
                </div>
                <h3 className="font-black text-base text-neutral-900">VEDA Agent</h3>
                <p className="text-[10px] text-neutral-500 font-bold mb-4">Direct Local Access to VEDA AI Engine Only.</p>
                <span className="text-xs font-bold text-brand-orange group-hover:underline">
                  Log In / Register via VEDA
                </span>
              </div>

            </div>

            {/* SSO Info Box */}
            <div className="bg-blue-50/60 border border-blue-200 p-4 rounded-2xl flex items-start gap-3 mb-8">
              <Info className="w-5 h-5 text-[#255be6] shrink-0 mt-0.5" />
              <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                Choose <strong>VK Auth</strong> for master ecosystem Single Sign-On across all apps, or choose <strong>VEDA Agent</strong> for direct local access to the AI engine workspace.
              </p>
            </div>

            {/* Social & Login Method Icons */}
            <div className="pt-6 border-t border-neutral-200">
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 block text-center mb-4">Supported Login Methods</span>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {[
                  { name: "OTP", icon: Smartphone },
                  { name: "Password", icon: Lock },
                  { name: "Email", icon: Mail },
                  { name: "Google", icon: Globe },
                  { name: "GitHub", icon: ShieldCheck }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5 cursor-pointer text-neutral-500 hover:text-[#255be6] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center border border-neutral-200">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Direct VK Auth Login Box */}
          <div className="lg:col-span-5 bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm vk-auth-reveal relative overflow-hidden">
            
            {isAuthenticated ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-neutral-900 mb-2">Authenticated via VK Auth</h3>
                <p className="text-xs text-neutral-500 font-medium mb-6">Welcome back! Your single sign-on token is active.</p>
                <Link to="/" className="inline-block px-8 py-3 rounded-xl bg-[#255be6] text-white text-xs font-bold shadow-md hover:bg-[#1d4ed8]">
                  Go to Workspace
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-black text-neutral-900 mb-2">Already Participated? Log In to Continue</h3>
                  <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                    If you've already registered or participated, log in using your email or mobile number.
                  </p>
                </div>

                {!otpSent ? (
                  <form onSubmit={handleRequestOtp} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-2">
                        Email or Mobile
                      </label>
                      <input 
                        type="text" 
                        required 
                        value={emailOrMobile} 
                        onChange={(e) => setEmailOrMobile(e.target.value)}
                        placeholder="Enter email or 10-digit mobile" 
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3.5 text-sm font-semibold focus:outline-none focus:border-[#255be6]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 rounded-xl bg-[#255be6] text-white font-black text-sm shadow-md hover:bg-[#1d4ed8] transition-all disabled:opacity-50"
                    >
                      {isLoading ? 'Sending One-Time Password...' : 'Request OTP'}
                    </button>

                    <p className="text-[11px] text-neutral-400 font-medium leading-relaxed pt-2">
                      We'll send a One-Time Password (OTP) to your registered email or mobile number.
                    </p>
                  </form>
                ) : (
                  <form onSubmit={handleVerifyOtp} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-2">
                        Enter 6-Digit OTP Sent to {emailOrMobile}
                      </label>
                      <input 
                        type="text" 
                        required 
                        maxLength={6}
                        value={otp} 
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="1 2 3 4 5 6" 
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3.5 text-center tracking-widest text-lg font-black focus:outline-none focus:border-[#255be6]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 rounded-xl bg-emerald-600 text-white font-black text-sm shadow-md hover:bg-emerald-700 transition-all disabled:opacity-50"
                    >
                      {isLoading ? 'Verifying OTP...' : 'Verify & Continue'}
                    </button>
                  </form>
                )}

                {/* Consent Note */}
                <div className="mt-8 p-4 bg-neutral-50 border border-neutral-200 rounded-2xl text-[11px] text-neutral-500 font-medium">
                  By logging in, you agree to our <a href="#terms" className="text-[#255be6] underline">Terms and Conditions</a> and <a href="#privacy" className="text-[#255be6] underline">Privacy Policy</a>.
                </div>
              </>
            )}

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 py-4 px-6 text-center text-xs text-neutral-400 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 VK Auth. All rights reserved.</span>
          <div className="flex gap-6 text-[11px]">
            <a href="#terms" className="hover:text-neutral-700">Terms and Conditions</a>
            <a href="#privacy" className="hover:text-neutral-700">Privacy Policy</a>
            <a href="#help" className="hover:text-neutral-700">Help</a>
            <a href="#contact" className="hover:text-neutral-700">Contact Us</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Login;
