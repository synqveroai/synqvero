import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, MessageSquareCode } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Products', path: '/products' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Build', path: '/build' },
    { label: 'Playground', path: '/playground' },
    { label: 'Projects', path: '/projects' },
    { label: 'Technology', path: '/#technology', isHash: true },
    { label: 'Journal', path: '/journal' },
    { label: 'About', path: '/about' },
  ];

  const handleNavClick = (_path: string, isHash?: boolean) => {
    setMobileMenuOpen(false);
    if (isHash) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const target = document.querySelector('#architecture') || document.querySelector('#technology');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const target = document.querySelector('#architecture') || document.querySelector('#technology');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050816]/90 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Synqvero AI Brand Logo */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2 group transition-opacity hover:opacity-95 shrink-0"
            aria-label="Synqvero AI Home"
          >
            <Logo size="sm" showTagline={false} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0B1020]/80 border border-white/[0.06] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = !link.isHash && location.pathname === link.path;
              if (link.isHash) {
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.path, true)}
                    className="px-3 py-1 text-xs font-medium text-brand-muted hover:text-white rounded-full transition-all duration-200 hover:bg-white/[0.05]"
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-brand-cyan bg-white/[0.08] font-semibold'
                      : 'text-brand-muted hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Ask Synqvero concierge trigger */}
            <button
              type="button"
              onClick={() => {
                const event = new CustomEvent('open-ai-concierge');
                window.dispatchEvent(event);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-brand-cyan bg-white/[0.03] hover:bg-brand-cyan/10 border border-brand-cyan/20 transition-colors"
            >
              <MessageSquareCode className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Ask Synqvero</span>
            </button>

            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center gap-2 px-4 py-1.5 text-xs font-semibold text-white rounded-full overflow-hidden group bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple p-[1px] transition-all duration-300 hover:shadow-glow-cyan"
            >
              <span className="w-full h-full bg-[#050816] rounded-full px-3.5 py-1.5 flex items-center gap-1.5 transition-colors group-hover:bg-transparent">
                <span>Work With Us</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-brand-muted hover:text-white hover:bg-white/[0.05] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-[#050816]/90 backdrop-blur-2xl"
        />

        {/* Drawer Content */}
        <div className="relative z-10 flex flex-col justify-between h-full pt-24 pb-8 px-6 overflow-y-auto">
          <div className="space-y-4">
            <div className="pb-3 border-b border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] font-mono tracking-widest text-brand-cyan uppercase">
                Synqvero AI Navigation
              </span>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const event = new CustomEvent('open-ai-concierge');
                  window.dispatchEvent(event);
                }}
                className="text-xs font-mono text-brand-cyan underline flex items-center gap-1"
              >
                <MessageSquareCode className="w-3.5 h-3.5" />
                <span>Ask AI</span>
              </button>
            </div>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                if (link.isHash) {
                  return (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.path, true)}
                      className="px-4 py-2.5 text-base font-medium text-brand-muted hover:text-white rounded-xl hover:bg-white/[0.05] transition-colors flex items-center justify-between text-left"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-40" />
                    </button>
                  );
                }
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 text-base font-medium rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-brand-cyan bg-white/[0.08] font-semibold'
                        : 'text-brand-muted hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/[0.08] space-y-4">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-center">
              <span className="text-xs text-brand-dim font-mono">
                "Intelligence that works in sync."
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
