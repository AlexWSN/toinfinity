/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          DEFAULT: "#0b0c10",
          blue: "#1f6feb",
          light: "#f5f5f5",
        },
      },
    },
  },
  plugins: [],
};
