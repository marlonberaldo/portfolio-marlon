/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        "preto": "#17181D",
        "cinza": "#292C35",
        "marrom": "#E09145",
        "bege": "#FCD9B8",

      },
      animation: {
        'ping-slow': 'ping 3s linear infinite',
        'bounce-slow': 'bounce 1s linear infinite',
        'pulse-slow': 'pulse 6s linear infinite',
      }
    },
  },
  plugins: [],
}