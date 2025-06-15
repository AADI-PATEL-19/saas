// tailwind.config.js
module.exports = {
  content: [
    './app/live/**/*.{js,ts,jsx,tsx}', // ✅ Tailwind active only here
    './components/tailwind/**/*.{js,ts,jsx,tsx}', // optional
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
