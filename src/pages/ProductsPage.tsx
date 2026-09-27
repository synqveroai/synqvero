import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { flagshipKnowledgeAI, futureProducts } from '../data/company';
import { 
  BrainCircuit, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Workflow, 
  Bot
} from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const architecturePipeline = [
    { name: 'Documents', desc: 'PDFs, DOCX, Markdown, manuals, scanned tables & web docs.', tag: 'Source Layer' },
    { name: 'Ingestion', desc: 'OCR parsing, hierarchical header extraction, and cleaning.', tag: 'ETL' },
    { name: 'Chunking', desc: 'Semantic contextual chunking preserving table integrity.', tag: 'Preprocessing' },
    { name: 'Embeddings', desc: 'Dense vector representations using high-dimensional embeddings.', tag: 'Vectorization' },
    { name: 'Vector DB', desc: 'Indexed vector storage (ChromaDB / pgvector) with metadata tags.', tag: 'Storage' },
    { name: 'Hybrid Retrieval', desc: 'Dense vector similarity combined with BM25 sparse keyword match.', tag: 'Search' },
    { name: 'Reranking', desc: 'Cross-encoder scoring prioritizing the most factual segments.', tag: 'Precision' },
    { name: 'LLM Reasoning', desc: 'Foundation model synthesis strictly bound to retrieved context.', tag: 'Inference' },
    { name: 'Answer + Citations', desc: 'Explainable answers with exact document page & sentence links.', tag: 'Output' }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#050816] text-left">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[700px] bg-brand-cyan/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* Page Header */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            <span>SYNQVERO PRODUCT SUITE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Intelligent Products Built for <span className="text-gradient-synq">Operational Sync.</span>
          </h1>

          <p className="text-base sm:text-xl text-brand-muted leading-relaxed">
            Synqvero develops purpose-built AI software designed to eliminate corporate knowledge fragmentation, automate multi-step workflows, and give operators verifiable intelligence.
          </p>
        </div>

        {/* ==================================================== */}
        {/* FLAGSHIP PRODUCT DEEP DIVE: SYNQVERO KNOWLEDGE AI */}
        {/* ==================================================== */}
        <section className="space-y-12">
          {/* Product Header Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1020]/95 via-[#0D1528]/90 to-[#070C1D] border border-brand-cyan/30 p-8 sm:p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <BrainCircuit className="w-64 h-64 text-brand-cyan" />
            </div>

            <div className="relative z-10 space-y-6 max-w-3xl">
              {/* Product Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/40 text-xs font-mono font-semibold text-brand-cyan flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                  FLAGSHIP PRODUCT
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-semibold text-amber-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {flagshipKnowledgeAI.status} • {flagshipKnowledgeAI.badge}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                  {flagshipKnowledgeAI.name}
                </h2>
                <p className="text-lg sm:text-xl font-mono text-brand-cyan">
                  "{flagshipKnowledgeAI.headline}"
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {flagshipKnowledgeAI.description}
              </p>

              {/* Problem & Solution Contrast */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-5 rounded-2xl bg-[#050816]/70 border border-white/[0.08] space-y-2">
                  <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider">
                    The Problem
                  </span>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    Critical enterprise runbooks, architectural documents, technical PDFs, and FAQs are scattered across repositories, leading to expensive search delays and inaccurate answers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#050816]/70 border border-brand-cyan/30 space-y-2">
                  <span className="text-xs font-mono text-brand-cyan font-bold uppercase tracking-wider">
                    The Synqvero Solution
                  </span>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    A grounded retrieval engine that ingests multi-format documentation, preserves tabular structures, and produces verifiable answers with direct line-and-page citations.
                  </p>
                </div>
              </div>

              {/* CTA row */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan hover:shadow-glow-purple transition-all duration-300"
                >
                  <span>Request Early Access / Inquire</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs font-mono text-brand-dim">
                  Priority enrollment for pilot engineering partners
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Architecture Flow */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-6">
              <div className="space-y-1">
                <div className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                  END-TO-END RAG ARCHITECTURE
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  How Knowledge AI Operates
                </h3>
              </div>
              <p className="text-xs font-mono text-brand-muted">
                Click any step to inspect the data transformation
              </p>
            </div>

            {/* Architecture Timeline Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2">
              {architecturePipeline.map((step, idx) => {
                const isActive = activeStepIdx === idx;
                return (
                  <button
                    key={step.name}
                    onClick={() => setActiveStepIdx(idx)}
                    className={`p-3 rounded-xl text-left transition-all border ${
                      isActive
                        ? 'bg-brand-cyan/15 border-brand-cyan text-white shadow-glow-cyan/30'
                        : 'bg-white/[0.02] border-white/[0.06] text-brand-muted hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="text-[10px] font-mono text-brand-cyan font-bold">
                      0{idx + 1}
                    </div>
                    <div className="text-xs font-bold truncate mt-1">{step.name}</div>
                    <div className="text-[9px] font-mono text-brand-dim truncate">{step.tag}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Pipeline Step Detail Inspector */}
            <div className="p-6 rounded-2xl bg-[#050816] border border-brand-cyan/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-brand-cyan px-2.5 py-0.5 rounded bg-brand-cyan/10">
                    STAGE 0{activeStepIdx + 1} OF 09
                  </span>
                  <span className="text-xs font-mono text-brand-muted uppercase">
                    {architecturePipeline[activeStepIdx].tag}
                  </span>
                </div>
                <h4 className="font-display text-xl font-bold text-white">
                  {architecturePipeline[activeStepIdx].name}
                </h4>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {architecturePipeline[activeStepIdx].desc}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Grounding Check Passed</span>
                </span>
              </div>
            </div>
          </div>

          {/* Capabilities & Enterprise Use Cases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Capabilities List */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                  FEATURE MATRIX
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Core Capabilities
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {flagshipKnowledgeAI.capabilities.map((cap) => (
                  <div
                    key={cap.title}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-cyan/30 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <Sparkles className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span>{cap.title}</span>
                    </div>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                    TARGET WORKFLOWS
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Validated Use Cases
                  </h3>
                </div>

                <div className="space-y-3">
                  {flagshipKnowledgeAI.useCases.map((useCase, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-xs flex items-center justify-center font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">
                        {useCase}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.06] space-y-3">
                <span className="text-xs font-mono text-brand-dim">
                  Have a specific internal knowledge repository to test?
                </span>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
                >
                  <span>Discuss a Knowledge AI Pilot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* FUTURE PRODUCT CONCEPTS */}
        {/* ==================================================== */}
        <section className="space-y-8 pt-12 border-t border-white/[0.08]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
              <span>INNOVATION ROADMAP</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Future Product Concepts
            </h2>
            <p className="text-base text-brand-muted max-w-2xl leading-relaxed">
              In addition to Knowledge AI, our research is actively focused on autonomous execution frameworks and zero-code workflow orchestration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureProducts.filter(p => p.name !== 'Synqvero Knowledge AI').map((prod) => (
              <div
                key={prod.name}
                className="p-8 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] hover:border-brand-purple/40 transition-all space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple font-semibold">
                      {prod.badge}
                    </span>
                    <span className="text-xs font-mono text-brand-dim uppercase">
                      {prod.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-brand-purple">
                      {prod.name.includes('Flow') ? <Workflow className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">
                        {prod.name}
                      </h3>
                      <p className="text-xs font-mono text-brand-cyan">
                        {prod.targetWorkflow}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-brand-muted leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-brand-dim">
                  <span>STATUS: CONCEPT & RESEARCH</span>
                  <span className="text-brand-purple">Upcoming Roadmap</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
