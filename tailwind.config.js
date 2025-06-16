/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        custom: { max: '819px' }, // Apply styles below 820px
      }
    },
  },
  plugins: [],
}
