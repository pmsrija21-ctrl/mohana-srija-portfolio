import React from 'react';
import { School, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import QuickStats from './QuickStats';
import JourneyCube from './JourneyCube';

export default function AboutSection() {
  const { education, personal } = portfolioData;

  return (
    <section id="about" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Storyboard Slide 3: Quick Stats */}
        <QuickStats />

        {/* Main Content Grid: Developer Profile & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* About Me Narrative Card */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  About Me
                </h3>
              </div>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  I am a motivated third-year <span className="text-cyan-300 font-semibold">Computer Science Engineering</span> student at{' '}
                  <span className="text-white font-medium">Vignan's Foundation for Science, Technology and Research</span> (CGPA: 8.15 / 10).
                </p>
                <p>
                  My engineering foundation is built on deep problem-solving rigor in <span className="text-purple-300 font-semibold">Data Structures & Algorithms</span>, operating systems, and system architecture.
                </p>
                <p>
                  I specialize in full-stack engineering with the <span className="text-cyan-300 font-semibold">MERN stack</span> (MongoDB, Express, React, Node.js) and Python/Flask microservices, actively integrating cutting-edge LLMs (OpenAI, Gemini, Groq Llama 3) to build autonomous AI systems.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              <div>
                <span className="text-slate-400">Location: </span>
                <span className="text-slate-200">{personal.location}</span>
              </div>
              <div>
                <span className="text-emerald-400 font-bold">2024–2028 (Expected)</span>
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

            <div className="space-y-5">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-[#070b19]/80 border border-slate-800 hover:border-purple-500/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 self-start sm:self-auto">
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

        {/* Storyboard Slide 4: Explore My Journey */}
        <JourneyCube />
      </div>
    </section>
  );
}
