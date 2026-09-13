import React, { useState, useEffect } from 'react';
import { Rocket, Terminal, FileText, Download, Search, Cpu, ShieldCheck, Layout, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from '../components/Hero';
import VedaVision from '../components/VedaVision';
import Features from '../components/Features';
import AgentSwarm from '../components/AgentSwarm';
import Workspace from '../components/Workspace';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: 1, name: 'Analysing Topic', icon: Search },
  { id: 2, name: 'Strategic Planning', icon: Layout },
  { id: 3, name: 'Deep Research', icon: Cpu },
  { id: 4, name: 'AI Drafting', icon: FileText },
  { id: 5, name: 'Polish & Export', icon: ShieldCheck }
];

const Home = () => {
  const [topic, setTopic] = useState("");
  const [jobStatus, setJobStatus] = useState("idle"); // idle, running, completed, error
  const [logs, setLogs] = useState([]);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [blogTitle, setBlogTitle] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [model, setModel] = useState("groq"); // groq or gemini

  const startGeneration = async () => {
    if (!topic) return;
    
    setJobStatus("running");
    setLogs(["Initiating VEDA Orchestrator..."]);
    setPdfUrl(null);
    setCurrentStep(0);

    const el = document.getElementById('workspace-anchor');
    if (el) el.scrollIntoView({ behavior: 'smooth' });

    let step = 0;
    const stepInterval = setInterval(() => {
      if (step < 3) {
        step++;
        setCurrentStep(step);
      }
    }, 4000);

    try {
      const res = await axios.post("/api/run", { topic, model });
      clearInterval(stepInterval);
      
      const data = res.data;
      setLogs(data.logs || []);
      
      if (data.status === "completed") {
        setJobStatus("completed");
        setPdfUrl(data.pdf_url);
        setBlogTitle(data.title);
        setCurrentStep(4);
        
        gsap.fromTo(".success-state", 
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "expo.out" }
        );
      } else {
        setJobStatus("error");
      }
    } catch (err) {
      clearInterval(stepInterval);
      setJobStatus("error");
      const errLogs = err.response?.data?.logs || ["Error: Failed to connect to backend api."];
      setLogs(errLogs);
    }
  };

  const scrollToWorkspace = () => {
    const el = document.getElementById('workspace-anchor');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    gsap.fromTo(".hero-content > *", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out" }
    );

    gsap.utils.toArray('.scroll-reveal').forEach((el) => {
      gsap.fromTo(el, 
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: el, start: 'top 88%', end: 'top 20%', toggleActions: 'play none none reverse',
          }
        }
      );
    });

    const staggerGroups = document.querySelectorAll('.scroll-reveal-stagger');
    if (staggerGroups.length > 0) {
      gsap.fromTo(staggerGroups,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: {
            trigger: staggerGroups[0], start: 'top 85%', toggleActions: 'play none none reverse',
          }
        }
      );
    }

    gsap.to('.hero-section', {
      y: -80, ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1.5,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <Hero onStart={scrollToWorkspace} />
      <VedaVision />
      <Features />
      <AgentSwarm />

      <div id="workspace-anchor" className="scroll-mt-32">
        <Workspace 
          topic={topic} 
          setTopic={setTopic} 
          loading={jobStatus === 'running'} 
          onSubmit={startGeneration} 
          model={model}
          setModel={setModel}
        />
      </div>

      {jobStatus !== 'idle' && (
        <section className="max-w-7xl mx-auto px-4 pb-32">
          <div className="bento-card p-10 relative overflow-hidden bg-white/80 backdrop-blur-md">
            <div className="flex justify-between items-center mb-16 relative z-10 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center gap-4">
                  <div 
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-700 ${currentStep >= index ? 'bg-black border-black text-white scale-110 shadow-lg' : 'bg-white border-brand-border text-neutral-300'}`}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${currentStep >= index ? 'text-black' : 'text-neutral-300'}`}>
                    {step.name}
                  </span>
                </div>
              ))}
              <div className="absolute top-7 left-14 right-14 h-[2px] bg-brand-border -z-10">
                <div 
                  className="h-full bg-black transition-all duration-1000"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-neutral-50 rounded-3xl p-8 border border-brand-border font-mono text-xs h-96 overflow-y-auto shadow-inner relative">
                <div className="sticky top-0 bg-neutral-50/90 backdrop-blur pb-4 mb-4 border-b border-black/5 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-black" />
                  <span className="font-bold uppercase tracking-widest text-[10px]">Orchestrator Logs</span>
                </div>
                {logs.map((log, index) => (
                  <div key={index} className="mb-3 text-brand-gray flex gap-4 leading-relaxed">
                    <span className="text-neutral-300">{String(index + 1).padStart(2, '0')}</span>
                    <span>{log}</span>
                  </div>
                ))}
                {jobStatus === 'running' && (
                  <div className="mt-4 flex items-center gap-2 text-black font-black italic">
                    <span className="w-2 h-2 bg-brand-orange rounded-full animate-ping"></span>
                    <span>Awaiting agent response...</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center items-center text-center p-10 border-2 border-dashed border-brand-border rounded-3xl bg-neutral-50/30">
                {jobStatus === 'running' && (
                  <div className="space-y-6">
                    <div className="w-24 h-24 bg-white shadow-premium rounded-full flex items-center justify-center mx-auto animate-pulse">
                      <Rocket className="w-10 h-10 text-black fill-black" />
                    </div>
                    <h3 className="text-2xl font-black">Swarm in Action</h3>
                    <p className="text-brand-gray font-medium max-w-xs mx-auto">Multi-agent intelligence is active. Neutralizing hallucination risks and validating schemas.</p>
                  </div>
                )}

                {jobStatus === 'completed' && (
                  <div className="success-state space-y-8">
                    <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto text-white shadow-xl">
                      <ShieldCheck className="w-12 h-12" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black mb-3">{blogTitle}</h3>
                      <p className="text-brand-gray font-medium mb-8">Generation verified. High-fidelity report is ready for export.</p>
                    </div>
                    <a 
                      href={pdfUrl} 
                      target="_blank"
                      rel="noreferrer"
                      className="btn-black inline-flex items-center gap-3 uppercase tracking-widest text-xs"
                    >
                      <Download className="w-5 h-5" />
                      Download PDF Report
                    </a>
                  </div>
                )}

                {jobStatus === 'error' && (
                  <div className="space-y-6 text-red-600">
                    <AlertCircle className="w-16 h-16 mx-auto stroke-[2.5]" />
                    <h3 className="text-2xl font-black">Orchestration Error</h3>
                    <p className="font-medium">System encountered a critical exception during validation.</p>
                    <button onClick={() => setJobStatus('idle')} className="text-black font-black underline uppercase tracking-widest text-xs">Re-Initialize</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
