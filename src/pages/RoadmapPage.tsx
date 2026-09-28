import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Compass, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Database, 
  Bot, 
  Layers,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Milestone {
  title: string;
  category: string;
  description: string;
  status: 'Completed' | 'In Development' | 'Planned';
  dateLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  verifiedEvidence?: string;
  evidenceLink?: string;
}

const ROADMAP_ITEMS: Milestone[] = [
  // Completed
  {
    title: 'Synqvero AI Core Brand & Platform Launch',
    category: 'FOUNDATION',
    description: 'Establishment of the Synqvero AI brand identity ("Intelligence that works in sync"), visual design system, and verified website architecture.',
    status: 'Completed',
    dateLabel: '2026 Q1',
    icon: Sparkles,
    verifiedEvidence: 'synqvero.vercel.app production release',
    evidenceLink: 'https://synqvero.vercel.app'
  },
  {
    title: 'AutoChat-AI: WhatsApp Autonomous Copilot',
    category: 'AI AGENTS',
    description: 'Deployment of sub-second WhatsApp autonomous conversational agent integrating Groq Llama 3.3 70B and Whisper Large v3 voice transcription.',
    status: 'Completed',
    dateLabel: '2026 Q1',
    icon: Bot,
    verifiedEvidence: 'Public GitHub & live project portfolio',
    evidenceLink: 'https://srikarjakkena.vercel.app/projects/whatsapp-ai-copilot'
  },
  {
    title: 'SignBridge AI: Real-Time Edge Hand Landmark Recognition',
    category: 'COMPUTER VISION',
    description: 'Browser-based sign language gesture translation running under 50ms latency using MediaPipe 3D coordinates and Scikit-learn classification.',
    status: 'Completed',
    dateLabel: '2026 Q1',
    icon: Cpu,
    verifiedEvidence: 'Live Streamlit app with up to 99% accuracy',
    evidenceLink: 'https://sign-language-recognition-system.streamlit.app/'
  },
  {
    title: 'RAG Document Q&A Zero-Shot Architecture',
    category: 'RAG SYSTEM',
    description: 'Production proof-of-concept for zero-shot question answering over arbitrary PDF/text documents using ChromaDB and LangChain.',
    status: 'Completed',
    dateLabel: '2026 Q1',
    icon: Database,
    verifiedEvidence: 'Live Streamlit application & open repository',
    evidenceLink: 'https://rag-document-chatbot-questionandanswer.streamlit.app/'
  },
  {
    title: 'Hybrid Brain Tumor AI Research Prototype',
    category: 'DEEP LEARNING VISION',
    description: 'Exploratory deep learning model pairing MobileNetV2 classification and U-Net segmentation with Grad-CAM saliency interpretability for academic study.',
    status: 'Completed',
    dateLabel: '2026 Q1',
    icon: Layers,
    verifiedEvidence: 'Open source Jupyter & TensorFlow codebase',
    evidenceLink: 'https://github.com/JakkenaSrikar/Brain-tumor-segmentation-and-classification'
  },

  // In Development
  {
    title: 'Synqvero Knowledge AI: Enterprise Multi-Source Engine',
    category: 'FLAGSHIP PRODUCT',
    description: 'Unified commercial interface synthesizing enterprise documentation, Notion wikis, Google Drive, and databases with strict role-based access control (RBAC).',
    status: 'In Development',
    dateLabel: '2026 Q2',
    icon: Database
  },
  {
    title: 'Multi-Agent Tool Orchestrator & Cyclic State Machine',
    category: 'AI AGENTS',
    description: 'Deterministic LangGraph-based workflow engine enabling autonomous agents to execute multi-step database mutations with automated human-in-the-loop validation.',
    status: 'In Development',
    dateLabel: '2026 Q2',
    icon: Bot
  },
  {
    title: 'Hybrid Dense Vector & BM25 Cross-Encoder Reranker',
    category: 'RETRIEVAL LAYER',
    description: 'High-precision hybrid retrieval combining reciprocal rank fusion (RRF) with lightweight quantized cross-encoders for technical vocabulary.',
    status: 'In Development',
    dateLabel: '2026 Q2',
    icon: Cpu
  },

  // Planned
  {
    title: 'Synqvero Edge Vision Gateway',
    category: 'COMPUTER VISION',
    description: 'Zero-latency on-premise visual inference container designed for industrial inspection cameras and localized privacy compliance.',
    status: 'Planned',
    dateLabel: '2026 Q3–Q4',
    icon: Layers
  },
  {
    title: 'Synqvero Developer SDK & Evaluation CLI',
    category: 'DEVELOPER TOOLS',
    description: 'Open CLI tool allowing engineering teams to benchmark their internal RAG pipelines and tool-calling models against standard regression datasets.',
    status: 'Planned',
    dateLabel: '2026 Q4',
    icon: Cpu
  },
  {
    title: 'Self-Hosted On-Premise Air-Gapped RAG Appliance',
    category: 'SECURITY & GOVERNANCE',
    description: 'Turnkey containerized stack running local open-weights LLMs (Ollama / vLLM) with vector search completely isolated from public internet access.',
    status: 'Planned',
    dateLabel: '2027',
    icon: ShieldCheck
  }
];

export const RoadmapPage: React.FC = () => {
  const completed = ROADMAP_ITEMS.filter(i => i.status === 'Completed');
  const inDev = ROADMAP_ITEMS.filter(i => i.status === 'In Development');
  const planned = ROADMAP_ITEMS.filter(i => i.status === 'Planned');

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#050816] text-left">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-cyan/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <Compass className="w-3.5 h-3.5 text-brand-cyan" />
            <span>TRANSPARENT ENGINEERING TIMELINE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Where we're <span className="text-gradient-synq">going.</span>
          </h1>

          <p className="text-base sm:text-xl text-brand-muted leading-relaxed">
            Our public engineering trajectory. We believe in total transparency: milestones are only marked as completed when working code and public artifacts exist.
          </p>
        </div>

        {/* Legend / Status Badges */}
        <div className="flex flex-wrap items-center gap-4 p-4 rounded-2xl bg-[#0B1020]/80 border border-white/[0.06] text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-white font-semibold">Completed:</span>
            <span className="text-brand-muted">Verified & deployed in production</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-white font-semibold">In Development:</span>
            <span className="text-brand-muted">Active engineering & testing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-purple" />
            <span className="text-white font-semibold">Planned:</span>
            <span className="text-brand-muted">Architected for future release</span>
          </div>
        </div>

        {/* 3 Status Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Column 1: Completed */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-500/30">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <h3 className="font-display font-bold text-white text-lg">Completed</h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                {completed.length} DELIVERED
              </span>
            </div>

            <div className="space-y-4">
              {completed.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0B1020]/90 border border-emerald-500/20 space-y-3 relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-emerald-400 font-bold uppercase">{item.category}</span>
                      <span className="text-brand-dim">{item.dateLabel}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <h4 className="font-display font-bold text-white text-sm leading-snug">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-xs text-brand-muted leading-relaxed">
                      {item.description}
                    </p>

                    {item.evidenceLink && (
                      <div className="pt-2 border-t border-white/[0.04]">
                        <a
                          href={item.evidenceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-mono text-emerald-400 hover:underline flex items-center gap-1"
                        >
                          <span>✓ {item.verifiedEvidence}</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: In Development */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-brand-cyan/30">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-cyan animate-pulse" />
                <h3 className="font-display font-bold text-white text-lg">In Development</h3>
              </div>
              <span className="text-xs font-mono text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded">
                {inDev.length} ACTIVE
              </span>
            </div>

            <div className="space-y-4">
              {inDev.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0B1020]/90 border border-brand-cyan/30 space-y-3 relative overflow-hidden shadow-glow-subtle"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-brand-cyan font-bold uppercase">{item.category}</span>
                      <span className="text-brand-cyan">{item.dateLabel}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <h4 className="font-display font-bold text-white text-sm leading-snug">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-xs text-brand-muted leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-white/[0.04] text-[10px] font-mono text-brand-dim flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                      <span>Code being tested against benchmark harnesses</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 3: Planned */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-brand-purple/30">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-brand-purple" />
                <h3 className="font-display font-bold text-white text-lg">Planned</h3>
              </div>
              <span className="text-xs font-mono text-brand-purple bg-brand-purple/10 px-2 py-0.5 rounded">
                {planned.length} ARCHITECTED
              </span>
            </div>

            <div className="space-y-4">
              {planned.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0B1020]/70 border border-white/[0.06] space-y-3 relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-brand-purple font-bold uppercase">{item.category}</span>
                      <span className="text-brand-dim">{item.dateLabel}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                      <h4 className="font-display font-bold text-slate-200 text-sm leading-snug">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-xs text-brand-muted leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-white/[0.04] text-[10px] font-mono text-brand-dim">
                      Architecture & specs finalized for future roadmap
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="p-8 rounded-3xl bg-[#0E1528] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h3 className="font-display text-xl font-bold text-white">
              Want a capability prioritized for your organization?
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted">
              We frequently collaborate with enterprise partners to co-develop dedicated RAG and agent systems.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple hover:shadow-glow-cyan transition-all"
          >
            <span>Partner With Synqvero</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
};
