import React, { useState } from 'react';
import {
  Code2, Globe, Database, Wrench, Sparkles, Cpu, Palette,
  Briefcase, Calendar, CheckCircle, ExternalLink, Trophy
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsExperienceSection() {
  const { skills, experience } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryIcons = {
    Code2: Code2,
    Globe: Globe,
    Database: Database,
    Wrench: Wrench,
    Sparkles: Sparkles,
    Cpu: Cpu,
    Palette: Palette,
  };

  const skillCategoryKeys = Object.keys(skills);

  return (
    <section id="skills-experience" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>04 // Competencies & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            SKILLS & EXPERIENCE
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Core technical mastery and industry internship achievements
          </p>
        </div>

        {/* ============================================================ */}
        {/* PART A: SKILLS MATRIX (NO FAKE PERCENTAGES) */}
        {/* ============================================================ */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2.5 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full" />
            <h3 className="text-2xl font-bold text-white">
              Technical Skill Matrix
            </h3>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                activeCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_#00f0ff]'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              All Skills ({Object.values(skills).reduce((acc, cat) => acc + cat.items.length, 0)})
            </button>
            {skillCategoryKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  activeCategory === key
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_#00f0ff]'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {skills[key].title}
              </button>
            ))}
          </div>

          {/* Categorized Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategoryKeys
              .filter((k) => activeCategory === 'all' || activeCategory === k)
              .map((key) => {
                const cat = skills[key];
                const IconComp = categoryIcons[cat.icon] || Code2;
                return (
                  <div
                    key={key}
                    className="glass-card rounded-2xl p-6 group hover:border-cyan-400/50 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cat.title}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((skill, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#070b19]/90 border border-slate-800 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(0,240,255,0.25)] transition-all"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* PART B: EXPERIENCE TIMELINE */}
        {/* ============================================================ */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2.5 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full" />
            <h3 className="text-2xl font-bold text-white">
              Professional Experience & Leadership
            </h3>
          </div>

          <div className="relative border-l border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {experience.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline node dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#030712] border-2 border-cyan-400 shadow-[0_0_12px_#00f0ff] group-hover:scale-125 transition-transform" />

                <div className="glass-card rounded-2xl p-6 sm:p-8 hover:border-cyan-400/40 transition-all">
                  {/* Header: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-purple-300">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Project milestones (if any) */}
                  {exp.projects.length > 0 && (
                    <div className="space-y-3 mb-6">
                      <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                        Milestone Deliverables:
                      </p>
                      <div className="grid grid-cols-1 gap-2.5">
                        {exp.projects.map((proj, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-3.5 rounded-xl bg-[#070b19]/80 border border-slate-800 text-xs"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                              <span className="font-bold text-white">
                                {proj.name}
                              </span>
                              <span className="font-mono text-purple-300 text-[11px]">
                                {proj.stack}
                              </span>
                            </div>
                            <p className="text-slate-300">{proj.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Credentials / Documents */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                    {exp.certificatePdf && (
                      <a
                        href={exp.certificatePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/30 text-cyan-300 hover:text-white transition-all flex items-center gap-1.5"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>{exp.isOfferLetter ? 'View Offer Letter' : 'View Internship Certificate'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {exp.lorPdf && (
                      <a
                        href={exp.lorPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl text-xs font-semibold bg-purple-500/15 hover:bg-purple-500/25 border border-purple-400/30 text-purple-300 hover:text-white transition-all flex items-center gap-1.5"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>View Letter of Recommendation</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
