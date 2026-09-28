import React, { useState } from 'react';
import { 
  Database, 
  Bot, 
  Workflow, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AiPath {
  id: string;
  trigger: string;
  solutionName: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  explanation: string;
  primaryBenefit: string;
  stack: string[];
  projectRef?: {
    name: string;
    description: string;
    url: string;
  };
  targetRoute: string;
}

const AI_PATHS: AiPath[] = [
  {
    id: 'rag',
    trigger: 'Search my knowledge',
    solutionName: 'Retrieval-Augmented Generation (RAG)',
    category: 'ENTERPRISE GROUNDING',
    icon: Database,
    tagline: 'Grounded intelligence anchored strictly to your verified data.',
    explanation: 'Transforms scattered PDFs, documentation, databases, and customer records into an intelligent search layer. AI generates answers with direct citations, eliminating hallucination entirely.',
    primaryBenefit: '100% verifiable answers with direct document citations and zero training lag.',
    stack: ['LangChain', 'ChromaDB', 'HuggingFace Embeddings', 'FastAPI', 'Groq / Claude'],
    projectRef: {
      name: 'RAG Document Q&A',
      description: 'Zero-shot document intelligence tested across research PDFs & technical manuals.',
      url: 'https://rag-document-chatbot-questionandanswer.streamlit.app/'
    },
    targetRoute: '/solutions#rag'
  },
  {
    id: 'agents',
    trigger: 'Perform tasks',
    solutionName: 'Autonomous AI Agents & Copilots',
    category: 'ACTION & EXECUTION',
    icon: Bot,
    tagline: 'Autonomous systems that plan, invoke tools, and complete multi-step goals.',
    explanation: 'Equip LLMs with persistent state, tool-calling APIs, and deterministic decision trees. From customer support triage to data pipeline synthesis, agents execute work 24/7 without manual babysitting.',
    primaryBenefit: 'Eliminates repetitive human bottlenecks by automating multi-step digital workflows.',
    stack: ['LangGraph', 'ReAct Agent Loop', 'Function Calling', 'Groq Llama 3.3', 'FastAPI'],
    projectRef: {
      name: 'AutoChat-AI WhatsApp Copilot',
      description: 'Autonomous conversational agent managing real-time audio transcription and tool execution.',
      url: 'https://srikarjakkena.vercel.app/projects/whatsapp-ai-copilot'
    },
    targetRoute: '/solutions#agents'
  },
  {
    id: 'automation',
    trigger: 'Automate workflows',
    solutionName: 'Intelligent Process Automation',
    category: 'INTEGRATED PIPELINES',
    icon: Workflow,
    tagline: 'Bridge messy unstructured inputs into clean structured enterprise actions.',
    explanation: 'Connect legacy CRMs, messaging channels, and operational databases. AI parses unstructured emails, tickets, or WhatsApp voice notes into validated database rows, triggering downstream webhooks.',
    primaryBenefit: 'Sub-second event routing with guaranteed schema compliance and human fallback.',
    stack: ['FastAPI', 'Celery / Redis', 'WhatsApp Cloud API', 'Webhooks', 'PostgreSQL'],
    projectRef: {
      name: 'Generative AI Lab',
      description: 'Autonomous SQL agents and API orchestrators converting natural queries to database mutations.',
      url: 'https://github.com/JakkenaSrikar/Generative-AI-Lab'
    },
    targetRoute: '/solutions#automation'
  },
  {
    id: 'vision',
    trigger: 'Understand images',
    solutionName: 'Computer Vision & Edge Perception',
    category: 'SPATIAL INTELLIGENCE',
    icon: Eye,
    tagline: 'Real-time visual inference running with sub-50ms latency at the edge.',
    explanation: 'Analyze live video, spatial landmarks, hand gestures, or medical scans. We train lightweight convolutional and transformer vision backbones optimized for web browsers and edge devices.',
    primaryBenefit: 'High-throughput visual processing without streaming private video feeds to third parties.',
    stack: ['MediaPipe', 'OpenCV', 'MobileNetV2', 'U-Net', 'TensorFlow / PyTorch'],
    projectRef: {
      name: 'SignBridge AI',
      description: 'Real-time sign language recognition translating 21 hand landmarks under 50ms latency.',
      url: 'https://sign-language-recognition-system.streamlit.app/'
    },
    targetRoute: '/solutions#vision'
  },
  {
    id: 'genai',
    trigger: 'Generate content',
    solutionName: 'Custom Generative AI Applications',
    category: 'TAILORED REASONING',
    icon: Sparkles,
    tagline: 'Domain-specific generative models tuned to your brand tone and schemas.',
    explanation: 'Move beyond generic one-size-fits-all prompts. We build fine-tuned inference pipelines (LoRA/PEFT) that generate contract summaries, code translations, or technical documentation adhering to strict rules.',
    primaryBenefit: 'Deterministic tone, schema-strict JSON outputs, and dramatic token cost reduction.',
    stack: ['vLLM', 'Hugging Face', 'PEFT / LoRA', 'Ollama', 'Prompt Evaluation Frameworks'],
    targetRoute: '/solutions#genai'
  }
];

export const ChooseYourAi: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('rag');
  const activePath = AI_PATHS.find((p) => p.id === selectedId) || AI_PATHS[0];
  const Icon = activePath.icon;

  return (
    <section id="choose-your-ai" className="relative py-28 bg-[#070C1D] border-y border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <Compass className="w-3.5 h-3.5 text-brand-cyan" />
            <span>INTERACTIVE CAPABILITY SELECTOR</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            What does your <span className="text-gradient-synq">problem need?</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Every business problem requires a distinct intelligence architecture. Select what you are trying to solve below to discover your optimal starting point.
          </p>
        </div>

        {/* 5 Selector Option Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {AI_PATHS.map((path) => {
            const isSelected = selectedId === path.id;
            const PathIcon = path.icon;
            return (
              <button
                key={path.id}
                type="button"
                onClick={() => setSelectedId(path.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between h-32 ${
                  isSelected
                    ? 'bg-[#0E1528] border-brand-cyan shadow-glow-cyan/20 scale-[1.02]'
                    : 'bg-[#0B1020]/80 border-white/[0.06] hover:border-white/20 hover:bg-[#0B1020]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <PathIcon className={`w-5 h-5 ${isSelected ? 'text-brand-cyan' : 'text-brand-muted'}`} />
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    isSelected ? 'bg-brand-cyan/20 text-brand-cyan' : 'bg-white/[0.04] text-brand-dim'
                  }`}>
                    {isSelected ? 'ACTIVE' : 'SELECT'}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-mono text-brand-dim uppercase block">I WANT TO</span>
                  <span className={`text-sm font-display font-bold leading-snug ${
                    isSelected ? 'text-white' : 'text-slate-300'
                  }`}>
                    "{path.trigger}"
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Architectural Recommendation Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1020]/95 border border-brand-cyan/30 shadow-2xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-bold">
                YOUR STARTING POINT → {activePath.category}
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/10">
                PROVEN PATTERN
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
                <Icon className="w-8 h-8 text-brand-cyan shrink-0" />
                <span>{activePath.solutionName}</span>
              </h3>
              <p className="text-base text-brand-cyan font-medium">
                {activePath.tagline}
              </p>
            </div>

            <p className="text-sm text-brand-muted leading-relaxed">
              {activePath.explanation}
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <span className="font-semibold text-white">Engineering Guarantee: </span>
                {activePath.primaryBenefit}
              </div>
            </div>

            {/* Recommended Tech Stack */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-brand-dim uppercase tracking-wider">
                Production Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {activePath.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Action & Reference Panel */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0E1528] border border-white/[0.08] space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="text-[11px] font-mono text-brand-dim uppercase tracking-wider">
                VERIFIED REFERENCE PROJECT
              </div>

              {activePath.projectRef ? (
                <div className="space-y-2 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="font-display font-bold text-sm text-white">
                    {activePath.projectRef.name}
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {activePath.projectRef.description}
                  </p>
                  <a
                    href={activePath.projectRef.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-cyan hover:underline pt-2"
                  >
                    <span>View Live Prototype</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs text-brand-muted">
                  Custom architecture engineered around client specifications.
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/[0.06] space-y-3">
              <Link
                to={activePath.targetRoute}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple hover:shadow-glow-cyan transition-all"
              >
                <span>Explore this capability</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/build"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-brand-muted hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
              >
                <span>Design with this Pattern</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
