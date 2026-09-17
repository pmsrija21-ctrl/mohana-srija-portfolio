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
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e041e] border border-pink-400/50 p-6 sm:p-8 shadow-[0_0_60px_rgba(236,72,153,0.3)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-purple-950 border border-purple-800 text-purple-200 hover:text-white hover:border-pink-400 transition-all focus:outline-none focus:ring-2 focus:ring-pink-400"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-pink-500/15 border border-pink-400/40 text-pink-300">
            {project.badge}
          </span>
          <span className="text-xs text-purple-300 font-mono">
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
                    ? 'bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 text-white font-bold border border-pink-400/60 shadow-[0_0_15px_rgba(236,72,153,0.4)]'
                    : 'bg-purple-950/60 border border-purple-900 text-purple-200 hover:text-white hover:bg-purple-900/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Center Column: 3D Node Network Topology Diagram in Royal Violet & Neon Rose */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-[#080214] border border-pink-500/30 flex flex-col items-center justify-center relative min-h-[260px] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.12)_0%,transparent_70%)] pointer-events-none" />

            {/* Network Nodes Grid */}
            <div className="relative w-full h-52 flex items-center justify-center">
              {/* Top Node: Frontend */}
              <div className="absolute top-1 left-1/4 -translate-x-1/2 p-2 sm:p-3 rounded-xl bg-pink-950/80 border border-pink-400/60 text-pink-300 text-[10px] sm:text-xs font-mono flex items-center gap-1.5 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                <Monitor className="w-3.5 h-3.5 text-pink-400" />
                <span>Frontend</span>
              </div>

              {/* Right Node: AI Model / Engine */}
              <div className="absolute top-1 right-1/4 translate-x-1/2 p-2 sm:p-3 rounded-xl bg-purple-950/80 border border-purple-400/60 text-purple-300 text-[10px] sm:text-xs font-mono flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
                <span>AI Core</span>
              </div>

              {/* Center Core Node */}
              <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-tr from-pink-600 via-rose-500 to-purple-600 text-white shadow-[0_0_25px_rgba(236,72,153,0.6)] flex flex-col items-center justify-center text-center z-10">
                <Cpu className="w-5 h-5 mb-1 animate-pulse" />
                <span className="text-[10px] font-bold font-mono">MSP Engine</span>
              </div>

              {/* Bottom Left Node: Backend API */}
              <div className="absolute bottom-1 left-1/4 -translate-x-1/2 p-2 sm:p-3 rounded-xl bg-violet-950/80 border border-violet-400/60 text-violet-300 text-[10px] sm:text-xs font-mono flex items-center gap-1.5 shadow-[0_0_15px_rgba(192,132,252,0.3)]">
                <Server className="w-3.5 h-3.5 text-violet-400" />
                <span>Backend</span>
              </div>

              {/* Bottom Right Node: Database */}
              <div className="absolute bottom-1 right-1/4 translate-x-1/2 p-2 sm:p-3 rounded-xl bg-rose-950/80 border border-rose-400/60 text-rose-300 text-[10px] sm:text-xs font-mono flex items-center gap-1.5 shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                <Database className="w-3.5 h-3.5 text-rose-400" />
                <span>Database</span>
              </div>

              {/* Connecting circuit lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-pink-500/40" strokeWidth="1.5" strokeDasharray="4 4">
                <line x1="30%" y1="20%" x2="50%" y2="50%" />
                <line x1="70%" y1="20%" x2="50%" y2="50%" />
                <line x1="30%" y1="80%" x2="50%" y2="50%" />
                <line x1="70%" y1="80%" x2="50%" y2="50%" />
              </svg>
            </div>

            <span className="text-[10px] font-mono text-pink-300/80 mt-2">
              Synchronized Multi-Node Topology
            </span>
          </div>

          {/* Right Column: Problem Addressed vs Solution Engineered */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 text-left">
              <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider block mb-1">
                Problem Addressed
              </span>
              <p className="text-xs text-pink-100 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 text-left">
              <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider block mb-1">
                Engineered Solution
              </span>
              <p className="text-xs text-pink-100 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="mt-6 pt-6 border-t border-purple-900/60">
          {activeTab === 'overview' && (
            <div>
              <h4 className="text-sm font-mono font-bold text-pink-300 mb-2 uppercase">
                Project Overview
              </h4>
              <p className="text-sm text-pink-100/90 leading-relaxed mb-4">
                {project.description}
              </p>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div>
              <h4 className="text-sm font-mono font-bold text-pink-300 mb-2 uppercase">
                System Architecture
              </h4>
              <p className="text-sm text-pink-100/90 leading-relaxed mb-4">
                {project.architecture}
              </p>
            </div>
          )}

          {activeTab === 'techstack' && (
            <div>
              <h4 className="text-sm font-mono font-bold text-pink-300 mb-3 uppercase">
                Technology Implementation
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono bg-purple-950 border border-pink-400/40 text-pink-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div>
              <h4 className="text-sm font-mono font-bold text-pink-300 mb-3 uppercase">
                Key Features & Capabilities
              </h4>
              <ul className="space-y-2 mb-4">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-pink-100/90">
                    <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-purple-950 border border-pink-400/50 text-pink-200 hover:text-white hover:bg-purple-900 transition-all flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source Code</span>
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live System</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
