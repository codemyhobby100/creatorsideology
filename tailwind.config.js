/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14F2A8',
      },
      fontFamily: {
        grotesk: ['Familjen Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

