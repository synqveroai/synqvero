import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Clock, ExternalLink } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface ArticleSnippet {
  id: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  status: string;
  repoUrl?: string;
}

const PREVIEW_ARTICLES: ArticleSnippet[] = [
  {
    id: 'rag-triad',
    category: 'RAG ARCHITECTURE',
    title: 'Benchmarking Vector Rerankers: Cross-Encoders vs. Reciprocal Rank Fusion',
    description: 'Empirical analysis of dense vector retrieval failure modes on dense technical manuals under 500ms latency budgets.',
    readTime: '8 min read',
    status: 'In Drafting',
    repoUrl: 'https://github.com/JakkenaSrikar/rag-document-chatbot-questionandanswer'
  },
  {
    id: 'whatsapp-agent',
    category: 'AI AGENTS',
    title: 'Building a Sub-Second Autonomous WhatsApp Copilot: Groq LPU & Whisper v3',
    description: 'Coupling WhatsApp Cloud webhooks with Groq Llama 3.3 70B and Whisper Large v3 for transactional voice execution.',
    readTime: '11 min read',
    status: 'Engineering Audit',
    repoUrl: 'https://github.com/JakkenaSrikar/whatsapp-ai-copilot'
  },
  {
    id: 'edge-vision',
    category: 'COMPUTER VISION',
    title: 'Real-Time Hand Landmark Extraction Under 50ms with MediaPipe',
    description: 'Translating 21 3D hand coordinates for sign language classification directly in the browser with zero cloud video transmission.',
    readTime: '9 min read',
    status: 'In Drafting',
    repoUrl: 'https://github.com/JakkenaSrikar/sign-language-recognition-system'
  }
];

export const JournalPreview: React.FC = () => {
  return (
    <section id="journal-preview" className="relative py-28 bg-[#070C1D] border-y border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-brand-cyan" />
              <span>ENGINEERING JOURNAL</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Research notes & <span className="text-gradient-synq">technical blueprints.</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              We write about real systems we have architected and deployed. Explore our upcoming technical articles and deep dives into RAG, AI Agents, and Edge Vision.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-[#0B1020] hover:bg-white/[0.08] border border-white/10 hover:border-brand-cyan/40 transition-all"
            >
              <span>Explore All Publications</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-cyan" />
            </Link>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {PREVIEW_ARTICLES.map((art) => (
            <div
              key={art.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] hover:border-brand-cyan/40 transition-all flex flex-col justify-between space-y-5 shadow-xl group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-brand-cyan font-bold uppercase">{art.category}</span>
                  <span className="text-brand-dim flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-brand-muted leading-relaxed">
                  {art.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[10px] border border-amber-500/20">
                  {art.status}
                </span>

                {art.repoUrl && (
                  <a
                    href={art.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-muted hover:text-brand-cyan inline-flex items-center gap-1 text-[11px]"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Codebase</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
