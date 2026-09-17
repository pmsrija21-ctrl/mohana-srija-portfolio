import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function CosmicGlobe() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animId;
    const animate = () => {
      setRotation((prev) => (prev + 0.4) % 360);
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center select-none py-8">
      {/* Outer Deep Cosmic Atmosphere Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/25 via-purple-600/30 to-pink-500/15 blur-3xl animate-pulse-glow" />

      {/* Orbit Track 1 - Outer Cyan Ellipse */}
      <div
        className="absolute inset-4 sm:inset-6 rounded-full border border-cyan-400/40 border-dashed pointer-events-none"
        style={{
          transform: `rotateX(68deg) rotateZ(${rotation}deg)`,
          transformOrigin: 'center center',
          boxShadow: '0 0 25px rgba(0, 240, 255, 0.25)',
        }}
      >
        <div className="absolute -top-1.5 left-1/4 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_#00f0ff]" />
        <div className="absolute -bottom-1.5 right-1/4 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff]" />
      </div>

      {/* Orbit Track 2 - Reverse Purple Ellipse */}
      <div
        className="absolute inset-10 sm:inset-12 rounded-full border border-purple-500/50 border-dotted pointer-events-none"
        style={{
          transform: `rotateX(60deg) rotateY(30deg) rotateZ(${-rotation * 1.3}deg)`,
          transformOrigin: 'center center',
          boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
        }}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_14px_#a855f7]" />
      </div>

      {/* Central Holographic Globe */}
      <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-sky-300 to-purple-600 shadow-[0_0_60px_rgba(0,240,255,0.45)] flex items-center justify-center overflow-hidden">
        {/* Swirling atmosphere texture */}
        <div className="relative w-full h-full rounded-full bg-[#050917] flex flex-col items-center justify-center overflow-hidden border border-cyan-300/40">
          {/* Inner space particle grid */}
          <div
            className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,#00f0ff_0%,transparent_60%)]"
            style={{
              transform: `scale(${1 + Math.sin(rotation * 0.05) * 0.05})`,
            }}
          />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'radial-gradient(#00f0ff 1px, transparent 1px), radial-gradient(#a855f7 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              backgroundPosition: `${rotation * 0.5}px ${rotation * 0.5}px`,
            }}
          />

          {/* Glowing Monogram */}
          <div className="relative z-20 text-center">
            <div className="text-5xl sm:text-6xl font-black tracking-widest bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,240,255,0.9)] font-sans">
              MSP
            </div>
            <div className="h-[2px] w-20 mx-auto mt-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#00f0ff]" />
            <p className="mt-2 text-[10px] sm:text-xs font-mono tracking-widest text-cyan-300 uppercase">
              Global Core
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
