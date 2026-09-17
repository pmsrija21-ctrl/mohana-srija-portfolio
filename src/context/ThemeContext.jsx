import React, { createContext, useContext, useState, useEffect } from 'react';

export const themes = {
  violetRose: {
    id: 'violetRose',
    name: 'Royal Violet & Rose',
    emoji: '💜',
    tagline: 'Deep Cosmic Nebula',
    primary: '#ec4899',
    secondary: '#a855f7',
    tertiary: '#f43f5e',
    bg: '#06020e',
    cardBg: '#110526',
    border: 'rgba(236, 72, 153, 0.35)',
    glow: 'rgba(236, 72, 153, 0.5)',
    textAccent: '#f472b6',
    btnGradient: 'from-pink-600 via-rose-600 to-purple-600',
    btnHover: 'hover:from-pink-500 hover:to-purple-500',
    stars: ['#ec4899', '#a855f7', '#f43f5e', '#c084fc', '#ffffff', '#fb7185'],
    neb1: 'rgba(236, 72, 153, 0.15)',
    neb2: 'rgba(168, 85, 247, 0.18)',
    badgeBg: 'bg-pink-500/15 border-pink-400/40 text-pink-300',
    dotColor: 'bg-pink-400',
  },
  emeraldMint: {
    id: 'emeraldMint',
    name: 'Cyberpunk Emerald',
    emoji: '💚',
    tagline: 'Hyper-Modern Matrix',
    primary: '#10b981',
    secondary: '#06b6d4',
    tertiary: '#eab308',
    bg: '#020d09',
    cardBg: '#051b14',
    border: 'rgba(16, 185, 129, 0.35)',
    glow: 'rgba(16, 185, 129, 0.5)',
    textAccent: '#34d399',
    btnGradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    btnHover: 'hover:from-emerald-500 hover:to-teal-500',
    stars: ['#10b981', '#34d399', '#06b6d4', '#eab308', '#ffffff', '#6ee7b7'],
    neb1: 'rgba(16, 185, 129, 0.15)',
    neb2: 'rgba(6, 182, 212, 0.18)',
    badgeBg: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300',
    dotColor: 'bg-emerald-400',
  },
  solarFlare: {
    id: 'solarFlare',
    name: 'Solar Flare Amber',
    emoji: '🌅',
    tagline: 'Radiant Stellar Heat',
    primary: '#f59e0b',
    secondary: '#f43f5e',
    tertiary: '#fbbf24',
    bg: '#0e0502',
    cardBg: '#1c0c05',
    border: 'rgba(245, 158, 11, 0.35)',
    glow: 'rgba(245, 158, 11, 0.5)',
    textAccent: '#fbbf24',
    btnGradient: 'from-amber-600 via-orange-600 to-rose-600',
    btnHover: 'hover:from-amber-500 hover:to-orange-500',
    stars: ['#f59e0b', '#fb923c', '#f43f5e', '#fbbf24', '#ffffff', '#fdba74'],
    neb1: 'rgba(245, 158, 11, 0.15)',
    neb2: 'rgba(244, 63, 94, 0.18)',
    badgeBg: 'bg-amber-500/15 border-amber-400/40 text-amber-300',
    dotColor: 'bg-amber-400',
  },
  electricCyan: {
    id: 'electricCyan',
    name: 'Electric Cyan & Sapphire',
    emoji: '💎',
    tagline: 'Futuristic Deep Space',
    primary: '#00f0ff',
    secondary: '#38bdf8',
    tertiary: '#a855f7',
    bg: '#030714',
    cardBg: '#080e28',
    border: 'rgba(0, 240, 255, 0.35)',
    glow: 'rgba(0, 240, 255, 0.5)',
    textAccent: '#38bdf8',
    btnGradient: 'from-cyan-600 via-sky-600 to-indigo-600',
    btnHover: 'hover:from-cyan-500 hover:to-sky-500',
    stars: ['#00f0ff', '#38bdf8', '#818cf8', '#a855f7', '#ffffff'],
    neb1: 'rgba(0, 240, 255, 0.14)',
    neb2: 'rgba(56, 189, 248, 0.18)',
    badgeBg: 'bg-cyan-500/15 border-cyan-400/40 text-cyan-300',
    dotColor: 'bg-cyan-400',
  },
  cyberSilver: {
    id: 'cyberSilver',
    name: 'Titanium Cyber-Silver',
    emoji: '⚡',
    tagline: 'Minimalist Dark Titanium',
    primary: '#e2e8f0',
    secondary: '#94a3b8',
    tertiary: '#38bdf8',
    bg: '#08090c',
    cardBg: '#12141c',
    border: 'rgba(226, 232, 240, 0.35)',
    glow: 'rgba(226, 232, 240, 0.45)',
    textAccent: '#cbd5e1',
    btnGradient: 'from-slate-700 via-slate-600 to-slate-800',
    btnHover: 'hover:from-slate-600 hover:to-slate-700',
    stars: ['#ffffff', '#e2e8f0', '#94a3b8', '#38bdf8', '#cbd5e1'],
    neb1: 'rgba(226, 232, 240, 0.12)',
    neb2: 'rgba(56, 189, 248, 0.12)',
    badgeBg: 'bg-slate-500/15 border-slate-400/40 text-slate-200',
    dotColor: 'bg-slate-300',
  }
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentThemeId, setCurrentThemeId] = useState(() => {
    try {
      const saved = localStorage.getItem('user_portfolio_theme');
      return saved && themes[saved] ? saved : 'violetRose';
    } catch {
      return 'violetRose';
    }
  });

  const currentTheme = themes[currentThemeId] || themes.violetRose;

  const setTheme = (themeId) => {
    if (themes[themeId]) {
      setCurrentThemeId(themeId);
      try {
        localStorage.setItem('user_portfolio_theme', themeId);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Sync CSS root variables for instant global reactivity
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--theme-bg', currentTheme.bg);
    root.style.setProperty('--theme-card-bg', currentTheme.cardBg);
    root.style.setProperty('--theme-primary', currentTheme.primary);
    root.style.setProperty('--theme-secondary', currentTheme.secondary);
    root.style.setProperty('--theme-tertiary', currentTheme.tertiary);
    root.style.setProperty('--theme-border', currentTheme.border);
    root.style.setProperty('--theme-glow', currentTheme.glow);
    root.style.backgroundColor = currentTheme.bg;
    document.body.style.backgroundColor = currentTheme.bg;
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes, currentThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
