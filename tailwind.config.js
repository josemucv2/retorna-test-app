/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Asegúrate de definir tus colores aquí, si es necesario.
        'very-dark-blue': 'hsl(235, 21%, 11%)', // Ejemplo
        'very-light-gray': 'hsl(0, 0%, 98%)', // Ejemplo
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
