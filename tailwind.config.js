
/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        high: '#111',
        mid : '#222',
        low : '#333',
        fadegray : '#8f8f8f2d'
      },
    },
  },
  plugins: [],
}
