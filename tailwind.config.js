const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Neue', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      }
    },
    fontSize: {
      '7xl': '4.7rem',
      '2xl': '1.5rem',
      '3xl': '1.87rem',
      '4xl': '2rem',
      '5xl': '2.4rem',
      'xl': '1rem',
      'lg': '0.75rem'
    }
  },
  darkMode: "class",
  plugins: [nextui()]
}

