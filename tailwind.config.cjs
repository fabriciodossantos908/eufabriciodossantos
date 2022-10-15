/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary-color": '#F1E7DD',
        "secondary-color": '#048C80',
        "light-secondary-color": '#AAD9D1',
        "black-color": '#0D0D0D'
      },
      fontFamily: {
        'Black_Han_Sans': ['Black Han Sans', 'sans-serif'],
        'Lato': ['Lato', 'sans-serif']
      },
    }
  },
  plugins: [],
}