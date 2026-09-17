import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Cpu, Compass, Activity, Network } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState(null);

  const getProjectGraphic = (id) => {
    if (id === 'disaster-response') {
      return (
        <div className="relative w-full h-44 rounded-xl bg-gradient-to-br from-[#071329] to-[#040916] border border-cyan-500/20 p-4 flex flex-col justify-between overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-cyan-300 flex items-center gap-1 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-400/30">
              <Activity className="w-3 h-3 animate-pulse" /> LIVE TELEMETRY
            </span>
            <span className="text-[10px] font-mono text-slate-400">Groq Llama 3 • SOS</span>
          </div>
          <div className="relative flex items-center justify-center my-auto">
            <div className="w-20 h-20 rounded-full border border-cyan-400/40 flex items-center justify-center animate-ping opacity-30" />
            <div className="absolute w-14 h-14 rounded-full border border-cyan-400/70 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-cyan-300" />
            </div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-2">
            <span>Twilio WhatsApp Gateway</span>
            <span className="text-emerald-400">2FA Protected</span>
          </div>
        </div>
      );
    }
    if (id === 'weather-travel-planner') {
      return (
        <div className="relative w-full h-44 rounded-xl bg-gradient-to-br from-[#120a2e] to-[#06061a] border border-purple-500/20 p-4 flex flex-col justify-between overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-purple-300 flex items-center gap-1 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-400/30">
              <Compass className="w-3 h-3" /> MERN • 105+ LANDMARKS
            </span>
            <span className="text-[10px] font-mono text-slate-400">OpenAI API</span>
          </div>
          <div className="flex items-end justify-center gap-2 h-16 my-auto">
            <div className="w-4 h-8 bg-purple-500/40 rounded-t border-t border-purple-400" />
            <div className="w-4 h-12 bg-cyan-500/40 rounded-t border-t border-cyan-400" />
            <div className="w-4 h-16 bg-purple-400/80 rounded-t border-t border-purple-300 shadow-[0_0_10px_#a855f7]" />
            <div className="w-4 h-10 bg-purple-500/40 rounded-t border-t border-purple-400" />
            <div className="w-4 h-14 bg-cyan-500/60 rounded-t border-t border-cyan-400" />
          </div>
          <div className="flex justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-2">
            <span>5-Day Forecast Recharts</span>
            <span className="text-purple-300">JWT & bcrypt</span>
          </div>
        </div>
      );
    }
    if (id === 'hamiltonian-cycle') {
      return (
        <div className="relative w-full h-44 rounded-xl bg-gradient-to-br from-[#06182a] to-[#030a14] border border-sky-500/20 p-4 flex flex-col justify-between overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-sky-300 flex items-center gap-1 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-400/30">
              <Network className="w-3 h-3" /> GRAPH THEORY
            </span>
            <span className="text-[10px] font-mono text-slate-400">NP-Complete</span>
          </div>
          <div className="relative h-16 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border border-sky-400 bg-sky-500/20 flex items-center justify-center text-xs font-mono text-sky-300 shadow-[0_0_8px_#38bdf8]">
              v1
            </div>
            <div className="w-10 h-[2px] bg-sky-400/60" />
            <div className="w-8 h-8 rounded-full border border-cyan-400 bg-cyan-500/20 flex items-center justify-center text-xs font-mono text-cyan-300">
              v2
            </div>
            <div className="w-10 h-[2px] bg-sky-400/60" />
            <div className="w-8 h-8 rounded-full border border-purple-400 bg-purple-500/20 flex items-center justify-center text-xs font-mono text-purple-300">
              v3
            </div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-2">
            <span>State-Space Tree</span>
            <span className="text-sky-300">Adjacency Matrix</span>
          </div>
        </div>
      );
    }
    return (
      <div className="relative w-full h-44 rounded-xl bg-gradient-to-br from-[#1b1008] to-[#0a0503] border border-amber-500/20 p-4 flex flex-col justify-between overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-amber-300 flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/30">
            <Compass className="w-3 h-3" /> GREEDY OPTIMIZER
          </span>
          <span className="text-[10px] font-mono text-slate-400">Web Audio API</span>
        </div>
        <div className="relative flex flex-col items-center justify-center my-auto">
          <div className="w-32 h-[3px] bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 shadow-[0_0_8px_#f59e0b]" />
          <div className="flex justify-between w-32 px-2 text-[10px] text-amber-400 font-mono mt-1">
            <span>Bank A</span>
            <span>Torch</span>
            <span>Bank B</span>
          </div>
        </div>
        <div className="flex justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-2">
          <span>Real-time Timer</span>
          <span className="text-amber-300">Sound Synthesizer</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>03 // Production Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            PROJECTS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Interactive AI platforms, MERN architecture & algorithmic visualizers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:border-cyan-400/50 transition-all duration-300"
            >
              <div>
                <div className="mb-5">
                  {getProjectGraphic(proj.id)}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30">
                    {proj.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs font-mono text-purple-300 mb-3 font-semibold">
                  {proj.techSummary}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {proj.shortDesc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.technologies.slice(0, 5).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 border border-slate-800 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                  {proj.technologies.length > 5 && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 border border-slate-800 text-cyan-400">
                      +{proj.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveModalProject(proj)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-300 hover:text-white transition-all shadow-[0_0_10px_rgba(0,240,255,0.2)] flex items-center gap-1.5"
                >
                  <span>Explore Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {proj.liveDemo && (
                  <a
                    href={proj.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white transition-all shadow-[0_0_12px_rgba(0,240,255,0.3)] flex items-center gap-1.5"
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
                  aria-label={`${proj.title} GitHub Repository`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
