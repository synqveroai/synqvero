import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import type { Project } from '../types';
import { ProjectModal } from '../components/ProjectModal';
import { GithubIcon } from '../components/GithubIcon';
import { 
  ExternalLink, 
  ArrowUpRight, 
  ArrowRight
} from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Autonomous Agents', 'Computer Vision', 'RAG & Knowledge', 'Healthcare AI', 'AI Research'];

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()) || (activeCategory === 'AI Research' && p.status === 'EXPERIMENTAL'));

  const getBadgeStyle = (status: Project['status']) => {
    switch (status) {
      case 'LIVE DEMO':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'RESEARCH':
        return 'bg-brand-purple/10 text-brand-purple border-brand-purple/30';
      case 'OPEN SOURCE':
        return 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30';
      case 'EXPERIMENTAL':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default:
        return 'bg-white/10 text-white border-white/20';
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/[0.08] pb-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              <span>PRACTICAL AI ENGINEERING</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Engineering Work & <span className="text-gradient-synq">Live Systems.</span>
            </h1>

            <p className="text-base sm:text-xl text-brand-muted leading-relaxed">
              We don't showcase mockups or theoretical slide decks. Explore real software architectures, open-source repositories, and verified live machine learning deployments.
            </p>
          </div>

          {/* Trust Signal Box */}
          <div className="p-5 rounded-2xl bg-[#0B1020]/90 border border-white/[0.08] space-y-2 shrink-0">
            <div className="text-[11px] font-mono text-brand-dim uppercase tracking-wider">
              Trust & Verification Signals
            </div>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Real Public Git Repositories</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                <span>Live Interactive Streamlit & HF Spaces</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-purple" />
                <span>Empirical Benchmarks & Grad-CAM Heatmaps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-brand-cyan/20 border border-brand-cyan text-white shadow-glow-cyan/20'
                  : 'bg-[#0B1020]/80 border border-white/[0.06] text-brand-muted hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="p-8 sm:p-12 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] hover:border-brand-cyan/40 transition-all duration-300 shadow-2xl space-y-8"
            >
              {/* Project Header Bar */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-white/[0.08] pb-6">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${getBadgeStyle(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-xs font-mono text-brand-dim uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-brand-cyan">
                      CASE STUDY 0{idx + 1}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-base font-mono text-brand-cyan">
                    {project.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-brand-muted leading-relaxed pt-1">
                    {project.description}
                  </p>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-cyan to-brand-blue shadow-glow-cyan hover:shadow-glow-blue transition-all"
                    >
                      <span>Launch Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-white bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono text-brand-cyan hover:bg-brand-cyan/10 transition-colors"
                  >
                    <span>Full Spec Modal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Problem vs Approach vs Architecture */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Problem */}
                <div className="p-6 rounded-2xl bg-[#050816]/70 border border-white/[0.06] space-y-2">
                  <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider font-bold">
                    01 • Operational Problem
                  </span>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution / Approach */}
                <div className="p-6 rounded-2xl bg-[#050816]/70 border border-brand-cyan/20 space-y-2">
                  <span className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider font-bold">
                    02 • Engineering Approach
                  </span>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Architecture Summary */}
                <div className="p-6 rounded-2xl bg-[#050816]/70 border border-brand-purple/20 space-y-2 md:col-span-2 lg:col-span-1">
                  <span className="text-[11px] font-mono text-brand-purple uppercase tracking-wider font-bold">
                    03 • End-to-End Flow
                  </span>
                  <p className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed">
                    {project.architecture.flowSummary}
                  </p>
                </div>
              </div>

              {/* Processing Pipeline Steps */}
              <div className="p-6 rounded-2xl bg-[#050816]/90 border border-white/[0.06] space-y-4">
                <div className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                  Detailed Architectural Pipeline
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.architecture.processing.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="text-brand-cyan font-mono font-bold mt-0.5">
                        [0{sIdx + 1}]
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics & Features Bar */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
                {/* Metrics */}
                <div className="lg:col-span-6 flex flex-wrap gap-4">
                  {project.metrics?.map((m) => (
                    <div
                      key={m.label}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] min-w-[130px]"
                    >
                      <div className="font-mono text-base font-bold text-brand-cyan">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-mono text-brand-muted uppercase">
                        {m.label}
                      </div>
                      <div className="text-[9px] text-brand-dim mt-0.5 truncate">
                        {m.note}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="lg:col-span-6 flex flex-wrap gap-1.5 justify-start lg:justify-end">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/[0.04] text-slate-200 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Research Disclaimer if present */}
              {project.disclaimer && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300/90 leading-relaxed font-mono">
                  {project.disclaimer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B1020] to-[#070C1D] border border-white/[0.08] text-center space-y-6">
          <h2 className="font-display text-3xl font-bold text-white">
            Need similar engineering rigor in your organization?
          </h2>
          <p className="text-sm text-brand-muted max-w-xl mx-auto">
            From proof-of-concept validation to high-availability deployment, we engineer AI systems that solve real operational challenges.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan hover:shadow-glow-purple transition-all"
          >
            <span>Start an Engineering Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>

      {/* Project Spec Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
};
