import React, { useState, useEffect, useRef } from 'react';
import { Code2, Briefcase, Award, Sparkles, Move3d, RotateCw } from 'lucide-react';

export default function JourneyCube() {
  const [rotX, setRotX] = useState(-15);
  const [rotY, setRotY] = useState(25);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(performance.now());

  // Continuous 3D auto-rotation loop
  useEffect(() => {
    const loop = (currentTime) => {
      const delta = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      if (isAutoRotating && !isDragging && !isHovered) {
        setRotY((prev) => (prev + delta * 24) % 360);
        setRotX(-14 + Math.sin(currentTime * 0.0015) * 6);
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };

    lastTimeRef.current = performance.now();
    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isAutoRotating, isDragging, isHovered]);

  // Mouse Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;
    setRotY((prev) => prev + dx * 0.6);
    setRotX((prev) => Math.max(-60, Math.min(60, prev - dy * 0.6)));
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      startPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - startPos.current.x;
    const dy = e.touches[0].clientY - startPos.current.y;
    setRotY((prev) => prev + dx * 0.7);
    setRotX((prev) => Math.max(-60, Math.min(60, prev - dy * 0.7)));
    startPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <div className="mt-20 text-center select-none">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
        Explore My Journey
      </h3>

      <div className="flex items-center justify-center gap-3 mb-10 text-xs font-mono text-pink-200/70">
        <span className="flex items-center gap-1 text-pink-400">
          <RotateCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Auto-Rotating 3D Cube</span>
        </span>
        <span>•</span>
        <span className="flex items-center gap-1 text-purple-300">
          <Move3d className="w-3.5 h-3.5" />
          <span>Drag or Swipe to spin freely</span>
        </span>
      </div>

      {/* 3D Interactive Rotating Cube on Glowing Circular Pedestal in Royal Violet & Neon Rose */}
      <div
        className="relative w-72 h-72 mx-auto cursor-grab active:cursor-grabbing flex items-center justify-center touch-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          handleMouseUp();
          setIsHovered(false);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
            className="absolute inset-0 rounded-2xl bg-[#1a0730]/95 border-2 border-pink-400/80 p-4 flex flex-col items-center justify-center text-pink-300 shadow-[0_0_25px_rgba(236,72,153,0.5)] backdrop-blur-md"
            style={{ transform: 'translateZ(80px)' }}
          >
            <Code2 className="w-8 h-8 mb-2 text-pink-300" />
            <span className="text-sm font-bold font-mono">Projects</span>
            <span className="text-[10px] text-pink-200/60 mt-1">4 Core Works</span>
          </div>

          {/* Right Face: Experience */}
          <div
            className="absolute inset-0 rounded-2xl bg-[#24083c]/95 border-2 border-purple-400/80 p-4 flex flex-col items-center justify-center text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.5)] backdrop-blur-md"
            style={{ transform: 'rotateY(90deg) translateZ(80px)' }}
          >
            <Briefcase className="w-8 h-8 mb-2 text-purple-300" />
            <span className="text-sm font-bold font-mono">Experience</span>
            <span className="text-[10px] text-purple-200/60 mt-1">3 Internships</span>
          </div>

          {/* Back Face: Skills */}
          <div
            className="absolute inset-0 rounded-2xl bg-[#14062a]/95 border-2 border-rose-400/80 p-4 flex flex-col items-center justify-center text-rose-300 shadow-[0_0_25px_rgba(244,63,94,0.5)] backdrop-blur-md"
            style={{ transform: 'rotateY(180deg) translateZ(80px)' }}
          >
            <Sparkles className="w-8 h-8 mb-2 text-rose-300" />
            <span className="text-sm font-bold font-mono">Skills</span>
            <span className="text-[10px] text-rose-200/60 mt-1">MERN, AI, DSA</span>
          </div>

          {/* Left Face: Certificates */}
          <div
            className="absolute inset-0 rounded-2xl bg-[#2c0838]/95 border-2 border-fuchsia-400/80 p-4 flex flex-col items-center justify-center text-fuchsia-300 shadow-[0_0_25px_rgba(217,70,239,0.5)] backdrop-blur-md"
            style={{ transform: 'rotateY(-90deg) translateZ(80px)' }}
          >
            <Award className="w-8 h-8 mb-2 text-fuchsia-300" />
            <span className="text-sm font-bold font-mono">Certificates</span>
            <span className="text-[10px] text-fuchsia-200/60 mt-1">11+ Verified</span>
          </div>

          {/* Top Face */}
          <div
            className="absolute inset-0 rounded-2xl bg-[#110526]/95 border-2 border-pink-300/60 p-2 flex items-center justify-center text-pink-200"
            style={{ transform: 'rotateX(90deg) translateZ(80px)' }}
          >
            <span className="text-xs font-mono font-bold">MSP 2026</span>
          </div>

          {/* Bottom Face */}
          <div
            className="absolute inset-0 rounded-2xl bg-[#110526]/95 border-2 border-purple-300/60"
            style={{ transform: 'rotateX(-90deg) translateZ(80px)' }}
          />
        </div>

        {/* Glowing Circular Pedestal Beneath Cube in Neon Rose and Violet */}
        <div className="absolute -bottom-8 w-60 h-10 rounded-[100%] border-2 border-pink-400/60 bg-gradient-to-r from-pink-400/20 via-purple-500/25 to-rose-400/20 blur-[2px] shadow-[0_0_35px_#ec4899] pointer-events-none" />
      </div>

      {/* Quick Jump Bar */}
      <div className="flex flex-wrap justify-center gap-3 mt-14 max-w-xl mx-auto">
        <a href="#projects" className="px-4 py-1.5 rounded-full text-xs font-mono bg-pink-500/15 border border-pink-400/40 text-pink-300 hover:bg-pink-500 hover:text-white transition-all shadow-[0_0_15px_rgba(236,72,153,0.2)]">
          View Projects →
        </a>
        <a href="#skills-experience" className="px-4 py-1.5 rounded-full text-xs font-mono bg-purple-500/15 border border-purple-400/40 text-purple-300 hover:bg-purple-500 hover:text-white transition-all shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          View Skills & Timeline →
        </a>
        <a href="#certificates-resume" className="px-4 py-1.5 rounded-full text-xs font-mono bg-rose-500/15 border border-rose-400/40 text-rose-300 hover:bg-rose-500 hover:text-white transition-all shadow-[0_0_15px_rgba(244,63,94,0.2)]">
          View Certificates →
        </a>
      </div>
    </div>
  );
}
