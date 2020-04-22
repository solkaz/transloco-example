// @ts-check
const {
  TranslocoExtractKeysWebpackPlugin,
} = require("@ngneat/transloco-keys-manager");

module.exports = {
  plugins: [
    new TranslocoExtractKeysWebpackPlugin({
      rootTranslationsPath: "src/assets/i18n/",
      langs: ["en", "de"],
      keysManager: {},
    }),
  ],
};
