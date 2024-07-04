// tailwind.config.js

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
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
    container:{
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '100vw',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '40px',
      },
    }
  },
  plugins: [
    require('daisyui'),
  ],
});


