module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      ui: {
        brand: "#489a71",
        contrast: "#212529",
        textContrast: "#fff",
      },
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
    },
    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/10": "10vh",
      "1/2": "50vh",
      "4/5": "80vh",
      full: "100%",
      screen: "100vh",
    }),
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
