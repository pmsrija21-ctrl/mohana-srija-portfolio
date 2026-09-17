import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink, Sparkles, Palette, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { currentTheme, setTheme, themes, currentThemeId } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills & Experience', href: '#skills-experience' },
    { name: 'Certificates & Resume', href: '#certificates-resume' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Navbar only shows when scrolled down past the intro globe screen
      setIsScrolled(window.scrollY > 80);

      const sections = ['home', 'about', 'projects', 'skills-experience', 'certificates-resume', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isScrolled
          ? 'translate-y-0 opacity-100 backdrop-blur-xl border-b py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)] pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none py-3'
      }`}
      style={{
        backgroundColor: `${currentTheme.bg}f0`,
        borderBottomColor: currentTheme.border,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none rounded-lg p-1"
        >
          <div
            className="w-10 h-10 rounded-xl p-[1px] transition-all"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
              boxShadow: `0 0 15px ${currentTheme.glow}`,
            }}
          >
            <div className="w-full h-full bg-[#0c041c] rounded-[11px] flex items-center justify-center">
              <span className="font-extrabold text-sm tracking-wider text-white">
                MSP
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white transition-colors">
              Mohana Srija Puram
            </span>
            <span className="text-[10px] font-mono tracking-wider uppercase" style={{ color: currentTheme.textAccent }}>
              CS Engineer • AI/ML
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-1 bg-[#14062c]/70 backdrop-blur-md px-3 py-1.5 rounded-full border shadow-inner"
          style={{ borderColor: currentTheme.border }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white border shadow-md font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
                style={
                  isActive
                    ? {
                        background: `linear-gradient(90deg, ${currentTheme.primary}35, ${currentTheme.secondary}35)`,
                        borderColor: currentTheme.primary,
                        boxShadow: `0 0 12px ${currentTheme.glow}`,
                      }
                    : {}
                }
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Quick CTA Actions & Palette Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Palette Dropdown in Navbar */}
          <div className="relative">
            <button
              onClick={() => setPaletteOpen(!paletteOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#160630] border text-xs font-mono text-white hover:bg-white/10 transition-all"
              style={{ borderColor: currentTheme.primary }}
              aria-label="Select theme"
            >
              <Palette className="w-3.5 h-3.5" style={{ color: currentTheme.primary }} />
              <span>{currentTheme.emoji} {currentTheme.name.split(' ')[0]}</span>
            </button>

            {paletteOpen && (
              <div
                className="absolute right-0 mt-2 w-64 p-3 rounded-2xl bg-[#090316]/98 backdrop-blur-2xl border shadow-2xl z-50 animate-fadeIn"
                style={{ borderColor: currentTheme.primary }}
              >
                <div className="text-[11px] font-mono text-slate-400 mb-2 px-2">
                  Select Theme:
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
                      <span className="text-white">{t.name}</span>
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.primary }} />
                      {currentThemeId === t.id && <Check className="w-3.5 h-3.5 text-white" />}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href={portfolioData.personal.resumePath}
            download="Mohana-Srija-Puram-Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
              boxShadow: `0 0 18px ${currentTheme.glow}`,
            }}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-purple-950/60 border text-white focus:outline-none"
            style={{ borderColor: currentTheme.border }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-[#0a0316]/98 backdrop-blur-2xl border-b px-4 pt-4 pb-6 mt-3 animate-fadeIn"
          style={{ borderColor: currentTheme.border }}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobile}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-white border font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                  style={
                    isActive
                      ? {
                          background: `linear-gradient(90deg, ${currentTheme.primary}30, ${currentTheme.secondary}30)`,
                          borderColor: currentTheme.primary,
                        }
                      : {}
                  }
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-purple-900/50 flex gap-2">
              <a
                href={portfolioData.personal.resumePath}
                download="Mohana-Srija-Puram-Resume.pdf"
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                }}
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
