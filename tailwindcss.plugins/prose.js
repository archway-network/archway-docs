const defaultTheme = theme => ({
  css: {
    a: {
      color: theme('colors.orange.DEFAULT'),
      '&:hover': {
        color: theme('colors.orange.DEFAULT'),
        textDecoration: 'none',
      },
    },
    'h1, h2, h3, h4, h5, h6': {
      fontWeight: 400,
      marginBottom: '42px',
      marginBottom: '21px',
    },
    'h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a': {
      color: theme('colors.black.DEFAULT'),
      textDecoration: 'none',
      '&:hover': {
        color: theme('colors.black.DEFAULT'),
      },
    },
    h1: {
      fontSize: '40px',
      lineHeight: '120%',
    },
    h2: {
      fontSize: '32px',
      lineHeight: '130%',
    },
    'h3, h4, h5': {
      fontSize: '16px',
      lineHeight: '150%',
    },
    // 'ol > li': {
    //   counterIncrement: 'listStyle',
    //   display: 'flex',
    //   alignItems: 'flex-start',
    //   '&:before': {
    //     display: 'block',
    //     paddingRight: '2rem',
    //     content: 'counter(listStyle, upper-alpha)',
    //     color: theme('colors.orange.DEFAULT'),
    //     fontSize: '40px',
    //     lineHeight: '120%',
    //     fontWeight: '400',
    //   },
    // },
    // 'ol > li > p:first-of-type': {
    //   marginTop: '.75rem',
    // },
  },
});

module.exports = theme => {
  return {
    DEFAULT: defaultTheme(theme),
  };
};
