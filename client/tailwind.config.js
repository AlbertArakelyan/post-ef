/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xxl: '1440px',
        xl: '1200px',
        lg: '992px',
        md: '768px',
        sm: '575px',
        xs: '375px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
    },
    colors: {
      primary: '#DB3F90',
      secondary: '#983AF2',
      link: '#3861E8',
      danger: '#F2683A',
      warning: '#E8CEA0',
      white: '#FFFFFF',
      gray: {
        100: '#E6EBF4',
        200: '#F9FAFE',
        300: '#d1d5db',
        900: '#111827',
      },
    },
  },
  plugins: [],
}
