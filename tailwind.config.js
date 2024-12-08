/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'spicyRice':['Spicy Rice','sans-serif'],
        'righteous':['Righteous','sans-serif'],
      },
      width:{
        '9/10':'90%',
      }
    },
    screens: {
      'xs': '320px',
      'sm': '540px', 
      'md': '720px',
      'lg': '920px',
      'xl': '1040px',
      '2xl':'1460px'
    },
  },
  plugins: [],
}

