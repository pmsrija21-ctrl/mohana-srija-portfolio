import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function ExperienceTimeline() {
  const { currentTheme } = useTheme();
  const timeline = portfolioData.timeline || [];

  return (
    <div className="mt-20">
      <div className="text-center mb-14">
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Experience & Education Journey
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mt-1 font-mono">
          Milestones across engineering, internships, and national leadership
        </p>
      </div>

      {/* Storyboard Slide 8: Glowing S-Curve Circuit Line with 5 Milestones */}
      <div className="relative max-w-4xl mx-auto px-4">
        {/* The Central Glowing Multi-Stop Circuit Track */}
        <div
          className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 rounded-full"
          style={{
            background: `linear-gradient(180deg, ${currentTheme.primary}, ${currentTheme.secondary}, ${currentTheme.tertiary})`,
            boxShadow: `0 0 20px ${currentTheme.glow}`,
          }}
        />

        <div className="space-y-12 relative">
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id || index}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                } gap-8 group`}
              >
                {/* Glowing Numbered Circuit Pin matching Storyboard */}
                <div
                  className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0a0316] border-2 font-mono font-black text-xs flex items-center justify-center z-20 group-hover:scale-125 transition-all"
                  style={{
                    borderColor: currentTheme.primary,
                    color: currentTheme.textAccent,
                    boxShadow: `0 0 20px ${currentTheme.glow}`,
                  }}
                >
                  {item.step || index + 1}
                </div>

                {/* Milestone Content Card */}
                <div
                  className={`ml-12 sm:ml-0 sm:w-1/2 ${
                    isEven ? 'sm:pr-12 text-left sm:text-right' : 'sm:pl-12 text-left'
                  }`}
                >
                  <div
                    className="p-6 rounded-3xl bg-[#120528]/90 backdrop-blur-xl border shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-[1.02]"
                    style={{
                      borderColor: currentTheme.border,
                      boxShadow: `0 8px 30px 0 rgba(0, 0, 0, 0.4)`,
                    }}
                  >
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-mono mb-2"
                      style={{
                        backgroundColor: `${currentTheme.primary}20`,
                        border: `1px solid ${currentTheme.primary}50`,
                        color: currentTheme.textAccent,
                      }}
                    >
                      {item.role}
                    </span>

                    <h4 className="text-lg font-bold text-white transition-colors">
                      {item.title}
                    </h4>

                    <div
                      className={`flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 my-2 ${
                        isEven ? 'sm:justify-end' : 'justify-start'
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" style={{ color: currentTheme.primary }} />
                        <span>{item.period}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" style={{ color: currentTheme.secondary }} />
                        <span>{item.location}</span>
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
