/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        warna : '#10b981',
        hitam : '#0f172a'
      },
      screens:{
        '2xl' : '1320'
      }
    },
  },
  plugins: [],
}

