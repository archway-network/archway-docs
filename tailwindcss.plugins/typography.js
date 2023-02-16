const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme }) => {
  const regular = {
    '@font-face': {
      'font-family': 'TWK Everett',
      src: 'url(/fonts/TWKEverett-Regular.eot)',
      src: "url(/fonts/TWKEverett-Regular.eot?#iefix) format('embedded-opentype')",
      src: "url(/fonts/TWKEverett-Regular.woff2) format('woff2')",
      src: "url(/fonts/TWKEverett-Regular.woff) format('woff')",
      src: "url(/fonts/TWKEverett-Regular.ttf) format('truetype')",
      'font-weight': '400',
      'font-style': 'normal',
    },
  };

  const regularItalic = {
    '@font-face': {
      'font-family': 'TWK Everett',
      src: 'url(/fonts/TWKEverett-RegularItalic.eot)',
      src: "url(/fonts/TWKEverett-RegularItalic.eot?#iefix) format('embedded-opentype')",
      src: "url(/fonts/TWKEverett-RegularItalic.woff2) format('woff2')",
      src: "url(/fonts/TWKEverett-RegularItalic.woff) format('woff')",
      src: "url(/fonts/TWKEverett-RegularItalic.ttf) format('truetype')",
      'font-weight': '400',
      'font-style': 'italic',
    },
  };
  const bold = {
    '@font-face': {
      'font-family': 'TWK Everett',
      src: 'url(/fonts/TWKEverett-Bold.eot)',
      src: "url(/fonts/TWKEverett-Bold.eot?#iefix) format('embedded-opentype')",
      src: "url(/fonts/TWKEverett-Bold.woff2) format('woff2')",
      src: "url(/fonts/TWKEverett-Bold.woff) format('woff')",
      src: "url(/fonts/TWKEverett-Bold.ttf) format('truetype')",
      'font-weight': '700',
      'font-style': 'normal',
    },
  };

  const boldItalic = {
    '@font-face': {
      'font-family': 'TWK Everett',
      src: 'url(/fonts/TWKEverett-BoldItalic.eot)',
      src: "url(/fonts/TWKEverett-BoldItalic.eot?#iefix) format('embedded-opentype')",
      src: "url(/fonts/TWKEverett-BoldItalic.woff2) format('woff2')",
      src: "url(/fonts/TWKEverett-BoldItalic.woff) format('woff')",
      src: "url(/fonts/TWKEverett-BoldItalic.ttf) format('truetype')",
      'font-weight': '700',
      'font-style': 'italic',
    },
  };

  const hero1 = {
    '.hero-1': {
      'font-size': '40px',
      'line-height': '120%',
      [`@media (min-width: ${theme('screens').md})`]: {
        'font-size': '64px',
        'line-height': '120%',
        'letter-spacing': '-0.01em',
      },
      [`@media (min-width: ${theme('screens').lg})`]: {
        'font-size': '120px',
        'line-height': '110%',
        'letter-spacing': '-0.01em',
      },
    },
  };

  const hero2 = {
    '.hero-2': {
      'font-size': '24px',
      'line-height': '150%',
      [`@media (min-width: ${theme('screens').lg})`]: {
        'font-size': '32px',
        'line-height': '130%',
      },
    },
  };

  const heading1 = {
    '.heading-1': {
      'font-size': '40px',
      'line-height': '120%',
      [`@media (min-width: ${theme('screens').lg})`]: {
        'font-size': '64px',
        'line-height': '120%',
      },
    },
  };

  const heading2 = {
    '.heading-2': {
      'font-size': '32px',
      'line-height': '130%',
      [`@media (min-width: ${theme('screens').lg})`]: {
        'font-size': '64px',
        'line-height': '120%',
      },
    },
  };

  const heading3 = {
    '.heading-3': {
      'font-size': '24px',
      'line-height': '130%',
      [`@media (min-width: ${theme('screens').lg})`]: {
        'font-size': '32px',
        'line-height': '130%',
      },
    },
  };

  const title1 = {
    '.title-1': {
      'font-size': '16px',
      'line-height': '150%',
      [`@media (min-width: ${theme('screens').lg})`]: {
        'font-size': '24px',
        'line-height': '130%',
      },
    },
  };

  const title2 = {
    '.title-2': {
      'font-size': '32px',
      'line-height': '130%',
      [`@media (min-width: ${theme('screens').lg})`]: {
        'font-size': '40px',
        'line-height': '120%',
      },
    },
  };

  const title3 = {
    '.title-3': {
      'font-size': '32px',
      'line-height': '130%',
    },
  };

  const title4 = {
    '.title-4': {
      'font-size': '16px',
      'line-height': '150%',
      [`@media (min-width: ${theme('screens').lg})`]: {
        'font-size': '32px',
        'line-height': '130%',
      },
    },
  };

  const title5 = {
    '.title-5': {
      'font-size': '24px',
      'line-height': '130%',
    },
  };

  const caption = {
    '.caption': {
      'font-size': '14px',
      'line-height': '120%',
    },
  };

  const label = {
    '.label': {
      'font-size': '12px',
      'line-height': '120%',
    },
  };

  const small = {
    '.small': {
      'font-size': '12px',
      'line-height': '120%',
    },
  };

  const tiny = {
    '.tiny': {
      'font-size': '8px',
      'line-height': '150%',
    },
  };

  addComponents([
    regular,
    regularItalic,
    bold,
    boldItalic,
    hero1,
    hero2,
    heading1,
    heading2,
    heading3,
    title1,
    title2,
    title3,
    // title4,
    // title5,
    caption,
    label,
    small,
    tiny
    ]);
});
