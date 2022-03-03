function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) return `rgb(var(${variable}))`;
    return `rgb(var(${variable}) / ${opacityValue})`;
  }
}

module.exports = {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'dm-sans': ['DM Sans', 'sans-serif']
    },
    colors: {
      white: withOpacityValue('--color-white'),
      cultured: withOpacityValue('--color-cultured'),
      'anti-flash-white': withOpacityValue('--color-anti-flash-white'),
      platinum: withOpacityValue('--color-platinum'),
      'roman-silver': withOpacityValue('--color-roman-silver'),
      black: withOpacityValue('--color-black'),
      'pale-taupe': withOpacityValue('--color-pale-taupe'),
      'persian-blue': withOpacityValue('--color-persian-blue'),
      'chinese-purple': withOpacityValue('--color-chinese-purple'),
      melon: withOpacityValue('--color-melon'),
      'rosso-corsa': withOpacityValue('--color-rosso-corsa'),
      transparent: 'transparent',
    },
    extend: {
      width: {
        112: '28rem',
        120: '30rem',
      }
    },
  },
  plugins: [],
}
