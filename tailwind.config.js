module.exports = {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'dm-sans': ['DM Sans', 'sans-serif']
    },
    colors: {
      white: 'var(--color-white)',
      cultured: 'var(--color-cultured)',
      'anti-flash-white': 'var(--color-anti-flash-white)',
      platinum: 'var(--color-platinum)',
      'roman-silver': 'var(--color-roman-silver)',
      black: 'var(--color-black)',
      'pale-taupe': 'var(--color-pale-taupe)',
      'persian-blue': 'var(--color-persian-blue)',
      'chinese-purple': 'var(--color-chinese-purple)',
      melon: 'var(--color-melon)',
      'rosso-corsa': 'var(--color-rosso-corsa)',
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
