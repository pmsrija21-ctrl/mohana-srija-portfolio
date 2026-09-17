import React from 'react';
import { Award, Briefcase, Code2, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function QuickStats() {
  const { currentTheme } = useTheme();

  const statItems = [
    {
      icon: GraduationCap,
      value: '8.15',
      label: 'CGPA',
      sublabel: "B.Tech CSE, Vignan's Univ",
      color: currentTheme.primary,
    },
    {
      icon: Briefcase,
      value: '3',
      label: 'Internships',
      sublabel: 'CodeAlpha, Prodigy, UM',
      color: currentTheme.secondary,
    },
    {
      icon: Award,
      value: '11+',
      label: 'Certifications',
      sublabel: 'Cisco, NPTEL, Unstop, Tata',
      color: currentTheme.tertiary,
    },
    {
      icon: Code2,
      value: '4',
      label: 'Projects',
      sublabel: 'AI & Full Stack Solutions',
      color: currentTheme.primary,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto my-12">
      {statItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="relative rounded-3xl p-6 bg-[#110526]/85 backdrop-blur-xl border hover:scale-[1.03] transition-all duration-300 flex flex-col items-center text-center group"
            style={{
              borderColor: currentTheme.border,
              boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.4)`,
            }}
          >
            {/* Top Gloss Highlight */}
            <div
              className="absolute inset-x-6 top-0 h-[1px]"
              style={{
                background: `linear-gradient(90deg, transparent, ${currentTheme.primary}70, transparent)`,
              }}
            />

            <div
              className="p-3 rounded-2xl bg-purple-950/80 border mb-3 transition-all"
              style={{ borderColor: currentTheme.border }}
            >
              <Icon className="w-6 h-6" style={{ color: item.color }} />
            </div>

            <div
              className="text-3xl sm:text-4xl font-black font-mono tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, #ffffff 0%, ${currentTheme.primary} 70%, ${currentTheme.secondary} 100%)`,
              }}
            >
              {item.value}
            </div>

            <div className="text-xs sm:text-sm font-bold text-white mt-1">
              {item.label}
            </div>

            <div className="text-[10px] sm:text-xs text-slate-400 font-mono mt-0.5">
              {item.sublabel}
            </div>
          </div>
        );
      })}
    </div>
  );
}
