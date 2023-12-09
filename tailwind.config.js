const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.php", "./src/**/*.js"],
  plugins: [require("@tailwindcss/typography")],
  extend: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans]
    }
  }
}
