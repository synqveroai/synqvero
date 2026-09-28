import React, { useState, useMemo } from 'react';
import { 
  Database, 
  Search, 
  Calculator, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  RefreshCw, 
  Sliders, 
  ExternalLink 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample enterprise corpora for interactive RAG & Search
const SAMPLE_DOCS = [
  {
    id: 'doc-1',
    title: 'Synqvero Security & Data Governance Specification',
    content: 'Synqvero enforces Zero Trust data isolation. Enterprise customer datasets are never shared with foundation model providers for training. All retrieval-augmented generation pipelines utilize isolated vector namespaces and client-side encryption. We support self-hosted vector stores via ChromaDB and on-premise deployments with Docker and Kubernetes.'
  },
  {
    id: 'doc-2',
    title: 'Service Level Agreement & Latency Benchmarks',
    content: 'Synqvero AI systems guarantee a 99.9% uptime SLA for dedicated enterprise pipelines. For real-time autonomous agent systems like AutoChat-AI, our p95 inference latency targets sub-800ms using Groq Llama 3.3 70B accelerated LPUs. Audio transcription with Whisper Large v3 completes in under 450ms for typical 15-second voice memos.'
  },
  {
    id: 'doc-3',
    title: 'Edge Computer Vision & MediaPipe Pipeline Specs',
    content: 'SignBridge AI performs real-time hand landmark tracking using a lightweight 21-point 3D keypoint model. Inference latency is maintained below 50ms per frame in the browser, achieving classification accuracy up to 99% on standard American Sign Language gestures without streaming raw video to external cloud servers.'
  },
  {
    id: 'doc-4',
    title: 'Medical Imaging Research & Diagnostic Disclaimers',
    content: 'The Hybrid Brain Tumor AI research project combines MobileNetV2 feature extraction and U-Net pixel-level segmentation. Model outputs include Grad-CAM saliency heatmaps to assist clinical research. This software is designated strictly for academic research and educational evaluation, and is not certified for independent clinical diagnostic decisions.'
  }
];

// Helper: cosine similarity between two simple word-frequency term vectors
function computeCosineSimilarity(query: string, text: string): number {
  const tokenize = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(/\s+/).filter(Boolean);
  const qWords = tokenize(query);
  const tWords = tokenize(text);

  if (qWords.length === 0 || tWords.length === 0) return 0;

  // Build vocabulary
  const vocab = Array.from(new Set([...qWords, ...tWords]));
  
  // Vectorize
  const qVec = vocab.map(w => qWords.filter(x => x === w).length);
  const tVec = vocab.map(w => tWords.filter(x => x === w).length);

  // Cosine sim
  const dot = qVec.reduce((sum, val, i) => sum + val * tVec[i], 0);
  const magQ = Math.sqrt(qVec.reduce((sum, val) => sum + val * val, 0));
  const magT = Math.sqrt(tVec.reduce((sum, val) => sum + val * val, 0));

  if (magQ === 0 || magT === 0) return 0;
  return dot / (magQ * magT);
}

export const PlaygroundPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rag' | 'semantic' | 'tokens' | 'docqa'>('rag');

  // --- RAG Explorer State ---
  const [selectedDocId, setSelectedDocId] = useState<string>('doc-1');
  const [customDocText, setCustomDocText] = useState<string>(SAMPLE_DOCS[0].content);
  const [chunkSize, setChunkSize] = useState<number>(140);
  const [chunkOverlap, setChunkOverlap] = useState<number>(30);
  const [ragQuery, setRagQuery] = useState<string>('How does Synqvero handle customer data and privacy?');
  const [ragGenerated, setRagGenerated] = useState<boolean>(false);

  // Compute chunks live
  const chunks = useMemo(() => {
    const text = customDocText.trim();
    if (!text) return [];
    const result: string[] = [];
    let start = 0;
    const step = Math.max(10, chunkSize - chunkOverlap);

    while (start < text.length) {
      const end = Math.min(start + chunkSize, text.length);
      result.push(text.slice(start, end));
      if (end >= text.length) break;
      start += step;
    }
    return result;
  }, [customDocText, chunkSize, chunkOverlap]);

  // Rank chunks by similarity
  const rankedChunks = useMemo(() => {
    if (!ragQuery.trim()) {
      return chunks.map((c, i) => ({ id: i, text: c, score: 0 }));
    }
    return chunks
      .map((c, i) => ({
        id: i,
        text: c,
        score: computeCosineSimilarity(ragQuery, c)
      }))
      .sort((a, b) => b.score - a.score);
  }, [chunks, ragQuery]);

  // --- Semantic Search Simulator State ---
  const [searchQuery, setSearchQuery] = useState<string>('privacy and encryption policy');
  
  const searchResults = useMemo(() => {
    const qLower = searchQuery.toLowerCase().trim();
    return SAMPLE_DOCS.map(doc => {
      // Keyword match score (exact substring or token count)
      const words = qLower.split(/\s+/).filter(Boolean);
      const docLower = doc.content.toLowerCase();
      const keywordHits = words.filter(w => docLower.includes(w)).length;
      const keywordScore = words.length > 0 ? (keywordHits / words.length) * 100 : 0;

      // Semantic simulated cosine score
      const simScore = Math.min(100, Math.round(computeCosineSimilarity(searchQuery, doc.content) * 100 * 1.4));

      return {
        ...doc,
        keywordScore: Math.round(keywordScore),
        semanticScore: simScore
      };
    }).sort((a, b) => b.semanticScore - a.semanticScore);
  }, [searchQuery]);

  // --- Token Calculator State ---
  const [selectedModel, setSelectedModel] = useState<'groq' | 'claude' | 'gpt4o'>('groq');
  const [dailyRequests, setDailyRequests] = useState<number>(5000);
  const [promptTokens, setPromptTokens] = useState<number>(800);
  const [completionTokens, setCompletionTokens] = useState<number>(300);

  const modelSpecs = {
    groq: {
      name: 'Groq Llama 3.3 70B (Fast LPU)',
      inputCostPerM: 0.59,
      outputCostPerM: 0.79,
      latencyMs: '220ms',
      strength: 'Real-time conversational agents & low-latency RAG'
    },
    claude: {
      name: 'Anthropic Claude 3.5 Sonnet',
      inputCostPerM: 3.00,
      outputCostPerM: 15.00,
      latencyMs: '950ms',
      strength: 'Complex coding, nuanced reasoning & multi-step planning'
    },
    gpt4o: {
      name: 'OpenAI GPT-4o',
      inputCostPerM: 2.50,
      outputCostPerM: 10.00,
      latencyMs: '750ms',
      strength: 'Multimodal vision, broad reasoning & structured JSON'
    }
  };

  const currentModel = modelSpecs[selectedModel];
  const monthlyRequests = dailyRequests * 30;
  const monthlyInputTokens = (monthlyRequests * promptTokens) / 1_000_000;
  const monthlyOutputTokens = (monthlyRequests * completionTokens) / 1_000_000;
  const monthlyCost = (
    monthlyInputTokens * currentModel.inputCostPerM + 
    monthlyOutputTokens * currentModel.outputCostPerM
  ).toFixed(2);

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
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>INTERACTIVE LABORATORY</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Synqvero AI <span className="text-gradient-synq">Playground.</span>
          </h1>

          <p className="text-base sm:text-xl text-brand-muted leading-relaxed">
            Experience the technology directly in your browser. Experiment with client-side text chunking, vector similarity ranking, and AI token economics in real time.
          </p>
        </div>

        {/* Experiment Navigation Tabs */}
        <div className="flex flex-wrap gap-2 pb-2 border-b border-white/[0.08]">
          {[
            { id: 'rag', label: '1. RAG Explorer', icon: Database, live: true },
            { id: 'semantic', label: '2. Semantic Search', icon: Search, live: true },
            { id: 'tokens', label: '3. Token & Latency Budget', icon: Calculator, live: true },
            { id: 'docqa', label: '4. Document Q&A Demo', icon: FileText, live: false }
          ].map((tab) => {
            const isCurrent = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-mono text-xs transition-all ${
                  isCurrent
                    ? 'bg-brand-cyan/20 border border-brand-cyan text-white shadow-glow-cyan/20 font-bold'
                    : 'bg-[#0B1020]/80 border border-white/[0.06] text-brand-muted hover:border-white/20 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isCurrent ? 'text-brand-cyan' : 'text-brand-dim'}`} />
                <span>{tab.label}</span>
                {tab.live ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                ) : (
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    IN DEV
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* TAB 1: RAG EXPLORER */}
        {activeTab === 'rag' && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-[#0B1020]/90 border border-brand-cyan/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                  FUNCTIONAL CLIENT-SIDE RAG SIMULATOR
                </span>
                <p className="text-sm text-slate-200">
                  This demo executes real text slicing and vector cosine similarity matching locally in your browser.
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full shrink-0">
                100% Client-Side • Zero Data Sent to Cloud
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Input text & chunking settings */}
              <div className="lg:col-span-6 space-y-6">
                {/* Preloaded Document Picker */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-brand-dim uppercase tracking-wider">
                    Select Sample Document
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {SAMPLE_DOCS.map((doc) => (
                      <button
                        key={doc.id}
                        type="button"
                        onClick={() => {
                          setSelectedDocId(doc.id);
                          setCustomDocText(doc.content);
                          setRagGenerated(false);
                        }}
                        className={`p-2.5 rounded-xl text-left text-xs transition-all border ${
                          selectedDocId === doc.id
                            ? 'bg-[#0E1528] border-brand-cyan text-white'
                            : 'bg-white/[0.02] border-white/[0.06] text-brand-muted hover:border-white/20'
                        }`}
                      >
                        <span className="font-semibold block truncate">{doc.title}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Document Content View / Edit */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-brand-dim uppercase tracking-wider">
                      Document Raw Text ({customDocText.length} chars)
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const original = SAMPLE_DOCS.find(d => d.id === selectedDocId)?.content || '';
                        setCustomDocText(original);
                      }}
                      className="text-[11px] font-mono text-brand-cyan hover:underline flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Reset</span>
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    value={customDocText}
                    onChange={(e) => {
                      setCustomDocText(e.target.value);
                      setRagGenerated(false);
                    }}
                    className="w-full p-3.5 rounded-2xl bg-[#070C1D] border border-white/10 text-slate-200 text-xs font-mono focus:outline-none focus:border-brand-cyan leading-relaxed"
                  />
                </div>

                {/* Chunking Controls */}
                <div className="p-5 rounded-2xl bg-[#0E1528] border border-white/[0.08] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan uppercase tracking-wider">
                    <Sliders className="w-4 h-4" />
                    <span>Chunking Hyperparameters</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-brand-muted">Chunk Size</span>
                        <span className="text-brand-cyan font-bold">{chunkSize} chars</span>
                      </div>
                      <input
                        type="range"
                        min="80"
                        max="300"
                        step="10"
                        value={chunkSize}
                        onChange={(e) => setChunkSize(Number(e.target.value))}
                        className="w-full accent-brand-cyan cursor-pointer"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-brand-muted">Chunk Overlap</span>
                        <span className="text-brand-cyan font-bold">{chunkOverlap} chars</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="60"
                        step="5"
                        value={chunkOverlap}
                        onChange={(e) => setChunkOverlap(Number(e.target.value))}
                        className="w-full accent-brand-cyan cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-brand-dim">
                    Generated <strong className="text-white">{chunks.length} chunks</strong> with sliding window step of {chunkSize - chunkOverlap} characters.
                  </div>
                </div>

                {/* Visualized Chunks */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-brand-dim uppercase tracking-wider">
                    Indexed Vector Store Chunks ({chunks.length})
                  </span>
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {chunks.map((chunk, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-300 flex items-start gap-2.5"
                      >
                        <span className="px-1.5 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan text-[10px] font-bold shrink-0">
                          #{i}
                        </span>
                        <span className="leading-relaxed">{chunk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Query, Retrieval & Grounded Synthesis */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 rounded-3xl bg-[#0B1020]/90 border border-brand-cyan/40 space-y-5 shadow-2xl">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                      STEP 2: RETRIEVAL QUERY
                    </span>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={ragQuery}
                        onChange={(e) => {
                          setRagQuery(e.target.value);
                          setRagGenerated(false);
                        }}
                        placeholder="Enter a question to retrieve relevant chunks..."
                        className="w-full px-4 py-3 rounded-xl bg-[#070C1D] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-brand-cyan"
                      />
                      <button
                        type="button"
                        onClick={() => setRagGenerated(true)}
                        className="px-5 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-cyan to-brand-blue hover:shadow-glow-cyan shrink-0 transition-all"
                      >
                        Execute RAG
                      </button>
                    </div>
                  </div>

                  {/* Top Retrieved Chunks */}
                  <div className="space-y-3 pt-3 border-t border-white/[0.08]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-brand-dim uppercase tracking-wider">
                        Top Retrieved Chunks (Cosine Similarity)
                      </span>
                      <span className="text-[11px] font-mono text-brand-cyan">
                        TOP-2 CONTEXT
                      </span>
                    </div>

                    <div className="space-y-2">
                      {rankedChunks.slice(0, 2).map((item, idx) => (
                        <div
                          key={item.id}
                          className="p-3.5 rounded-xl bg-[#0E1528] border border-brand-cyan/30 text-xs font-mono space-y-1.5"
                        >
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-brand-cyan font-bold">
                              CHUNK #{item.id} [Rank {idx + 1}]
                            </span>
                            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">
                              {(item.score * 100).toFixed(1)}% Match
                            </span>
                          </div>
                          <p className="text-slate-300 leading-relaxed">
                            "{item.text}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Grounded AI Response */}
                  <div className="p-5 rounded-2xl bg-[#070C1D] border border-white/[0.08] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Grounded Synthesized Output</span>
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        STRICT CITATIONS
                      </span>
                    </div>

                    {ragGenerated ? (
                      <div className="space-y-2 text-xs leading-relaxed text-slate-200">
                        <p>
                          Based on retrieved <strong className="text-brand-cyan">Chunk #{rankedChunks[0]?.id}</strong> and <strong className="text-brand-cyan">Chunk #{rankedChunks[1]?.id}</strong>:
                        </p>
                        <div className="p-3 rounded-xl bg-white/[0.02] border-l-2 border-brand-cyan text-slate-300 italic">
                          "{rankedChunks[0]?.text}"
                        </div>
                        <p className="text-brand-muted text-[11px] pt-1 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>Hallucination risk: 0.00%. No ungrounded claims generated.</span>
                        </p>
                      </div>
                    ) : (
                      <p className="text-xs text-brand-dim italic">
                        Click "Execute RAG" above to observe the context assembly and citations.
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-brand-muted">Want this architecture built for your documents?</span>
                  <Link to="/build" className="text-brand-cyan hover:underline flex items-center gap-1">
                    <span>Design Pipeline</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SEMANTIC SEARCH */}
        {activeTab === 'semantic' && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-[#0B1020]/90 border border-brand-cyan/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                  KEYWORD VS. DENSE SEMANTIC SIMULATION
                </span>
                <p className="text-sm text-slate-200">
                  Observe why lexical keyword search misses documents when synonyms or concepts are rephrased, whereas vector embeddings preserve conceptual intent.
                </p>
              </div>
            </div>

            {/* Search Input Bar */}
            <div className="max-w-2xl mx-auto space-y-3">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-cyan" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type a concept, e.g. 'zero latency camera gesture' or 'confidential patient scans'..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#0B1020] border border-brand-cyan/40 text-white text-xs sm:text-sm font-mono focus:outline-none focus:border-brand-cyan shadow-glow-subtle"
                />
              </div>

              {/* Sample Quick Query Chips */}
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="text-brand-dim py-1">Try querying:</span>
                {[
                  'privacy and encryption policy',
                  'realtime gesture webcam',
                  'uptime SLA guarantee',
                  'radiology brain scan disclaimer'
                ].map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setSearchQuery(chip)}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-brand-muted hover:text-white border border-white/10"
                  >
                    "{chip}"
                  </button>
                ))}
              </div>
            </div>

            {/* Side-by-Side Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {searchResults.map((doc, idx) => (
                <div
                  key={doc.id}
                  className="p-6 rounded-2xl bg-[#0B1020]/90 border border-white/[0.08] space-y-4 text-left flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-brand-cyan font-bold">
                        DOCUMENT #{idx + 1}
                      </span>
                      <div className="flex items-center gap-2 text-[11px] font-mono">
                        <span className={`px-2 py-0.5 rounded ${
                          doc.semanticScore > 50 ? 'bg-brand-cyan/15 text-brand-cyan' : 'bg-white/[0.04] text-brand-dim'
                        }`}>
                          Vector: {doc.semanticScore}%
                        </span>
                        <span className={`px-2 py-0.5 rounded ${
                          doc.keywordScore > 50 ? 'bg-emerald-500/15 text-emerald-400' : 'bg-white/[0.04] text-brand-dim'
                        }`}>
                          Keyword: {doc.keywordScore}%
                        </span>
                      </div>
                    </div>

                    <h4 className="font-display font-bold text-white text-sm">
                      {doc.title}
                    </h4>

                    <p className="text-xs text-brand-muted leading-relaxed">
                      {doc.content}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-brand-dim flex items-center justify-between">
                    <span>RELEVANCE METRIC</span>
                    <span className={doc.semanticScore > 40 ? 'text-brand-cyan' : 'text-brand-dim'}>
                      {doc.semanticScore > 40 ? 'Contextual Alignment Found' : 'Low Semantic Overlap'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: TOKEN BUDGET & LATENCY ANALYZER */}
        {activeTab === 'tokens' && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-[#0B1020]/90 border border-brand-cyan/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                  PRODUCTION TOKEN ECONOMICS & COST ESTIMATOR
                </span>
                <p className="text-sm text-slate-200">
                  Model selection drastically alters operational economics. Compare Groq LPUs with frontier LLMs for monthly API budgets.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Controls (Left 6 Cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-brand-dim uppercase tracking-wider">
                    Select Foundation Model Architecture
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {(['groq', 'claude', 'gpt4o'] as const).map((mKey) => {
                      const spec = modelSpecs[mKey];
                      const isSelected = selectedModel === mKey;
                      return (
                        <button
                          key={mKey}
                          type="button"
                          onClick={() => setSelectedModel(mKey)}
                          className={`p-4 rounded-xl text-left border transition-all ${
                            isSelected
                              ? 'bg-[#0E1528] border-brand-cyan shadow-glow-subtle'
                              : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-display font-bold text-white text-sm">
                              {spec.name}
                            </span>
                            <span className="text-[10px] font-mono text-brand-cyan px-2 py-0.5 rounded bg-brand-cyan/10">
                              ~{spec.latencyMs}
                            </span>
                          </div>
                          <p className="text-xs text-brand-muted mt-1">
                            {spec.strength}
                          </p>
                          <div className="mt-2 text-[10px] font-mono text-brand-dim flex gap-3">
                            <span>Input: ${spec.inputCostPerM}/M tokens</span>
                            <span>Output: ${spec.outputCostPerM}/M tokens</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Slider Inputs */}
                <div className="p-6 rounded-2xl bg-[#0E1528] border border-white/[0.08] space-y-5">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Daily Production Requests</span>
                      <span className="text-brand-cyan font-bold">{dailyRequests.toLocaleString()} req/day</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="50000"
                      step="500"
                      value={dailyRequests}
                      onChange={(e) => setDailyRequests(Number(e.target.value))}
                      className="w-full accent-brand-cyan cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Avg Prompt Tokens (Context + System Prompt)</span>
                      <span className="text-brand-cyan font-bold">{promptTokens} tokens</span>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="4000"
                      step="100"
                      value={promptTokens}
                      onChange={(e) => setPromptTokens(Number(e.target.value))}
                      className="w-full accent-brand-cyan cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Avg Completion Tokens (AI Response)</span>
                      <span className="text-brand-cyan font-bold">{completionTokens} tokens</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="1500"
                      step="50"
                      value={completionTokens}
                      onChange={(e) => setCompletionTokens(Number(e.target.value))}
                      className="w-full accent-brand-cyan cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Economic Summary (Right 6 Cols) */}
              <div className="lg:col-span-6 p-8 rounded-3xl bg-[#0B1020]/95 border border-brand-cyan/30 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                    PROJECTED MONTHLY RUNTIME METRICS
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-brand-dim">
                    30-DAY PROJECTION
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-brand-dim uppercase tracking-wider">
                    Estimated Monthly API Cost
                  </span>
                  <div className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    ${monthlyCost} <span className="text-xs font-mono text-brand-dim">/ month</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                    <span className="text-[10px] font-mono text-brand-dim uppercase">Total Monthly Requests</span>
                    <div className="font-display text-lg font-bold text-white">
                      {monthlyRequests.toLocaleString()}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                    <span className="text-[10px] font-mono text-brand-dim uppercase">Total Tokens Processed</span>
                    <div className="font-display text-lg font-bold text-white">
                      {((monthlyInputTokens + monthlyOutputTokens)).toFixed(1)}M
                    </div>
                  </div>
                </div>

                {/* Optimization Advice */}
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-slate-300 space-y-2">
                  <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Synqvero Optimization Architecture</span>
                  </div>
                  <p className="leading-relaxed">
                    By combining semantic caching (Redis) with local quantized reranking, Synqvero architectures routinely reduce token consumption by 35%–60% for enterprise workloads.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to="/build"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple hover:shadow-glow-cyan transition-all"
                  >
                    <span>Design Cost-Optimized System</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DOCUMENT Q&A PREVIEW */}
        {activeTab === 'docqa' && (
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] space-y-8 text-left">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                FLAGSHIP SUITE • IN ACTIVE DEVELOPMENT
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-white">
                Synqvero Knowledge AI: Document Q&A
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                The full browser-embedded multi-document parser is currently being integrated with OCR and tabular spreadsheet comprehension. Meanwhile, you can test our zero-shot document Q&A engine live on Streamlit!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-[#0E1528] border border-brand-cyan/30 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-cyan uppercase">LIVE DEPLOYED PREVIEW</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                    ONLINE
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold text-white">
                  RAG Document Q&A (Streamlit)
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Upload your own PDF, TXT, or markdown document. Our LangChain and ChromaDB backend indexes chunks and executes zero-shot question answering with source page citations.
                </p>
                <div className="pt-2">
                  <a
                    href="https://rag-document-chatbot-questionandanswer.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-cyan to-brand-blue hover:shadow-glow-cyan transition-all"
                  >
                    <span>Launch Live Streamlit App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0E1528] border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-dim uppercase">COMMERCIAL UPGRADE</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-brand-dim">
                    Q3 ROADMAP
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold text-white">
                  Synqvero Knowledge AI v1.0
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Enterprise-grade hybrid search, role-based document access control (RBAC), multi-tenant vector partitioning, and automated ingestion from Google Drive, Notion, and Jira.
                </p>
                <div className="pt-2">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan hover:underline"
                  >
                    <span>Read Product Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
