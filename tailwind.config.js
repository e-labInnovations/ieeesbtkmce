const defaultTheme = require('tailwindcss/defaultTheme')
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.php", "./src/**/*.js", "./theme-blocks/**/*.js"],
  plugins: [require("@tailwindcss/typography")],
  extend: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans]
    }
  },
  theme: {
    extend: {
      colors: {
        'primary': {
          '800': '#006DA5',
          '900': '#0B567F'
        },
        'secondary': {
          '900': '#006DA5'
        },
      }
    }
  }
}
