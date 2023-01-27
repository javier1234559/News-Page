/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#1B1F23",
        customPurple:"#5758B5",
        dimBlack:"#48515A",
        softBlue:"#5C5FFC",
        lilac:"#C29DC2",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}