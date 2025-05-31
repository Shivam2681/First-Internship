import { type Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00A5EC',
        secondary: '#484848',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
} satisfies Config