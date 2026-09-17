import React, { useState } from 'react';
import { Award, Download, ExternalLink, ChevronLeft, ChevronRight, FileText, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function CertificatesResumeSection() {
  const { certifications, personal } = portfolioData;
  const [activeCertIndex, setActiveCertIndex] = useState(0);
  const [activeCertModal, setActiveCertModal] = useState(null);

  const prevCert = () => {
    setActiveCertIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
  };

  const nextCert = () => {
    setActiveCertIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="certificates-resume" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================ */}
        {/* STORYBOARD SLIDE 9: CERTIFICATES CAROUSEL */}
        {/* ============================================================ */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-2">
                <span>05 // Accreditations</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Certificates
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 font-mono">
                Verified skills. Real achievements.
              </p>
            </div>

            {/* Carousel Navigation Arrows matching Storyboard */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevCert}
                className="p-3 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                aria-label="Previous certificate"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-slate-400">
                {activeCertIndex + 1} / {certifications.length}
              </span>
              <button
                onClick={nextCert}
                className="p-3 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                aria-label="Next certificate"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Realistic Holographic Certificate Cards Standing on Reflective Floor */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {certifications
              .slice(activeCertIndex, activeCertIndex + 3)
              .concat(
                activeCertIndex + 3 > certifications.length
                  ? certifications.slice(0, (activeCertIndex + 3) % certifications.length)
                  : []
              )
              .slice(0, 3)
              .map((cert) => (
                <div
                  key={cert.id}
                  className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#ffffff]/95 to-[#e2e8f0]/95 text-slate-900 border border-cyan-300/40 shadow-[0_15px_50px_rgba(0,240,255,0.2)] flex flex-col justify-between group hover:scale-[1.03] transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-3">
                      <span className="text-xs font-mono font-bold tracking-wider text-purple-700 uppercase">
                        {cert.category}
                      </span>
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                        Certificate of Achievement
                      </span>
                      <h4 className="text-lg font-black text-slate-900 leading-tight mt-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-semibold text-purple-800 mt-1 font-mono">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 mb-6">
                      <span className="font-bold text-slate-900">Verified Competencies: </span>
                      {cert.skills}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                    <button
                      onClick={() => setActiveCertModal(cert)}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-[#070b19] text-cyan-300 hover:bg-slate-800 hover:text-white transition-all shadow-md flex items-center gap-1.5"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={cert.file}
                      download
                      className="p-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 transition-all"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* STORYBOARD SLIDE 10: 3D FLOATING RESUME PEDESTAL */}
        {/* ============================================================ */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Resume
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 font-mono">
              Download my resume or view it online.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#070b1e]/90 backdrop-blur-2xl border border-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,0.25)] flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
            {/* Ambient Light Beam */}
            <div className="absolute top-0 left-1/4 w-40 h-full bg-gradient-to-b from-cyan-400/20 via-purple-500/10 to-transparent blur-3xl pointer-events-none transform -skew-x-12" />

            {/* 3D Tilted Floating Resume Document Preview */}
            <div className="relative flex flex-col items-center">
              <div
                className="w-56 sm:w-64 aspect-[1/1.4] rounded-2xl bg-gradient-to-br from-white via-slate-100 to-slate-200 text-slate-900 p-5 shadow-[0_20px_50px_rgba(0,240,255,0.35)] border border-cyan-300 transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3 border-b border-slate-300 pb-2">
                    <div className="w-7 h-7 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-xs">
                      MS
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight">Mohana Srija Puram</p>
                      <p className="text-[9px] text-slate-500">CS Engineer • 8.15 CGPA</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-[9px] text-slate-700">
                    <div className="h-1.5 bg-slate-300 rounded w-full" />
                    <div className="h-1.5 bg-slate-200 rounded w-5/6" />
                    <div className="h-1.5 bg-slate-300 rounded w-4/6" />
                    <div className="pt-2">
                      <p className="font-bold text-[9px] text-purple-900">EXPERIENCE & INTERNSHIPS</p>
                      <div className="h-1 bg-slate-200 rounded w-full mt-1" />
                      <div className="h-1 bg-slate-200 rounded w-4/5 mt-0.5" />
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-300 flex justify-between items-center text-[9px] text-slate-500 font-mono">
                  <span>Official Document</span>
                  <span className="text-cyan-700 font-bold">PDF</span>
                </div>
              </div>

              {/* Glowing circular pedestal underneath */}
              <div className="w-52 h-6 rounded-[100%] bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 blur-sm shadow-[0_0_30px_#00f0ff] mt-4 opacity-80" />
            </div>

            {/* Action Buttons & Summary matching Storyboard Slide 10 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 max-w-md">
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Comprehensive Curriculum Vitae
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Detailed profile covering B.Tech CSE coursework (Vignan University), MERN & AI project architectures, 3 industry internships, and 11+ professional credentials.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full pt-4">
                <a
                  href={personal.resumePath}
                  download="Mohana-Srija-Puram-Resume.pdf"
                  className="flex-1 py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-[0_0_25px_rgba(168,85,247,0.5)] flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>

                <a
                  href={personal.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold bg-slate-900/90 hover:bg-slate-800 border border-purple-400/40 text-purple-300 hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Online</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeCertModal && (
        <CertificateModal
          certificate={activeCertModal}
          onClose={() => setActiveCertModal(null)}
        />
      )}
    </section>
  );
}
