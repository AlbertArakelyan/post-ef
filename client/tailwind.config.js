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
    },
    colors: {
      primary: '#DB3F90',
      seondary: '#983AF2',
      link: '#3861E8',
      danger: '#F2683A',
      warning: '#E8CEA0',
      white: '#FFFFFF',
    },
  },
  plugins: [],
}
