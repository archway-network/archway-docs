const defaultTheme = require('tailwindcss/defaultTheme');

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
          DEFAULT: '#555555',
        },
        orange: {
          DEFAULT: '#ff4d00',
        },
      },
      boxShadow: {
        card: '16px 32px 128px -8px rgba(0, 0, 0, 0.07)',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: '2.5rem',
              lineHeight: '120%',
            },
            h2: {
              fontSize: '2rem',
              lineHeight: '130%',
            },
            'h2 > em': {
              color: theme('colors.orange.DEFAULT'),
              fontSize: '4rem',
              fontWeight: '400',
              fontStyle: 'normal',
              lineHeight: '130%',
            },
            h3: {
              fontSize: '1rem',
              fontWeight: '700',
              lineHeight: '150%',
            },
            a: {
              color: theme('colors.orange.DEFAULT'),
              fontWeight: '400',
              textDecoration: 'no-underline',
            },
            ol: {
              listStyle: 'none',
              counterReset: 'listStyle',
              paddingLeft: 0,
            },
            'ol > li': {
              counterIncrement: 'listStyle',
              display: 'flex',
              alignItems: 'flex-start',
              '&:before': {
                display: 'block',
                paddingRight: '2rem',
                content: 'counter(listStyle, upper-alpha)',
                color: theme('colors.orange.DEFAULT'),
                fontSize: '40px',
                lineHeight: '120%',
                fontWeight: '400',
              },
            },
            'ol > li > p:first-of-type': {
              marginTop: '.75rem',
            },
          },
        },
      }),
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'markdown',
    }),
  ],
};
