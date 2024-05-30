/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#E2EE83',
        black: '#010A13',
        gray: '#3C3C41',
        lightBlue: '#6cc9f5',
        skyBlue: '#639ef7',
        blue: '#112D4E',
        gold: '#C89B3C',
        lightGold: '#FFC94A',
        darkGold: '#b48811',
      },
      width: {
        128: '32rem',
        160: '40rem',
      },
    },
    plugins: [],
  },
};
