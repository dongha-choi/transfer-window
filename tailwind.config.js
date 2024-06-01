/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#E2EE83',
        black: '#010A13',
        gray: '#3C3C41',
        darkGray: '#222831',
        navy: '#070F2B',
        lightBlue: '#6cc9f5',
        skyBlue: '#639ef7',
        blue: '#112D4E',
        gold: '#C89B3C',
        lightGold: '#FFC94A',
        darkGold: '#b48811',
        red: '#E25E3E',
      },
      width: {
        96: '24rem',
        100: '26rem',
        108: '28rem',
        128: '32rem',
        160: '40rem',
      },
    },
    plugins: [],
  },
};
