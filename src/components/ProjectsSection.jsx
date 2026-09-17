import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Cpu, Compass, Activity, Network, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState(null);

  const getProjectGraphic = (id) => {
    if (id === 'disaster-response') {
      return (
        <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-[#061329] via-[#040c1d] to-[#02050e] border border-cyan-500/30 p-4 flex flex-col justify-between overflow-hidden group-hover:border-cyan-400/60 transition-all">
          <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-cyan-500/25 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-cyan-300 flex items-center gap-1 bg-cyan-500/15 px-2.5 py-0.5 rounded-full border border-cyan-400/40">
              <Activity className="w-3 h-3 animate-pulse text-cyan-400" /> AI AGENT ORCHESTRATION
            </span>
            <span className="text-[10px] font-mono text-slate-400">Flask • Groq Llama 3</span>
          </div>

          <div className="relative flex items-center justify-center my-auto">
            <div className="w-24 h-24 rounded-full border border-cyan-400/30 flex items-center justify-center animate-ping opacity-25" />
            <div className="absolute w-16 h-16 rounded-full border border-cyan-400/70 bg-cyan-950/40 flex items-center justify-center shadow-[0_0_20px_#00f0ff]">
              <Cpu className="w-7 h-7 text-cyan-300" />
            </div>
          </div>

          <div className="flex justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-2">
            <span>WhatsApp SOS Broadcast</span>
            <span className="text-emerald-400 font-semibold">2FA Analytics</span>
          </div>
        </div>
      );
    }
    if (id === 'weather-travel-planner') {
      return (
        <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-[#13072b] via-[#0b041c] to-[#04010d] border border-purple-500/30 p-4 flex flex-col justify-between overflow-hidden group-hover:border-purple-400/60 transition-all">
          <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-purple-500/25 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-purple-300 flex items-center gap-1 bg-purple-500/15 px-2.5 py-0.5 rounded-full border border-purple-400/40">
              <Compass className="w-3 h-3 text-purple-400" /> MERN FULL STACK
            </span>
            <span className="text-[10px] font-mono text-slate-400">OpenAI API</span>
          </div>

          <div className="flex items-end justify-center gap-2.5 h-20 my-auto">
            <div className="w-5 h-10 bg-purple-500/40 rounded-t border-t border-purple-400" />
            <div className="w-5 h-14 bg-cyan-500/40 rounded-t border-t border-cyan-400" />
            <div className="w-5 h-20 bg-purple-400/90 rounded-t border-t border-purple-200 shadow-[0_0_15px_#a855f7]" />
            <div className="w-5 h-12 bg-purple-500/50 rounded-t border-t border-purple-400" />
            <div className="w-5 h-16 bg-cyan-500/70 rounded-t border-t border-cyan-300" />
          </div>

          <div className="flex justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-2">
            <span>5-Day Forecast Recharts</span>
            <span className="text-purple-300 font-semibold">105+ Landmarks</span>
          </div>
        </div>
      );
    }
    if (id === 'hamiltonian-cycle') {
      return (
        <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-[#06182a] via-[#030e1c] to-[#01040a] border border-sky-500/30 p-4 flex flex-col justify-between overflow-hidden group-hover:border-sky-400/60 transition-all">
          <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-sky-500/25 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-sky-300 flex items-center gap-1 bg-sky-500/15 px-2.5 py-0.5 rounded-full border border-sky-400/40">
              <Network className="w-3 h-3 text-sky-400" /> GRAPH ALGORITHMS
            </span>
            <span className="text-[10px] font-mono text-slate-400">Backtracking</span>
          </div>

          <div className="relative h-20 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border border-sky-400 bg-sky-500/20 flex items-center justify-center text-xs font-mono text-sky-300 shadow-[0_0_12px_#38bdf8]">
              v1
            </div>
            <div className="w-12 h-[2px] bg-gradient-to-r from-sky-400 to-cyan-400 shadow-[0_0_6px_#38bdf8]" />
            <div className="w-10 h-10 rounded-full border border-cyan-400 bg-cyan-500/20 flex items-center justify-center text-xs font-mono text-cyan-300 shadow-[0_0_12px_#00f0ff]">
              v2
            </div>
            <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400" />
            <div className="w-10 h-10 rounded-full border border-purple-400 bg-purple-500/20 flex items-center justify-center text-xs font-mono text-purple-300 shadow-[0_0_12px_#a855f7]">
              v3
            </div>
          </div>

          <div className="flex justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-2">
            <span>Dynamic Adjacency Matrix</span>
            <span className="text-sky-300 font-semibold">State-Space Tree</span>
          </div>
        </div>
      );
    }
    return (
      <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-[#1c0f05] via-[#100802] to-[#040200] border border-amber-500/30 p-4 flex flex-col justify-between overflow-hidden group-hover:border-amber-400/60 transition-all">
        <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-amber-500/25 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-amber-300 flex items-center gap-1 bg-amber-500/15 px-2.5 py-0.5 rounded-full border border-amber-400/40">
            <Compass className="w-3 h-3 text-amber-400" /> GREEDY OPTIMIZER
          </span>
          <span className="text-[10px] font-mono text-slate-400">Simulation</span>
        </div>

        <div className="relative flex flex-col items-center justify-center my-auto">
          <div className="w-40 h-[3px] bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 shadow-[0_0_12px_#f59e0b]" />
          <div className="flex justify-between w-40 px-2 text-[10px] text-amber-400 font-mono mt-2">
            <span>Bank A</span>
            <span className="text-yellow-300 font-bold">Torch</span>
            <span>Bank B</span>
          </div>
        </div>

        <div className="flex justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-2">
          <span>Real-time Timer</span>
          <span className="text-amber-300 font-semibold">Sound Synthesizer</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header from Storyboard Slide 5 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>03 // Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 font-mono">
            Real Problems. Creative Solutions.
          </p>
        </div>

        {/* 2x2 Grid of Futuristic Cards standing on Reflective Floor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="relative rounded-3xl p-6 sm:p-7 bg-[#060b1e]/90 backdrop-blur-2xl border border-cyan-500/30 hover:border-cyan-400/60 shadow-[0_10px_40px_rgba(0,0,0,0.6)] group transition-all duration-300 flex flex-col justify-between"
            >
              {/* Glossy Reflection overlay */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none rounded-t-3xl" />

              <div>
                {/* Visual Header Art */}
                <div className="mb-5">
                  {getProjectGraphic(proj.id)}
                </div>

                {/* Badge & Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-300 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40">
                    {proj.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {proj.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>

                {/* Technology Summary Line */}
                <p className="text-xs font-mono text-purple-300 mb-3 font-semibold">
                  {proj.techSummary}
                </p>

                {/* Short Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {proj.shortDesc}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.technologies.slice(0, 5).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#030612] border border-slate-800 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveModalProject(proj)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 hover:text-white transition-all shadow-[0_0_12px_rgba(0,240,255,0.25)] flex items-center gap-1.5"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {proj.liveDemo && (
                  <a
                    href={proj.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition-all shadow-[0_0_15px_rgba(168,85,247,0.35)] flex items-center gap-1.5"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-all ml-auto"
                  aria-label={`${proj.title} GitHub`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
