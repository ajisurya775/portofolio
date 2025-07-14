/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily:{
      'poppins': 'Poppins'
    },
     container: {
      center: true,
    },
  },
  plugins: [
     require('flowbite/plugin')
  ],
}

