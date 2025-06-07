module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        homemade: ["'Homemade Apple'", "cursive"],
      },
      colors: {
        primaryText: "#54514a",
        accentText: "#793036",
      },
    },
  },
  plugins: [],
}
