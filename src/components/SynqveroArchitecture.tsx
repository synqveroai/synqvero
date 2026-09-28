import React, { useState } from 'react';
import { 
  Sparkles, 
  Bot, 
  Eye, 
  Database, 
  Workflow, 
  Scan, 
  Cpu, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArchNode {
  id: string;
  label: string;
  badge: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  keyTech: string[];
  outputs: string;
  accent: 'cyan' | 'blue' | 'purple';
}

const ARCH_NODES: Record<string, ArchNode> = {
  'genai': {
    id: 'genai',
    label: 'GENERATIVE AI',
    badge: 'CORE REASONING',
    category: 'Foundational Intelligence',
    shortDesc: 'Models that generate, synthesize, and transform multimodal information.',
    fullDesc: 'Custom LLM pipelines fine-tuned on domain context, enabling nuanced reasoning, structured synthesis, and context-aware natural language generation without generic hallucinations.',
    icon: Sparkles,
    keyTech: ['Groq Llama 3.3', 'Claude 3.5', 'LoRA / PEFT', 'Transformers'],
    outputs: 'Synthesized answers, structured JSON schemas, multimodal tokens',
    accent: 'cyan'
  },
  'agents': {
    id: 'agents',
    label: 'AI AGENTS',
    badge: 'AUTONOMOUS EXECUTION',
    category: 'Autonomous Systems',
    shortDesc: 'Systems that use tools, memory, and multi-step workflows to perform tasks.',
    fullDesc: 'Goal-directed autonomous agents equipped with ReAct loops, deterministic state machines, and API toolkits to break down complex goals into verified sub-tasks and execute without human bottlenecks.',
    icon: Bot,
    keyTech: ['LangGraph', 'ReAct Pattern', 'Tool Calling APIs', 'State Stores'],
    outputs: 'Automated task resolution, API executions, dynamic plan adaptation',
    accent: 'blue'
  },
  'vision': {
    id: 'vision',
    label: 'COMPUTER VISION',
    badge: 'SPATIAL PERCEPTION',
    category: 'Visual Intelligence',
    shortDesc: 'Systems that observe, segment, and understand real-world visual information.',
    fullDesc: 'Low-latency visual perception models processing live webcam feeds, medical scans, or spatial geometries on edge or cloud with sub-50ms inference speeds.',
    icon: Eye,
    keyTech: ['MediaPipe', 'OpenCV', 'MobileNetV2', 'U-Net / Grad-CAM'],
    outputs: 'Landmark coordinates, segmentation masks, localized spatial classifications',
    accent: 'purple'
  },
  'rag': {
    id: 'rag',
    label: 'RAG ARCHITECTURE',
    badge: 'GROUNDED KNOWLEDGE',
    category: 'Retrieval Layer',
    shortDesc: 'Connect AI models to trusted external knowledge with strict citations.',
    fullDesc: 'Deterministic chunking, dense vector indexing, and hybrid reranking that retrieve exact passages from your private repositories before prompting models—eliminating hallucination.',
    icon: Database,
    keyTech: ['ChromaDB', 'HuggingFace Embeddings', 'LangChain', 'Cosine Similarity'],
    outputs: 'Verifiable citations, extracted context windows, factual grounding',
    accent: 'cyan'
  },
  'automation': {
    id: 'automation',
    label: 'INTELLIGENT AUTOMATION',
    badge: 'WORKFLOW SYNC',
    category: 'Operational Layer',
    shortDesc: 'AI-powered workflows that eliminate repetitive manual data entry and triage.',
    fullDesc: 'End-to-end integration bridges connecting customer channels (WhatsApp, Slack, email) with back-office databases, auto-routing messages, and updating CRM records.',
    icon: Workflow,
    keyTech: ['FastAPI', 'Celery / Redis', 'Webhooks', 'WhatsApp Cloud API'],
    outputs: 'Synchronized CRM records, routed customer sessions, structured logs',
    accent: 'blue'
  },
  'cv-edge': {
    id: 'cv-edge',
    label: 'EDGE & SPATIAL VISION',
    badge: 'REAL-TIME STREAMING',
    category: 'Inference Layer',
    shortDesc: 'High-throughput visual interpretation optimized for browser and edge devices.',
    fullDesc: 'Client-side WebAssembly and GPU-accelerated inference pipelines that translate physical hand gestures or analyze medical imagery without transmitting raw video to third-party clouds.',
    icon: Scan,
    keyTech: ['TensorFlow.js', 'ONNX Runtime', 'Web Workers', 'Scikit-learn'],
    outputs: 'Zero-latency feedback, private local inference, gesture telemetry',
    accent: 'purple'
  },
  'systems': {
    id: 'systems',
    label: 'SYNQVERO AI SYSTEMS',
    badge: 'UNIFIED HARNESS',
    category: 'System Integration',
    shortDesc: 'Unified architectures combining retrieval, reasoning, and execution.',
    fullDesc: 'The cohesive orchestration fabric where RAG retrieval, agentic reasoning, and computer vision streams merge into robust, monitored production software.',
    icon: Cpu,
    keyTech: ['Docker', 'Async Orchestration', 'Evaluation Harnesses', 'Telemetry'],
    outputs: 'Deterministic system responses, audit logs, verified output guarantees',
    accent: 'blue'
  },
  'action': {
    id: 'action',
    label: 'REAL-WORLD ACTION',
    badge: 'OPERATIONAL IMPACT',
    category: 'Outcome',
    shortDesc: 'Measurable enterprise impact, automated workflows, and human copilot sync.',
    fullDesc: 'The final destination of intelligence: real work completed in sync with human workflows—faster triage, accessible interfaces, and zero operational drag.',
    icon: Zap,
    keyTech: ['REST Endpoints', 'Enterprise Dashboards', 'Triggered Actions', 'User Copilots'],
    outputs: '90%+ workflow acceleration, error-free execution, actionable human insights',
    accent: 'cyan'
  }
};

export const SynqveroArchitecture: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('genai');
  const activeNode = ARCH_NODES[selectedNodeId] || ARCH_NODES['genai'];

  return (
    <section id="architecture" className="relative py-28 bg-[#050816] border-y border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-cyan/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <Layers className="w-3.5 h-3.5 text-brand-cyan" />
            <span>INTERACTIVE ARCHITECTURE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            How intelligence <span className="text-gradient-synq">works in sync.</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Synqvero doesn’t view AI as an isolated chatbot. We engineer a connected hierarchy where foundational models, external knowledge, and autonomous agents converge into reliable operational action.
          </p>
        </div>

        {/* Interactive Diagram Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Connected Graph (Left 7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] mb-8">
              <span className="text-xs font-mono text-brand-dim uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                SYSTEM TOPOLOGY • SELECT ANY COMPONENT
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-brand-cyan border border-brand-cyan/20">
                LIVE INTERACTION
              </span>
            </div>

            {/* Tree Flow Representation */}
            <div className="space-y-6">
              {/* Level 0: Top Brand Node */}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setSelectedNodeId('systems')}
                  className={`px-6 py-3 rounded-2xl font-mono text-xs font-bold tracking-wider transition-all duration-300 flex items-center gap-2 border ${
                    selectedNodeId === 'systems'
                      ? 'bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple text-white border-transparent shadow-glow-cyan'
                      : 'bg-white/[0.04] text-white border-white/10 hover:border-brand-cyan/40'
                  }`}
                >
                  <Cpu className="w-4 h-4 text-brand-cyan" />
                  <span>SYNQVERO AI CORE</span>
                </button>
              </div>

              {/* Connecting Down Arrow */}
              <div className="flex justify-center">
                <div className="w-[2px] h-6 bg-gradient-to-b from-brand-cyan to-brand-blue" />
              </div>

              {/* Level 1: Three Core Disciplines */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'genai', label: 'GENERATIVE AI', accent: 'cyan', icon: Sparkles },
                  { id: 'agents', label: 'AI AGENTS', accent: 'blue', icon: Bot },
                  { id: 'vision', label: 'COMPUTER VISION', accent: 'purple', icon: Eye }
                ].map((node) => {
                  const isSelected = selectedNodeId === node.id;
                  const Icon = node.icon;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between h-24 ${
                        isSelected
                          ? 'bg-[#0E1528] border-brand-cyan shadow-glow-subtle'
                          : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-brand-cyan' : 'text-brand-muted'}`} />
                        <span className="text-[9px] font-mono text-brand-dim uppercase">LAYER 01</span>
                      </div>
                      <span className="text-[11px] sm:text-xs font-display font-bold text-white tracking-tight">
                        {node.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Connecting Down Streams */}
              <div className="grid grid-cols-3 gap-3">
                <div className="flex justify-center"><div className="w-[2px] h-6 bg-brand-cyan/40" /></div>
                <div className="flex justify-center"><div className="w-[2px] h-6 bg-brand-blue/40" /></div>
                <div className="flex justify-center"><div className="w-[2px] h-6 bg-brand-purple/40" /></div>
              </div>

              {/* Level 2: Applied Operational Layers */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'rag', label: 'RAG', sub: 'Knowledge', icon: Database },
                  { id: 'automation', label: 'AUTOMATION', sub: 'Workflows', icon: Workflow },
                  { id: 'cv-edge', label: 'VISION', sub: 'Edge / Scan', icon: Scan }
                ].map((node) => {
                  const isSelected = selectedNodeId === node.id;
                  const Icon = node.icon;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between h-24 ${
                        isSelected
                          ? 'bg-[#0E1528] border-brand-blue shadow-glow-subtle'
                          : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-brand-blue' : 'text-brand-muted'}`} />
                        <span className="text-[9px] font-mono text-brand-dim uppercase">LAYER 02</span>
                      </div>
                      <div>
                        <span className="text-[11px] sm:text-xs font-display font-bold text-white block">
                          {node.label}
                        </span>
                        <span className="text-[10px] font-mono text-brand-dim">
                          {node.sub}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Converging Bracket Line */}
              <div className="relative pt-2">
                <div className="h-[2px] bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple rounded-full" />
                <div className="flex justify-center">
                  <div className="w-[2px] h-6 bg-brand-blue" />
                </div>
              </div>

              {/* Level 3: Integrated AI Systems */}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setSelectedNodeId('systems')}
                  className={`w-full max-w-sm py-3.5 px-5 rounded-2xl font-mono text-xs font-bold tracking-wider transition-all duration-300 flex items-center justify-between border ${
                    selectedNodeId === 'systems'
                      ? 'bg-[#0E1528] border-brand-cyan text-white shadow-glow-subtle'
                      : 'bg-white/[0.03] text-slate-200 border-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-brand-cyan" />
                    <span>AI SYSTEMS INTEGRATION</span>
                  </span>
                  <span className="text-[10px] text-brand-dim uppercase">SYNQ FABRIC</span>
                </button>
              </div>

              {/* Final Flow Down */}
              <div className="flex justify-center">
                <div className="w-[2px] h-6 bg-gradient-to-b from-brand-blue to-brand-cyan" />
              </div>

              {/* Level 4: Action */}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setSelectedNodeId('action')}
                  className={`w-full max-w-xs py-3.5 px-5 rounded-2xl font-mono text-xs font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border ${
                    selectedNodeId === 'action'
                      ? 'bg-gradient-to-r from-brand-cyan to-brand-blue text-white border-transparent shadow-glow-cyan'
                      : 'bg-white/[0.04] text-brand-cyan border-brand-cyan/30 hover:border-brand-cyan'
                  }`}
                >
                  <Zap className="w-4 h-4 text-white" />
                  <span>ACTION & MEASURABLE OUTCOME</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Node Deep-Dive Card (Right 5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#0E1528] border border-brand-cyan/30 shadow-2xl space-y-6 text-left relative overflow-hidden">
            {/* Top decorative glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Badge & Category */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                {activeNode.badge}
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.06] text-slate-300 border border-white/10">
                {activeNode.category}
              </span>
            </div>

            {/* Title & Short Description */}
            <div className="space-y-2">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <activeNode.icon className="w-6 h-6 text-brand-cyan" />
                <span>{activeNode.label}</span>
              </h3>
              <p className="text-sm font-medium text-brand-cyan">
                {activeNode.shortDesc}
              </p>
            </div>

            {/* Full Explanation */}
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              {activeNode.fullDesc}
            </p>

            {/* Technical Building Blocks */}
            <div className="space-y-2 pt-4 border-t border-white/[0.08]">
              <div className="text-[11px] font-mono text-brand-dim uppercase tracking-wider">
                Core Technologies & Frameworks
              </div>
              <div className="flex flex-wrap gap-2">
                {activeNode.keyTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Production Output */}
            <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[11px] font-mono text-brand-dim uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Verified System Output</span>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                {activeNode.outputs}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/build"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple hover:shadow-glow-cyan transition-all"
              >
                <span>Design an Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-brand-muted hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
              >
                <span>View All Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
