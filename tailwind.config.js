/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tulipa: {
          50:  '#fff1f4',
          100: '#ffe4ea',
          200: '#ffccd7',
          300: '#ffa3b8',
          400: '#ff6d8e',
          500: '#f83d67',
          600: '#e8637a',
          700: '#c41b3d',
          800: '#a31838',
          900: '#891935',
          950: '#4d0719',
        },
        rose: {
          primary: '#e8637a',
          dark:    '#c94b60',
          light:   '#f4a0b0',
          bg:      '#fce4e8',
          muted:   '#fdf2f4',
        },
        berry: {
          900: '#4a1c2e',
          800: '#2d141e',
          700: '#3d1c28',
        }
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-tulipa':   'linear-gradient(135deg, #e8637a 0%, #c94b60 50%, #a83050 100%)',
        'gradient-hero':     'linear-gradient(135deg, #fff1f4 0%, #fce4e8 40%, #f4a0b0 100%)',
        'gradient-dark':     'linear-gradient(135deg, #1a0a10 0%, #2d141e 50%, #4a1c2e 100%)',
        'gradient-glass':    'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
        'gradient-card':     'linear-gradient(145deg, #ffffff 0%, #fdf2f4 100%)',
        'gradient-card-hover': 'linear-gradient(145deg, #fce4e8 0%, #f4a0b0 100%)',
        'mesh-pattern':      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e8637a' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'float':          'float 6s ease-in-out infinite',
        'float-delayed':  'float 6s ease-in-out 2s infinite',
        'float-slow':     'float 8s ease-in-out infinite',
        'shimmer':        'shimmer 2s linear infinite',
        'pulse-soft':     'pulse-soft 3s ease-in-out infinite',
        'slide-up':       'slideUp 0.6s ease-out',
        'fade-in':        'fadeIn 0.8s ease-out',
        'bounce-gentle':  'bounceGentle 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'spin-slow':      'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.6' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'tulipa':    '0 4px 30px rgba(232, 99, 122, 0.25)',
        'tulipa-lg': '0 10px 60px rgba(232, 99, 122, 0.35)',
        'glass':     '0 8px 32px rgba(31, 38, 135, 0.07)',
        'card':      '0 4px 20px rgba(0, 0, 0, 0.06)',
        'card-hover':'0 20px 60px rgba(232, 99, 122, 0.2)',
        'inner-glow':'inset 0 0 20px rgba(232, 99, 122, 0.1)',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
}

