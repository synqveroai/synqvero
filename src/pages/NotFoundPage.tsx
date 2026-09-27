import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Boxes, Terminal, Mail, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="min-h-[85vh] pt-36 pb-24 flex items-center justify-center bg-[#050816] text-center px-4">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10 space-y-8">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan">
          <Compass className="w-4 h-4 animate-spin-slow" />
          <span>ERROR 404 • ROUTE OUT OF SYNC</span>
        </div>

        <div className="space-y-3">
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight">
            Looks like this page <br />
            <span className="text-gradient-synq">isn't in sync.</span>
          </h1>

          <p className="text-base text-brand-muted max-w-md mx-auto leading-relaxed">
            The endpoint or resource you requested does not exist or has been relocated to another layer of our intelligence stack.
          </p>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <Link
            to="/"
            className="p-4 rounded-2xl bg-[#0B1020]/90 border border-white/[0.08] hover:border-brand-cyan/40 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 text-brand-cyan flex items-center justify-center">
                <Home className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                  Return Home
                </div>
                <div className="text-[11px] font-mono text-brand-dim">
                  Main Overview
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-brand-dim group-hover:text-brand-cyan group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/products"
            className="p-4 rounded-2xl bg-[#0B1020]/90 border border-white/[0.08] hover:border-brand-cyan/40 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <Boxes className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                  Explore Products
                </div>
                <div className="text-[11px] font-mono text-brand-dim">
                  Knowledge AI
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-brand-dim group-hover:text-brand-cyan group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/projects"
            className="p-4 rounded-2xl bg-[#0B1020]/90 border border-white/[0.08] hover:border-brand-cyan/40 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-purple/10 text-brand-purple flex items-center justify-center">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                  View Projects
                </div>
                <div className="text-[11px] font-mono text-brand-dim">
                  Live Code & Demos
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-brand-dim group-hover:text-brand-cyan group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/contact"
            className="p-4 rounded-2xl bg-[#0B1020]/90 border border-white/[0.08] hover:border-brand-cyan/40 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                  Contact Us
                </div>
                <div className="text-[11px] font-mono text-brand-dim">
                  Get in Touch
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-brand-dim group-hover:text-brand-cyan group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </main>
  );
};
