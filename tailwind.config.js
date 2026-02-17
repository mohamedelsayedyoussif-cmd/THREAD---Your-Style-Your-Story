
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4D00',
          dark: '#CC3D00',
        },
        accent: {
          DEFAULT: '#00f2ff',
          neon: '#00f2ff',
        },
        dark: {
          800: '#1a1a1a',
          900: '#0a0a0a',
          950: '#050505',
        }
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'Cairo', 'sans-serif'],
        body: ['Cairo', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
