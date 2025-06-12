module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        homemade: ['Homemade Apple', 'cursive'],
        sunday: ['Dancing Script', 'cursive'] // Cambiado a Dancing Script
      },
      colors: {
        primaryText: "#54514a",
        accentText: "#793036",
      },
    },
  },
  plugins: [],
}