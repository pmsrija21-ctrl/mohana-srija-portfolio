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
          950: '#06020e',
          900: '#0c041c',
          850: '#14062c',
          800: '#1c093c',
          700: '#280c54',
        },
        roseGlow: '#ec4899',
        violetGlow: '#a855f7',
        magentaGlow: '#f43f5e',
        orchidGlow: '#c084fc'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-rose': '0 0 25px -5px rgba(236, 72, 153, 0.45)',
        'glow-violet': '0 0 25px -5px rgba(168, 85, 247, 0.45)',
        'glow-card': '0 8px 32px 0 rgba(236, 72, 153, 0.12)',
        'glow-pill': '0 0 15px 0 rgba(236, 72, 153, 0.35)',
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
