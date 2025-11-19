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
          bg: '#0a0a0f',
          surface: '#151520',
          card: '#1a1a2e',
          border: '#2a2a3e',
        },
        accent: {
          blue: '#00d9ff',
          'blue-light': '#33e0ff',
          'blue-dark': '#00b8d9',
          purple: '#a855f7',
          'purple-light': '#c084fc',
          'purple-dark': '#9333ea',
          cyan: '#06b6d4',
          'cyan-light': '#22d3ee',
          pink: '#ec4899',
          'pink-light': '#f472b6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

