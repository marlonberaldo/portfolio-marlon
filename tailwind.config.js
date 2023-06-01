/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "tw-",
  theme: {
    extend: {
      screens: {
        "3xl": "1980px"
      },
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
        'avatar': 'float 6s ease-in-out infinite'
      },
      keyframes:{
        float:{
          '0%':  {
            transform: 'translatey(0px)',
          },
          '50%': {
            transform: 'translatey(-20px)',
          },
          '100%': {
            transform: 'translatey(0px)',
          }
        }
      }
    },
  },
  plugins: [],
}