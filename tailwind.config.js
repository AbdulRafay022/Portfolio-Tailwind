module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "600px",
      md: "1000px",
      lg: "1020px",
      xl: "1440px",
      xsm: "552px",
      mobile: "410px",
    },
    extend: {
      colors: {
        dark: "#151515",
        darkgrey: "#242424",
        cyanish: "#4EE1A0",
        lightgrey: "#d9d9d9",
        purple2: "#C2CBE5",
        stroke: "#979797",
      },
      fontFamily: {
        serif: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
