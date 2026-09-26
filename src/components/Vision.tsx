import React from 'react';
import { Logo } from './Logo';

export const Vision: React.FC = () => {
  return (
    <section className="relative py-36 bg-[#050816] overflow-hidden border-t border-white/[0.06] text-center">
      {/* Cinematic Aurora Lighting */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-brand-cyan/15 via-brand-blue/15 to-brand-purple/15 rounded-full blur-[180px] pointer-events-none animate-pulse-subtle" />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Subtle Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
          <span>OUR CONVICTION</span>
        </div>

        {/* Vision Statements */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="font-display text-2xl sm:text-4xl lg:text-5xl font-medium text-brand-muted leading-snug">
            We don't believe AI should replace the way you work.
          </p>

          <p className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-snug">
            We believe it should <span className="text-gradient-cyan">understand</span> the way you work.
          </p>

          <p className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-gradient-synq leading-snug">
            And make it better.
          </p>
        </div>

        {/* Brand Finale */}
        <div className="pt-12 border-t border-white/[0.08] max-w-md mx-auto space-y-3">
          <div className="flex justify-center">
            <Logo size="md" showTagline={false} />
          </div>
          <p className="text-xs font-mono text-brand-muted tracking-widest uppercase">
            Intelligence that works in sync.
          </p>
        </div>
      </div>
    </section>
  );
};
