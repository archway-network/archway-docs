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
    'h3, h4, h5,h3>a,h4>a,h5>a': {
      fontSize: '16px',
      lineHeight: '150%',
      fontWeight: '700',
      fontFamily: 'TWK Everett',
    },
    table: {
      ':last-child': {
        borderBottom: 'none',
      },
      'code':{
        borderBottom:"0.1rem solid rgba(0,0,0,.1)!important",
      }
    },
    'th,td': {
      borderLeft: `1px solid ${theme('colors.gray.400')}`,
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '150%',
      color: 'var(--tw-prose-headings)',
      maxWidth: '117px',
    },
    tr: {
      borderBottom: `1px solid ${theme('colors.gray.400')}`,
      ':first-child': {
        borderLeft: 'none',
        minWidth: '156px',
      },
      'code':{
        border: "0.1rem solid rgba(0,0,0,.1)!important",
        minWidth: '156px',
      }
    },
    'pre':{
      color:'var(--tw-prose-pre)',
      borderRadius:'1rem',
      padding:'16px',
      marginBottom:'0px',
      marginTop:'0px',
      overflowX:'none',
      width:'-webkit-fill-available',
      whiteSpace:'break-spaces'
    },
    'code::before': {
      content: '',
    },
    'code::after': {
      content: '',
    },
    'code':{
      backgroundColor:'var(--tw-prose-code)',
      color:'var(--tw-prose-pre)',
      border: "0.1rem solid rgba(0,0,0,.1)",
      borderRadius: '8px',
      padding:'4px',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '14px',
      display:'inline-block'
  },
  '--tw-prose-pre-bg':theme('colors.gray.1000'),
  '--tw-prose-invert-pre-bg':theme('colors.black.warm'),
  '--tw-prose-code':theme('colors.gray.1000'),
  '--tw-prose-invert-code':theme('colors.black.100')
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
