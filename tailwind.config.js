/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4D00',
          50: '#FFF1EB',
          100: '#FFE1D6',
          200: '#FFC1AD',
          300: '#FFA085',
          400: '#FF805C',
          500: '#FF4D00',
          600: '#D64100',
          700: '#AD3500',
          800: '#852800',
          900: '#5C1C00',
        },
        dark: {
          950: '#050505',
          900: '#0A0A0A',
          800: '#111111',
          700: '#1A1A1A',
        },
        accent: {
          neon: '#CCFF00',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'ui-sans-serif', 'system-ui'],
        heading: ['Bebas Neue', 'Cairo', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-rtl': 'marquee-rtl 40s linear infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' },
        },
        'fade-in': { 'from': { opacity: '0' }, 'to': { opacity: '1' } },
        'slide-up': {
          'from': { transform: 'translateY(40px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}