/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      keyframes: {
        borderTransition: {
          '0%': { borderBottomWidth: '2px', borderTopWidth: '0', borderLeftWidth: '0', borderRightWidth: '0'},
          '100%': { borderWidth: '2px'},
        }
      },
    },
  },
  plugins: [],
}

