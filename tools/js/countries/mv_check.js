// Maldives TIN validation
// Maldives does issue Tax Identification Numbers, but structural validation is not yet implemented.

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['MV'] = {

  supported: false,

  name: "Maldives",
  flag: "../assets/countries/123-mv-maldives.webp",

  // Shown in the "not supported" banner instead of the default "No TIN issued" wording.
  unsupportedNote: "Maldives does issue TINs, but automated format validation is not yet supported.",

  metadata: {
    region:       "Southern Asia",
    capital:      "Malé",
    currency:     "MVR",
  },

  tin_types: {

    Individual: {
      name: "TIN (MIRA)",
      format: "Not yet supported",
      description: "Maldives does issue Tax Identification Numbers (TINs) to individuals, but automated format validation is not yet available in this tool.\n" +
        "• The Maldives Inland Revenue Authority (MIRA) assigns a TIN to individuals who register as taxpayers.\n\n" +

        "Validation Scope\n" +
        "Format validation for Maldives is not yet supported.\n" +
        "• This jurisdiction is recognised, but a structural format check has not yet been implemented. Support may be added in a future update.",

      validate() {
        return {
          valid:        false,
          notSupported: true,
          message:      "Format validation for Maldives is not yet supported."
        };
      }
    },

    Entity: {
      name: "TIN (MIRA)",
      format: "Not yet supported",
      description: "Maldives does issue Tax Identification Numbers (TINs) to entities, but automated format validation is not yet available in this tool.\n" +
        "• The Maldives Inland Revenue Authority (MIRA) assigns a TIN to businesses and other entities that register as taxpayers.\n\n" +

        "Validation Scope\n" +
        "Format validation for Maldives is not yet supported.\n" +
        "• This jurisdiction is recognised, but a structural format check has not yet been implemented. Support may be added in a future update.",

      validate() {
        return {
          valid:        false,
          notSupported: true,
          message:      "Format validation for Maldives is not yet supported."
        };
      }
    }

  }
};
