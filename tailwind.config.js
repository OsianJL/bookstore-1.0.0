/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "100%": { opacity: 0 },
          "0%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease forwards',
        fadeOut: 'fadeOut 1s ease forwards',
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        custom: "5px 5px 10px black",
      },
    },
  },
  plugins: [],
};
