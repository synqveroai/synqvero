import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Globe, ArrowUp, Mail } from 'lucide-react';
import { companyProfile } from '../data/company';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Products', path: '/products' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Projects', path: '/projects' },
    { label: 'Technology', path: '/#technology', isHash: true },
    { label: 'Resources', path: '/resources' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (_path: string, isHash?: boolean) => {
    if (isHash) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const target = document.querySelector('#technology');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const target = document.querySelector('#technology');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-[#03050E] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 justify-between items-start">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" onClick={scrollToTop} className="inline-block">
              <Logo size="md" showTagline={false} />
            </Link>
            <p className="text-sm text-brand-muted max-w-sm leading-relaxed">
              Synqvero AI builds intelligent software, AI agents, and practical automation systems that turn information into action.
            </p>
            <div className="space-y-1 text-xs font-mono">
              <p className="text-brand-cyan">"{companyProfile.tagline}"</p>
              <p className="text-brand-dim">"{companyProfile.brandPhilosophy}"</p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-brand-muted">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.isHash ? (
                    <button
                      onClick={() => handleNavClick(link.path, true)}
                      className="hover:text-brand-cyan transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className="hover:text-brand-cyan transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
              Contact & Social
            </div>
            <ul className="space-y-2.5 text-sm text-brand-muted">
              <li>
                <a
                  href={`mailto:${companyProfile.companyEmail}`}
                  className="hover:text-brand-cyan transition-colors flex items-center gap-2 font-mono text-xs text-brand-cyan"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>{companyProfile.companyEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href={companyProfile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors flex items-center gap-2 text-xs"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 shrink-0 text-brand-blue" />
                  <span>LinkedIn (Founder Profile)</span>
                </a>
              </li>
              <li>
                <a
                  href={companyProfile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors flex items-center gap-2 text-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5 shrink-0 text-white" />
                  <span>GitHub Organization</span>
                </a>
              </li>
              <li>
                <a
                  href={companyProfile.founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors flex items-center gap-2 text-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5 shrink-0 text-brand-dim" />
                  <span>Srikar Jakkena (Engineering)</span>
                </a>
              </li>
              <li>
                <a
                  href={companyProfile.founder.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors flex items-center gap-2 text-xs"
                >
                  <Globe className="w-3.5 h-3.5 shrink-0 text-brand-cyan" />
                  <span>Founder Portfolio</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Standards */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
              Legal & Trust
            </div>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li>
                <Link to="/privacy" className="hover:text-brand-cyan transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-brand-cyan transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <div className="pt-3 border-t border-white/[0.06] space-y-1">
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Verified Engineering</span>
              </span>
              <p className="text-[11px] text-brand-dim leading-snug">
                Built with practical AI engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-dim">
          <p>© {new Date().getFullYear()} Synqvero AI. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEMS IN SYNC</span>
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
