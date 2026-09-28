import React, { useState } from 'react';
import { 
  Search, 
  PenTool, 
  Code2, 
  Rocket, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface SyncStage {
  step: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  toolsUsed: string[];
  typicalDuration: string;
  keyOutput: string;
  accent: 'cyan' | 'blue' | 'purple';
}

const SYNC_STAGES: SyncStage[] = [
  {
    step: 'SYNC 01',
    number: '01',
    name: 'Understand',
    subtitle: 'Friction Audit & Data Availability',
    description: 'We do not start with code. We audit your existing workflows, interview stakeholders, and assess data hygiene to determine whether the problem actually demands AI or a simpler deterministic solution.',
    icon: Search,
    deliverables: [
      'Problem Manifesto & Scope Document',
      'Data Availability & Cleanliness Scorecard',
      'Feasibility & ROI Matrix'
    ],
    toolsUsed: ['Workflow Audits', 'Data Profiling Scripts', 'Risk Matrices'],
    typicalDuration: 'Week 1',
    keyOutput: 'Clear technical feasibility verdict with identified edge cases',
    accent: 'cyan'
  },
  {
    step: 'SYNC 02',
    number: '02',
    name: 'Design',
    subtitle: 'Architecture & Model Selection',
    description: 'We select the right tool for the job: RAG vs Autonomous Agent vs LoRA fine-tuning vs heuristic rules. We design chunking strategies, state graphs, latency budgets, and security guardrails.',
    icon: PenTool,
    deliverables: [
      'System Architecture Blueprint (C4 / Mermaid)',
      'Token Economics & Latency Budget',
      'Prompt Schemas & Data Privacy Policy'
    ],
    toolsUsed: ['System Design Schemas', 'Benchmark Bench', 'Security Policies'],
    typicalDuration: 'Week 2',
    keyOutput: 'Complete end-to-end architecture ready for engineering',
    accent: 'blue'
  },
  {
    step: 'SYNC 03',
    number: '03',
    name: 'Build',
    subtitle: 'Implementation & Evaluation Harness',
    description: 'We build the core system in Python and TypeScript. Crucially, we build an automated evaluation harness (RAG triad, tool call assertions, ground-truth test sets) to measure accuracy quantitatively.',
    icon: Code2,
    deliverables: [
      'Core AI Engine & Vector Store Pipeline',
      'API Microservice (FastAPI / Node.js)',
      'Automated Evaluation & Benchmark Suite'
    ],
    toolsUsed: ['LangChain / LangGraph', 'ChromaDB / Pinecone', 'PyTorch / Transformers', 'Docker'],
    typicalDuration: 'Weeks 3–5',
    keyOutput: 'Functional system validated against quantitative accuracy thresholds',
    accent: 'purple'
  },
  {
    step: 'SYNC 04',
    number: '04',
    name: 'Deploy',
    subtitle: 'Latency Optimization & Observability',
    description: 'We deploy containerized services with semantic caching, streaming responses, rate limiting, and fallbacks. Telemetry captures token usage, p95 latency, and error states in real time.',
    icon: Rocket,
    deliverables: [
      'Containerized Production Deployment (Docker / Cloud Run)',
      'Real-time Logging & Observability Dashboard',
      'User-facing Client & API Documentation'
    ],
    toolsUsed: ['Docker', 'Prometheus / OpenTelemetry', 'Redis Semantic Cache', 'Vercel'],
    typicalDuration: 'Week 6',
    keyOutput: 'Hardened production release with sub-second p95 response times',
    accent: 'cyan'
  },
  {
    step: 'SYNC 05',
    number: '05',
    name: 'Improve',
    subtitle: 'Telemetry, Drift & Continuous Tuning',
    description: 'Software is living. We instrument explicit user feedback loops, monitor for semantic drift as enterprise documents evolve, and run continuous regression suites against new edge cases.',
    icon: TrendingUp,
    deliverables: [
      'Continuous Evaluation Triggers',
      'Feedback Capture Pipeline',
      'Bi-weekly Accuracy & Latency Reports'
    ],
    toolsUsed: ['User Telemetry', 'Drift Detection Scripts', 'Automated Regression Suites'],
    typicalDuration: 'Ongoing Lifecycle',
    keyOutput: 'Self-improving AI system that grows more accurate over time',
    accent: 'blue'
  }
];

export const FromIdeaToIntelligence: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const current = SYNC_STAGES[activeIdx];
  const Icon = current.icon;

  return (
    <section id="from-idea-to-intelligence" className="relative py-28 bg-[#050816] border-y border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-cyan/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            <span>DISCIPLINED METHODOLOGY</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            From idea to <span className="text-gradient-synq">intelligence.</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            We don’t believe in black-box magic or rushed demos. Every Synqvero solution follows a structured 5-stage lifecycle engineered to yield reliable, verifiable software.
          </p>
        </div>

        {/* 5-Step Connected Progress Bar / Nav */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-white/[0.08] z-0">
            {/* Active Highlight Line */}
            <div 
              className="h-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple transition-all duration-500"
              style={{ width: `${(activeIdx / (SYNC_STAGES.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative z-10">
            {SYNC_STAGES.map((stage, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0E1528] border-brand-cyan shadow-glow-subtle scale-[1.02]'
                      : 'bg-[#0B1020]/80 border-white/[0.06] hover:border-white/20 hover:bg-[#0B1020]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`w-8 h-8 rounded-xl font-mono text-xs font-bold flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-brand-cyan to-brand-blue text-white shadow-glow-cyan'
                        : 'bg-white/[0.04] text-brand-muted border border-white/10'
                    }`}>
                      {stage.number}
                    </span>
                    <span className="text-[10px] font-mono text-brand-cyan tracking-wider font-semibold">
                      {stage.step}
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="text-sm font-display font-bold text-white block">
                      {stage.name}
                    </span>
                    <span className="text-[11px] font-mono text-brand-dim line-clamp-1">
                      {stage.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Deep-Dive Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1020]/95 border border-brand-cyan/30 shadow-2xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative overflow-hidden">
          {/* Glow backdrop */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Left Side: Overview & Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-brand-cyan font-bold tracking-wider uppercase">
                {current.step} IN DETAIL
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/10">
                TIMELINE: {current.typicalDuration}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
                <Icon className="w-8 h-8 text-brand-cyan shrink-0" />
                <span>Stage {current.number}: {current.name}</span>
              </h3>
              <p className="text-base text-brand-cyan font-medium">
                {current.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              {current.description}
            </p>

            {/* Key Output Guarantee */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-cyan mt-0.5 shrink-0" />
              <div>
                <span className="text-xs font-mono text-brand-dim uppercase tracking-wider block">
                  Definitive Milestone Output
                </span>
                <span className="text-sm text-white font-medium">
                  {current.keyOutput}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Concrete Deliverables & Stack */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0E1528] border border-white/[0.08] space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                Tangible Deliverables
              </div>
              <div className="space-y-2.5">
                {current.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200 leading-snug">
                    <span className="text-brand-cyan font-mono font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/[0.06]">
              <div className="text-[11px] font-mono text-brand-dim uppercase tracking-wider">
                Tools & Frameworks Employed
              </div>
              <div className="flex flex-wrap gap-2">
                {current.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Stage Navigation Arrows */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <button
                type="button"
                disabled={activeIdx === 0}
                onClick={() => setActiveIdx(prev => Math.max(0, prev - 1))}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeIdx === 0
                    ? 'text-white/20 cursor-not-allowed'
                    : 'text-brand-muted hover:text-white bg-white/[0.04]'
                }`}
              >
                ← Previous Stage
              </button>
              <button
                type="button"
                disabled={activeIdx === SYNC_STAGES.length - 1}
                onClick={() => setActiveIdx(prev => Math.min(SYNC_STAGES.length - 1, prev + 1))}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeIdx === SYNC_STAGES.length - 1
                    ? 'text-white/20 cursor-not-allowed'
                    : 'text-brand-cyan hover:text-white bg-brand-cyan/10 hover:bg-brand-cyan/20'
                }`}
              >
                Next Stage →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Banner: "Your idea could be next." */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0E1528] via-[#0B1020] to-[#0E1528] border border-brand-cyan/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>PRODUCTION READINESS</span>
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Your idea could be next.
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Have an operational problem, an unstructured archive, or a manual workflow? Let’s design a custom AI architecture step-by-step.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/build"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan hover:shadow-glow-purple transition-all"
            >
              <span>Build With Synqvero</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
