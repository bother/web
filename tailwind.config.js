const colors = require('tailwindcss/colors')

module.exports = {
  content: ['src/**/*.tsx', 'src/styles/*.scss'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: colors.orange
      }
    },
    fontFamily: {
      body: ['Satoshi', 'sans-serif']
    }
  }
}
