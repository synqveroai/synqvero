import React from 'react';
import { 
  GitBranch, 
  Terminal, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface PulseRepo {
  name: string;
  fullName: string;
  category: string;
  description: string;
  primaryLanguage: string;
  stack: string[];
  status: 'Deployed & Live' | 'Active Pipeline' | 'In Development';
  githubUrl: string;
  liveUrl?: string;
  license: string;
}

const VERIFIED_REPOSITORIES: PulseRepo[] = [
  {
    name: 'whatsapp-ai-copilot',
    fullName: 'JakkenaSrikar/whatsapp-ai-copilot',
    category: 'AUTONOMOUS COPILOT',
    description: 'Autonomous WhatsApp AI copilot using Groq Llama 3.3 70B & Whisper Large v3 for sub-second voice and text query execution.',
    primaryLanguage: 'Python',
    stack: ['FastAPI', 'Groq Llama 3.3', 'Whisper v3', 'WhatsApp Cloud API'],
    status: 'Deployed & Live',
    githubUrl: 'https://github.com/JakkenaSrikar/whatsapp-ai-copilot',
    liveUrl: 'https://srikarjakkena.vercel.app/projects/whatsapp-ai-copilot',
    license: 'MIT'
  },
  {
    name: 'sign-language-recognition',
    fullName: 'JakkenaSrikar/sign-language-recognition-system',
    category: 'COMPUTER VISION',
    description: 'Real-time hand gesture translation system tracking 21 3D spatial landmarks under 50ms latency with up to 99% accuracy.',
    primaryLanguage: 'Python',
    stack: ['MediaPipe', 'OpenCV', 'Scikit-learn', 'Streamlit'],
    status: 'Deployed & Live',
    githubUrl: 'https://github.com/JakkenaSrikar/sign-language-recognition-system',
    liveUrl: 'https://sign-language-recognition-system.streamlit.app/',
    license: 'MIT'
  },
  {
    name: 'rag-document-chatbot',
    fullName: 'JakkenaSrikar/rag-document-chatbot-questionandanswer',
    category: 'RAG ARCHITECTURE',
    description: 'Zero-shot document retrieval and semantic Q&A system indexing PDFs and text documents using dense embeddings and ChromaDB.',
    primaryLanguage: 'Python',
    stack: ['LangChain', 'ChromaDB', 'HuggingFace', 'Streamlit'],
    status: 'Deployed & Live',
    githubUrl: 'https://github.com/JakkenaSrikar/rag-document-chatbot-questionandanswer',
    liveUrl: 'https://rag-document-chatbot-questionandanswer.streamlit.app/',
    license: 'MIT'
  },
  {
    name: 'Brain-tumor-segmentation',
    fullName: 'JakkenaSrikar/Brain-tumor-segmentation-and-classification',
    category: 'DEEP LEARNING VISION',
    description: 'Hybrid deep learning system coupling MobileNetV2 classification and U-Net segmentation with Grad-CAM explainability heatmaps.',
    primaryLanguage: 'Python / Jupyter',
    stack: ['MobileNetV2', 'U-Net', 'TensorFlow', 'Grad-CAM'],
    status: 'Active Pipeline',
    githubUrl: 'https://github.com/JakkenaSrikar/Brain-tumor-segmentation-and-classification',
    license: 'Academic / Open'
  },
  {
    name: 'Generative-AI-Lab',
    fullName: 'JakkenaSrikar/Generative-AI-Lab',
    category: 'AI LAB & EXPERIMENTS',
    description: 'Comprehensive research repository implementing autonomous ReAct agents, dynamic SQL generators, and multimodal workflows.',
    primaryLanguage: 'Python',
    stack: ['LangChain', 'SQL Agents', 'Prompt Engineering', 'HuggingFace'],
    status: 'Active Pipeline',
    githubUrl: 'https://github.com/JakkenaSrikar/Generative-AI-Lab',
    license: 'MIT'
  },
  {
    name: 'synqvero',
    fullName: 'synqveroai/synqvero',
    category: 'AI PLATFORM & BLUEPRINT',
    description: 'Modern, high-performance web architecture featuring interactive AI solution designers, RAG explorers, and grounded concierge systems.',
    primaryLanguage: 'TypeScript',
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'TypeScript'],
    status: 'Deployed & Live',
    githubUrl: 'https://github.com/synqveroai/synqvero',
    liveUrl: 'https://synqvero.vercel.app',
    license: 'MIT'
  }
];

export const EngineeringPulse: React.FC = () => {
  return (
    <section id="engineering-pulse" className="relative py-28 bg-[#050816] border-y border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
              <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
              <span>EMPIRICAL CODEBASE TELEMETRY</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Synqvero Engineering <span className="text-gradient-synq">Pulse.</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              We stand behind real code, verifiable commits, and live deployments. No vanity metrics or synthetic case studies—explore our public repositories and active systems.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://github.com/synqveroai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-white" />
              <span>github.com/synqveroai</span>
              <ExternalLink className="w-3 h-3 text-brand-dim" />
            </a>
          </div>
        </div>

        {/* Verified Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'ENGINEERING SYSTEMS', value: '05', sub: 'Tested & Documented', icon: Cpu },
            { label: 'PUBLIC REPOSITORIES', value: '06', sub: 'Open Architecture', icon: GitBranch },
            { label: 'LIVE PLATFORMS', value: '03', sub: 'Streamlit & Vercel', icon: CheckCircle2 },
            { label: 'OPEN SOURCE LICENSE', value: 'MIT', sub: 'Permissive Code', icon: Layers }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl bg-[#0B1020]/90 border border-white/[0.06] text-left space-y-2 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-brand-dim uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <Icon className="w-4 h-4 text-brand-cyan" />
                </div>
                <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-brand-muted">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Repository Cards Grid */}
        <div className="space-y-4 text-left">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-brand-dim uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              VERIFIED REPOSITORIES & EXPERIMENTS
            </span>
            <span className="text-[11px] font-mono text-brand-dim">
              GROUNDED IN OPEN ARTIFACTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VERIFIED_REPOSITORIES.map((repo) => (
              <div
                key={repo.name}
                className="p-6 rounded-2xl bg-[#0B1020]/90 border border-white/[0.06] hover:border-brand-cyan/40 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-brand-cyan border border-brand-cyan/20">
                      {repo.category}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1 ${
                      repo.status === 'Deployed & Live'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-brand-blue/10 text-brand-cyan'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      <span>{repo.status}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {repo.name}
                  </h3>

                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                    {repo.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {repo.stack.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.04] text-[10px] font-mono text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-brand-dim">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>{repo.primaryLanguage}</span>
                    <span>• {repo.license}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {repo.liveUrl && (
                      <a
                        href={repo.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-cyan hover:underline inline-flex items-center gap-1 text-[11px]"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <a
                      href={repo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-brand-cyan inline-flex items-center gap-1 text-[11px]"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Philosophy Footer Callout */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-brand-cyan shrink-0" />
            <span className="text-xs text-brand-muted">
              <strong className="text-white">Strict Authenticity Policy: </strong>
              Every project listed here is grounded in real code written and published by Srikar Jakkena and the Synqvero AI team.
            </span>
          </div>

          <a
            href="https://github.com/JakkenaSrikar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-brand-cyan hover:underline shrink-0 inline-flex items-center gap-1.5"
          >
            <span>View Founder GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
