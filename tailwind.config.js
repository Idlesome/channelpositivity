/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./common/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "logo-red": "#b91c1c",
      },
      animation: {
        "slide-right": "slide-right 300ms ease-out forwards",
      },
      keyframes: {
        "slide-right": {
          "0%": { transform: "translateX(-12rem)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
