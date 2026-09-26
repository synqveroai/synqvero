import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  t: number; // progress along the path (0 to 1)
  speed: number;
  size: number;
  color: string;
  glow: string;
  pathId: 0 | 1; // 0: Problem loop, 1: Intelligence loop
}

export const InteractiveSync: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [syncMetric, setSyncMetric] = useState(99.4);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovering: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Particle system initializing along dual infinity loops
    const particles: Particle[] = [];
    const particleCount = 48;
    const colors = [
      { fill: '#18C8EF', glow: 'rgba(24, 200, 239, 0.8)' }, // Cyan
      { fill: '#3268F2', glow: 'rgba(50, 104, 242, 0.8)' }, // Blue
      { fill: '#7544ED', glow: 'rgba(117, 68, 237, 0.8)' }, // Purple
    ];

    for (let i = 0; i < particleCount; i++) {
      const col = colors[i % colors.length];
      particles.push({
        t: Math.random(),
        speed: 0.0018 + Math.random() * 0.0022,
        size: 2.2 + Math.random() * 2,
        color: col.fill,
        glow: col.glow,
        pathId: i % 2 === 0 ? 0 : 1,
      });
    }

    // Mathematical Lemniscate / Dual Synchronization curve coordinates
    const getPointOnSyncLoop = (
      t: number,
      w: number,
      h: number,
      tiltX: number,
      tiltY: number
    ) => {
      const cx = w * 0.5 + tiltX * 18;
      const cy = h * 0.5 + tiltY * 14;
      const scaleX = Math.min(w * 0.38, 200);
      const scaleY = Math.min(h * 0.28, 120);

      // Gerono / Bernoulli lemniscate parametric equations
      const angle = t * Math.PI * 2;
      const sinA = Math.sin(angle);
      const cosA = Math.cos(angle);

      // Infinity shape with subtle dynamic breathing
      const x = cx + (scaleX * cosA) / (1 + sinA * sinA);
      const y = cy + (scaleY * sinA * cosA) / (1 + sinA * sinA);

      return { x, y, angle };
    };

    const render = () => {
      time += 0.016;

      // Mouse smoothing
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const tiltX = mouseRef.current.x;
      const tiltY = mouseRef.current.y;

      const cx = width * 0.5 + tiltX * 18;
      const cy = height * 0.5 + tiltY * 14;

      // Draw background ambient glow
      const radialGlow = ctx.createRadialGradient(cx, cy, 10, cx, cy, width * 0.45);
      radialGlow.addColorStop(0, 'rgba(50, 104, 242, 0.12)');
      radialGlow.addColorStop(0.5, 'rgba(117, 68, 237, 0.06)');
      radialGlow.addColorStop(1, 'rgba(5, 8, 22, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw flowing synchronization track (Dual Lemniscate)
      const segments = 120;
      ctx.lineWidth = 2.5;

      for (let i = 0; i < segments; i++) {
        const t1 = i / segments;
        const t2 = (i + 1) / segments;
        const p1 = getPointOnSyncLoop(t1, width, height, tiltX, tiltY);
        const p2 = getPointOnSyncLoop(t2, width, height, tiltX, tiltY);

        const segmentGrad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        const phase = (t1 + time * 0.05) % 1;
        if (phase < 0.33) {
          segmentGrad.addColorStop(0, 'rgba(24, 200, 239, 0.4)');
          segmentGrad.addColorStop(1, 'rgba(50, 104, 242, 0.4)');
        } else if (phase < 0.66) {
          segmentGrad.addColorStop(0, 'rgba(50, 104, 242, 0.4)');
          segmentGrad.addColorStop(1, 'rgba(117, 68, 237, 0.4)');
        } else {
          segmentGrad.addColorStop(0, 'rgba(117, 68, 237, 0.4)');
          segmentGrad.addColorStop(1, 'rgba(24, 200, 239, 0.4)');
        }

        ctx.beginPath();
        ctx.strokeStyle = segmentGrad;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }

      // Outer faint aura path
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      for (let i = 0; i <= segments; i++) {
        const pt = getPointOnSyncLoop(i / segments, width, height, tiltX, tiltY);
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.stroke();

      // Render flowing particles
      particles.forEach((p) => {
        p.t = (p.t + p.speed) % 1;
        const pt = getPointOnSyncLoop(p.t, width, height, tiltX, tiltY);

        ctx.save();
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.glow;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      });

      // Central Synchronization Nexus (Crossing point)
      const nexusRadius = 6 + Math.sin(time * 3) * 2;
      const nexusGrad = ctx.createRadialGradient(cx, cy, 1, cx, cy, 20);
      nexusGrad.addColorStop(0, '#FFFFFF');
      nexusGrad.addColorStop(0.3, '#18C8EF');
      nexusGrad.addColorStop(0.7, '#7544ED');
      nexusGrad.addColorStop(1, 'transparent');

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, nexusRadius, 0, Math.PI * 2);
      ctx.fillStyle = nexusGrad;
      ctx.shadowColor = '#18C8EF';
      ctx.shadowBlur = 16;
      ctx.fill();
      ctx.restore();

      // Left Node: Problem
      const leftNode = getPointOnSyncLoop(0.25, width, height, tiltX, tiltY);
      ctx.save();
      ctx.beginPath();
      ctx.arc(leftNode.x, leftNode.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#18C8EF';
      ctx.shadowColor = '#18C8EF';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();

      // Right Node: Intelligence
      const rightNode = getPointOnSyncLoop(0.75, width, height, tiltX, tiltY);
      ctx.save();
      ctx.beginPath();
      ctx.arc(rightNode.x, rightNode.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#7544ED';
      ctx.shadowColor = '#7544ED';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Occasional subtle micro-fluctuation in sync metric to show live computation
    const interval = setInterval(() => {
      setSyncMetric((prev) => {
        const delta = (Math.random() - 0.5) * 0.2;
        return Number(Math.min(99.9, Math.max(99.1, prev + delta)).toFixed(1));
      });
    }, 2400);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseRef.current.targetX = x;
    mouseRef.current.targetY = y;
  };

  const handleMouseLeave = () => {
    mouseRef.current.targetX = 0;
    mouseRef.current.targetY = 0;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[500px] rounded-3xl glass-panel overflow-hidden border border-white/10 group select-none shadow-2xl"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none" />

      {/* HTML5 Canvas render */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Ambient Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Top telemetry HUD */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono tracking-wider pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050816]/70 backdrop-blur-md border border-brand-cyan/20 text-brand-cyan">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
          <span>PROBLEM ↔ INTELLIGENCE</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050816]/70 backdrop-blur-md border border-white/10 text-brand-muted">
          <span className="text-white font-medium">{syncMetric}%</span>
          <span className="text-brand-dim">SYNC METRIC</span>
        </div>
      </div>

      {/* Floating Interactive Labels */}
      <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
        {/* Left: Problem Label */}
        <div className="pointer-events-auto transform -translate-y-2 transition-transform duration-300 hover:scale-105">
          <div className="px-3.5 py-2 rounded-xl bg-[#0B1020]/90 backdrop-blur-md border border-brand-cyan/30 shadow-glow-cyan text-left">
            <span className="text-[10px] font-mono tracking-widest text-brand-cyan block">INPUT FLOW</span>
            <span className="text-xs font-semibold text-white tracking-wide">PROBLEM</span>
            <span className="text-[10px] text-brand-muted block">Workflows & Data</span>
          </div>
        </div>

        {/* Right: Intelligence Label */}
        <div className="pointer-events-auto transform translate-y-2 transition-transform duration-300 hover:scale-105">
          <div className="px-3.5 py-2 rounded-xl bg-[#0B1020]/90 backdrop-blur-md border border-brand-purple/30 shadow-glow-purple text-right">
            <span className="text-[10px] font-mono tracking-widest text-brand-purple block">ACTIVE REASONING</span>
            <span className="text-xs font-semibold text-white tracking-wide">INTELLIGENCE</span>
            <span className="text-[10px] text-brand-muted block">Agents & Models</span>
          </div>
        </div>
      </div>

      {/* Bottom Status bar */}
      <div className="absolute bottom-4 inset-x-4 flex items-center justify-between px-4 py-2 rounded-xl bg-[#050816]/80 backdrop-blur-md border border-white/5 text-[11px] font-mono text-brand-muted">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-brand-text">STATE: CONTINUOUS CONVERGENCE</span>
        </div>
        <span className="hidden sm:inline text-brand-dim">SYNQVERO DUAL-LOOP ARCHITECTURE</span>
      </div>
    </div>
  );
};
