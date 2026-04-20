/** @type {import('tailwindcss').Config} */
export default {
darkMode: 'selector', // or 'class' in older versions
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Bebas Neue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        openclaw: {
          bg: '#F8F9FA',
          accent: '#7C3AED', // Soft Purple
          surface: 'rgba(255, 255, 255, 0.7)',
        }
      },
      boxShadow: {
        'depth': '0 20px 40px -15px rgba(0, 0, 0, 0.1)', // Depth shading
      }
    },
  },
  plugins: [],
}