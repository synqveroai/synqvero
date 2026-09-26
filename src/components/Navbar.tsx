import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Technology', href: '#technology' },
    { label: 'Projects', href: '#projects' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050816]/80 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Synqvero Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group transition-opacity hover:opacity-95"
            aria-label="Synqvero Home"
          >
            <Logo size="sm" showTagline={false} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#0B1020]/60 border border-white/[0.06] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-brand-muted hover:text-white rounded-full transition-all duration-200 hover:bg-white/[0.05]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold text-white rounded-full overflow-hidden group bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple p-[1px] transition-all duration-300 hover:shadow-glow-cyan"
            >
              <span className="w-full h-full bg-[#050816] rounded-full px-4 py-2 flex items-center gap-1.5 transition-colors group-hover:bg-transparent">
                <span>Let's build</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-brand-muted hover:text-white hover:bg-white/[0.05] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-[#050816]/90 backdrop-blur-2xl"
        />

        {/* Drawer Content */}
        <div className="relative z-10 flex flex-col justify-between h-full pt-24 pb-8 px-6">
          <div className="space-y-4">
            <div className="pb-4 border-b border-white/[0.08]">
              <span className="text-[11px] font-mono tracking-widest text-brand-cyan uppercase">
                Navigation
              </span>
            </div>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="px-4 py-3 text-lg font-medium text-brand-muted hover:text-white rounded-xl hover:bg-white/[0.05] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/[0.08] space-y-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan"
            >
              <span>Let's build together</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="text-center">
              <span className="text-xs text-brand-dim">
                Synqvero — Intelligence that works in sync.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
