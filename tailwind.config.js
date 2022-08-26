const defaultTheme = require('tailwindcss/defaultTheme');
const typographyPlugin = require('./src/tailwindcss.plugins/typography');

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['TWK Everett', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        black: {
          DEFAULT: '#000000',
          warm: '#242424',
        },
        gray: {
          100: '#F7F7F7',
          200: '#dddddd',
          300: '#a5a5a5',
          400: '#3a3a3a',
          DEFAULT: '#555555',
          800: '#999999',
          900: '#101010',
        },
        orange: {
          DEFAULT: '#ff4d00',
        },
      },
      boxShadow: {
        card: '16px 32px 128px -8px rgba(0, 0, 0, 0.07)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
      },
    },
  },
  plugins: [typographyPlugin],
};
