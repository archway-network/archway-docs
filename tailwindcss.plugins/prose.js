const defaultTheme = theme => ({
  css: {
    '*' :{scrollbarWidth:'thin'},
    'pre::-webkit-scrollbar':{
      width:'6px',
      height:'6px',
      borderRadius:'10px'
    },
    'pre::-webkit-scrollbar-thumb':{
      background:theme('colors.gray.200')
    },
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
      color: 'var(--tw-prose-headings)',
      textDecoration: 'none',
      '&:hover': {
        color: 'var(--tw-prose-headings)',
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
      fontWeight: '700'
    },
    table: {
      ':last-child': {
        borderBottom: 'none',
      },
    },
    'th,td': {
      borderLeft: `1px solid ${theme('colors.gray.400')}`,
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '150%',
      paddingLeft: '0px',
      color: 'var(--tw-prose-headings)',
      maxWidth: '117px',
    },
    tr: {
      borderBottom: `1px solid ${theme('colors.gray.400')}`,
      ':first-child': {
        paddingLeft: '0px',
        borderLeft: 'none',
        textAlign: 'left',
        minWidth: '156px',
      },
    },
    'pre':{
      backgroundColor:theme('colors.gray.1000'),
      borderRadius:'1rem',
      color:theme('colors.black.DEFAULT'),
      padding:'32px',
      width:'100%'
    },
    'code::before': {
      content: '',
    },
    'code::after': {
      content: '',
    },
    'code':{
      backgroundColor: theme('colors.gray.1000'),
      color:theme('colors.black.DEFAULT'),
      border: "0.1rem solid rgba(0,0,0,.1)",
      borderRadius: '8px',
      padding:'8px',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '150%'
  }
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
