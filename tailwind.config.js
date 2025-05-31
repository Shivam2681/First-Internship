/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4dabf7', // Lighter version for dark mode
          DEFAULT: '#1c7ed6',
          dark: '#1864ab',
        },
        secondary: {
          DEFAULT: '#343a40',
          dark: '#f8f9fa', // Light text for dark mode
        }
      }
    },
  },
  plugins: [],
}