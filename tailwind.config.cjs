/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'taws': '#1A1E2C',
      'tawsLight': '#303441',
    },},
  },
  plugins: [],
}
