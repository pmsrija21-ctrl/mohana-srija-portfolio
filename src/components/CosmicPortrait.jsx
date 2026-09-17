import React from 'react';
import { Sparkles, Cpu, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import profilePhoto from '../assets/mohana-srija.jpg';

export default function CosmicPortrait() {
  const { currentTheme } = useTheme();

  return (
    <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] mx-auto flex items-center justify-center select-none group">
      {/* 1. Dynamic Backlight Ambient Aurora matching active theme */}
      <div
        className="absolute inset-2 sm:inset-4 rounded-full blur-3xl opacity-60 group-hover:opacity-85 transition-opacity duration-700 animate-pulse-glow pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${currentTheme.primary}80 0%, ${currentTheme.secondary}50 50%, transparent 75%)`,
        }}
      />

      {/* 2. Orbiting Cyber Ring */}
      <div
        className="absolute inset-[-12px] sm:inset-[-18px] rounded-full border border-dashed pointer-events-none opacity-40 animate-spin"
        style={{
          borderColor: currentTheme.primary,
          animationDuration: '28s',
        }}
      />

      {/* 3. Outer Glowing Card Frame */}
      <div
        className="relative z-10 w-full h-full rounded-3xl p-2.5 sm:p-3 backdrop-blur-xl border transition-all duration-500 flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:scale-[1.01]"
        style={{
          backgroundColor: `${currentTheme.bg}cc`,
          borderColor: currentTheme.border,
          boxShadow: `0 15px 40px ${currentTheme.glow}`,
        }}
      >
        {/* Holographic Top Bar Accent */}
        <div
          className="absolute inset-x-8 top-0 h-[2px] rounded-full transition-all"
          style={{
            background: `linear-gradient(90deg, transparent, ${currentTheme.primary}, transparent)`,
          }}
        />

        {/* 4. Photo Container with Futuristic Framing */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-inner">
          <img
            src={profilePhoto}
            alt="Mohana Srija Puram"
            className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
          />

          {/* Subtle Cyber Vignette Gradient overlay at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06020e] via-transparent to-transparent opacity-60 pointer-events-none" />

          {/* Floating Holographic Badge 1: Top Status */}
          <div className="absolute top-3 left-3 z-20">
            <div
              className="px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold backdrop-blur-md border flex items-center gap-1.5 shadow-lg"
              style={{
                backgroundColor: 'rgba(6, 2, 14, 0.85)',
                borderColor: `${currentTheme.primary}70`,
                color: currentTheme.textAccent,
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for 2026/28 Roles</span>
            </div>
          </div>

          {/* Floating Holographic Badge 2: Bottom Details */}
          <div className="absolute bottom-3 inset-x-3 z-20 flex items-center justify-between gap-2">
            <div
              className="px-2.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-mono backdrop-blur-md border flex items-center gap-1.5 shadow-md"
              style={{
                backgroundColor: 'rgba(6, 2, 14, 0.85)',
                borderColor: `${currentTheme.primary}60`,
                color: '#ffffff',
              }}
            >
              <Award className="w-3.5 h-3.5" style={{ color: currentTheme.primary }} />
              <span>8.15 CGPA • Vignan Univ</span>
            </div>

            <div
              className="px-2.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-mono backdrop-blur-md border flex items-center gap-1.5 shadow-md"
              style={{
                backgroundColor: 'rgba(6, 2, 14, 0.85)',
                borderColor: `${currentTheme.secondary}60`,
                color: currentTheme.textAccent,
              }}
            >
              <Cpu className="w-3.5 h-3.5" style={{ color: currentTheme.secondary }} />
              <span>AI / Full-Stack</span>
            </div>
          </div>
        </div>

        {/* Storyboard Reflective Ground Shadow under portrait */}
        <div
          className="absolute -bottom-5 inset-x-10 h-3 rounded-full blur-md pointer-events-none transition-all"
          style={{
            background: `radial-gradient(ellipse at center, ${currentTheme.primary}60 0%, transparent 70%)`,
          }}
        />
      </div>
    </div>
  );
}
