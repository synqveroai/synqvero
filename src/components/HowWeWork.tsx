import React, { useState } from 'react';
import { workflowSteps } from '../data/company';
import { ArrowRight } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="how-we-work" className="relative py-28 bg-[#070C1D] border-y border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>THE PROCESS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            From problem to <span className="text-gradient-synq">intelligence.</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            A disciplined, iterative methodology that bridges ambiguous business problems with reliable, production-tested AI systems.
          </p>
        </div>

        {/* 4-Step Connected Timeline */}
        <div className="relative">
          {/* Desktop Flowing Connection Line */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-[2px] bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple z-0">
            {/* Animated Energy Pulse */}
            <div className="absolute top-1/2 -translate-y-1/2 w-24 h-1.5 bg-white blur-[2px] rounded-full animate-[float_4s_ease-in-out_infinite]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {workflowSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between text-left cursor-pointer ${
                    isSelected
                      ? 'bg-[#0E1528] border border-brand-cyan/40 shadow-glow-subtle'
                      : 'bg-[#0B1020]/90 border border-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Node circle on the timeline */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 ${
                        isSelected
                          ? 'bg-gradient-to-r from-brand-cyan to-brand-blue text-white shadow-glow-cyan'
                          : 'bg-white/[0.04] text-brand-muted border border-white/10 group-hover:text-white'
                      }`}>
                        {step.number}
                      </div>
                      <span className="text-xs font-mono text-brand-dim uppercase tracking-wider">
                        PHASE 0{idx + 1}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs font-mono text-brand-cyan">
                        {step.description}
                      </p>
                    </div>

                    {/* Key Activities List */}
                    <div className="pt-3 border-t border-white/[0.06] space-y-2">
                      {step.activities.map((activity, actIdx) => (
                        <div key={actIdx} className="flex items-start gap-2 text-xs text-brand-muted leading-relaxed">
                          <span className="text-brand-cyan mt-0.5">•</span>
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom indicator */}
                  <div className="pt-6 mt-6 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-brand-dim">
                    <span>STATUS: OPERATIONAL</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:text-brand-cyan transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
