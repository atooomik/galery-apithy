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
        textContrast: "#fff"
      }
    },
    height: theme => ({
      auto: "auto",
      ...theme("spacing"),
      "1/10": "10vh",
      "1/2": "50vh",
      "4/5": "80vh",
      full: "100%",
      screen: "100vh"
    })
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
