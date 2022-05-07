module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        home: "url('/images/background.png')",
      }), 
    },
    fontFamily: {
      body: ["Mulish", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}