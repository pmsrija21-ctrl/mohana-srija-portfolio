import React from 'react';
import { ArrowRight, Download, ExternalLink, Mail, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import HolographicOrb from './HolographicOrb';

export default function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-cyan-500/10 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Available for Software Development Roles & Internships</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
              <span className="block">{personal.name}</span>
            </h1>

            <h2 className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-300 bg-clip-text text-transparent mb-6">
              {personal.title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              {personal.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumePath}
                download="Mohana-Srija-Puram-Resume.pdf"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-slate-900/80 hover:bg-slate-800/80 border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href={personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full text-sm font-medium text-slate-400 hover:text-cyan-300 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>View Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-slate-800/80 w-full max-w-lg">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors text-xs font-mono group"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                  <GithubIcon className="w-4 h-4 text-slate-300 group-hover:text-cyan-300" />
                </div>
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-purple-300 transition-colors text-xs font-mono group"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-purple-500/50 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                  <LinkedinIcon className="w-4 h-4 text-slate-300 group-hover:text-purple-300" />
                </div>
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors text-xs font-mono group"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                  <Mail className="w-4 h-4 text-slate-300 group-hover:text-cyan-300" />
                </div>
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <HolographicOrb />
            <div className="mt-4 text-center">
              <p className="text-sm font-semibold tracking-wide text-cyan-300 font-mono">
                {personal.tagline}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {personal.subTagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
