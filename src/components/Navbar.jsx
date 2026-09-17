import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink, Sparkles } from 'lucide-react';
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
          ? 'bg-[#030712]/85 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_22px_rgba(0,240,255,0.7)] transition-all">
            <div className="w-full h-full bg-[#070b19] rounded-[11px] flex items-center justify-center">
              <span className="font-extrabold text-sm tracking-wider text-cyan-300 group-hover:text-white transition-colors">
                MSP
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Mohana Srija Puram
            </span>
            <span className="text-[10px] font-mono text-cyan-400/70 tracking-wider uppercase">
              CS Engineer • AI/ML
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0b112c]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/20 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Quick CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={portfolioData.personal.resumePath}
            download="Mohana-Srija-Puram-Resume.pdf"
            className="px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] flex items-center gap-1.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#0b112c]/70 border border-cyan-500/30 text-slate-200 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b19]/95 backdrop-blur-2xl border-b border-cyan-500/30 px-6 py-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobile}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={portfolioData.personal.resumePath}
                download="Mohana-Srija-Puram-Resume.pdf"
                onClick={closeMobile}
                className="w-full py-3 rounded-xl text-center text-sm font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
