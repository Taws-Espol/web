/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        taws: "#1A1E2C",
        tawsBlue: "#1AC8FF",
        orange: "#D19121",
        cargo: "#CBCA6D",
        tawsLight: "#303441",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
