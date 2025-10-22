// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Fix typo from 'jsk' to 'jsx'
  theme: {
    extend: {
      fontFamily: {
        bookman: ['"Bookman Old Style"', "serif"],
        allura: ["Allura", "cursive"],
        calibri: ["Calibri", "sans-serif"],
        silverForteGrungeGrunge: ["SilverForteGrungeGrunge", "sans-serif"],
        grunge: ["Grunge", "cursive"],
        azonix: ["Azonix", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-4px)" },
          "50%": { transform: "translateY(4px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(4px)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        floatReverse: "floatReverse 4s ease-in-out infinite",
      },
      screens: {
        mobilesm: "320px",
        mobilemed: "480px",
        mobilebig: "768", 
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        laptop: "1440px", // 15.3 inch laptops
        "2xl": "1536px",
        'hd': '1920px',  // optional clarity
        '2k': '2560px',
        tablet: { max: "1023px", min: "768px" },
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/home.jpeg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};