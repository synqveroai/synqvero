import React from 'react';
import { futureProducts } from '../data/company';
import { Compass } from 'lucide-react';

export const FutureProducts: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#070C1D] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-purple tracking-wider">
            <Compass className="w-3.5 h-3.5 text-brand-purple" />
            <span>THE ECOSYSTEM ROADMAP</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            The Future <span className="text-gradient-synq">Ecosystem</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Our forward-looking architecture horizon. These product concepts represent where our research and prototypes are converging.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/[0.08] border border-amber-500/20 text-xs font-mono text-amber-300">
            <span>Notice: Actively in R&D / Concept Phase • Not yet commercialized</span>
          </div>
        </div>

        {/* Future Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureProducts.map((concept) => (
            <div
              key={concept.name}
              className="p-6 rounded-2xl bg-[#0B1020]/80 border border-white/[0.06] hover:border-brand-purple/30 transition-all flex flex-col justify-between text-left space-y-4 group hover:bg-[#0E1528]"
            >
              <div className="space-y-3">
                {/* Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/20">
                    {concept.badge}
                  </span>
                  <span className="text-[11px] font-mono text-brand-dim">
                    {concept.category}
                  </span>
                </div>

                {/* Concept Name */}
                <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-purple transition-colors">
                  {concept.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {concept.description}
                </p>
              </div>

              {/* Target Workflow */}
              <div className="pt-4 border-t border-white/[0.04]">
                <span className="text-[10px] font-mono text-brand-dim uppercase block">
                  Target Domain
                </span>
                <span className="text-xs font-mono text-brand-cyan">
                  {concept.targetWorkflow}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
