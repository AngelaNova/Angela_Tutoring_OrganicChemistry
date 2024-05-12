/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgba(0, 18, 0, 1)",
        secondary: "rgba(0, 210, 0, 0.8)",
        dimWhite: "rgba(255, 255, 255, 0.6)",
        dimGreen: "rgba(0, 100, 0, 1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
        animation: {
          'spin-slow': 'spin 6s linear infinite',
        }
};
