/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  extend: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],

      lato: ["Lato", "sans-serif"],

      // matemasie:['Matemasie', 'sans-serif'],
      // You can add more fonts here
    },
  },
  plugins: [],
};
