module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
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
        400: "#AEAEB2",
        DEFAULT: "#8E8E93",
        800: "#2c2c2e",
        900: "#1C1C1E",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
