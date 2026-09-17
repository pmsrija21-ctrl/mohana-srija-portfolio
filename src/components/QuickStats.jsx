import React from 'react';
import { Award, Briefcase, Code2, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function QuickStats() {
  const { stats } = portfolioData;

  const statItems = [
    {
      icon: GraduationCap,
      value: stats.cgpa,
      label: 'CGPA',
      sublabel: stats.degree,
      color: 'text-pink-300',
      border: 'border-pink-500/30',
      glow: 'shadow-[0_0_25px_rgba(236,72,153,0.25)]',
    },
    {
      icon: Briefcase,
      value: stats.internships,
      label: 'Internships',
      sublabel: 'CodeAlpha, Prodigy, UM',
      color: 'text-purple-300',
      border: 'border-purple-500/30',
      glow: 'shadow-[0_0_25px_rgba(168,85,247,0.25)]',
    },
    {
      icon: Award,
      value: stats.certifications,
      label: 'Certifications',
      sublabel: 'Cisco, NPTEL, Unstop, Tata',
      color: 'text-rose-300',
      border: 'border-rose-500/30',
      glow: 'shadow-[0_0_25px_rgba(244,63,94,0.25)]',
    },
    {
      icon: Code2,
      value: stats.projects,
      label: 'Projects',
      sublabel: 'AI & Full Stack Solutions',
      color: 'text-fuchsia-300',
      border: 'border-fuchsia-500/30',
      glow: 'shadow-[0_0_25px_rgba(217,70,239,0.25)]',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto my-12">
      {statItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className={`relative rounded-3xl p-6 bg-[#110526]/85 backdrop-blur-xl border ${item.border} ${item.glow} hover:scale-[1.03] transition-all duration-300 flex flex-col items-center text-center group`}
          >
            {/* Top Gloss Highlight */}
            <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-pink-400/50 to-transparent" />

            <div className={`p-3 rounded-2xl bg-purple-950/80 border ${item.border} mb-3 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all`}>
              <Icon className={`w-6 h-6 ${item.color}`} />
            </div>

            <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-purple-300 font-mono tracking-tight">
              {item.value}
            </div>

            <div className="text-xs sm:text-sm font-bold text-white mt-1">
              {item.label}
            </div>

            <div className="text-[10px] sm:text-xs text-pink-200/60 font-mono mt-0.5">
              {item.sublabel}
            </div>
          </div>
        );
      })}
    </div>
  );
}
