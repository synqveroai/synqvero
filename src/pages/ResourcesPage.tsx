import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { resourceCategories, companyProfile } from '../data/company';
import { GithubIcon } from '../components/GithubIcon';
import { 
  Clock, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [emailInput, setEmailInput] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const filteredCategories = activeCategoryId === 'all'
    ? resourceCategories
    : resourceCategories.filter(c => c.id === activeCategoryId);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#050816] text-left">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-cyan/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Page Header */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            <span>SYNQVERO ENGINEERING JOURNAL</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Research Notes & <span className="text-gradient-synq">Engineering Deep Dives.</span>
          </h1>

          <p className="text-base sm:text-xl text-brand-muted leading-relaxed">
            In-depth documentation, production architecture patterns, and empirical benchmarks straight from our codebase. No marketing puffery—just honest engineering observations.
          </p>
        </div>

        {/* Authenticity & Status Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1020]/90 border border-brand-cyan/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <Clock className="w-4 h-4" />
              <span>EDITORIAL ROADMAP • COMING SOON</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              We write only about what we have tested and deployed.
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Rather than publishing synthetic articles or content-farm tutorials, the Synqvero Engineering Journal documents lessons learned while building Knowledge AI and production client pipelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={companyProfile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-white bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore Active Code on GitHub</span>
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeCategoryId === 'all'
                ? 'bg-brand-cyan/20 border border-brand-cyan text-white shadow-glow-cyan/20'
                : 'bg-[#0B1020]/80 border border-white/[0.06] text-brand-muted hover:border-white/20 hover:text-white'
            }`}
          >
            All Categories
          </button>
          {resourceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategoryId === cat.id
                  ? 'bg-brand-cyan/20 border border-brand-cyan text-white shadow-glow-cyan/20'
                  : 'bg-[#0B1020]/80 border border-white/[0.06] text-brand-muted hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Upcoming Engineering Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-8 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] hover:border-brand-cyan/40 transition-all space-y-6 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                    {cat.id.toUpperCase()}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-brand-dim">
                    3 UPCOMING PAPERS
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white">
                  {cat.name}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {cat.description}
                </p>

                {/* Upcoming Topics List */}
                <div className="pt-4 border-t border-white/[0.06] space-y-3">
                  <div className="text-[11px] font-mono text-brand-dim uppercase tracking-wider">
                    Scheduled Engineering Deep Dives
                  </div>
                  {cat.upcomingTopics.map((topic, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-start gap-3"
                    >
                      <span className="text-xs font-mono text-brand-cyan font-bold mt-0.5">
                        0{i + 1}
                      </span>
                      <div className="space-y-0.5">
                        <span className="text-xs sm:text-sm text-slate-200 font-medium block">
                          {topic}
                        </span>
                        <span className="text-[10px] font-mono text-brand-dim flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>In Preparation</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-brand-dim">
                <span>AUTHOR: SRIKAR JAKKENA</span>
                <span className="text-brand-cyan">Technical Audit</span>
              </div>
            </div>
          ))}
        </div>

        {/* Suggest a Topic / Request Research Section */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0B1020] to-[#070C1D] border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
              COMMUNITY & PEER REVIEW
            </div>
            <h2 className="font-display text-3xl font-bold text-white">
              Have a specific AI architecture or benchmark you want us to dissect?
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              We frequently investigate complex production edge cases—such as long-context retrieval latency, multimodal token consumption, or custom vision fine-tuning. Let us know what technical topic you'd like us to cover.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan hover:underline"
              >
                <span>Suggest a Technical Topic or Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#050816] border border-white/[0.08] space-y-4">
            <h4 className="font-display text-lg font-bold text-white">
              Receive Engineering Publications
            </h4>
            <p className="text-xs text-brand-muted">
              Get an email notification when we publish our RAG and AI agent technical notes. Zero spam. Unsubscribe anytime.
            </p>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! We will notify you when new technical notes release.</span>
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
