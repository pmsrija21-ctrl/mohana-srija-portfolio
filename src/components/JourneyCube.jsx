import React, { useState, useRef } from 'react';
import { Code2, Briefcase, Award, Sparkles, Move3d } from 'lucide-react';

export default function JourneyCube() {
  const [rotX, setRotX] = useState(-15);
  const [rotY, setRotY] = useState(25);
  const [isDragging, setIsDragging] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;
    setRotY((prev) => prev + dx * 0.5);
    setRotX((prev) => Math.max(-60, Math.min(60, prev - dy * 0.5)));
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="mt-20 text-center select-none">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
        Explore My Journey
      </h3>
      <p className="text-slate-400 text-xs sm:text-sm mb-10 font-mono flex items-center justify-center gap-1.5">
        <Move3d className="w-4 h-4 text-cyan-400" />
        <span>Drag to explore</span>
      </p>

      {/* 3D Interactive Rotating Cube on Glowing Circular Pedestal matching Slide 4 */}
      <div
        className="relative w-72 h-72 mx-auto cursor-grab active:cursor-grabbing flex items-center justify-center"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ perspective: '1000px' }}
      >
        {/* The 3D Cube Container */}
        <div
          className="relative w-40 h-40 transition-transform duration-75"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          }}
        >
          {/* Front Face: Projects */}
          <div
            className="absolute inset-0 rounded-2xl bg-[#080d24]/90 border-2 border-cyan-400/80 p-4 flex flex-col items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] backdrop-blur-md"
            style={{ transform: 'translateZ(80px)' }}
          >
            <Code2 className="w-8 h-8 mb-2 text-cyan-300" />
            <span className="text-sm font-bold font-mono">Projects</span>
            <span className="text-[10px] text-slate-400 mt-1">4 Core Works</span>
          </div>

          {/* Right Face: Experience */}
          <div
            className="absolute inset-0 rounded-2xl bg-[#140a28]/90 border-2 border-purple-400/80 p-4 flex flex-col items-center justify-center text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] backdrop-blur-md"
            style={{ transform: 'rotateY(90deg) translateZ(80px)' }}
          >
            <Briefcase className="w-8 h-8 mb-2 text-purple-300" />
            <span className="text-sm font-bold font-mono">Experience</span>
            <span className="text-[10px] text-slate-400 mt-1">3 Internships</span>
          </div>

          {/* Back Face: Skills */}
          <div
            className="absolute inset-0 rounded-2xl bg-[#041624]/90 border-2 border-sky-400/80 p-4 flex flex-col items-center justify-center text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] backdrop-blur-md"
            style={{ transform: 'rotateY(180deg) translateZ(80px)' }}
          >
            <Sparkles className="w-8 h-8 mb-2 text-sky-300" />
            <span className="text-sm font-bold font-mono">Skills</span>
            <span className="text-[10px] text-slate-400 mt-1">MERN, AI, DSA</span>
          </div>

          {/* Left Face: Certificates */}
          <div
            className="absolute inset-0 rounded-2xl bg-[#1a0822]/90 border-2 border-pink-400/80 p-4 flex flex-col items-center justify-center text-pink-300 shadow-[0_0_20px_rgba(236,72,153,0.4)] backdrop-blur-md"
            style={{ transform: 'rotateY(-90deg) translateZ(80px)' }}
          >
            <Award className="w-8 h-8 mb-2 text-pink-300" />
            <span className="text-sm font-bold font-mono">Certificates</span>
            <span className="text-[10px] text-slate-400 mt-1">11+ Verified</span>
          </div>

          {/* Top Face */}
          <div
            className="absolute inset-0 rounded-2xl bg-[#070b1e]/90 border-2 border-cyan-300/40 p-2 flex items-center justify-center text-cyan-200"
            style={{ transform: 'rotateX(90deg) translateZ(80px)' }}
          >
            <span className="text-xs font-mono font-bold">MSP 2026</span>
          </div>

          {/* Bottom Face */}
          <div
            className="absolute inset-0 rounded-2xl bg-[#070b1e]/90 border-2 border-purple-300/40"
            style={{ transform: 'rotateX(-90deg) translateZ(80px)' }}
          />
        </div>

        {/* Glowing Circular Pedestal Beneath Cube */}
        <div className="absolute -bottom-8 w-60 h-10 rounded-[100%] border-2 border-cyan-400/60 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-cyan-400/20 blur-[2px] shadow-[0_0_35px_#00f0ff] pointer-events-none" />
      </div>

      {/* Quick Jump Bar */}
      <div className="flex flex-wrap justify-center gap-3 mt-14 max-w-xl mx-auto">
        <a href="#projects" className="px-4 py-1.5 rounded-full text-xs font-mono bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition-all">
          View Projects →
        </a>
        <a href="#skills-experience" className="px-4 py-1.5 rounded-full text-xs font-mono bg-purple-500/15 border border-purple-400/40 text-purple-300 hover:bg-purple-500 hover:text-white transition-all">
          View Skills & Timeline →
        </a>
        <a href="#certificates-resume" className="px-4 py-1.5 rounded-full text-xs font-mono bg-pink-500/15 border border-pink-400/40 text-pink-300 hover:bg-pink-500 hover:text-white transition-all">
          View Certificates →
        </a>
      </div>
    </div>
  );
}
