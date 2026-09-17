import React from 'react';
import { GraduationCap, Briefcase, Award, FolderGit2, BookOpen, CheckCircle2, School } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  const { quickStats, education, personal } = portfolioData;

  const statIcons = {
    GraduationCap: GraduationCap,
    Briefcase: Briefcase,
    Award: Award,
    FolderGit2: FolderGit2,
  };

  return (
    <section id="about" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>02 // Background & Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            ABOUT ME
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Engineering Foundation, Academic Milestones & Technical Drive
          </p>
        </div>

        {/* 4 Compact Futuristic Statistic Cards (Strictly Resume Truth) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {quickStats.map((stat) => {
            const IconComponent = statIcons[stat.icon] || Award;
            return (
              <div
                key={stat.id}
                className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center group hover:scale-[1.02] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-4 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-cyan-300 mt-1 uppercase tracking-wider font-mono">
                  {stat.label}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 mt-1">
                  {stat.sub}
                </span>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid: About Narrative & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* About Me Narrative Card */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Developer Profile
                </h3>
              </div>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  I am a passionate <span className="text-cyan-300 font-semibold">Computer Science and Engineering</span> student at{' '}
                  <span className="text-white font-medium">Vignan's Foundation for Science, Technology and Research</span>. My engineering journey is anchored in core computer science principles: object-oriented paradigms, data structures, algorithms, and operating system mechanics.
                </p>
                <p>
                  My hands-on development specializes in the <span className="text-purple-300 font-semibold">MERN stack</span> (MongoDB, Express, React, Node.js) alongside Python and Flask backends. I build full-stack web applications with responsive modern interfaces and robust data pipelines.
                </p>
                <p>
                  Currently, I am actively expanding into <span className="text-cyan-300 font-semibold">Artificial Intelligence & Machine Learning</span>, engineering multi-agent workflows, and integrating LLMs such as OpenAI API, Gemini API, and Groq Llama 3 into real-world autonomous platforms.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 font-mono">Location</p>
                <p className="text-xs font-medium text-slate-200">{personal.location}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400 font-mono">Status</p>
                <p className="text-xs font-semibold text-emerald-400">Undergraduate 2024–2028</p>
              </div>
            </div>
          </div>

          {/* Education Breakdown Timeline */}
          <div className="lg:col-span-7 glass-card-purple rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#070b19]/70 border border-slate-800 hover:border-purple-500/40 transition-all group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 self-start sm:self-auto">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm text-cyan-300 font-medium mb-2 flex items-center gap-1.5">
                    <School className="w-4 h-4 text-cyan-400" />
                    <span>{edu.institution}</span>
                  </p>

                  <div className="inline-block px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-emerald-300 mb-3">
                    {edu.score}
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
