/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          'from': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-50%)'  },
        }
      }
    },
  },
  plugins: [],
}
