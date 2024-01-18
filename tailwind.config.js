/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./dist/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "320px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
