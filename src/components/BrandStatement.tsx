import React from 'react';
import { Zap } from 'lucide-react';

export const BrandStatement: React.FC = () => {
  const steps = [
    { label: 'UNDERSTAND THE PROBLEM', description: 'Isolate root friction and user pain points before writing code.' },
    { label: 'UNDERSTAND THE WORKFLOW', description: 'Analyze human procedures, data formats, and existing software systems.' },
    { label: 'CONNECT INTELLIGENCE', description: 'Bridge models, vector indices, and agents directly to the point of decision.' },
    { label: 'BUILD THE SOLUTION', description: 'Engineer robust, low-latency software engineered for daily production.' },
    { label: 'WORK IN SYNC', description: 'Technology and teams operating in effortless, intelligent harmony.' }
  ];

  return (
    <section className="relative py-28 bg-[#070C1D] border-y border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-16">
        {/* Primary Statement */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>CORE PHILOSOPHY</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Technology works better <br />
            <span className="text-white">when it works </span>
            <span className="text-gradient-synq">in sync.</span>
          </h2>

          <div className="pt-4 text-xl sm:text-2xl lg:text-3xl text-brand-muted font-normal tracking-wide space-y-2">
            <div>Your problem.</div>
            <div>Your workflow.</div>
            <div className="text-white font-medium">
              Our intelligence. <span className="text-gradient-synq font-bold">In sync.</span>
            </div>
          </div>
        </div>

        {/* Philosophy Flow Diagram: Understand -> Workflow -> Connect -> Build -> In Sync */}
        <div className="pt-6">
          <div className="text-xs font-mono tracking-widest text-brand-dim uppercase mb-8">
            How Synqvero Connects Intelligence
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 max-w-5xl mx-auto relative">
            {steps.map((step, idx) => {
              const isSyncStep = idx === 4;
              return (
                <div
                  key={step.label}
                  className={`relative p-4 rounded-2xl transition-all duration-300 flex flex-col justify-between text-left group ${
                    isSyncStep
                      ? 'bg-gradient-to-b from-[#0E1528] to-[#151230] border border-brand-purple/40 shadow-glow-purple/40'
                      : 'bg-[#0B1020]/80 border border-white/[0.06] hover:border-brand-cyan/30 hover:bg-[#0E1528]'
                  }`}
                >
                  {/* Step counter */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-brand-muted">0{idx + 1}</span>
                    {isSyncStep ? (
                      <Zap className="w-4 h-4 text-brand-cyan animate-pulse" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-brand-cyan transition-colors" />
                    )}
                  </div>

                  {/* Step Title */}
                  <div className="space-y-1.5">
                    <h3 className={`text-xs font-bold font-mono tracking-wide ${
                      isSyncStep ? 'text-gradient-synq font-extrabold' : 'text-white group-hover:text-brand-cyan transition-colors'
                    }`}>
                      {step.label}
                    </h3>
                    <p className="text-[11px] text-brand-muted leading-relaxed line-clamp-3">
                      {step.description}
                    </p>
                  </div>

                  {/* Flow connector indicator on desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-brand-dim">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Foundation Quote */}
        <div className="pt-4 border-t border-white/[0.06] max-w-2xl mx-auto text-sm text-brand-muted italic">
          "Technology should not force people to change how they work. It should fit into the workflow and amplify human capability."
        </div>
      </div>
    </section>
  );
};
