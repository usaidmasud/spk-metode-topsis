module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#B4E197",
          200: "#83BD75",
          300: "#4E944F",
        },
        secondary: {
          100: "#E9EFC0",
        }
      }
    },
  },
  plugins: [],
}
