/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
      },
      colors: {
        userModerateViolet: "hsl(263, 55%, 52%)",
        userVeryDarkGrayishBlue: "hsl(217, 19%, 35%)",
        userVeryDarkBlackishBlue: "hsl(219, 29%, 14%)",
        userLightGray: "hsl(0, 0%, 81%)",
        userLightGrayishBlue: "hsl(210, 46%, 95%)",
        userWhite: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        quotationBgImg: "url('/bg-pattern-quotation.svg')",
      },
    },
  },
  plugins: [],
}