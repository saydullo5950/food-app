/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: '"Montserrat", sans-serif'
      },
      colors: {
        brend: {
          yellow: {
            100: '#FA4A0C'
          },
          gray: {
            100: '#737373'
          },
          blue: {
            100: '#252B42'
          }
        }
      },
      backgroundImage: {
        'hero-image': "url('../images/hero-image.png')",
      }
    },
  },
  plugins: [],
}

