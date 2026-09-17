import React from 'react';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import CosmicGlobe from './CosmicGlobe';

export default function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-between overflow-hidden"
    >
      {/* Top Banner Tag from Slide 1 */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-mono text-slate-400 mb-6">
        <span className="text-cyan-400 font-bold tracking-wider">MOHANA SRIJA PURAM</span>
        <div className="flex items-center gap-2">
          <span className="text-slate-500">System Ready</span>
          <span className="w-16 h-1 rounded-full bg-slate-800 overflow-hidden">
            <span className="block w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse" />
          </span>
        </div>
      </div>

      {/* Central Hero Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
              {personal.name}
            </h1>

            <h2 className="text-lg sm:text-2xl font-semibold text-cyan-300 mb-5 font-mono">
              Computer Science Engineer | AI/ML Enthusiast | Problem Solver
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              I build intelligent solutions for real-world problems, combining technology, creativity and purpose.
            </p>

            {/* Action Buttons & Storyboard Script Glow */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-[0_0_25px_rgba(168,85,247,0.5)] flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumePath}
                download="Mohana-Srija-Puram-Resume.pdf"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#070b19]/80 hover:bg-[#0e1633] border border-cyan-400/40 text-cyan-300 hover:text-white shadow-[0_0_15px_rgba(0,240,255,0.25)] flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              {/* Storyboard Handwritten Script Text */}
              <div className="ml-2 italic font-serif text-cyan-300/90 text-sm drop-shadow-[0_0_10px_rgba(0,240,255,0.6)] select-none">
                ~ Better Ideas. Brighter Future.
              </div>
            </div>

            {/* Social Links (Clean icons matching slide 2) */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-900/80 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-900/80 border border-slate-700 hover:border-purple-400 text-slate-300 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-full bg-slate-900/80 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
                aria-label="Email Address"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Hero Column: Celestial MSP Globe */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <CosmicGlobe />
          </div>
        </div>
      </div>

      {/* Bottom Bar from Storyboard Slide 1: "Turning Ideas into Real-World Solutions" & "Scroll to Begin" */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/60 text-xs font-mono text-slate-400">
        <div className="text-cyan-300/80 font-semibold tracking-wide">
          Turning Ideas into Real-World Solutions
        </div>

        <a
          href="#about"
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] group"
        >
          <span>Scroll to Begin</span>
          <div className="w-4 h-6 rounded-full border border-cyan-400/80 flex items-start justify-center p-0.5">
            <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
