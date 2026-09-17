/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: '#030712',
          900: '#070b19',
          850: '#0b112c',
          800: '#0f1738',
          700: '#16204d',
        },
        cyanGlow: '#00f0ff',
        purpleGlow: '#a855f7',
        magentaGlow: '#ec4899',
        neonBlue: '#38bdf8'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.4)',
        'glow-purple': '0 0 25px -5px rgba(168, 85, 247, 0.4)',
        'glow-card': '0 8px 32px 0 rgba(0, 240, 255, 0.1)',
        'glow-pill': '0 0 15px 0 rgba(0, 240, 255, 0.35)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
