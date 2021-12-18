const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./blogs/**/*.md"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      grey: {
        100: "#F2F2F7",
        300: "#c7c7cc",
        400: "#AEAEB2",
        DEFAULT: "#8E8E93",
        700: "#48484a",
        800: "#2c2c2e",
        900: "#1C1C1E",
      },
      sky: colors.sky,
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/aspect-ratio")],
};
