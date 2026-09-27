import React from 'react';
import { Link } from 'react-router-dom';
import { solutionsData } from '../data/company';
import { 
  Cpu, 
  Database, 
  Bot, 
  Workflow, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Boxes, 
  Wrench,
  Zap
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-brand-cyan" />,
  Database: <Database className="w-6 h-6 text-brand-blue" />,
  Bot: <Bot className="w-6 h-6 text-brand-purple" />,
  Workflow: <Workflow className="w-6 h-6 text-brand-cyan" />,
  Eye: <Eye className="w-6 h-6 text-brand-blue" />,
  Sparkles: <Sparkles className="w-6 h-6 text-brand-purple" />,
};

export const SolutionsPage: React.FC = () => {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#050816] text-left">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Page Header */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            <span>CUSTOM AI SERVICES</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Tailored AI Engineering for <span className="text-gradient-synq">Complex Workflows.</span>
          </h1>

          <p className="text-base sm:text-xl text-brand-muted leading-relaxed">
            Every organization has unique data structures, security boundaries, and operational bottlenecks. We engineer custom intelligent software that seamlessly integrates into your existing technical ecosystem.
          </p>
        </div>

        {/* ==================================================== */}
        {/* PRODUCTS VS SOLUTIONS DISTINCTION BANNER */}
        {/* ==================================================== */}
        <div className="p-8 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            {/* Products Column */}
            <div className="space-y-4 pr-0 md:pr-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <Boxes className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">Synqvero Products</h3>
                  <span className="text-xs font-mono text-brand-cyan">Packaged Software</span>
                </div>
              </div>
              <p className="text-sm text-brand-muted leading-relaxed">
                Standardized software suites engineered by Synqvero (such as <strong className="text-white">Synqvero Knowledge AI</strong>). Pre-packaged with turnkey architecture, ready for organization-wide deployment and API licensing.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-cyan hover:underline pt-2"
              >
                <span>View Products Suite</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Custom Solutions Column */}
            <div className="space-y-4 pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center text-brand-purple">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">Custom Engineering</h3>
                  <span className="text-xs font-mono text-brand-purple">Bespoke Client Solutions</span>
                </div>
              </div>
              <p className="text-sm text-brand-muted leading-relaxed">
                Dedicated engineering engagements where we build, fine-tune, and deploy custom neural architectures, automated agent workflows, or vision systems built specifically for your private operational requirements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-purple hover:underline pt-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 6 CUSTOM SOLUTIONS GRID */}
        {/* ==================================================== */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Our Core Solution Capabilities
            </h2>
            <p className="text-sm sm:text-base text-brand-muted max-w-2xl">
              High-impact AI software designed to eliminate human bottlenecks and unlock dormant data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((sol) => (
              <div
                key={sol.id}
                className="p-8 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-glow-subtle group"
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:border-brand-cyan/30 transition-all">
                    {iconMap[sol.icon] || <Zap className="w-6 h-6 text-brand-cyan" />}
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs font-mono text-brand-cyan">
                      {sol.summary}
                    </p>
                  </div>

                  <p className="text-sm text-brand-muted leading-relaxed">
                    {sol.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="pt-2 space-y-2">
                    <div className="text-[11px] font-mono text-brand-dim uppercase tracking-wider">
                      Included Capabilities
                    </div>
                    {sol.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tech Stack & Use Cases */}
                <div className="pt-4 border-t border-white/[0.06] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {sol.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-brand-muted border border-white/[0.05]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 transition-colors"
                  >
                    <span>Discuss This Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================== */}
        {/* HOW CUSTOM ENGAGEMENTS WORK */}
        {/* ==================================================== */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0B1020] to-[#070C1D] border border-white/[0.08] space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
              CLIENT ENGAGEMENT MODEL
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              How We Partner With You
            </h2>
            <p className="text-sm text-brand-muted">
              A rapid, risk-minimized delivery cycle designed to deliver demonstrable value in weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#050816]/80 border border-white/[0.06] space-y-3">
              <span className="text-xs font-mono text-brand-cyan font-bold">01 • DISCOVERY</span>
              <h4 className="font-display text-lg font-bold text-white">Workflow & Data Audit</h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                We review your data format, API limits, security boundaries, and calculate clear latency and accuracy KPIs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#050816]/80 border border-white/[0.06] space-y-3">
              <span className="text-xs font-mono text-brand-blue font-bold">02 • PROTOTYPE</span>
              <h4 className="font-display text-lg font-bold text-white">Rapid Feasibility MVP</h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                We build a functional working prototype within 1-2 weeks to validate model reasoning against your actual edge cases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#050816]/80 border border-white/[0.06] space-y-3">
              <span className="text-xs font-mono text-brand-purple font-bold">03 • INTEGRATION</span>
              <h4 className="font-display text-lg font-bold text-white">Production Hardening</h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                We containerize the software, optimize inference latency, set up vector indices, and connect to your live databases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#050816]/80 border border-white/[0.06] space-y-3">
              <span className="text-xs font-mono text-emerald-400 font-bold">04 • CONTINUOUS SYNC</span>
              <h4 className="font-display text-lg font-bold text-white">Telemetry & Iteration</h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                We monitor prompt drifts, capture real user interactions, and retune embeddings to ensure long-term stability.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-cyan/10 via-brand-blue/10 to-brand-purple/10 border border-brand-cyan/30 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Have a custom workflow that needs intelligent software?
          </h2>
          <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto">
            Book an initial technical architecture discussion directly with founder and AI engineer Srikar Jakkena.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan hover:shadow-glow-purple transition-all"
            >
              <span>Discuss Your Problem</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
