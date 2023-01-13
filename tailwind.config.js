const defaultTheme = require('tailwindcss/defaultTheme');
const typographyPlugin = require('./tailwindcss.plugins/typography');
const prose = require('./tailwindcss.plugins/prose');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: {
        DEFAULT: '#000000',
        warm: '#242424',
      },
      gray: {
        DEFAULT: '#e4e4e4',
        100: '#f2efed',
        300: '#cccccc',
        400: '#dddddd',
        500: '#555555',
        600: '#666666',
        700: '#777777',
        800: '#888888',
        900: '#999999',
      },
      orange: {
        100: '#FFE2D6',
        DEFAULT: '#FF4D00',
      },
      green: {
        100: '#DBEDE0',
        DEFAULT: '#008223',
        700: '#00CF30',
      },
      yellow: {
        DEFAULT: '#F4CB63',
      },
      red: {
        100: '#F9D7DD',
        DEFAULT: '#D80228',
      },
    },
    fontFamily: {
      sans: ['TWK Everett', ...defaultTheme.fontFamily.sans],
      inter: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      boxShadow: {
        card: '16px 32px 128px -8px rgba(0, 0, 0, 0.7)',
      },
      borderColor: {
        DEFAULT: '#C2BFBE',
      },
      spacing: {
        30: '7.5rem',
        35: '8.75rem',
        45: '11.25rem',
        50: '12.5rem',
        60: '15rem',
        70: '17.5rem',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      typography: prose,
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@headlessui/tailwindcss'),
    typographyPlugin,
  ],
};
