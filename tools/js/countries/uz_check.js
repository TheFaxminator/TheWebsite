// Uzbekistan TIN validation
// Uzbekistan does issue tax identifiers, but structural validation is not yet implemented.

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['UZ'] = {

  supported: false,

  name: "Uzbekistan",
  flag: "../assets/countries/189-uz-uzbekistan.webp",

  // Shown in the "not supported" banner instead of the default "No TIN issued" wording.
  unsupportedNote: "Uzbekistan does issue TINs, but automated format validation is not yet supported.",

  metadata: {
    region:       "Central Asia",
    capital:      "Tashkent",
    currency:     "UZS",
  },

  tin_types: {

    Individual: {
      name: "PINFL",
      format: "Not yet supported",
      description: "Uzbekistan does issue a tax identifier for individuals, but automated format validation is not yet available in this tool.\n" +
        "• Since 1 July 2021 the Personal Identification Number (PINFL) — a 14-digit number issued by the State Tax Committee — has replaced the former individual TIN for tax identification purposes.\n\n" +

        "Validation Scope\n" +
        "Format validation for Uzbekistan is not yet supported.\n" +
        "• This jurisdiction is recognised, but a structural format check has not yet been implemented. Support may be added in a future update.",

      validate() {
        return {
          valid:        false,
          notSupported: true,
          message:      "Format validation for Uzbekistan is not yet supported."
        };
      }
    },

    Entity: {
      name: "TIN (INN / STIR)",
      format: "Not yet supported",
      description: "Uzbekistan does issue Tax Identification Numbers to entities, but automated format validation is not yet available in this tool.\n" +
        "• Legal entities are assigned a 9-digit TIN (eight digits plus a trailing check digit) by the State Tax Committee.\n\n" +

        "Validation Scope\n" +
        "Format validation for Uzbekistan is not yet supported.\n" +
        "• This jurisdiction is recognised, but a structural format check has not yet been implemented. Support may be added in a future update.",

      validate() {
        return {
          valid:        false,
          notSupported: true,
          message:      "Format validation for Uzbekistan is not yet supported."
        };
      }
    }

  }
};
