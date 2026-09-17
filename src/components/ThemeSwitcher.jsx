import React, { useState, useEffect } from 'react';
import { Palette, Check, Sparkles, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { currentTheme, setTheme, themes, currentThemeId } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show floating button when scrolled down to avoid covering 'Scroll to Begin'
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isScrolled) return null;

  return (
    <>
      {/* Floating Theme Switcher Pill in Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-50 select-none animate-fadeIn">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0a0316]/95 hover:bg-[#14062a] border text-white shadow-2xl backdrop-blur-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group font-mono text-xs"
          style={{
            borderColor: currentTheme.primary,
            boxShadow: `0 0 20px ${currentTheme.glow}`,
          }}
          aria-label="Open color theme switcher"
        >
          <span className="text-sm">{currentTheme.emoji}</span>
          <Palette className="w-3.5 h-3.5" style={{ color: currentTheme.primary }} />
          <span className="font-semibold">{currentTheme.name}</span>
        </button>

        {/* Modal / Menu */}
        {isOpen && (
          <div
            className="absolute bottom-14 right-0 w-80 p-5 rounded-3xl bg-[#090316]/98 backdrop-blur-2xl border shadow-[0_15px_50px_rgba(0,0,0,0.85)] animate-fadeIn z-50 text-left"
            style={{
              borderColor: currentTheme.primary,
              boxShadow: `0 0 40px ${currentTheme.glow}`,
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-purple-900/50 mb-3">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4" style={{ color: currentTheme.primary }} />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Cosmic Theme Engine
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
                aria-label="Close switcher"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] font-mono text-slate-400 mb-3">
              Choose your cosmic color frequency:
            </p>

            {/* List of 5 Themes */}
            <div className="space-y-2">
              {Object.values(themes).map((thm) => {
                const isActive = currentThemeId === thm.id;
                return (
                  <button
                    key={thm.id}
                    onClick={() => {
                      setTheme(thm.id);
                    }}
                    className={`w-full p-3 rounded-2xl flex items-center justify-between transition-all duration-200 text-left ${
                      isActive
                        ? 'bg-white/10 border shadow-md font-bold'
                        : 'bg-black/40 hover:bg-white/5 border border-transparent'
                    }`}
                    style={{
                      borderColor: isActive ? thm.primary : 'transparent',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{thm.emoji}</span>
                      <div>
                        <div className="text-xs text-white font-medium flex items-center gap-1.5">
                          <span>{thm.name}</span>
                        </div>
                        <div className="text-[10px] font-mono text-slate-400">
                          {thm.tagline}
                        </div>
                      </div>
                    </div>

                    {/* Palette swatch dots */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: thm.primary }} />
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: thm.secondary }} />
                      {isActive && <Check className="w-4 h-4 ml-1" style={{ color: thm.primary }} />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-purple-900/50 text-[10px] font-mono text-slate-500 text-center">
              Selected frequency persists across sessions ✨
            </div>
          </div>
        )}
      </div>
    </>
  );
}
