/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0b0b0c',
          surface: '#141416',
          card: '#18181b',
          border: '#27272a',
          muted: '#8e8e93',
          text: '#f4f4f5'
        },
        light: {
          bg: '#f8f9fa',
          surface: '#ffffff',
          card: '#ffffff',
          border: '#e4e4e7',
          muted: '#71717a',
          text: '#09090b'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
