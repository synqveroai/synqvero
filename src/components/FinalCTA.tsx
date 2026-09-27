import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { companyProfile } from '../data/company';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#050816] overflow-hidden border-t border-white/[0.06] text-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-brand-cyan/10 via-brand-blue/10 to-brand-purple/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
          <span>COLLABORATION & PARTNERSHIPS</span>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Let's build <span className="text-gradient-synq">something intelligent.</span>
          </h2>
          <p className="text-base sm:text-xl text-brand-muted max-w-xl mx-auto leading-relaxed">
            Have an AI idea, workflow, or problem you want to explore?
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan hover:shadow-glow-purple transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Work With Us</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={companyProfile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm text-white bg-[#0B1020] border border-white/10 hover:border-brand-cyan/40 hover:bg-white/[0.05] transition-all duration-300"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Explore GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
