import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import CosmicSilhouette from './CosmicSilhouette';

export default function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-16 pb-20 flex items-center justify-center overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Hero Column matching Storyboard Slide 2 */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
              {personal.name}
            </h1>

            <h2 className="text-lg sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 mb-5 font-mono">
              Computer Science Engineer | AI/ML Enthusiast | Problem Solver
            </h2>

            <p className="text-pink-100/90 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              I build intelligent solutions for real-world problems, combining technology, creativity and purpose.
            </p>

            {/* Buttons & Script Glow matching Slide 2 */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white shadow-[0_0_25px_rgba(236,72,153,0.5)] flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumePath}
                download="Mohana-Srija-Puram-Resume.pdf"
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#110526]/90 hover:bg-[#1a083a] border border-pink-400/50 text-pink-300 hover:text-white shadow-[0_0_15px_rgba(236,72,153,0.25)] flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-pink-400" />
                <span>Download Resume</span>
              </a>

              <div className="ml-2 italic font-serif text-pink-300 text-sm drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] select-none">
                ~ Better Ideas. Brighter Future.
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-purple-950/60 border border-purple-800/80 hover:border-pink-400 text-purple-200 hover:text-pink-300 hover:shadow-[0_0_15px_rgba(236,72,153,0.45)] transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-purple-950/60 border border-purple-800/80 hover:border-purple-400 text-purple-200 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.45)] transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-full bg-purple-950/60 border border-purple-800/80 hover:border-rose-400 text-purple-200 hover:text-rose-300 hover:shadow-[0_0_15px_rgba(244,63,94,0.45)] transition-all"
                aria-label="Email Address"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Hero Column: Cosmic Silhouette Artwork */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <CosmicSilhouette />
          </div>
        </div>
      </div>
    </section>
  );
}
