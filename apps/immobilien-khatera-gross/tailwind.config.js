const colors = require('tailwindcss/colors');

const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
      },
      fontFamily: {
        Geist: ['Geist', 'sans-serif'],
        GeistMono: ['Geist Mono', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#556b2f',
          100: '#46002a',
          200: '#445626',
          300: '#3b4b21',
          400: '#33401c',
          500: '#2b3618',
          600: '#222b13',
          700: '#1a200e',
          800: '#111500',
          900: '#080a05',
        },
        secondary: colors.stone,
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [],
  },
};
