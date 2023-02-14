/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'dark-text': '#0d172a',
        "transparent_dark": "rgba(13, 23, 42, .8)"
      },
    },
  },
  plugins: [],
}
