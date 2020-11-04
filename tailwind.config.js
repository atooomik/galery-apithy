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
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
