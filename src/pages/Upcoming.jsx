import React, { useEffect } from 'react';
import { Database, Globe, Zap, Code2, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

const features = [
  { 
    title: "Persistent Database", 
    description: "Supabase integration to store past generations, maintain user history, and provide persistent job tracking across sessions.", 
    icon: Database, 
    status: "In Development" 
  },
  { 
    title: "Custom Agent Profiles", 
    description: "Define custom system prompts, temperature settings, and knowledge bases for individual agents in the swarm.", 
    icon: Code2, 
    status: "Planned" 
  },
  { 
    title: "Web Research Tooling", 
    description: "Give agents the ability to dynamically scrape the web, read documentation, and cite real-time sources.", 
    icon: Globe, 
    status: "Planned" 
  },
  { 
    title: "Real-time Streaming", 
    description: "Watch the agents type out their thoughts and drafts in real-time with streaming server-sent events.", 
    icon: Zap, 
    status: "Under Review" 
  }
];

const Upcoming = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo(".upcoming-reveal", 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-neutral-50 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="upcoming-reveal mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-6">
            The <span className="text-brand-orange">Roadmap</span>
          </h1>
          <p className="text-xl text-black/50 font-medium max-w-2xl">
            We are constantly evolving the VEDA Agent architecture. Here is a look at the features currently in the pipeline for Version 2.0.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="upcoming-reveal bg-white border border-black/10 rounded-3xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${feature.status === 'In Development' ? 'bg-brand-orange/10 text-brand-orange' : 'bg-neutral-100 text-neutral-500'}`}>
                  {feature.status}
                </span>
              </div>
              <h3 className="text-2xl font-black text-black mb-3">{feature.title}</h3>
              <p className="text-black/60 font-medium leading-relaxed mb-6">
                {feature.description}
              </p>
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-black/30 group-hover:text-brand-orange transition-colors cursor-pointer">
                Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
