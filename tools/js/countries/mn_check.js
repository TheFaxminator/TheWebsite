// Mongolia TIN validation
// Mongolia does issue Tax Identification Numbers, but structural validation is not yet implemented.

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['MN'] = {

  supported: false,

  name: "Mongolia",
  flag: "../assets/countries/131-mn-mongolia.webp",

  // Shown in the "not supported" banner instead of the default "No TIN issued" wording.
  unsupportedNote: "Mongolia does issue TINs, but automated format validation is not yet supported.",

  metadata: {
    region:       "Eastern Asia",
    capital:      "Ulaanbaatar",
    currency:     "MNT",
  },

  tin_types: {

    Individual: {
      name: "Register Number (Регистрийн дугаар)",
      format: "Not yet supported",
      description: "Mongolia does issue Tax Identification Numbers to individuals, but automated format validation is not yet available in this tool.\n" +
        "• The General Department of Taxation uses the individual's civil Register Number — a 10-character personal identifier (two Cyrillic letters followed by eight digits) — as their taxpayer number.\n\n" +

        "Validation Scope\n" +
        "Format validation for Mongolia is not yet supported.\n" +
        "• This jurisdiction is recognised, but a structural format check has not yet been implemented. Support may be added in a future update.",

      validate() {
        return {
          valid:        false,
          notSupported: true,
          message:      "Format validation for Mongolia is not yet supported."
        };
      }
    },

    Entity: {
      name: "Taxpayer Number",
      format: "Not yet supported",
      description: "Mongolia does issue Tax Identification Numbers to entities, but automated format validation is not yet available in this tool.\n" +
        "• A legal entity's registration number — a 7-digit code assigned by the State Registration Office on incorporation — serves as its taxpayer number.\n\n" +

        "Validation Scope\n" +
        "Format validation for Mongolia is not yet supported.\n" +
        "• This jurisdiction is recognised, but a structural format check has not yet been implemented. Support may be added in a future update.",

      validate() {
        return {
          valid:        false,
          notSupported: true,
          message:      "Format validation for Mongolia is not yet supported."
        };
      }
    }

  }
};
