/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown': '#3E2723',
        'brand-dark': '#121212',
        'brand-saffron': '#F59E0B',
        'brand-gold': '#D4AF37',
        'brand-cream': '#FDFBF7'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Poppins"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
