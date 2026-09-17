import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="relative z-10 border-t border-purple-900/60 bg-[#06020e] py-12 text-pink-200/70 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-pink-600 to-purple-600 p-[1px]">
            <div className="w-full h-full bg-[#0c041c] rounded-[7px] flex items-center justify-center text-pink-300 font-bold text-xs">
              MS
            </div>
          </div>
          <span>© 2026 Mohana Srija Puram. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#home" className="hover:text-pink-300 transition-colors">Home</a>
          <a href="#projects" className="hover:text-pink-300 transition-colors">Projects</a>
          <a href="#skills-experience" className="hover:text-pink-300 transition-colors">Skills</a>
          <a href="#certificates-resume" className="hover:text-pink-300 transition-colors">Certificates</a>
          <a href="#contact" className="hover:text-pink-300 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-purple-950/80 border border-purple-800 hover:border-pink-400 text-purple-200 hover:text-pink-300 transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-purple-950/80 border border-purple-800 hover:border-purple-400 text-purple-200 hover:text-purple-300 transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
