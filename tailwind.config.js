module.exports = {
  purge: [
    './apps/*/src/**/*.html',
    './apps/*/src/**/*.scss',
  ],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['responsive','hover','focus', 'active']
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
