/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "sm": "480px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
      },
      spacing: {
        "big":"48rem"
      },
      margin: {
        'min': 'min(8px, 1rem)',
      },
    },
    fontFamily: {
      poppins:['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}