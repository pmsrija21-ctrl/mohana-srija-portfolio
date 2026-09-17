import React, { useState } from 'react';
import { Award, Download, ExternalLink, FileText, CheckCircle2, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function CertificatesResumeSection() {
  const { certifications, personal } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCert, setActiveCert] = useState(null);

  const categories = ['All', 'Cisco', 'Tata', 'Unstop', 'NPTEL', 'Internships'];

  const filteredCerts =
    activeCategory === 'All'
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  return (
    <section id="certificates-resume" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>05 // Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            CERTIFICATES & RESUME
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Industry accreditations and official curriculum vitae
          </p>
        </div>

        {/* ============================================================ */}
        {/* PART A: HOLOGRAPHIC RESUME CARD */}
        {/* ============================================================ */}
        <div className="mb-20">
          <div className="glass-card-purple rounded-3xl p-8 sm:p-10 border border-purple-500/30 relative overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)]">
            <div className="absolute -right-16 -top-16 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/20 border border-purple-400/40 text-purple-300">
                    Official Resume
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Updated September 2026
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Mohana Srija Puram — Full CV
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Comprehensive documentation of academic metrics (CGPA 8.15 / 10), technical specializations in full-stack MERN & AI workflows, 3 industry internships, and 11+ professional certifications.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#070b19]/80 border border-slate-800">
                    <p className="text-[11px] text-slate-400 font-mono">Education</p>
                    <p className="text-xs font-bold text-white">B.Tech CSE (8.15 CGPA)</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#070b19]/80 border border-slate-800">
                    <p className="text-[11px] text-slate-400 font-mono">Focus</p>
                    <p className="text-xs font-bold text-cyan-300">MERN, AI & DSA</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#070b19]/80 border border-slate-800 col-span-2 sm:col-span-1">
                    <p className="text-[11px] text-slate-400 font-mono">Credentials</p>
                    <p className="text-xs font-bold text-purple-300">11+ Verified Certs</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href={personal.resumePath}
                  download="Mohana-Srija-Puram-Resume.pdf"
                  className="w-full py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href={personal.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl text-sm font-semibold bg-slate-900/90 hover:bg-slate-800 border border-purple-500/40 hover:border-purple-400 text-purple-300 hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Resume Online</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* PART B: CERTIFICATIONS GRID */}
        {/* ============================================================ */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full" />
              <h3 className="text-2xl font-bold text-white">
                Verified Certifications ({certifications.length})
              </h3>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    activeCategory === cat
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_#00f0ff]'
                      : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-cyan-400/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
                      {cert.category}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h4>

                  <p className="text-xs font-semibold text-purple-300 mb-3 font-mono">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    <span className="text-slate-400 font-mono">Competencies:</span> {cert.skills}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-300 hover:text-white transition-all flex items-center gap-1.5 shadow-[0_0_8px_rgba(0,240,255,0.2)]"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>

                  <a
                    href={cert.file}
                    download
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-400 transition-all"
                    title="Download certificate PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Certificate PDF Modal */}
      <CertificateModal
        certificate={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
}
