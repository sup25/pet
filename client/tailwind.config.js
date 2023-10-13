const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },

      maxWidth: {
        default: "1440px",
      },
      backgroundImage: {},
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".section": {
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "0 10px",
          "@screen sm": {
            padding: "0 30px",
          },
        },
        ".container": {
          maxWidth: theme("maxWidth.default"),
        },
        " .carousel-img": {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: " opacity 0.5s ease-in-out",
        },
        ".overlay ": {
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "1",
        },
        " .footer-container": {
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          background: "#0d5b46",
        },
      });
    }),
  ],
};

//18:9 - 720x1440, 1080x2160, 1440x2880
//0d5b46
