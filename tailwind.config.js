/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#0D2436',
        secondary: '#009B86',
        tertiary: '#34AC9C',
      },
    },
  },
  plugins: [],
};
