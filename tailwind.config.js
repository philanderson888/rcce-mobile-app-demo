/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: '#eae8ff',
        platinum: '#d8d5db',
        french: '#adacb5',
        gunmetal: '#2d3142',
        uranian: '#b0d7ff'
      }
    },
  },
  plugins: [],
};