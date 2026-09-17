import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceTimeline() {
  const { timeline } = portfolioData;

  return (
    <div className="mt-20">
      <div className="text-center mb-14">
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Experience & Education Journey
        </h3>
        <p className="text-pink-200/70 text-xs sm:text-sm mt-1 font-mono">
          Milestones across engineering, internships, and national leadership
        </p>
      </div>

      {/* Storyboard Slide 8: Glowing S-Curve Circuit Line with 5 Milestones */}
      <div className="relative max-w-4xl mx-auto px-4">
        {/* The Central Glowing Multi-Stop Circuit Track */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-pink-500 via-purple-500 to-rose-500 shadow-[0_0_20px_rgba(236,72,153,0.8)] rounded-full" />

        <div className="space-y-12 relative">
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                } gap-8 group`}
              >
                {/* Glowing Numbered Circuit Pin matching Storyboard */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0a0316] border-2 border-pink-400 text-pink-300 font-mono font-black text-xs flex items-center justify-center shadow-[0_0_20px_#ec4899] z-20 group-hover:scale-125 group-hover:bg-pink-500 group-hover:text-white transition-all">
                  {item.step}
                </div>

                {/* Milestone Content Card */}
                <div
                  className={`ml-12 sm:ml-0 sm:w-1/2 ${
                    isEven ? 'sm:pr-12 text-left sm:text-right' : 'sm:pl-12 text-left'
                  }`}
                >
                  <div className="p-6 rounded-3xl bg-[#120528]/90 backdrop-blur-xl border border-purple-900/60 group-hover:border-pink-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.5)] group-hover:shadow-[0_10px_40px_rgba(236,72,153,0.2)] transition-all duration-300">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-pink-500/15 border border-pink-400/40 text-pink-300 mb-2">
                      {item.role}
                    </span>

                    <h4 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                      {item.title}
                    </h4>

                    <div
                      className={`flex flex-wrap items-center gap-3 text-xs font-mono text-purple-300/80 my-2 ${
                        isEven ? 'sm:justify-end' : 'justify-start'
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-pink-400" />
                        <span>{item.period}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-rose-400" />
                        <span>{item.location}</span>
                      </span>
                    </div>

                    <p className="text-xs text-pink-100/80 leading-relaxed mt-2">
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
