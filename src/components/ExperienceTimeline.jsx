import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceTimeline() {
  const { experience } = portfolioData;

  const timelineMilestones = [
    {
      id: 'vignan',
      period: '2024 - 2028',
      role: 'B.Tech CSE',
      company: "Vignan's University",
      type: 'Education & Systems Core',
      desc: 'Pursuing undergraduate degree in Computer Science and Engineering with 8.15 CGPA.',
      certPdf: null,
    },
    {
      id: 'prodigy',
      period: '2024',
      role: 'Web Development Intern',
      company: 'Prodigy InfoTech',
      type: 'Internship',
      desc: 'Built landing pages, stopwatch, interactive Tic-Tac-Toe, and weather API web applications.',
      certPdf: './certificates/prodigy-internship-certificate.pdf',
    },
    {
      id: 'codealpha',
      period: '2024',
      role: 'Python & App Developer Intern',
      company: 'CodeAlpha',
      type: 'Internship',
      desc: 'Engineered Fitness Tracker App, Language Learning Platform, and Smart Flashcards Hub.',
      certPdf: './certificates/codealpha-internship-certificate.pdf',
    },
    {
      id: 'unified',
      period: 'Commencing 2026',
      role: 'AI / ML Intern',
      company: 'Unified Mentor',
      type: 'Upcoming Internship',
      desc: 'Selected for advanced industry internship focusing on real-world AI/ML deployments.',
      certPdf: './certificates/unified-mentor-offer-letter.pdf',
    },
    {
      id: 'chess',
      period: 'Present',
      role: 'National Chess Coordinator',
      company: '62nd National Chess Championship',
      type: 'Leadership & Extracurricular',
      desc: 'Directed national tournament operations at Vignan University; actively expanding software & AI projects.',
      certPdf: null,
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Experience Timeline
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mt-1 font-mono">
          My professional journey
        </p>
      </div>

      {/* Flowing Circuit Timeline matching Slide 8 */}
      <div className="relative max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#060b1e]/90 backdrop-blur-2xl border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.15)]">
        {/* Glowing S-Curve Pipeline Indicator */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-16 bottom-16 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_12px_#a855f7]" />

        <div className="space-y-8 relative z-10">
          {timelineMilestones.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.id}
                className={`flex flex-col lg:flex-row items-center gap-6 ${
                  isEven ? 'lg:flex-row-reverse text-left' : 'text-left'
                }`}
              >
                {/* Milestone Card */}
                <div className="w-full lg:w-[45%] p-5 rounded-2xl bg-[#040714] border border-slate-800 hover:border-purple-400/60 transition-all group">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-purple-500/15 border border-purple-400/40 text-purple-300">
                      {item.period}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.type}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.role}
                  </h4>
                  <p className="text-xs font-semibold text-purple-300 font-mono mb-2">
                    {item.company}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {item.desc}
                  </p>

                  {item.certPdf && (
                    <a
                      href={item.certPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:underline"
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>View Credential Document</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {/* Center Pin Node */}
                <div className="hidden lg:flex w-10 h-10 rounded-full bg-[#070b19] border-2 border-cyan-400 shadow-[0_0_12px_#00f0ff] items-center justify-center text-xs font-mono font-bold text-white z-20">
                  {idx + 1}
                </div>

                <div className="hidden lg:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
