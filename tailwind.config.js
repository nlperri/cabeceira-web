/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1B245C",
        "pink-salmon": "#FF877C",
        "blue-bg-search": "#2C3254",
      },
      fontFamily: {
        logo: ["Corben", "serif"],
        sans: ["Content", "sans-serif"],
      },
    },
  },
  plugins: [],
};
