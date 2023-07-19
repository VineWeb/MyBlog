/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './**/*.vue','./**/*.md'],
  theme: {
    extend: {
      margin: {
        '10': '10px',
      }
    },
  },
  plugins: [],
}

