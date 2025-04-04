/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./styles/**/*.{css}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F62AD',
        secondary: '#1A3666',
        terciary: '#2F62AD1F',   
        warning: '#DCE6D3',
        success: '#093F51',
        gris: {
          100: '#D9D9D9',
          200: '#606060',
        },
        dark: {
          100: '#323232',
        },
      },
      fontFamily: {
        primary: ['var(--font-axiforma)'],
        secondary: ['var(--font-inter)'],
        montserrat: ['var(--font-montserrat)'],
      },
      screens: {
        phone: '300px',
        tablet: '768px',
        tabletlg: '960px',
        tabletxl: '1024px',
        laptop: '1200px',
        laptoplg: '1400px',
        desktop: '1700px',
      },
    },
  },
  plugins: [],
}

