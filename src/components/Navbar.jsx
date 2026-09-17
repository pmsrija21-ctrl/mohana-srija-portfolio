import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink, Sparkles, Palette } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
      setIsScrolled(window.scrollY > 40);

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06020e]/90 backdrop-blur-xl border-b border-pink-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 via-rose-500 to-purple-600 p-[1px] shadow-[0_0_15px_rgba(236,72,153,0.4)] group-hover:shadow-[0_0_22px_rgba(236,72,153,0.7)] transition-all">
            <div className="w-full h-full bg-[#0c041c] rounded-[11px] flex items-center justify-center">
              <span className="font-extrabold text-sm tracking-wider text-pink-300 group-hover:text-white transition-colors">
                MSP
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-pink-300 transition-colors">
              Mohana Srija Puram
            </span>
            <span className="text-[10px] font-mono text-pink-400/80 tracking-wider uppercase">
              CS Engineer • AI/ML
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#14062c]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-pink-500/25 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500/25 to-purple-500/25 text-pink-300 border border-pink-400/50 shadow-[0_0_12px_rgba(236,72,153,0.35)] font-bold'
                    : 'text-pink-100/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Quick CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Indicator */}
          <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#160630] border border-pink-500/30 text-[11px] font-mono text-pink-300">
            <Palette className="w-3 h-3 text-pink-400" />
            <span>Royal Violet & Rose</span>
          </div>

          <a
            href={portfolioData.personal.resumePath}
            download="Mohana-Srija-Puram-Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white shadow-[0_0_18px_rgba(236,72,153,0.45)] transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-purple-950/60 border border-pink-500/30 text-pink-200 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0316]/98 backdrop-blur-2xl border-b border-pink-500/30 px-4 pt-4 pb-6 mt-3 animate-fadeIn">
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
                      ? 'bg-gradient-to-r from-pink-600/30 to-purple-600/30 text-pink-300 border border-pink-400/40'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-purple-900/50 flex gap-2">
              <a
                href={portfolioData.personal.resumePath}
                download="Mohana-Srija-Puram-Resume.pdf"
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-pink-600 to-purple-600 text-white flex items-center justify-center gap-2"
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
