module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'mesdia' or 'class'
  theme: {
    extend: {
      width: {
        w_500: "500px",
        w_400: "350px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
