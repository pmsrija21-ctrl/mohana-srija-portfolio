import React, { useState, useEffect } from 'react';
import { Sparkles, Cpu, Layers, GitBranch } from 'lucide-react';

export default function HolographicOrb() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative flex items-center justify-center w-full max-w-[460px] aspect-square mx-auto select-none perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateY(${coords.x}deg) rotateX(${coords.y}deg)`,
        transition: 'transform 0.2s ease-out',
      }}
      aria-hidden="true"
    >
      {/* Outer Atmospheric Glow */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-transparent blur-3xl animate-pulse-glow" />

      {/* Orbit Ring 1 (Cyan, Large) */}
      <div
        className="absolute inset-6 rounded-full border border-cyan-400/30 border-dashed animate-spin-slow pointer-events-none"
        style={{ animationDuration: '32s' }}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#00f0ff]" />
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-300/80 shadow-[0_0_8px_#00f0ff]" />
      </div>

      {/* Orbit Ring 2 (Purple, Medium, Tilted) */}
      <div
        className="absolute inset-12 rounded-full border border-purple-500/40 border-dotted pointer-events-none"
        style={{
          transform: `rotateX(65deg) rotate(${angle * -1.2}deg)`,
          transformOrigin: 'center center',
        }}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7]" />
      </div>

      {/* Orbit Ring 3 (Neon Blue, Small, Reverse Tilt) */}
      <div
        className="absolute inset-20 rounded-full border border-sky-400/30 pointer-events-none"
        style={{
          transform: `rotateY(60deg) rotate(${angle * 1.5}deg)`,
          transformOrigin: 'center center',
        }}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-sky-300 shadow-[0_0_10px_#38bdf8]" />
      </div>

      {/* Central Holographic Sphere */}
      <div className="relative z-10 w-52 h-52 sm:w-60 sm:h-60 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_50px_rgba(0,240,255,0.35)] flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-[#070b19]/90 backdrop-blur-md flex flex-col items-center justify-center p-6 border border-cyan-300/30 relative overflow-hidden">
          {/* Internal Grid Lattice */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.18)_0%,transparent_70%)]" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:16px_16px]" />

          {/* Core Monogram */}
          <div className="relative z-20 text-center">
            <span className="text-4xl sm:text-5xl font-extrabold tracking-widest cosmic-gradient-text drop-shadow-[0_0_18px_rgba(0,240,255,0.8)]">
              MSP
            </span>
            <div className="mt-1 h-[2px] w-16 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <p className="mt-2 text-[10px] sm:text-xs font-mono tracking-wider text-cyan-300/80 uppercase">
              Core Intelligence
            </p>
          </div>
        </div>
      </div>

      {/* Floating Satellite Badges */}
      <div className="absolute -top-2 left-6 z-20 px-3 py-1.5 rounded-full bg-[#0b112c]/80 backdrop-blur-md border border-cyan-400/40 text-cyan-200 text-xs font-mono shadow-[0_0_15px_rgba(0,240,255,0.25)] flex items-center gap-1.5 animate-float">
        <Cpu className="w-3.5 h-3.5 text-cyan-400" />
        <span>AI Agents</span>
      </div>

      <div className="absolute top-1/4 -right-4 z-20 px-3 py-1.5 rounded-full bg-[#120c2d]/80 backdrop-blur-md border border-purple-400/40 text-purple-200 text-xs font-mono shadow-[0_0_15px_rgba(168,85,247,0.25)] flex items-center gap-1.5 animate-float-slow">
        <Layers className="w-3.5 h-3.5 text-purple-400" />
        <span>MERN Stack</span>
      </div>

      <div className="absolute bottom-6 -left-3 z-20 px-3 py-1.5 rounded-full bg-[#081b2a]/80 backdrop-blur-md border border-sky-400/40 text-sky-200 text-xs font-mono shadow-[0_0_15px_rgba(56,189,248,0.25)] flex items-center gap-1.5 animate-float">
        <GitBranch className="w-3.5 h-3.5 text-sky-400" />
        <span>Algorithms</span>
      </div>

      <div className="absolute -bottom-3 right-6 z-20 px-3 py-1.5 rounded-full bg-[#180a2a]/80 backdrop-blur-md border border-pink-400/40 text-pink-200 text-xs font-mono shadow-[0_0_15px_rgba(236,72,153,0.25)] flex items-center gap-1.5 animate-float-slow">
        <Sparkles className="w-3.5 h-3.5 text-pink-400" />
        <span>Problem Solver</span>
      </div>
    </div>
  );
}
