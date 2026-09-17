import React, { useState, useEffect } from 'react';
import { Award, Download, ExternalLink, ChevronLeft, ChevronRight, FileText, CheckCircle2, ShieldCheck, Sparkles, RotateCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function CertificatesResumeSection() {
  const { certifications, personal } = portfolioData;
  const [activeCertIndex, setActiveCertIndex] = useState(0);
  const [activeCertModal, setActiveCertModal] = useState(null);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  const prevCert = () => {
    setActiveCertIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
  };

  const nextCert = () => {
    setActiveCertIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
  };

  // Continuous auto-advance rotation every 4.5 seconds
  useEffect(() => {
    if (isCarouselHovered || activeCertModal) return;
    const interval = setInterval(() => {
      setActiveCertIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isCarouselHovered, activeCertModal, certifications.length]);

  return (
    <section id="certificates-resume" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================ */}
        {/* STORYBOARD SLIDE 9: AUTO-ROTATING CERTIFICATES CAROUSEL */}
        {/* ============================================================ */}
        <div
          className="mb-24"
          onMouseEnter={() => setIsCarouselHovered(true)}
          onMouseLeave={() => setIsCarouselHovered(false)}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono uppercase tracking-wider mb-2">
                <span>05 // Accreditations</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Certificates
              </h2>
              <p className="text-pink-200/70 text-xs sm:text-sm mt-1 font-mono flex items-center gap-2">
                <span>Verified skills. Real achievements.</span>
                <span className="text-pink-400 text-[11px] hidden sm:inline-flex items-center gap-1">
                  <RotateCw className="w-3 h-3 animate-spin" style={{ animationDuration: '10s' }} />
                  <span>Auto-cycling</span>
                </span>
              </p>
            </div>

            {/* Carousel Navigation Arrows matching Storyboard */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevCert}
                className="p-3 rounded-full bg-purple-950 border border-purple-800 hover:border-pink-400 text-purple-200 hover:text-pink-300 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                aria-label="Previous certificate"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-pink-200/70">
                {activeCertIndex + 1} / {certifications.length}
              </span>
              <button
                onClick={nextCert}
                className="p-3 rounded-full bg-purple-950 border border-purple-800 hover:border-pink-400 text-purple-200 hover:text-pink-300 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
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
                  className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#ffffff]/95 to-[#fce7f3]/95 text-slate-900 border border-pink-300/50 shadow-[0_15px_50px_rgba(236,72,153,0.2)] flex flex-col justify-between group hover:scale-[1.03] transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 border-b border-pink-100 pb-3">
                      <span className="text-xs font-mono font-bold tracking-wider text-purple-800 uppercase">
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
                      <p className="text-xs font-semibold text-purple-900 mt-1 font-mono">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-pink-50/70 border border-pink-100 text-xs text-slate-800 mb-6">
                      <span className="font-bold text-slate-900">Verified Competencies: </span>
                      {cert.skills}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-pink-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500">
                      {cert.date}
                    </span>
                    <button
                      onClick={() => setActiveCertModal(cert)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-purple-950 hover:bg-pink-600 text-white shadow-md transition-all"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5 text-pink-400 group-hover:text-white" />
                    </button>
                  </div>

                  {/* Reflective Ground Shadow */}
                  <div className="absolute -bottom-6 left-4 right-4 h-4 bg-gradient-to-b from-pink-400/25 to-transparent blur-md rounded-full pointer-events-none" />
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
            <p className="text-pink-200/70 text-xs sm:text-sm mt-1 font-mono">
              Download my resume or view it online.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#110526]/90 backdrop-blur-2xl border border-pink-500/40 shadow-[0_0_60px_rgba(236,72,153,0.25)] flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
            {/* Ambient Light Beam */}
            <div className="absolute top-0 left-1/4 w-40 h-full bg-gradient-to-b from-pink-400/20 via-purple-500/10 to-transparent blur-3xl pointer-events-none transform -skew-x-12" />

            {/* 3D Tilted Floating Resume Document Preview */}
            <div className="relative flex flex-col items-center">
              <div
                className="w-56 sm:w-64 aspect-[1/1.4] rounded-2xl bg-gradient-to-br from-white via-pink-50/50 to-slate-100 text-slate-900 p-5 shadow-[0_20px_50px_rgba(236,72,153,0.35)] border border-pink-300 transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3 border-b border-pink-200 pb-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-pink-600 to-purple-600 text-white flex items-center justify-center font-bold text-xs">
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
                  <span className="text-pink-600 font-bold">PDF</span>
                </div>
              </div>

              {/* Glowing circular pedestal underneath */}
              <div className="w-52 h-6 rounded-[100%] bg-gradient-to-r from-pink-400 via-purple-500 to-rose-400 blur-sm shadow-[0_0_30px_#ec4899] mt-4 opacity-80" />
            </div>

            {/* Action Buttons & Summary matching Storyboard Slide 10 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 max-w-md">
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Comprehensive Curriculum Vitae
              </h4>
              <p className="text-sm text-pink-100/90 leading-relaxed">
                Detailed profile covering B.Tech CSE coursework (Vignan University), MERN & AI project architectures, 3 industry internships, and 11+ professional credentials.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full pt-4">
                <a
                  href={personal.resumePath}
                  download="Mohana-Srija-Puram-Resume.pdf"
                  className="flex-1 py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white shadow-[0_0_25px_rgba(236,72,153,0.5)] flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>

                <a
                  href={personal.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold bg-[#1a0730]/90 hover:bg-[#250a44] border border-pink-400/50 text-pink-300 hover:text-white flex items-center justify-center gap-2 transition-all"
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
