import React, { useState } from 'react';
import { capabilitiesData } from '../data/capabilities';
import { Sparkles, Database, Bot, Workflow, Eye, Cpu } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5 text-brand-cyan" />,
  Database: <Database className="w-5 h-5 text-brand-blue" />,
  Bot: <Bot className="w-5 h-5 text-brand-purple" />,
  Workflow: <Workflow className="w-5 h-5 text-brand-cyan" />,
  Eye: <Eye className="w-5 h-5 text-brand-blue" />,
  Cpu: <Cpu className="w-5 h-5 text-brand-purple" />,
};

export const Capabilities: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="solutions" className="relative py-28 bg-[#050816] overflow-hidden">
      {/* Background subtleties */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>WHAT WE BUILD</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Built around <span className="text-gradient-cyan">real problems.</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            We combine AI research, software engineering, and product thinking to build systems that are useful beyond the demo.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilitiesData.map((item) => {
            const isHovered = activeCard === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative p-7 rounded-2xl bg-[#0B1020]/90 border border-white/[0.08] hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-glow-subtle"
              >
                {/* Top Animated Gradient Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple transition-all duration-500 ${
                    isHovered ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`}
                />

                {/* Subtle corner light flare */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="space-y-5 relative z-10">
                  {/* Card Header: Icon & Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-brand-cyan/30 transition-all duration-300">
                      {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-brand-cyan" />}
                    </div>
                    <span className="font-mono text-sm font-semibold text-brand-dim group-hover:text-brand-cyan transition-colors">
                      {item.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {item.shortDescription}
                    </p>
                    <p className="text-xs text-brand-dim leading-relaxed pt-1">
                      {item.extendedDescription}
                    </p>
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] relative z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-brand-muted border border-white/[0.05] group-hover:border-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
