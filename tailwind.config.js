module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#f5f5dc",
        brown: "#8b5c2a",
        gold: "#d4af7a",
        dark: "#2d2d2d",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"Noto Sans JP"', "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
