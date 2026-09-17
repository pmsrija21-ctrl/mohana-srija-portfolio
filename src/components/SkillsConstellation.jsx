import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsConstellation() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Key skills positioned in planetary orbits around "Mohana" core
  const orbitalSkills = [
    { name: 'Python', angle: 0, radius: 140, color: '#38bdf8', category: 'Programming' },
    { name: 'Java', angle: 45, radius: 170, color: '#ec4899', category: 'Programming' },
    { name: 'React', angle: 90, radius: 140, color: '#00f0ff', category: 'Web' },
    { name: 'SQL', angle: 135, radius: 180, color: '#a855f7', category: 'Databases' },
    { name: 'MongoDB', angle: 180, radius: 140, color: '#34d399', category: 'Databases' },
    { name: 'Cloud', angle: 220, radius: 175, color: '#38bdf8', category: 'Tools' },
    { name: 'C++', angle: 260, radius: 140, color: '#6366f1', category: 'Programming' },
    { name: 'JavaScript', angle: 300, radius: 175, color: '#fbbf24', category: 'Web' },
    { name: 'Node.js', angle: 330, radius: 140, color: '#22c55e', category: 'Web' },
  ];

  return (
    <div className="mb-24 text-center">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          My Skills
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mt-1 font-mono">
          Technologies I work with
        </p>
      </div>

      {/* Central Planetary Constellation Visualization */}
      <div className="relative w-full max-w-xl mx-auto aspect-square flex items-center justify-center select-none overflow-hidden p-4">
        {/* Orbital Background Ellipses */}
        <div className="absolute w-72 h-72 rounded-full border border-cyan-500/20 pointer-events-none" />
        <div className="absolute w-[360px] h-[360px] rounded-full border border-purple-500/25 border-dashed pointer-events-none animate-spin-slow" style={{ animationDuration: '60s' }} />

        {/* Central Core: "Mohana" */}
        <div className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_40px_rgba(0,240,255,0.6)] flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-[#070b19] flex flex-col items-center justify-center text-center p-2">
            <span className="text-sm sm:text-base font-extrabold text-white tracking-wider">
              Mohana
            </span>
            <span className="text-[9px] font-mono text-cyan-300">Core</span>
          </div>
        </div>

        {/* Orbiting Planetary Skill Nodes */}
        {orbitalSkills.map((skill, idx) => {
          const rad = (skill.angle * Math.PI) / 180;
          // Scale down radius for small screens
          const r = typeof window !== 'undefined' && window.innerWidth < 640 ? skill.radius * 0.75 : skill.radius;
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;

          const isHovered = hoveredSkill === skill.name;

          return (
            <div
              key={idx}
              className="absolute z-30 transition-all duration-300 cursor-pointer"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 backdrop-blur-md transition-all ${
                  isHovered
                    ? 'bg-cyan-400 text-slate-950 scale-125 shadow-[0_0_20px_#00f0ff]'
                    : 'bg-[#080d24]/90 border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-300'
                }`}
                style={{
                  borderColor: isHovered ? '#00f0ff' : `${skill.color}50`,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: skill.color, boxShadow: `0 0 8px ${skill.color}` }}
                />
                <span>{skill.name}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mt-8 text-left">
        {Object.entries(portfolioData.skills).map(([key, cat]) => (
          <div
            key={key}
            className="p-4 rounded-2xl bg-[#070b1e]/80 border border-slate-800 hover:border-cyan-500/40 transition-all"
          >
            <span className="text-[11px] font-mono text-cyan-400 uppercase font-bold block mb-2">
              {cat.title}
            </span>
            <div className="flex flex-wrap gap-1">
              {cat.items.map((item, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 border border-slate-800 text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
