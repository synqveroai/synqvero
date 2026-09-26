import React from 'react';
import { ArrowRight } from 'lucide-react';
import { InteractiveSync } from './InteractiveSync';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techBadges = [
    'AI',
    'RAG',
    'AGENTS',
    'AUTOMATION',
    'COMPUTER VISION',
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-brand-purple/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid texture overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & Headlines */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Small Label pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1020]/90 border border-brand-cyan/30 text-xs font-mono tracking-wider text-brand-cyan shadow-glow-cyan/50 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span>AI • SOFTWARE • INNOVATION</span>
            </div>

            {/* Dominant Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                Intelligence <br />
                that <br className="hidden sm:inline" />
                <span className="text-gradient-synq inline-block">
                  works in sync.
                </span>
              </h1>
            </div>

            {/* Supporting Narrative */}
            <p className="text-base sm:text-lg text-brand-muted max-w-xl leading-relaxed">
              Synqvero builds practical AI-powered software that connects intelligent technology with real-world problems, workflows, and businesses.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#projects');
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan hover:shadow-glow-purple transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore our work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#contact');
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-[#0B1020] border border-white/10 hover:border-brand-cyan/40 hover:bg-white/[0.05] transition-all duration-300"
              >
                <span>Let's build together</span>
              </a>
            </div>

            {/* Under buttons ticker tags */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-muted tracking-widest flex-wrap">
                {techBadges.map((badge, idx) => (
                  <React.Fragment key={badge}>
                    <span className="hover:text-brand-cyan transition-colors py-0.5">
                      {badge}
                    </span>
                    {idx < techBadges.length - 1 && (
                      <span className="text-brand-purple/60">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Original Interactive Abstract Synchronization Visualizer */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <InteractiveSync />
          </div>
        </div>
      </div>
    </section>
  );
};
