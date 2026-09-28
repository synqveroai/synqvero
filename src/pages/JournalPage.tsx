import React, { useState } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  Search,
  ExternalLink
} from 'lucide-react';
import { GithubIcon } from '../components/GithubIcon';
import { companyProfile } from '../data/company';

interface PlannedArticle {
  id: string;
  category: 'RAG' | 'AI Agents' | 'Generative AI' | 'AI Engineering' | 'Computer Vision' | 'Experiments';
  title: string;
  abstract: string;
  keyTopics: string[];
  status: 'In Drafting' | 'Engineering Audit' | 'Planned';
  estimatedReadTime: string;
  relatedRepo?: string;
  author: string;
}

const PLANNED_ARTICLES: PlannedArticle[] = [
  {
    id: 'rag-production-triad',
    category: 'RAG',
    title: 'Benchmarking Vector Rerankers: Cross-Encoders vs. Reciprocal Rank Fusion in Low-Memory Environments',
    abstract: 'An empirical exploration of dense vector retrieval failure modes on technical manuals, comparing bi-encoder embeddings with cross-encoder rerankers under strict 500ms latency budgets.',
    keyTopics: ['ChromaDB', 'Cross-Encoders', 'RRF Algorithm', 'Retrieval Latency'],
    status: 'In Drafting',
    estimatedReadTime: '8 min read',
    relatedRepo: 'https://github.com/JakkenaSrikar/rag-document-chatbot-questionandanswer',
    author: 'Srikar Jakkena'
  },
  {
    id: 'whatsapp-agent-architecture',
    category: 'AI Agents',
    title: 'Building a Sub-Second Autonomous WhatsApp Copilot: Groq LPU Orchestration & Whisper Streaming',
    abstract: 'How we coupled WhatsApp Cloud webhooks with Groq Llama 3.3 70B and Whisper Large v3 to transcribe audio voice memos and trigger transactional actions in under 800ms.',
    keyTopics: ['FastAPI Webhooks', 'Groq LPU', 'Whisper v3', 'ReAct Loops'],
    status: 'Engineering Audit',
    estimatedReadTime: '11 min read',
    relatedRepo: 'https://github.com/JakkenaSrikar/whatsapp-ai-copilot',
    author: 'Srikar Jakkena'
  },
  {
    id: 'mediapipe-edge-gesture',
    category: 'Computer Vision',
    title: 'Real-Time Hand Landmark Extraction Under 50ms: Web Workers and Client-Side Spatial Inference',
    abstract: 'Translating 21 3D hand coordinates for sign language classification directly in the browser without streaming sensitive video frames to cloud servers.',
    keyTopics: ['MediaPipe', 'WebAssembly', 'Scikit-learn', 'Spatial Geometry'],
    status: 'In Drafting',
    estimatedReadTime: '9 min read',
    relatedRepo: 'https://github.com/JakkenaSrikar/sign-language-recognition-system',
    author: 'Srikar Jakkena'
  },
  {
    id: 'grad-cam-medical-vision',
    category: 'Computer Vision',
    title: 'Explainable Medical AI: Saliency Heatmaps with Grad-CAM and U-Net Segmentation',
    abstract: 'A rigorous retrospective on building MobileNetV2 and U-Net vision pipelines for brain MRI anomaly detection, highlighting the necessity of visual explainability and clinical disclaimers.',
    keyTopics: ['Grad-CAM', 'U-Net', 'TensorFlow', 'Clinical Disclaimers'],
    status: 'Planned',
    estimatedReadTime: '12 min read',
    relatedRepo: 'https://github.com/JakkenaSrikar/Brain-tumor-segmentation-and-classification',
    author: 'Srikar Jakkena'
  },
  {
    id: 'token-caching-economics',
    category: 'AI Engineering',
    title: 'Token Economics: Slashing LLM Operational Costs by 40% with Semantic Cache Invalidation',
    abstract: 'A practical breakdown of embedding-based semantic caching layers in front of frontier LLMs, analyzing hit rates, similarity thresholds, and cache eviction policies.',
    keyTopics: ['Semantic Caching', 'Redis', 'Cost Optimization', 'Latency Reduction'],
    status: 'Planned',
    estimatedReadTime: '7 min read',
    author: 'Srikar Jakkena'
  },
  {
    id: 'multi-agent-orchestration',
    category: 'AI Agents',
    title: 'Deterministic State Graphs vs. Open-Ended ReAct Loops in Enterprise Workflow Automation',
    abstract: 'Why cyclic state machines (like LangGraph) outperform unstructured autonomous agent prompts for high-stakes enterprise database mutations.',
    keyTopics: ['LangGraph', 'State Machines', 'Schema Validation', 'Human-in-the-Loop'],
    status: 'Planned',
    estimatedReadTime: '10 min read',
    relatedRepo: 'https://github.com/JakkenaSrikar/Generative-AI-Lab',
    author: 'Srikar Jakkena'
  }
];

const CATEGORIES = [
  'All',
  'RAG',
  'AI Agents',
  'Generative AI',
  'AI Engineering',
  'Computer Vision',
  'Experiments'
] as const;

export const JournalPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [emailInput, setEmailInput] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const filteredArticles = PLANNED_ARTICLES.filter(article => {
    const matchesCat = selectedCat === 'All' || article.category === selectedCat;
    const matchesSearch = !searchQuery.trim() || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.keyTopics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#050816] text-left">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-cyan/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-brand-cyan" />
            <span>SYNQVERO ENGINEERING JOURNAL</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Experiments, architectures, & <span className="text-gradient-synq">lessons from production.</span>
          </h1>

          <p className="text-base sm:text-xl text-brand-muted leading-relaxed">
            In-depth documentation, production architecture patterns, and empirical benchmarks straight from our codebase. No marketing puffery—just honest engineering observations.
          </p>
        </div>

        {/* Authenticity Banner: Notes Coming Soon */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1020]/90 border border-brand-cyan/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <Clock className="w-4 h-4" />
              <span>EDITORIAL POLICY • ENGINEERING NOTES COMING SOON</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              We write only about what we have tested, measured, and deployed.
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              We do not fabricate publication dates or pretend unreleased articles are live. Below is our verified editorial roadmap of technical blueprints currently being drafted from our active codebases.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={companyProfile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Verify Code on GitHub</span>
            </a>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  selectedCat === cat
                    ? 'bg-brand-cyan/20 border border-brand-cyan text-white shadow-glow-cyan/20'
                    : 'bg-[#0B1020]/80 border border-white/[0.06] text-brand-muted hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-dim" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search engineering topics..."
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-[#0B1020] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-brand-cyan"
            />
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="p-7 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] hover:border-brand-cyan/40 transition-all flex flex-col justify-between space-y-6 shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-cyan font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" />
                      <span>{article.status.toUpperCase()}</span>
                    </span>
                    <span className="text-[10px] font-mono text-brand-dim">
                      {article.estimatedReadTime}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {article.abstract}
                </p>

                {/* Key Topics Covered */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.keyTopics.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-brand-dim">AUTHOR: {article.author}</span>
                {article.relatedRepo ? (
                  <a
                    href={article.relatedRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-cyan hover:underline flex items-center gap-1"
                  >
                    <span>View Underlying Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-brand-dim italic">Notes in preparation</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe for Releases */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0B1020] to-[#070C1D] border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
              COMMUNITY & PEER REVIEW
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Want our technical blueprints as they are released?
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              We publish empirical observations on vector search accuracy, LLM memory profiling, and edge computer vision. Strictly engineering notes—zero marketing spam.
            </p>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#050816] border border-white/[0.08] space-y-4">
            <h4 className="font-display text-base font-bold text-white">
              Receive Engineering Publications
            </h4>
            {subscribed ? (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! We will notify you when notes release.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-brand-dim text-xs font-mono focus:outline-none focus:border-brand-cyan"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan hover:shadow-glow-purple transition-all"
                >
                  Notify Me of New Notes
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};
