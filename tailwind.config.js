/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        surface: '#0f172a',
        accent: '#22d3ee',
        accentSecondary: '#14b8a6',
        primary: '#e2e8f0',
        secondary: '#cbd5e1',
      },
      boxShadow: {
        glow: '0 0 40px rgba(34, 211, 238, 0.22)',
        glowSoft: '0 0 80px rgba(20, 184, 166, 0.16)',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow':
          'linear-gradient(135deg, rgba(34,211,238,0.18), rgba(20,184,166,0.08) 55%, rgba(15,23,42,0.02))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(0, -14px, 0) scale(1.04)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '33%': { transform: 'translate3d(20px, -16px, 0)' },
          '66%': { transform: 'translate3d(-14px, 18px, 0)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        drift: 'drift 16s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
