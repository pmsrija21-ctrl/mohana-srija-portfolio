import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function IntroGlobeScreen() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animId;
    const animate = () => {
      setRotation((prev) => (prev + 0.35) % 360);
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-between items-center px-4 sm:px-8 py-10 overflow-hidden select-none">
      {/* Top Header Bar from Storyboard Slide 1 */}
      <div className="w-full max-w-7xl flex items-center justify-between text-xs font-mono text-slate-400 z-20">
        <span className="text-white font-bold tracking-widest text-sm">
          Mohana Srija Puram
        </span>
        <div className="flex items-center gap-2">
          <span className="text-pink-400">Loading...</span>
          <div className="w-20 h-1 rounded-full bg-slate-900 overflow-hidden border border-pink-500/20">
            <div className="h-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 w-3/4 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Central Giant Cosmic Planet Sphere with Glowing Rings */}
      <div className="relative my-auto flex items-center justify-center w-full max-w-lg aspect-square">
        {/* Deep Atmospheric Glow Nebula */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/30 via-purple-600/40 to-rose-600/25 blur-3xl animate-pulse-glow" />

        {/* Orbit Track 1 - Outer Rose Ring */}
        <div
          className="absolute inset-2 sm:inset-4 rounded-full border border-pink-400/50 border-dashed pointer-events-none"
          style={{
            transform: `rotateX(70deg) rotateZ(${rotation}deg)`,
            boxShadow: '0 0 35px rgba(236, 72, 153, 0.45)',
          }}
        >
          <div className="absolute -top-2 left-1/4 w-3.5 h-3.5 rounded-full bg-pink-300 shadow-[0_0_15px_#ec4899]" />
          <div className="absolute -bottom-2 right-1/4 w-3 h-3 rounded-full bg-rose-400 shadow-[0_0_12px_#f43f5e]" />
        </div>

        {/* Orbit Track 2 - Reverse Royal Violet Ring */}
        <div
          className="absolute inset-10 sm:inset-14 rounded-full border border-purple-500/60 pointer-events-none"
          style={{
            transform: `rotateX(62deg) rotateY(35deg) rotateZ(${-rotation * 1.4}deg)`,
            boxShadow: '0 0 30px rgba(168, 85, 247, 0.45)',
          }}
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-purple-400 shadow-[0_0_16px_#a855f7]" />
        </div>

        {/* Orbit Track 3 - Tilted Magenta/Orchid Ring */}
        <div
          className="absolute inset-16 sm:inset-20 rounded-full border border-fuchsia-400/40 border-dotted pointer-events-none"
          style={{
            transform: `rotateY(55deg) rotateX(40deg) rotateZ(${rotation * 1.8}deg)`,
          }}
        >
          <div className="absolute -top-1.5 left-1/3 w-2.5 h-2.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_#d946ef]" />
        </div>

        {/* The Central Globe */}
        <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full p-[2px] bg-gradient-to-tr from-pink-400 via-rose-300 to-purple-600 shadow-[0_0_80px_rgba(236,72,153,0.55)] flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full rounded-full bg-[#0a0318] flex flex-col items-center justify-center overflow-hidden border border-pink-400/50">
            {/* Swirling space dust */}
            <div
              className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,#ec4899_0%,transparent_65%)]"
              style={{
                transform: `scale(${1 + Math.sin(rotation * 0.05) * 0.06})`,
              }}
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(#ec4899 1.5px, transparent 1.5px), radial-gradient(#a855f7 1.5px, transparent 1.5px)',
                backgroundSize: '28px 28px',
                backgroundPosition: `${rotation * 0.6}px ${rotation * 0.6}px`,
              }}
            />

            {/* Glowing Monogram in Center */}
            <div className="relative z-20 text-center">
              <span className="text-6xl sm:text-7xl font-black tracking-widest bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.9)]">
                MSP
              </span>
              <div className="h-[2px] w-24 mx-auto mt-2 bg-gradient-to-r from-transparent via-pink-400 to-transparent shadow-[0_0_10px_#ec4899]" />
              <p className="mt-2 text-xs font-mono tracking-widest text-pink-300 uppercase">
                Core Intelligence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar from Storyboard Slide 1 */}
      <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 z-20 pt-6 border-t border-purple-900/40 font-mono text-xs">
        <div className="text-slate-300 font-semibold tracking-wide">
          Turning Ideas<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-bold">into Real-World Solutions</span>
        </div>

        <a
          href="#home"
          className="flex items-center gap-3 px-5 py-2 rounded-full bg-[#130728]/90 border border-pink-400/50 text-pink-300 hover:text-white hover:border-pink-300 transition-all shadow-[0_0_20px_rgba(236,72,153,0.35)] group"
        >
          <span>Scroll to Begin</span>
          <div className="w-4 h-6 rounded-full border border-pink-400 flex items-start justify-center p-0.5">
            <div className="w-1 h-2 rounded-full bg-pink-400 animate-bounce" />
          </div>
        </a>
      </div>
    </div>
  );
}
