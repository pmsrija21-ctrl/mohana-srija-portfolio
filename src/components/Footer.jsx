import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-cyan-500/20 bg-[#02050f]/90 backdrop-blur-xl py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Monogram and Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-[#070b19] rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-sm text-cyan-300">MSP</span>
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-base tracking-wide">
                Mohana Srija Puram
              </p>
              <p className="text-xs text-cyan-400/80 font-mono">
                Computer Science Engineering • Vignan University
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-900/80 border border-cyan-500/20 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-900/80 border border-purple-500/20 text-slate-300 hover:text-purple-300 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2.5 rounded-full bg-slate-900/80 border border-cyan-500/20 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Tagline & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Mohana Srija Puram. Built with React, Tailwind CSS & Cosmic WebGL.
          </p>
          <p className="font-mono text-cyan-400/60">
            Dream. Build. Grow.
          </p>
        </div>
      </div>
    </footer>
  );
}
