import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { querySynqveroKnowledge, type KnowledgeResponse } from '../services/aiKnowledge';
import { Search, ArrowRight, CornerDownLeft } from 'lucide-react';

export const AskSynqvero: React.FC = () => {
  const [query, setQuery] = useState('');
  const [activeResponse, setActiveResponse] = useState<KnowledgeResponse | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [lastQuery, setLastQuery] = useState('');
  const navigate = useNavigate();

  const exampleSuggestions = [
    'What does Synqvero build?',
    'How does your RAG system work?',
    'What AI solutions do you offer?',
    'Show me your projects.'
  ];

  const handleSearch = (textToQuery?: string) => {
    const q = (textToQuery || query).trim();
    if (!q) return;

    setIsSearching(true);
    setLastQuery(q);

    setTimeout(() => {
      const res = querySynqveroKnowledge(q);
      setActiveResponse(res);
      setIsSearching(false);
    }, 280);
  };

  return (
    <section className="relative py-20 bg-[#050816] overflow-hidden border-b border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 text-center">
        {/* Section Heading */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            <span>INTERACTIVE KNOWLEDGE SEARCH</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Ask <span className="text-gradient-synq">Synqvero.</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Explore what we're building, how we work, and the technology behind it.
          </p>
        </div>

        {/* Large Intelligent Search Box */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-cyan/30 via-brand-blue/30 to-brand-purple/30 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition-opacity" />

            <div className="relative flex items-center bg-[#070C1D] border border-white/15 focus-within:border-brand-cyan rounded-2xl shadow-2xl p-2 sm:p-2.5 transition-all">
              <div className="pl-3 sm:pl-4 pr-2 text-brand-cyan">
                <Search className="w-5 h-5 sm:w-6 h-6" />
              </div>

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSearch();
                }}
                placeholder="Ask anything about Synqvero..."
                className="w-full bg-transparent px-2 py-2 text-white placeholder-brand-muted/70 text-sm sm:text-base focus:outline-none font-sans"
              />

              <button
                onClick={() => handleSearch()}
                disabled={!query.trim() || isSearching}
                className="shrink-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-blue hover:to-brand-purple shadow-glow-cyan/40 transition-all flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span>Ask</span>
                <CornerDownLeft className="w-3.5 h-3.5 hidden sm:inline" />
              </button>
            </div>
          </div>

          {/* Suggested Clickable Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="text-[11px] font-mono text-brand-dim uppercase">Try asking:</span>
            {exampleSuggestions.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setQuery(item);
                  handleSearch(item);
                }}
                className="px-3 py-1 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-brand-cyan/40 text-xs font-mono text-slate-300 hover:text-brand-cyan transition-all"
              >
                "{item}"
              </button>
            ))}
          </div>
        </div>

        {/* Live Answer Reveal Card */}
        {activeResponse && (
          <div className="max-w-3xl mx-auto rounded-3xl bg-[#0B1020]/95 border border-brand-cyan/30 p-6 sm:p-8 text-left shadow-2xl space-y-5 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                  Synqvero Verified Knowledge
                </span>
                <span className="text-brand-dim text-xs">•</span>
                <span className="text-xs font-mono text-brand-dim">{activeResponse.category}</span>
              </div>

              <span className="text-[11px] font-mono text-brand-dim">
                Query: "{lastQuery}"
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              {activeResponse.answer}
            </p>

            {/* Action Links */}
            {activeResponse.links && activeResponse.links.length > 0 && (
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono text-brand-dim">Explore Further:</span>
                {activeResponse.links.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => navigate(link.url)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono text-white bg-white/[0.05] hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan/50 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-cyan" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
