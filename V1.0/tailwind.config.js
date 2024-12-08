/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'

  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: { 
        inter: '#ff7200',
        
      }
    },
  },
  plugins: [],
}
