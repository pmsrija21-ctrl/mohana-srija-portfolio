import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Cpu, CheckCircle2, ArrowUpRight, Database, Server, Monitor, BrainCircuit } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#060a1c] border border-cyan-400/50 p-6 sm:p-8 shadow-[0_0_60px_rgba(0,240,255,0.3)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/15 border border-cyan-400/40 text-cyan-300">
            {project.badge}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {project.category}
          </span>
        </div>

        <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
          {project.title}
        </h3>

        {/* Storyboard Slide 6 Layout: Sidebar Tabs + Center Network Diagram + Right Problem/Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Navigation Tabs */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'architecture', label: 'Architecture' },
              { id: 'techstack', label: 'Tech Stack' },
              { id: 'results', label: 'Key Features' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-mono text-left transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold border border-purple-400/60 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Center Column: 3D Node Network Topology Diagram */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-[#040714] border border-cyan-500/30 flex flex-col items-center justify-center relative min-h-[260px] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0%,transparent_70%)] pointer-events-none" />

            {/* Network Nodes Grid matching Storyboard */}
            <div className="relative w-full h-52 flex items-center justify-center">
              {/* Top Node: Frontend */}
              <div className="absolute top-1 left-1/4 -translate-x-1/2 p-2 sm:p-3 rounded-xl bg-cyan-950/80 border border-cyan-400/60 text-cyan-300 text-[10px] sm:text-xs font-mono flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                <Monitor className="w-3.5 h-3.5 text-cyan-400" />
                <span>Frontend</span>
              </div>

              {/* Right Node: AI Model / Engine */}
              <div className="absolute top-1 right-1/4 translate-x-1/2 p-2 sm:p-3 rounded-xl bg-purple-950/80 border border-purple-400/60 text-purple-300 text-[10px] sm:text-xs font-mono flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
                <span>AI Core</span>
              </div>

              {/* Center Core Node */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-600 p-0.5 shadow-[0_0_25px_rgba(0,240,255,0.6)] flex items-center justify-center animate-pulse">
                <div className="w-full h-full rounded-full bg-[#070b19] flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-cyan-300" />
                </div>
              </div>

              {/* Bottom Left Node: Database */}
              <div className="absolute bottom-1 left-1/4 -translate-x-1/2 p-2 sm:p-3 rounded-xl bg-blue-950/80 border border-blue-400/60 text-blue-300 text-[10px] sm:text-xs font-mono flex items-center gap-1.5 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                <Database className="w-3.5 h-3.5 text-blue-400" />
                <span>Database</span>
              </div>

              {/* Bottom Right Node: Backend API */}
              <div className="absolute bottom-1 right-1/4 translate-x-1/2 p-2 sm:p-3 rounded-xl bg-emerald-950/80 border border-emerald-400/60 text-emerald-300 text-[10px] sm:text-xs font-mono flex items-center gap-1.5 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                <Server className="w-3.5 h-3.5 text-emerald-400" />
                <span>Backend</span>
              </div>
            </div>

            <p className="text-[10px] font-mono text-slate-400 mt-2">
              Synchronized Multi-tier Telemetry Flow
            </p>
          </div>

          {/* Right Column: Problem, Solution & Stack breakdown */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-3.5 rounded-xl bg-[#090e24] border border-slate-800">
              <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-wider">
                Problem Addressed
              </span>
              <p className="text-xs text-slate-300 mt-1">
                {project.id === 'disaster-response'
                  ? 'Efficient resource allocation during natural disasters is often slow, fragmented, and manual.'
                  : project.id === 'weather-travel-planner'
                  ? 'Travel itinerary scheduling without synchronized meteorological predictions causes costly disruptions.'
                  : 'Algorithmic state-space exploration is difficult to intuitively comprehend without step-by-step visual feedback.'}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#090e24] border border-slate-800">
              <span className="text-[10px] font-mono text-purple-400 uppercase font-bold tracking-wider">
                Engineered Solution
              </span>
              <p className="text-xs text-slate-300 mt-1">
                {project.id === 'disaster-response'
                  ? 'Autonomous AI multi-agent orchestration for instant severity scoring, automated WhatsApp SOS alerts, and route optimization.'
                  : project.id === 'weather-travel-planner'
                  ? 'Unified MERN platform combining OpenAI landmark concierge with Recharts atmospheric forecasting and budget calculations.'
                  : 'Interactive real-time visualizer with synchronized dynamic adjacency matrix, state-space tree, and execution logs.'}
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block mb-1.5">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-700 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Specific Content Details */}
        <div className="mt-6 pt-6 border-t border-slate-800">
          {activeTab === 'overview' && (
            <p className="text-sm text-slate-300 leading-relaxed bg-[#040714] p-4 rounded-xl border border-slate-800">
              {project.shortDesc}
            </p>
          )}

          {activeTab === 'architecture' && (
            <p className="text-sm text-slate-300 leading-relaxed bg-[#040714] p-4 rounded-xl border border-slate-800">
              {project.architecture}
            </p>
          )}

          {activeTab === 'techstack' && (
            <div className="flex flex-wrap gap-2 bg-[#040714] p-4 rounded-xl border border-slate-800">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-cyan-500/40 text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {activeTab === 'results' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#040714] p-4 rounded-xl border border-slate-800">
              {project.features.map((f, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-slate-800">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)] flex items-center gap-2 transition-all"
            >
              <span>Launch Live Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-white flex items-center gap-2 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View on GitHub</span>
          </a>

          <button
            onClick={onClose}
            className="ml-auto px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
