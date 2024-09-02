/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F227A', // Cor roxa da identidade visual
        secondary: '#4A1D73',
      },
    },
  },
  plugins: [],
}
