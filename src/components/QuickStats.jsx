import React from 'react';
import { GraduationCap, Briefcase, Award, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function QuickStats() {
  const { quickStats } = portfolioData;

  const cards = [
    {
      id: 'cgpa',
      value: '8.15',
      label: 'CGPA',
      sub: "B.Tech CSE, Vignan's University",
      icon: GraduationCap,
      glowColor: 'border-cyan-400/60 shadow-[0_0_30px_rgba(0,240,255,0.25)]',
      iconBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-400/40',
    },
    {
      id: 'internships',
      value: '3',
      label: 'Internships',
      sub: 'CodeAlpha, Prodigy, Unified Mentor',
      icon: Briefcase,
      glowColor: 'border-blue-400/60 shadow-[0_0_30px_rgba(56,189,248,0.25)]',
      iconBg: 'bg-blue-500/15 text-blue-300 border-blue-400/40',
    },
    {
      id: 'certs',
      value: '11+',
      label: 'Certifications',
      sub: 'Cisco, NPTEL, Unstop, Tata',
      icon: Award,
      glowColor: 'border-sky-400/60 shadow-[0_0_30px_rgba(14,165,233,0.25)]',
      iconBg: 'bg-sky-500/15 text-sky-300 border-sky-400/40',
    },
    {
      id: 'projects',
      value: '4',
      label: 'Core Projects',
      sub: 'AI, MERN & Algorithm Visualizers',
      icon: Trophy,
      glowColor: 'border-purple-400/60 shadow-[0_0_30px_rgba(168,85,247,0.25)]',
      iconBg: 'bg-purple-500/15 text-purple-300 border-purple-400/40',
    },
  ];

  return (
    <div className="mb-20">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Quick Stats
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mt-1 font-mono">
          My achievements at a glance
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className={`relative rounded-3xl p-6 sm:p-7 bg-[#070b1e]/85 backdrop-blur-2xl border ${card.glowColor} group hover:scale-105 transition-all duration-300 flex flex-col justify-between overflow-hidden`}
            >
              {/* Top glossy gradient highlight like storyboard */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none rounded-t-3xl" />

              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl border ${card.iconBg}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  Verified
                </span>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                  {card.value}
                </div>
                <div className="text-sm font-bold text-cyan-300 mt-1 uppercase tracking-wider font-mono">
                  {card.label}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  {card.sub}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
