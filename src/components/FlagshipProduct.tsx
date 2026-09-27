import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { flagshipKnowledgeAI } from '../data/company';
import { ArrowRight, FileText, Network, Search, Brain, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export const FlagshipProduct: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const workflowIcons = [
    <FileText className="w-5 h-5 text-brand-cyan" />,
    <Layers className="w-5 h-5 text-brand-blue" />,
    <Network className="w-5 h-5 text-brand-purple" />,
    <Search className="w-5 h-5 text-brand-cyan" />,
    <Brain className="w-5 h-5 text-brand-blue" />,
    <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section id="flagship-product" className="relative py-28 bg-[#070C1D] border-y border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>FLAGSHIP PRODUCT</span>
            </div>
            <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
              {flagshipKnowledgeAI.badge}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {flagshipKnowledgeAI.name}
          </h2>

          <p className="text-xl sm:text-2xl text-gradient-synq font-semibold">
            {flagshipKnowledgeAI.headline}
          </p>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            {flagshipKnowledgeAI.description}
          </p>
        </div>

        {/* Visual Workflow: Documents -> Processing -> Embeddings -> Retrieval -> Reasoning -> Answer + Citations */}
        <div className="space-y-4 text-left">
          <div className="text-xs font-mono text-brand-dim uppercase tracking-wider">
            System Workflow Architecture
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {flagshipKnowledgeAI.workflow.map((item, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={item.step}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                    isSelected
                      ? 'bg-[#0E1528] border-brand-cyan/40 shadow-glow-cyan/20'
                      : 'bg-[#0B1020]/90 border-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-brand-dim">{item.step}</span>
                      <div className="p-1.5 rounded-lg bg-white/[0.04]">
                        {workflowIcons[idx]}
                      </div>
                    </div>
                    <h3 className="font-display text-sm font-bold text-white">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-brand-muted leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/[0.04] text-[9px] font-mono text-brand-dim">
                    {idx < 5 ? 'STAGE ' + (idx + 1) + ' ➔' : 'VERIFIED OUTPUT'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlighted Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {flagshipKnowledgeAI.capabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-5 rounded-2xl bg-[#0B1020]/60 border border-white/[0.06] hover:border-white/10 transition-all flex items-start gap-3.5"
            >
              <div className="w-2 h-2 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white font-display">
                  {cap.title}
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0E1528] via-[#111A34] to-[#151230] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left shadow-2xl">
          <div className="space-y-1 max-w-xl">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Interested in testing early Knowledge AI capabilities?
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted">
              We are actively developing and benchmarking our retrieval pipelines with pilot organizations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan hover:shadow-glow-purple transition-all"
            >
              <span>Explore Knowledge AI</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-medium text-brand-muted hover:text-white bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all"
            >
              <span>Request Early Access</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
