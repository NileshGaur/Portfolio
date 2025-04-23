/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#f97316",
        tertiary: "#54d6bb",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      screens: {
        sm: { max: "639px" },
        lg: { max: "1024px" },
      },
    },
  },
  plugins: [],
};
