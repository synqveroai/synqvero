import React, { useEffect } from 'react';
import type { Project } from '../types';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Layers } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const statusBadgeColor = {
    'LIVE DEMO': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    'RESEARCH': 'bg-brand-purple/10 text-brand-purple border-brand-purple/30',
    'OPEN SOURCE': 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30',
    'EXPERIMENTAL': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  }[project.status];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#050816]/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0B1020] border border-white/10 shadow-2xl p-6 sm:p-8 text-left space-y-8 custom-scrollbar">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${statusBadgeColor}`}>
                {project.status}
              </span>
              <span className="text-xs font-mono text-brand-muted">
                {project.category}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-brand-cyan font-medium">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-brand-muted hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Disclaimer alert if present */}
        {project.disclaimer && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/[0.08] border border-amber-500/20 text-amber-200 text-xs leading-relaxed">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>{project.disclaimer}</div>
          </div>
        )}

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-[#0E1528] border border-white/[0.06] space-y-2">
            <div className="text-xs font-mono text-brand-cyan tracking-wider uppercase">
              The Real-World Problem
            </div>
            <p className="text-sm text-brand-muted leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0E1528] border border-white/[0.06] space-y-2">
            <div className="text-xs font-mono text-brand-purple tracking-wider uppercase">
              The Engineering Solution
            </div>
            <p className="text-sm text-brand-muted leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Pipeline Flow */}
        <div className="p-6 rounded-2xl bg-[#050816] border border-white/[0.08] space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-brand-cyan" />
            <span className="text-xs font-mono text-white font-bold tracking-wider uppercase">
              System Architecture & Data Flow
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0B1020] border border-white/[0.05] text-xs font-mono text-brand-cyan overflow-x-auto whitespace-nowrap">
            {project.architecture.flowSummary}
          </div>

          <div className="space-y-2 pt-2">
            <div className="text-xs text-brand-dim font-mono uppercase">Key Processing Stages:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.architecture.processing.map((stage, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-brand-muted"
                >
                  <span className="text-brand-cyan font-mono font-bold">0{idx + 1}</span>
                  <span>{stage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Grid (if available) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="space-y-3">
            <div className="text-xs font-mono text-brand-dim uppercase tracking-wider">
              Verified Technical Metrics
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-4 rounded-xl bg-[#0E1528] border border-white/[0.06] text-left"
                >
                  <div className="font-display text-xl sm:text-2xl font-bold text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs text-brand-cyan font-medium mt-0.5">
                    {metric.label}
                  </div>
                  {metric.note && (
                    <div className="text-[10px] text-brand-dim mt-1">
                      {metric.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-brand-dim uppercase tracking-wider">
            Key System Capabilities
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-brand-muted">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Stack */}
        <div className="space-y-2 pt-2 border-t border-white/[0.08]">
          <div className="text-xs font-mono text-brand-dim uppercase tracking-wider">
            Technologies Applied
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-white/[0.04] text-white border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: GitHub & Live Demo */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
          <div className="flex items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan hover:shadow-glow-purple transition-all"
              >
                <span>View Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs text-white bg-[#050816] border border-white/20 hover:border-brand-cyan/40 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View GitHub</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-brand-muted hover:text-white transition-colors"
          >
            Close Window [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
