/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7B3FE4',
        secondary: '#FF4D4D',
        'game-dark': '#1A1A2E',
        'game-light': '#34345A',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
} 