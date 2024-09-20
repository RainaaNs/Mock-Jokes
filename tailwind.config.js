/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        slackey :['Slackey','sans-serif'],
        poppins :['Poppins', 'sans-serif']
      },
    
      colors:{
        borderOrange: '#F18C20',
        buttonYellow:'#FFF200',
      }
    },
  },
  plugins: [],
}
