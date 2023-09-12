/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#2B3A55",
        second: "#CE7777",
        third: "#E8C4C4",
        fourth: "#F2E5E5",
      },
      backgroundImage: {
        backGround: "url('/src/images/background.jpg')",
      },
      fontFamily: {
        raleway: ['"Raleway"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
