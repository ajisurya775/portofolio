/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "./src/input.css",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    fontFamily:{
      'poppins': 'Poppins'
    },
   extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // scroll separuh lebar
        }
      },
      animation: {
        scroll: 'scroll 20s linear infinite', // ganti durasi sesuai kebutuhan
      }
    },
     container: {
      center: true,
    },
  },
  plugins: [
     require('flowbite/plugin')
  ],
}

