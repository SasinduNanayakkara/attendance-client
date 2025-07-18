/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        wedding: ['Carattere', 'cursive'],
        date: ['Andika', 'cursive'],
      },
    },
  },
  plugins: [],
}

