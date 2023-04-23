/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': {
          100: '#fdeeee',
          200: '#fbdddd',
          300: '#f9cdcb',
          400: '#f7bcba',
          500: '#f5aba9',
          600: '#f29a98',
          700: '#f08987',
          800: '#ee7975',
          900: '#ec6864',
          DEFAULT: '#ea5753',
        },
      }
    },
  },
  plugins: [
  ],
}

