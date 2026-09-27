import React from 'react';
import { valuePillars } from '../data/company';
import { Target, Database, ShieldCheck, Share2, Rocket, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-6 h-6 text-brand-cyan" />,
  Database: <Database className="w-6 h-6 text-brand-blue" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-cyan" />,
  Share2: <Share2 className="w-6 h-6 text-brand-purple" />,
  Rocket: <Rocket className="w-6 h-6 text-brand-cyan" />,
};

export const WhySynqvero: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#050816] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>CORE DIFFERENTIATION</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Why <span className="text-gradient-synq">Synqvero</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            No empty buzzwords. No generic consulting templates. A focused engineering commitment to practical, usable intelligence.
          </p>
        </div>

        {/* 5 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuePillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`group p-7 rounded-2xl bg-[#0B1020]/90 border border-white/[0.08] hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between text-left shadow-lg hover:shadow-glow-subtle ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                {/* Icon & Index */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:border-brand-cyan/30 transition-all">
                    {iconMap[pillar.icon] || <CheckCircle2 className="w-6 h-6 text-brand-cyan" />}
                  </div>
                  <span className="font-mono text-xs text-brand-dim">0{idx + 1}</span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1.5">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-cyan font-medium leading-snug">
                    {pillar.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-brand-muted leading-relaxed pt-2">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Rule */}
              <div className="pt-6 mt-6 border-t border-white/[0.04] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <span className="text-[11px] font-mono text-brand-dim">SYNQVERO PRINCIPLE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
