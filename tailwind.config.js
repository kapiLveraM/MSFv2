/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/images/backGround/Hero.png')",
      },
    
      fontFamily: {
        Poppins: "Poppins, sans-serif",
      },

      fontSize: {
        "6xl": "50px",
        "7xl": "80px",
      },
      colors: {
        orange: "#CD520F",
        main: "#2B587F",
        blackRussian:"#0000001A",
        eerieBlack: "#191919",
        whisper: "#E4E4E4",
        ivory: "#FFFFFF1A",
        lightBlack: "#333333",
       lightGray:"#CCCCCC",

      },
    },
  },
  plugins: [],
};
