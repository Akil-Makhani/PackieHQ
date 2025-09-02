/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your file structure
  ],
  theme: {
    extend: {
      colors: {
        primary: 'blue',
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        glitch: ['"Rubik Glitch"', 'sans-serif'],
        marker: ['"Permanent Marker"', 'cursive'],
        elite: ['"Special Elite"', 'sans-serif'],
        andada: ['"Andada Pro"', 'serif'],
        caveat: ['"Caveat"', 'cursive'],
        robotoSlab: ['"Roboto Slab"', 'serif'],
      },
    },
  },
  plugins: [],
}

