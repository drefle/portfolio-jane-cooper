/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
      'poppins': ['Poppins', 'sans-serif'], 
      'lora': ['Lora', 'sans-serif'] 
    },
      colors: {
        main: "#292736",
        "main-light": "#4A4856",
        "red-dark": "#D41313",
        "red-light": "#F4C4C4",
        "gray-dark": "#626262",
        "gray-light": "#E6E6E6",
      },
    maxWidth: {
      260: '260px',
    }},
  },
  plugins: [],
}

