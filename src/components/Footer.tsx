import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Globe, ArrowUp, Mail, Sparkles } from 'lucide-react';
import { companyProfile } from '../data/company';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productLinks = [
    { label: 'Products', path: '/products' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Build Solution', path: '/build' },
    { label: 'AI Playground', path: '/playground' },
    { label: 'Architecture', path: '/#architecture', isHash: true },
  ];

  const engineeringLinks = [
    { label: 'Projects', path: '/projects' },
    { label: 'Engineering Pulse', path: '/#engineering-pulse', isHash: true },
    { label: 'Engineering Journal', path: '/journal' },
    { label: 'Roadmap', path: '/roadmap' },
    { label: 'About Synqvero', path: '/about' },
  ];

  const handleNavClick = (_path: string, isHash?: boolean) => {
    if (isHash) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const target = document.querySelector(_path.replace('/#', '#'));
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const target = document.querySelector(_path.replace('/#', '#'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-[#03050E] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 justify-between items-start">
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" onClick={scrollToTop} className="inline-block">
              <Logo size="md" showTagline={false} />
            </Link>
            <p className="text-sm text-brand-muted max-w-sm leading-relaxed">
              Synqvero AI builds intelligent software, autonomous agents, and practical automation systems that turn information into action.
            </p>
            <div className="space-y-1 text-xs font-mono">
              <p className="text-brand-cyan">"{companyProfile.tagline}"</p>
              <p className="text-brand-dim">"{companyProfile.brandPhilosophy}"</p>
            </div>
          </div>

          {/* Column 2: Platform & Products (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono text-white uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Platform</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-brand-muted">
              {productLinks.map((link) => (
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

          {/* Column 3: Engineering & Roadmap (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
              Engineering & Labs
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-brand-muted">
              {engineeringLinks.map((link) => (
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

          {/* Column 4: Contact, Social & Legal (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
              Contact & Open Source
            </div>
            <ul className="space-y-2 text-xs text-brand-muted">
              <li>
                <a
                  href={`mailto:${companyProfile.companyEmail}`}
                  className="hover:text-brand-cyan transition-colors flex items-center gap-2 font-mono text-brand-cyan"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>{companyProfile.companyEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href={companyProfile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5 shrink-0 text-white" />
                  <span>GitHub: synqveroai</span>
                </a>
              </li>
              <li>
                <a
                  href={companyProfile.founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5 shrink-0 text-brand-dim" />
                  <span>Founder: JakkenaSrikar</span>
                </a>
              </li>
              <li>
                <a
                  href={companyProfile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors flex items-center gap-2"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 shrink-0 text-brand-blue" />
                  <span>LinkedIn (Founder Profile)</span>
                </a>
              </li>
              <li>
                <a
                  href={companyProfile.founder.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors flex items-center gap-2"
                >
                  <Globe className="w-3.5 h-3.5 shrink-0 text-brand-cyan" />
                  <span>Founder Portfolio</span>
                </a>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-4 text-xs text-brand-dim">
              <Link to="/privacy" className="hover:text-brand-cyan transition-colors">Privacy</Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-brand-cyan transition-colors">Terms</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-brand-cyan transition-colors">Contact</Link>
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
