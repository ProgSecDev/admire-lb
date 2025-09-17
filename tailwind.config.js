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
      screens: {
        sm2:{ max: "639px" },
        sm: "640px",
        md: "768px", // tablets and up
        lg: "1024px", // desktops and up
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1800px", // applies only for very large screens (24"+)
        "4xl": "2560px", // applies only for screens 2560 width
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
