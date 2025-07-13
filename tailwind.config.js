/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  theme: {
    extend: {
      colors: {
        space: {
          DEFAULT: "#0b0c10", // negru 
          blue: "#1f6feb", // albastru 
          light: "#f5f5f5", // alb pentru texte & hover
        },
      },
    },
  },
};
