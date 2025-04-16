/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{htm,js}"],
  theme: {
    screens:{
      'mini':'375px',
      'slm':'470px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1470px',
    },
    extend: {
      fontFamily: {
        sodo: ['Sodosans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

