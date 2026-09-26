import React from 'react';
import { companyProfile } from '../data/company';
import { Globe, ExternalLink, Mail, Phone } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-[#070C1D] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Top: Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              <span>ABOUT THE COMPANY</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Synqvero is building technology that works in sync with <span className="text-gradient-synq">the real world.</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              Synqvero is an AI and technology company focused on building intelligent software for real-world problems. We combine artificial intelligence, automation, data, and modern software engineering to create solutions that work naturally with people, products, workflows, and businesses.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 text-sm text-brand-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                <span>Product-Driven Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue" />
                <span>Empirical AI Research</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-purple" />
                <span>Zero-Noise Architecture</span>
              </div>
            </div>
          </div>

          {/* Right: Authentic Synqvero Brand Asset Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-6 sm:p-8 rounded-3xl glass-panel-glow max-w-md w-full text-center space-y-6 shadow-2xl">
              <div className="flex justify-center">
                <div className="p-3 rounded-2xl bg-[#050816] border border-white/10 shadow-glow-cyan/30">
                  <img
                    src="/assets/synqvero-logo.jpg"
                    alt="Synqvero Primary Brand Asset"
                    className="h-28 w-auto object-contain rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-display text-xl font-bold text-white">SYNQVERO</h3>
                <p className="text-xs font-mono text-brand-cyan">
                  "Your problem. Our intelligence. In sync."
                </p>
              </div>

              <p className="text-xs text-brand-muted leading-relaxed pt-2 border-t border-white/[0.06]">
                Founded with a conviction that intelligence should eliminate friction, not introduce complexity.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="pt-12 border-t border-white/[0.08]">
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] p-8 sm:p-10 text-left space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div className="space-y-1">
                <div className="text-xs font-mono text-brand-cyan tracking-wider uppercase">
                  LEADERSHIP & ENGINEERING
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {companyProfile.founder.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-brand-purple">
                  {companyProfile.founder.role}
                </p>
              </div>

              {/* Founder Social Links & Direct Contacts */}
              <div className="flex items-center gap-3">
                <a
                  href={companyProfile.founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-white transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={companyProfile.founder.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-xs font-medium text-white transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Portfolio</span>
                  <ExternalLink className="w-3 h-3 text-brand-dim" />
                </a>
              </div>
            </div>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              {companyProfile.founder.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/[0.06] text-xs font-mono text-brand-muted">
              <div>
                <span className="text-white block font-bold">Focus</span>
                <span className="text-brand-cyan">{companyProfile.founder.focus}</span>
              </div>
              <div>
                <span className="text-white block font-bold flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Personal Email</span>
                </span>
                <a href={`mailto:${companyProfile.founder.personalEmail}`} className="hover:text-brand-cyan transition-colors">
                  {companyProfile.founder.personalEmail}
                </a>
              </div>
              <div>
                <span className="text-white block font-bold flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Contact Number</span>
                </span>
                <a href={`tel:${companyProfile.founder.contactNumberRaw}`} className="hover:text-brand-cyan transition-colors">
                  {companyProfile.founder.contactNumber}
                </a>
              </div>
              <div>
                <span className="text-white block font-bold">Location</span>
                <span>{companyProfile.founder.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
