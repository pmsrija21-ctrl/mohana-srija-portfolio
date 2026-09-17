import React from 'react';

export default function CosmicSilhouette() {
  return (
    <div className="relative w-full max-w-md aspect-[4/5] mx-auto flex items-center justify-center select-none">
      {/* Backlight Aurora & Glow */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500/30 via-purple-600/40 to-pink-500/25 blur-3xl animate-pulse-glow" />

      {/* Stylized Artistic Cosmic Silhouette matching Slide 2 */}
      <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-cyan-400/30 bg-gradient-to-b from-[#0a0f28] via-[#060b1e] to-[#030612] flex items-end justify-center shadow-[0_0_50px_rgba(0,240,255,0.2)]">
        {/* Stars inside portrait frame */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#00f0ff_1px,transparent_1px),radial-gradient(#a855f7_1px,transparent_1px)] bg-[size:20px_20px]" />

        {/* Profile Silhouette Illustration with Rim Lighting */}
        <svg
          viewBox="0 0 300 380"
          className="w-full h-full object-cover"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="rimGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
            </linearGradient>
            <filter id="neonBlur">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Glowing Atmospheric Rim Behind Head */}
          <circle cx="165" cy="140" r="100" fill="none" stroke="url(#rimGlow)" strokeWidth="1.5" opacity="0.4" strokeDasharray="6 6" />

          {/* Shoulders & Jacket Silhouette */}
          <path
            d="M50 380 C70 300 110 270 150 260 C180 270 230 300 250 380 Z"
            fill="#030712"
            stroke="url(#rimGlow)"
            strokeWidth="1.5"
          />

          {/* Neck */}
          <path
            d="M135 210 L135 265 C145 268 155 268 165 265 L165 210 Z"
            fill="#050a1b"
          />

          {/* Profile Face & Hair (Facing Left towards the Hero Text) */}
          <path
            d="M140 100 C120 100 105 120 105 140 C105 155 110 168 118 175 C116 182 118 190 125 195 C132 200 145 208 155 210 C165 208 175 200 180 185 C195 180 205 160 205 135 C205 105 185 95 155 95 Z"
            fill="#070c22"
          />

          {/* Flowing Back Hair with Cosmic Rim Highlight */}
          <path
            d="M155 95 C190 95 215 115 220 150 C225 185 220 225 225 270 C205 260 190 230 185 210 C180 195 185 150 180 130 C175 115 165 105 155 95 Z"
            fill="#030614"
            stroke="url(#rimGlow)"
            strokeWidth="2"
            filter="url(#neonBlur)"
          />

          {/* Profile Line (Face Contour facing left) */}
          <path
            d="M135 110 C128 118 120 128 118 135 C115 142 120 145 125 147 C120 153 118 160 124 165 C122 172 125 178 130 182 C135 186 142 190 148 192"
            stroke="#00f0ff"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            filter="url(#neonBlur)"
          />

          {/* Cosmic Stardust in Hair */}
          <circle cx="190" cy="130" r="1.5" fill="#00f0ff" />
          <circle cx="205" cy="160" r="2" fill="#a855f7" />
          <circle cx="195" cy="190" r="1.5" fill="#ffffff" />
          <circle cx="210" cy="220" r="2" fill="#ec4899" />
          <circle cx="175" cy="150" r="1" fill="#00f0ff" />
        </svg>

        {/* Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
