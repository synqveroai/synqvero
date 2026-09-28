import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showTagline?: boolean;
  variant?: 'full' | 'mark-only' | 'image-asset';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
  variant = 'full',
}) => {
  // Height configurations
  const heightClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
    hero: 'h-20',
  };

  if (variant === 'image-asset') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <div className="relative group overflow-hidden rounded-xl border border-white/10 bg-[#0B1020]/90 p-1.5 shadow-glow-subtle transition-all duration-300 hover:border-brand-cyan/40">
          <img
            src="/assets/synqvero-logo.jpg"
            alt="Synqvero Logo"
            className={`${heightClasses[size]} w-auto object-contain rounded-lg`}
          />
        </div>
        {showTagline && (
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-white text-lg">
              Syn<span className="text-brand-blue">q</span>vero
            </span>
            <span className="text-[11px] font-medium text-brand-muted tracking-wide">
              Intelligence that works in sync.
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* SVG Synchronization Glyph matching exact brand emblem */}
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 100 68"
          className={`${heightClasses[size]} w-auto drop-shadow-[0_0_12px_rgba(24,200,239,0.35)] transition-transform duration-300 group-hover:scale-105`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="synqLoopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#18C8EF" />
              <stop offset="50%" stopColor="#3268F2" />
              <stop offset="100%" stopColor="#7544ED" />
            </linearGradient>
            <linearGradient id="accentPetal1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#18C8EF" />
              <stop offset="100%" stopColor="#3268F2" />
            </linearGradient>
            <linearGradient id="accentPetal2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3268F2" />
              <stop offset="100%" stopColor="#7544ED" />
            </linearGradient>
          </defs>

          {/* Left loop (Problem) */}
          <path
            d="M 34 20 C 22 20 12 26 12 34 C 12 42 22 48 34 48 C 42 48 50 43 55 37 L 46 29 C 43 33 39 36 34 36 C 29 36 24 35 24 34 C 24 33 29 32 34 32 L 48 20 Z"
            fill="url(#synqLoopGrad)"
          />
          {/* Right loop (Intelligence) */}
          <path
            d="M 66 48 C 78 48 88 42 88 34 C 88 26 78 20 66 20 C 58 20 50 25 45 31 L 54 39 C 57 35 61 32 66 32 C 71 32 76 33 76 34 C 76 35 71 36 66 36 L 52 48 Z"
            fill="url(#synqLoopGrad)"
          />
          {/* Subtle synchronization node in center */}
          <circle cx="50" cy="34" r="2.5" fill="#18C8EF" className="animate-pulse" />
        </svg>
      </div>

      {variant !== 'mark-only' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-bold tracking-tight text-white text-xl sm:text-2xl leading-none">
              Syn<span className="text-brand-blue">q</span>vero
            </span>
            {/* Signature dual-petal brand mark */}
            <div className="flex -space-x-1 items-center mb-2">
              <span className="inline-block w-2.5 h-2.5 rounded-tr-full rounded-bl-full bg-gradient-to-tr from-brand-cyan to-brand-blue opacity-90 transform rotate-12"></span>
              <span className="inline-block w-2 h-2 rounded-tl-full rounded-br-full bg-gradient-to-tr from-brand-blue to-brand-purple opacity-90"></span>
            </div>
          </div>
          {showTagline && (
            <span className="text-[11px] font-medium tracking-wider text-brand-muted mt-0.5">
              Intelligence that works in sync.
            </span>
          )}
        </div>
      )}
    </div>
  );
};
