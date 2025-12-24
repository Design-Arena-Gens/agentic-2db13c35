/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#e6f4f9',
          100: '#cce9f3',
          200: '#99d3e7',
          300: '#66bddb',
          400: '#33a7cf',
          500: '#0091c3',
          600: '#00749c',
          700: '#005775',
          800: '#003a4e',
          900: '#001d27',
        },
        deep: {
          50: '#e8ecf4',
          100: '#d1d9e9',
          200: '#a3b3d3',
          300: '#758dbd',
          400: '#4767a7',
          500: '#1a4191',
          600: '#153474',
          700: '#102757',
          800: '#0a1a3a',
          900: '#050d1d',
        }
      }
    },
  },
  plugins: [],
}
