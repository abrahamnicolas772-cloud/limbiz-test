/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { dark: '#050505' },
      animation: { 'spin-slow': 'spin 3s linear infinite', 'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' },
    },
  },
  plugins: [],
}