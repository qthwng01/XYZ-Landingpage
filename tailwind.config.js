/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#010851',
        'secondary-color': '#9A7AF1',
        'white-color': '#FFFFFF',
        'black-color': '#000000',
        'p-section-color': '#707070',
      },
      boxShadow: {
        '3xl': '0px 10px 50px 0px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
