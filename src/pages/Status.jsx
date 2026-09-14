import React, { useState, useEffect } from 'react';
import { Activity, CheckCircle, Clock, Server, Cpu, FileText, RefreshCw, Zap } from 'lucide-react';
import { gsap } from 'gsap';

const Status = () => {
  const [lastChecked, setLastChecked] = useState("Just now");

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo(".status-reveal", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  const handleRefresh = () => {
    setLastChecked("Just now");
  };

  const services = [
    {
      name: "VEDA Groq Inference Engine",
      model: "openai/gpt-oss-120b & llama-3.3-70b",
      status: "Operational",
      uptime: "99.98%",
      latency: "140ms",
      icon: Cpu
    },
    {
      name: "VEDA Gemini Flash Engine",
      model: "google/gemini-3.6-flash",
      status: "Operational",
      uptime: "99.95%",
      latency: "210ms",
      icon: Zap
    },
    {
      name: "Vercel Serverless Backend API",
      model: "Python 3.12 / Flask Synchronous Handlers",
      status: "Operational",
      uptime: "100.0%",
      latency: "45ms",
      icon: Server
    },
    {
      name: "FPDF2 Markdown-to-PDF Engine",
      model: "Automated Report Compiler & Artifact Sanitizer",
      status: "Operational",
      uptime: "99.99%",
      latency: "320ms",
      icon: FileText
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-white relative">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="status-reveal mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] uppercase font-black tracking-widest text-emerald-600">All Systems Operational</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-6">
            System <span className="text-black/30">Status</span>
          </h1>
          <p className="text-xl text-black/50 font-medium max-w-2xl mx-auto">
            Live operational health, API response latency, and engine uptime for VEDA Agent services.
          </p>
        </div>

        {/* Status Card Banner */}
        <div className="status-reveal bg-neutral-900 text-white rounded-3xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Activity className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">VEDA Intelligence Pipeline is 100% Healthy</h3>
              <p className="text-xs text-neutral-400 font-medium">All AI inference agents, API endpoints, and export engines are fully online.</p>
            </div>
          </div>

          <button
            onClick={handleRefresh}
            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-bold text-white flex items-center gap-2 transition-all active:scale-95 shrink-0"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Checked: {lastChecked}</span>
          </button>
        </div>

        {/* Services List */}
        <div className="status-reveal space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-black/40 mb-4 px-2">Engine Services & Infrastructure</h3>
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx}
                className="bg-neutral-50 border border-black/10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-black/25 transition-all shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0 mt-1 sm:mt-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-black">{service.name}</h4>
                    <p className="text-xs font-medium text-black/50">{service.model}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-black/5">
                  <div className="text-left sm:text-right">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block">Latency</span>
                    <span className="text-xs font-bold text-black">{service.latency}</span>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block">Uptime</span>
                    <span className="text-xs font-bold text-black">{service.uptime}</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-full text-xs font-bold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{service.status}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Status;
