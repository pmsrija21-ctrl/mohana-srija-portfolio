import profilePhoto from '../assets/mohana-srija.jpg';
import React, { useState, useEffect } from 'react';
import { ChevronDown, Palette, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function IntroGlobeScreen() {
  const [rotation, setRotation] = useState(0);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { currentTheme, setTheme, themes, currentThemeId } = useTheme();

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
    <div className="relative min-h-screen flex flex-col justify-between items-center px-4 sm:px-8 lg:px-12 py-8 sm:py-10 overflow-hidden select-none">
      {/* Top Header Bar from Storyboard Slide 1 */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between text-xs font-mono text-slate-400 z-20">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full p-[1.5px] shrink-0"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
              boxShadow: `0 0 12px ${currentTheme.glow}`,
            }}
          >
            <img
              src={profilePhoto}
              alt="Mohana Srija Puram"
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
          <span className="text-white font-bold tracking-widest text-sm sm:text-base">
            Mohana Srija Puram
          </span>
        </div>

        {/* Right side of Top Bar: Theme Switcher & Loading Pulse */}
        <div className="flex items-center gap-4">
          {/* Quick Palette Picker */}
          <div className="relative">
            <button
              onClick={() => setPaletteOpen(!paletteOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#110526]/80 border text-[11px] font-mono text-white hover:bg-white/10 transition-all"
              style={{ borderColor: currentTheme.primary }}
              aria-label="Theme options"
            >
              <Palette className="w-3 h-3" style={{ color: currentTheme.primary }} />
              <span className="hidden sm:inline">{currentTheme.emoji} {currentTheme.name.split(' ')[0]}</span>
            </button>

            {paletteOpen && (
              <div
                className="absolute right-0 mt-2 w-60 p-2.5 rounded-2xl bg-[#090316]/98 backdrop-blur-2xl border shadow-2xl z-50 animate-fadeIn"
                style={{ borderColor: currentTheme.primary }}
              >
                <div className="text-[10px] font-mono text-slate-400 mb-1.5 px-2">
                  Theme Palette:
                </div>
                {Object.values(themes).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      setPaletteOpen(false);
                    }}
                    className={`w-full p-2 rounded-xl flex items-center justify-between text-xs font-mono transition-all ${
                      currentThemeId === t.id ? 'bg-white/10 font-bold' : 'hover:bg-white/5'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{t.emoji}</span>
                      <span className="text-white text-[11px]">{t.name}</span>
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: t.primary }} />
                      {currentThemeId === t.id && <Check className="w-3 h-3 text-white" />}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span style={{ color: currentTheme.primary }} className="font-semibold">Loading...</span>
            <div className="w-16 sm:w-20 h-1.5 rounded-full bg-slate-900 overflow-hidden border border-white/10">
              <div
                className="h-full w-3/4 animate-pulse"
                style={{
                  background: `linear-gradient(90deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Central Giant Cosmic Planet Sphere with Glowing Rings matching Slide 1 */}
      <div className="relative my-auto flex items-center justify-center w-full max-w-lg aspect-square py-4">
        {/* Deep Atmospheric Glow Nebula */}
        <div
          className="absolute inset-0 rounded-full blur-3xl animate-pulse-glow"
          style={{
            background: `radial-gradient(circle, ${currentTheme.primary}40 0%, ${currentTheme.secondary}30 50%, transparent 75%)`,
          }}
        />

        {/* Orbit Track 1 - Outer Primary Ring */}
        <div
          className="absolute inset-2 sm:inset-4 rounded-full border border-dashed pointer-events-none"
          style={{
            borderColor: `${currentTheme.primary}70`,
            transform: `rotateX(70deg) rotateZ(${rotation}deg)`,
            boxShadow: `0 0 35px ${currentTheme.glow}`,
          }}
        >
          <div
            className="absolute -top-2 left-1/4 w-3.5 h-3.5 rounded-full"
            style={{ backgroundColor: currentTheme.primary, boxShadow: `0 0 15px ${currentTheme.primary}` }}
          />
          <div
            className="absolute -bottom-2 right-1/4 w-3 h-3 rounded-full"
            style={{ backgroundColor: currentTheme.secondary, boxShadow: `0 0 12px ${currentTheme.secondary}` }}
          />
        </div>

        {/* Orbit Track 2 - Reverse Secondary Ring */}
        <div
          className="absolute inset-10 sm:inset-14 rounded-full border pointer-events-none"
          style={{
            borderColor: `${currentTheme.secondary}80`,
            transform: `rotateX(62deg) rotateY(35deg) rotateZ(${-rotation * 1.4}deg)`,
            boxShadow: `0 0 30px ${currentTheme.secondary}60`,
          }}
        >
          <div
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full"
            style={{ backgroundColor: currentTheme.secondary, boxShadow: `0 0 16px ${currentTheme.secondary}` }}
          />
        </div>

        {/* Orbit Track 3 - Tilted Tertiary Ring */}
        <div
          className="absolute inset-16 sm:inset-20 rounded-full border border-dotted pointer-events-none"
          style={{
            borderColor: `${currentTheme.tertiary}60`,
            transform: `rotateY(55deg) rotateX(40deg) rotateZ(${rotation * 1.8}deg)`,
          }}
        >
          <div
            className="absolute -top-1.5 left-1/3 w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: currentTheme.tertiary, boxShadow: `0 0 10px ${currentTheme.tertiary}` }}
          />
        </div>

        {/* The Central Globe */}
        <div
          className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full p-[2px] flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
            boxShadow: `0 0 80px ${currentTheme.glow}`,
          }}
        >
          <div className="relative w-full h-full rounded-full bg-[#0a0318] flex flex-col items-center justify-center overflow-hidden border border-white/20">
            {/* Swirling space dust */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `radial-gradient(circle at center, ${currentTheme.primary} 0%, transparent 65%)`,
                transform: `scale(${1 + Math.sin(rotation * 0.05) * 0.06})`,
              }}
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(${currentTheme.primary} 1.5px, transparent 1.5px), radial-gradient(${currentTheme.secondary} 1.5px, transparent 1.5px)`,
                backgroundSize: '28px 28px',
                backgroundPosition: `${rotation * 0.6}px ${rotation * 0.6}px`,
              }}
            />

            {/* Glowing Monogram in Center */}
            <div className="relative z-20 text-center">
              <span
                className="text-6xl sm:text-7xl font-black tracking-widest bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, #ffffff 0%, ${currentTheme.primary} 60%, ${currentTheme.secondary} 100%)`,
                  filter: `drop-shadow(0 0 25px ${currentTheme.primary})`,
                }}
              >
                MSP
              </span>
              <div
                className="h-[2px] w-24 mx-auto mt-2"
                style={{
                  background: `linear-gradient(90deg, transparent, ${currentTheme.primary}, transparent)`,
                  boxShadow: `0 0 10px ${currentTheme.primary}`,
                }}
              />
              <p
                className="mt-2 text-xs font-mono tracking-widest uppercase font-bold"
                style={{ color: currentTheme.textAccent }}
              >
                Core Intelligence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar from Storyboard Slide 1 */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 z-20 pt-6 border-t border-white/10 font-mono text-xs">
        <div className="text-slate-300 font-semibold tracking-wide text-left sm:text-left w-full sm:w-auto">
          Turning Ideas<br />
          <span
            className="font-bold text-sm"
            style={{ color: currentTheme.primary }}
          >
            into Real-World Solutions
          </span>
        </div>

        <a
          href="#home"
          className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#130728]/90 border text-white transition-all transform hover:scale-105 group font-mono text-xs"
          style={{
            borderColor: currentTheme.primary,
            boxShadow: `0 0 20px ${currentTheme.glow}`,
          }}
        >
          <span>Scroll to Begin</span>
          <div
            className="w-4 h-6 rounded-full border flex items-start justify-center p-0.5"
            style={{ borderColor: currentTheme.primary }}
          >
            <div
              className="w-1 h-2 rounded-full animate-bounce"
              style={{ backgroundColor: currentTheme.primary }}
            />
          </div>
        </a>
      </div>
    </div>
  );
}
