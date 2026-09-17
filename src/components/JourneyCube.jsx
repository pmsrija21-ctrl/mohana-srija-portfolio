import React, { useState } from 'react';
import { Code2, Briefcase, Award, Sparkles, Move3d } from 'lucide-react';

export default function JourneyCube() {
  const [activeFace, setActiveFace] = useState('projects');

  const faces = [
    {
      id: 'projects',
      title: 'Projects',
      desc: 'Autonomous Disaster AI, Weather Travel MERN, Graph & Algorithm Visualizers',
      icon: Code2,
      color: 'from-cyan-500/20 to-blue-600/20 border-cyan-400/50 text-cyan-300',
    },
    {
      id: 'experience',
      title: 'Experience',
      desc: 'CodeAlpha & Prodigy InfoTech Internships, Upcoming Unified Mentor (2026)',
      icon: Briefcase,
      color: 'from-purple-500/20 to-pink-600/20 border-purple-400/50 text-purple-300',
    },
    {
      id: 'skills',
      title: 'Skills',
      desc: 'C, Python, Java, DSA, OS, MERN Stack, MySQL, MongoDB, OpenAI API',
      icon: Sparkles,
      color: 'from-blue-500/20 to-cyan-600/20 border-blue-400/50 text-blue-300',
    },
    {
      id: 'certificates',
      title: 'Certificates',
      desc: '11+ verified certifications across Cisco Networking Academy, NPTEL, Tata, Unstop',
      icon: Award,
      color: 'from-pink-500/20 to-purple-600/20 border-pink-400/50 text-pink-300',
    },
  ];

  return (
    <div className="mt-16 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-300 text-xs font-mono mb-3">
        <Move3d className="w-3.5 h-3.5" />
        <span>Interactive Navigator</span>
      </div>
      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
        Explore My Journey
      </h3>
      <p className="text-slate-400 text-xs sm:text-sm mb-8 font-mono">
        Click any facet to inspect credentials and domains
      </p>

      {/* Glowing Hexagonal Pedestal */}
      <div className="relative max-w-2xl mx-auto p-6 rounded-3xl bg-[#080d24]/90 backdrop-blur-2xl border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.2)]">
        {/* Glow halo */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent blur-xl pointer-events-none" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10 mb-6">
          {faces.map((f) => {
            const Icon = f.icon;
            const isActive = activeFace === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFace(f.id)}
                className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-b from-purple-500/25 to-cyan-500/25 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className={`p-2.5 rounded-xl bg-slate-950/80 border ${f.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-bold font-mono ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {f.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Facet Detail */}
        {faces
          .filter((f) => f.id === activeFace)
          .map((f) => (
            <div
              key={f.id}
              className="p-5 rounded-2xl bg-[#040714] border border-cyan-500/30 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn"
            >
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Domain: {f.title}
                </span>
                <p className="text-sm text-slate-200 mt-1">
                  {f.desc}
                </p>
              </div>
              <a
                href={`#${f.id === 'experience' || f.id === 'skills' ? 'skills-experience' : f.id === 'certificates' ? 'certificates-resume' : f.id}`}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition-all text-center whitespace-nowrap self-start sm:self-center"
              >
                Jump to Section →
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
