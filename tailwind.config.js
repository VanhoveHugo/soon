module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#111',
      gold: '#f9ca24',
      blue: {
        DEFAULT: '#686de0',
        dark: '#4834d4',
      },
      pink: {
        DEFAULT: '#e056fd',
        dark: '#be2edd',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
