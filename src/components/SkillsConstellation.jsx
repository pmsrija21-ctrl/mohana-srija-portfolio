import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Play, Pause, Sparkles, Orbit } from 'lucide-react';

export default function SkillsConstellation() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isRotating, setIsRotating] = useState(true);
  const [rotation, setRotation] = useState(0);
  const lastTimeRef = useRef(performance.now());
  const animFrameRef = useRef(null);

  // Key skills positioned in planetary orbits around "Mohana" core in Royal Violet & Neon Rose
  const orbitalSkills = [
    { name: 'Python', baseAngle: 0, radius: 135, speed: 1.0, color: '#fb7185', category: 'Programming' },
    { name: 'Java', baseAngle: 40, radius: 180, speed: 0.8, color: '#ec4899', category: 'Programming' },
    { name: 'React', baseAngle: 80, radius: 135, speed: 1.0, color: '#c084fc', category: 'Web' },
    { name: 'SQL', baseAngle: 120, radius: 180, speed: 0.8, color: '#a855f7', category: 'Databases' },
    { name: 'MongoDB', baseAngle: 160, radius: 135, speed: 1.0, color: '#d946ef', category: 'Databases' },
    { name: 'Cloud', baseAngle: 200, radius: 180, speed: 0.8, color: '#f43f5e', category: 'Tools' },
    { name: 'C++', baseAngle: 240, radius: 135, speed: 1.0, color: '#a78bfa', category: 'Programming' },
    { name: 'JavaScript', baseAngle: 280, radius: 180, speed: 0.8, color: '#f472b6', category: 'Web' },
    { name: 'Node.js', baseAngle: 320, radius: 135, speed: 1.0, color: '#e879f9', category: 'Web' },
  ];

  useEffect(() => {
    const loop = (currentTime) => {
      const delta = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      if (isRotating && !hoveredSkill) {
        setRotation((prev) => (prev + delta * 16) % 360);
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };

    lastTimeRef.current = performance.now();
    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isRotating, hoveredSkill]);

  return (
    <div className="mb-24 text-center">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono uppercase tracking-wider mb-2">
          <span>04 // Planetary Solar Constellation</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          My Skills Constellation
        </h3>
        <p className="text-pink-200/70 text-xs sm:text-sm mt-1 font-mono">
          Orbiting planetary technologies around the core engine
        </p>

        {/* Rotation Toggle Button */}
        <div className="mt-3 flex justify-center">
          <button
            onClick={() => setIsRotating((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14062c]/80 border border-pink-500/30 text-pink-300 hover:border-pink-400 text-xs font-mono transition-all shadow-[0_0_15px_rgba(236,72,153,0.2)]"
          >
            <Orbit className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
            <span>{isRotating ? 'Planets Orbiting (Click to Pause)' : 'Paused (Click to Resume Orbit)'}</span>
          </button>
        </div>
      </div>

      {/* Central Planetary Constellation Visualization */}
      <div className="relative w-full max-w-xl mx-auto aspect-square flex items-center justify-center select-none overflow-hidden p-4">
        {/* Orbital Background Ellipses */}
        <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-pink-500/25 pointer-events-none" />
        <div
          className="absolute w-80 h-80 sm:w-[370px] sm:h-[370px] rounded-full border border-purple-500/30 border-dashed pointer-events-none"
          style={{ transform: `rotate(${rotation * 0.4}deg)` }}
        />

        {/* Central Core: "Mohana" */}
        <div className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 via-purple-500 to-rose-400 shadow-[0_0_45px_rgba(236,72,153,0.7)] flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-[#0d041c] flex flex-col items-center justify-center text-center p-2 border border-pink-400/40">
            <span className="text-sm sm:text-base font-extrabold text-white tracking-wider">
              Mohana
            </span>
            <span className="text-[9px] font-mono text-pink-300">Core</span>
          </div>
        </div>

        {/* Continuously Orbiting Planetary Skill Nodes */}
        {orbitalSkills.map((skill, idx) => {
          const currentAngle = (skill.baseAngle + rotation * skill.speed) % 360;
          const rad = (currentAngle * Math.PI) / 180;
          const r = typeof window !== 'undefined' && window.innerWidth < 640 ? skill.radius * 0.72 : skill.radius;
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;

          const isHovered = hoveredSkill === skill.name;

          return (
            <div
              key={idx}
              className="absolute z-30 cursor-pointer"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                transition: hoveredSkill === skill.name ? 'transform 0.15s ease-out' : 'none',
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 backdrop-blur-md transition-all ${
                  isHovered
                    ? 'bg-pink-500 text-white scale-125 shadow-[0_0_25px_#ec4899]'
                    : 'bg-[#15072e]/90 border border-purple-800 text-pink-100 hover:border-pink-400 hover:text-pink-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]'
                }`}
                style={{
                  borderColor: isHovered ? '#ec4899' : `${skill.color}70`,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}` }}
                />
                <span>{skill.name}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mt-8 text-left">
        {Object.entries(portfolioData.skills).map(([key, cat]) => (
          <div
            key={key}
            className="p-4 rounded-2xl bg-[#110526]/80 border border-purple-900/60 hover:border-pink-500/50 transition-all"
          >
            <span className="text-[11px] font-mono text-pink-400 uppercase font-bold block mb-2">
              {cat.title}
            </span>
            <div className="flex flex-wrap gap-1">
              {cat.items.map((item, i) => (
                <span
                  key={i}
                  className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-purple-950/80 border border-purple-800/60 text-pink-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
