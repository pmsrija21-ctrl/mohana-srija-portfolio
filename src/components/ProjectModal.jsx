import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Cpu, CheckCircle2, ArrowUpRight, Database, Server, Monitor, BrainCircuit } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { useTheme } from '../context/ThemeContext';

export default function ProjectModal({ project, onClose }) {
  const { currentTheme } = useTheme();
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

  const techList = project.tech || project.technologies || [];
  const featuresList = project.features || [];
  const projectDesc = project.description || project.shortDesc || '';
  const liveUrl = project.live || project.liveDemo;
  const problemText = project.problem || 'Real-time optimization and coordination under dynamic real-world constraints.';
  const solutionText = project.solution || project.architecture || 'Engineered modular high-performance architecture with modern stack.';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e041e] border p-6 sm:p-8 shadow-2xl text-left"
        style={{
          borderColor: currentTheme.primary,
          boxShadow: `0 0 60px ${currentTheme.glow}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-purple-950/80 border text-purple-200 hover:text-white transition-all focus:outline-none"
          style={{ borderColor: `${currentTheme.primary}60` }}
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className="px-3 py-1 rounded-full text-xs font-mono"
            style={{
              backgroundColor: `${currentTheme.primary}20`,
              border: `1px solid ${currentTheme.primary}50`,
              color: currentTheme.textAccent,
            }}
          >
            {project.badge || 'Project'}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {project.category}
          </span>
        </div>

        <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
          {project.title}
        </h3>

        {/* Layout: Sidebar Tabs + Center Network Diagram + Right Problem/Solution */}
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
                    ? 'text-white font-bold'
                    : 'bg-purple-950/40 border border-purple-900/60 text-slate-300 hover:text-white hover:bg-purple-900/40'
                }`}
                style={
                  activeTab === tab.id
                    ? {
                        background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                        boxShadow: `0 0 15px ${currentTheme.glow}`,
                      }
                    : {}
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Center Column: 3D Node Network Topology Diagram */}
          <div
            className="lg:col-span-5 p-5 rounded-2xl bg-[#080214] border flex flex-col items-center justify-center relative min-h-[260px] overflow-hidden"
            style={{ borderColor: `${currentTheme.primary}40` }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${currentTheme.primary}15 0%, transparent 70%)`,
              }}
            />

            {/* Network Nodes Grid */}
            <div className="relative w-full h-52 flex items-center justify-center">
              {/* Top Node: Frontend */}
              <div
                className="absolute top-1 left-1/4 -translate-x-1/2 p-2 sm:p-3 rounded-xl bg-purple-950/80 border text-[10px] sm:text-xs font-mono flex items-center gap-1.5"
                style={{ borderColor: currentTheme.primary, color: currentTheme.textAccent }}
              >
                <Monitor className="w-3.5 h-3.5" style={{ color: currentTheme.primary }} />
                <span>Frontend</span>
              </div>

              {/* Right Node: AI Model / Engine */}
              <div
                className="absolute top-1 right-1/4 translate-x-1/2 p-2 sm:p-3 rounded-xl bg-purple-950/80 border text-[10px] sm:text-xs font-mono flex items-center gap-1.5"
                style={{ borderColor: currentTheme.secondary, color: currentTheme.textAccent }}
              >
                <BrainCircuit className="w-3.5 h-3.5" style={{ color: currentTheme.secondary }} />
                <span>AI Core</span>
              </div>

              {/* Center Core Node */}
              <div
                className="p-3 sm:p-4 rounded-2xl text-white flex flex-col items-center justify-center text-center z-10"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                  boxShadow: `0 0 25px ${currentTheme.glow}`,
                }}
              >
                <Cpu className="w-5 h-5 mb-1 animate-pulse" />
                <span className="text-[10px] font-bold font-mono">MSP Engine</span>
              </div>

              {/* Bottom Left Node: Backend API */}
              <div
                className="absolute bottom-1 left-1/4 -translate-x-1/2 p-2 sm:p-3 rounded-xl bg-purple-950/80 border text-[10px] sm:text-xs font-mono flex items-center gap-1.5"
                style={{ borderColor: currentTheme.tertiary, color: currentTheme.textAccent }}
              >
                <Server className="w-3.5 h-3.5" style={{ color: currentTheme.tertiary }} />
                <span>Backend</span>
              </div>

              {/* Bottom Right Node: Database */}
              <div
                className="absolute bottom-1 right-1/4 translate-x-1/2 p-2 sm:p-3 rounded-xl bg-purple-950/80 border text-[10px] sm:text-xs font-mono flex items-center gap-1.5"
                style={{ borderColor: currentTheme.primary, color: currentTheme.textAccent }}
              >
                <Database className="w-3.5 h-3.5" style={{ color: currentTheme.primary }} />
                <span>Database</span>
              </div>

              {/* Connecting circuit lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-purple-500/40" strokeWidth="1.5" strokeDasharray="4 4">
                <line x1="30%" y1="20%" x2="50%" y2="50%" />
                <line x1="70%" y1="20%" x2="50%" y2="50%" />
                <line x1="30%" y1="80%" x2="50%" y2="50%" />
                <line x1="70%" y1="80%" x2="50%" y2="50%" />
              </svg>
            </div>

            <span className="text-[10px] font-mono text-slate-400 mt-2">
              Synchronized Multi-Node Topology
            </span>
          </div>

          {/* Right Column: Problem Addressed vs Solution Engineered */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-4 rounded-2xl bg-[#14062c]/60 border border-purple-900/60 text-left">
              <span
                className="text-xs font-mono font-bold uppercase tracking-wider block mb-1"
                style={{ color: currentTheme.textAccent }}
              >
                Problem Addressed
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {problemText}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#14062c]/60 border border-purple-900/60 text-left">
              <span
                className="text-xs font-mono font-bold uppercase tracking-wider block mb-1"
                style={{ color: currentTheme.textAccent }}
              >
                Engineered Solution
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {solutionText}
              </p>
            </div>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="mt-6 pt-6 border-t border-purple-900/60">
          {activeTab === 'overview' && (
            <div>
              <h4 className="text-sm font-mono font-bold mb-2 uppercase" style={{ color: currentTheme.textAccent }}>
                Project Overview
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed mb-4">
                {projectDesc}
              </p>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div>
              <h4 className="text-sm font-mono font-bold mb-2 uppercase" style={{ color: currentTheme.textAccent }}>
                System Architecture
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed mb-4">
                {project.architecture || projectDesc}
              </p>
            </div>
          )}

          {activeTab === 'techstack' && (
            <div>
              <h4 className="text-sm font-mono font-bold mb-3 uppercase" style={{ color: currentTheme.textAccent }}>
                Technology Implementation
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {techList.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono bg-purple-950/80 border text-slate-200"
                    style={{ borderColor: `${currentTheme.primary}50` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div>
              <h4 className="text-sm font-mono font-bold mb-3 uppercase" style={{ color: currentTheme.textAccent }}>
                Key Features & Capabilities
              </h4>
              <ul className="space-y-2 mb-4">
                {featuresList.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: currentTheme.primary }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-purple-950/80 border text-slate-200 hover:text-white transition-all flex items-center gap-2"
                style={{ borderColor: `${currentTheme.primary}50` }}
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white transition-all flex items-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                  boxShadow: `0 0 15px ${currentTheme.glow}`,
                }}
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
