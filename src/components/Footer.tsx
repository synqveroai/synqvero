import React from 'react';
import { Logo } from './Logo';
import { Globe, ArrowUp, Mail } from 'lucide-react';
import { companyProfile } from '../data/company';
import { GithubIcon } from './GithubIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Technology', href: '#technology' },
    { label: 'Projects', href: '#projects' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#03050E] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-between items-start">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <Logo size="md" showTagline={false} />
            <p className="text-sm text-brand-muted max-w-sm leading-relaxed">
              Practical intelligent software built for real-world problems. Connecting artificial intelligence directly to human workflows.
            </p>
            <div className="text-xs font-mono text-brand-cyan">
              "Your problem. Our intelligence. In sync."
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-brand-muted">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-brand-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem & Social */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
              Contact & Links
            </div>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li>
                <a
                  href={`mailto:${companyProfile.companyEmail}`}
                  className="hover:text-brand-cyan transition-colors flex items-center gap-1.5 font-mono text-xs text-brand-cyan"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{companyProfile.companyEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href={companyProfile.founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href={companyProfile.founder.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Srikar Jakkena Portfolio</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-dim">
          <p>© 2026 Synqvero. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>SYSTEMS NORMAL</span>
            </span>

            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
