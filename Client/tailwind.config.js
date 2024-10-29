/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)'],
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#FE4747',
        secondary: '#5E5E5E',
        offGray: '#B0B0B0',
        borderShade: '#DDDDDD',
        primary8: '#FF6B6B29',
        green1: '#039F8D',
        lightGray: '#D3D3D3',
      },
    },
  },
  plugins: [
  ],
};
