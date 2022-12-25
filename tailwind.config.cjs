/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'lackedark': '#490b3e',
        'lackered': '#bc1e51',
        'lackeyellow': '#f1b813',
        'lackewhite': '#fad1d7',
      },
      backgroundImage: {
        "backgg": "url('/rr.jpg')"
      },
      fontFamily: {
        raleway : ['"Raleway"', 'sans-serif']
    }
    },
  },
  plugins: [],
};
