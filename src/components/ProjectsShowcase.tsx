import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const ProjectsShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Status badges configuration
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

  // Abstract visualizer for each project type
  const renderAbstractVisual = (project: Project) => {
    switch (project.id) {
      case 'whatsapp-ai-copilot':
        return (
          <div className="relative w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#0B1020] to-[#0A261E] overflow-hidden">
            {/* WhatsApp Copilot Orchestration simulation */}
            <div className="relative w-full max-w-sm rounded-2xl bg-[#050816]/80 border border-emerald-500/30 p-4 space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono border-b border-white/[0.06] pb-2">
                <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  WHATSAPP AUTONOMOUS COPILOT
                </span>
                <span className="text-brand-dim font-mono">GROQ LLAMA 3.3 • GEMINI</span>
              </div>
              
              <div className="space-y-2 text-[11px]">
                <div className="flex items-start gap-2">
                  <span className="text-brand-dim font-mono text-[9px] mt-0.5">IN:</span>
                  <div className="px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white">
                    🎙️ Voice Note (Whisper v3 STT &lt;1s)
                  </div>
                </div>

                <div className="flex items-center gap-1.5 pl-6 text-[9px] font-mono text-emerald-400">
                  <span>⚡ Debounced Queue Buffer</span>
                  <span>➔</span>
                  <span>Humanized Typing Delay (3-15s)</span>
                </div>

                <div className="flex items-start justify-end gap-2">
                  <div className="px-2.5 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-200">
                    Autonomous Contextual Reply
                  </div>
                  <span className="text-brand-dim font-mono text-[9px] mt-0.5">OUT:</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'signbridge-ai':
        return (
          <div className="relative w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#0B1020] to-[#0E1B38] overflow-hidden">
            {/* Gesture Landmark Simulation */}
            <div className="relative w-44 h-44 rounded-full border border-brand-cyan/20 flex items-center justify-center">
              <div className="absolute inset-4 rounded-full border border-brand-blue/30 border-dashed animate-spin-slow" />
              {/* Hand landmark nodes */}
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-glow-cyan animate-pulse"
                  style={{
                    top: `${25 + 50 * Math.sin((i * Math.PI) / 4.5)}%`,
                    left: `${25 + 50 * Math.cos((i * Math.PI) / 4.5)}%`,
                    animationDelay: `${i * 180}ms`,
                  }}
                />
              ))}
              <div className="text-center z-10 space-y-1">
                <span className="text-[10px] font-mono text-brand-cyan block">LATENCY &lt;50ms</span>
                <span className="text-xs font-bold text-white block">99% ACCURACY</span>
                <span className="text-[9px] font-mono text-brand-muted block">ASL / ISL MODEL</span>
              </div>
            </div>
          </div>
        );

      case 'rag-document-qa':
        return (
          <div className="relative w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#0B1020] to-[#0A1F30] overflow-hidden">
            {/* Vector Embedding Mesh Simulation */}
            <div className="relative w-full h-36 flex flex-col justify-between">
              <div className="flex justify-between items-center text-[10px] font-mono text-brand-cyan">
                <span>CHROMADB VECTOR INDEX</span>
                <span>TOP-K RETRIEVAL</span>
              </div>
              <div className="grid grid-cols-4 gap-2 my-auto">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[9px] font-mono text-brand-muted hover:border-brand-cyan/40 transition-colors"
                  >
                    dim_{i * 128}
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>GROUNDED FACTUAL ATTRIBUTION</span>
              </div>
            </div>
          </div>
        );

      case 'brain-tumor-ai':
        return (
          <div className="relative w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#0B1020] to-[#1E113A] overflow-hidden">
            {/* MRI Grad-CAM Simulation */}
            <div className="relative w-44 h-44 rounded-2xl border border-brand-purple/30 bg-[#050816]/70 flex items-center justify-center p-4">
              <div className="absolute inset-2 rounded-xl bg-gradient-to-tr from-brand-purple/20 via-transparent to-brand-cyan/20 animate-pulse" />
              {/* Concentric scan rings */}
              <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-brand-purple/40 to-brand-cyan/30 blur-sm animate-ping" />
              </div>
              <div className="absolute bottom-2 inset-x-2 flex justify-between text-[9px] font-mono text-brand-purple px-1">
                <span>GRAD-CAM</span>
                <span>U-NET MASK</span>
              </div>
            </div>
          </div>
        );

      case 'generative-ai-lab':
        return (
          <div className="relative w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#0B1020] to-[#1C1632] overflow-hidden">
            {/* Agentic Loop Node Simulation */}
            <div className="relative w-full flex items-center justify-around">
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                <span className="text-[9px] font-mono text-brand-muted block">INPUT</span>
                <span className="text-xs font-bold text-white">PROMPT</span>
              </div>
              <div className="text-brand-cyan font-mono text-xs animate-pulse">➔</div>
              <div className="p-2.5 rounded-xl bg-brand-purple/20 border border-brand-purple/40 text-center shadow-glow-purple">
                <span className="text-[9px] font-mono text-brand-purple block">AGENT</span>
                <span className="text-xs font-bold text-white">ReAct LOOP</span>
              </div>
              <div className="text-brand-purple font-mono text-xs animate-pulse">➔</div>
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                <span className="text-[9px] font-mono text-brand-muted block">ACTION</span>
                <span className="text-xs font-bold text-white">TOOL / SQL</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-28 bg-[#050816] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-10">
          <div className="max-w-2xl text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              <span>PROVEN ENGINEERING</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              From ideas to <span className="text-gradient-synq">intelligent products.</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              Explore systems we've designed, engineered, and deployed. Built for genuine utility beyond the demo.
            </p>
          </div>

          <div className="text-xs font-mono text-brand-muted flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>REAL ARCHITECTURES • REAL REPOSITORIES</span>
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {projectsData.map((project, index) => {
            // First item spans full 12 cols or 6 cols for balanced visual hierarchy
            const colSpan = index === 0 ? 'lg:col-span-12' : 'lg:col-span-6';

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`${colSpan} group relative rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] hover:border-brand-cyan/40 transition-all duration-300 flex flex-col ${
                  index === 0 ? 'lg:flex-row' : ''
                } justify-between overflow-hidden shadow-xl cursor-pointer hover:shadow-glow-subtle`}
              >
                {/* Visual Simulation Display Area */}
                <div className={`w-full ${index === 0 ? 'lg:w-1/2 h-56 lg:h-auto' : 'h-48 sm:h-56'} border-b ${index === 0 ? 'lg:border-b-0 lg:border-r' : ''} border-white/[0.06] overflow-hidden`}>
                  {renderAbstractVisual(project)}
                </div>

                {/* Project Details */}
                <div className={`p-7 space-y-6 flex-1 flex flex-col justify-between text-left ${index === 0 ? 'lg:w-1/2' : ''}`}>
                  <div className="space-y-3">
                    {/* Status Pill & Category */}
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${getBadgeStyle(project.status)}`}>
                        {project.status}
                      </span>
                      <span className="text-[11px] font-mono text-brand-dim uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-5 h-5 text-brand-dim group-hover:text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </h3>
                      <p className="text-xs font-mono text-brand-cyan mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-brand-muted leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Metric highlight if present */}
                    {project.metrics && project.metrics[0] && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs">
                        <span className="font-mono text-brand-cyan font-bold">
                          {project.metrics[0].value}
                        </span>
                        <span className="text-brand-muted text-[11px]">
                          {project.metrics[0].label}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Footer: Technologies & Quick Links */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-brand-muted border border-white/[0.05]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-brand-dim">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Buttons: GitHub & Demo */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        {project.liveDemoUrl && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-brand-muted hover:text-white bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                        >
                          <GithubIcon className="w-3 h-3" />
                          <span>GitHub</span>
                        </a>
                      </div>

                      <span className="text-xs font-mono text-brand-cyan group-hover:underline">
                        Details & Architecture →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
