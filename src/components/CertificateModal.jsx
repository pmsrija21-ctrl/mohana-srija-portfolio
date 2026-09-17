import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Award } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-cert-title"
    >
      <div
        className="relative w-full max-w-4xl h-[85vh] rounded-3xl bg-[#070b19] border border-cyan-400/40 p-4 sm:p-6 shadow-[0_0_60px_rgba(0,240,255,0.3)] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-cert-title" className="text-lg sm:text-xl font-bold text-white">
                {certificate.title}
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                {certificate.issuer}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-all"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={certificate.file}
              download
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-all"
              title="Download PDF"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-red-400 text-slate-300 hover:text-white transition-all ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 w-full my-4 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative">
          <iframe
            src={certificate.file}
            title={certificate.title}
            className="w-full h-full border-0"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-400">
          <p className="font-mono">
            Skills: <span className="text-slate-200">{certificate.skills}</span>
          </p>
          <div className="flex items-center gap-3">
            <a
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:underline flex items-center gap-1"
            >
              <span>Open PDF directly in new tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
