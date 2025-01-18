/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Use the 'class' strategy for dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: '#1a202c',
        darkCard: '#2d3748',
        darkText: '#e2e8f0',
        accent: '#38b2ac',
      },
      transitionProperty: {
        theme: 'background-color, color',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};

