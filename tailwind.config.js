/* eslint-disable import/no-extraneous-dependencies, global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['Elza', 'Elza Fallback', ...defaultTheme.fontFamily.sans],
      text: ['Elza Text', 'Elza Text Fallback', ...defaultTheme.fontFamily.sans],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#1A1A1A',
      white: '#FFFFFF',
      primary: {
        yellow: '#FFE100',
      },
      secondary: {
        green: '#5CCC6F',
        blue: '#00ACE5',
        red: '#F46666',
        'yellow-light': '#FEF9E7',
        'green-light': '#EBFAEB',
        'blue-light': '#E7F6FE',
        'red-light': '#FCEEF2',
      },
      gray: {
        15: '#272727',
        20: '#333333',
        30: '#4D4D4D',
        40: '#666666',
        50: '#808080',
        60: '#999999',
        70: '#B3B3B3',
        80: '#CCCCCC',
        90: '#E6E6E6',
        94: '#F2F2F2',
        96: '#F6F6F6',
        98: '#FAFAFA',
      },
      code: {
        'green-1': '#47D18C',
        'blue-1': '#66A3FF',
        'red-1': '#F6558C',
        'orange-1': '#FFBF66',
        'gray-1': '#B3B3B3',
        'gray-2': '#808080',
        'brown-1': '#BA8C5E',
      },
    }),
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '413px' },
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '22px',
      '3xl': '24px',
      '4xl': '26px',
      '5xl': '28px',
      '6xl': '32px',
      '7xl': '36px',
      '8xl': '40px',
      '9xl': '44px',
      '10xl': '50px',
      '11xl': '60px',
    },
    extend: {
      lineHeight: {
        dense: '1.125',
      },
    },
  },
  plugins: [
    require('tailwindcss-safe-area'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
