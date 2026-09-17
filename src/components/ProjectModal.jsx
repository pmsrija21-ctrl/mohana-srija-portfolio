import React, { useEffect } from 'react';
import { X, ExternalLink, Cpu, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#070b19] border border-cyan-400/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.25)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/15 border border-cyan-400/40 text-cyan-300">
            {project.badge}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {project.category}
          </span>
        </div>

        <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white mb-4">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((t, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mb-6 p-4 rounded-xl bg-[#0b112c]/60 border border-cyan-500/20">
          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
            System Overview
          </h4>
          <p className="text-sm text-slate-200 leading-relaxed">
            {project.shortDesc}
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>Architecture & Technical Execution</span>
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            {project.architecture}
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Core Engineered Capabilities</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0 shadow-[0_0_6px_#00f0ff]" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
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
            <span>View Source on GitHub</span>
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
