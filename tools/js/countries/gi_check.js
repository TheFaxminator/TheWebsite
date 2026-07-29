// Gibraltar TIN validation
// Individual: Tax Identification Number — 6 or more digits
// Entity:     Tax Identification Number — 6 or more digits

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['GI'] = {

  name: "Gibraltar",
  flag: "../assets/countries/204-gi-gibraltar.webp",

  metadata: {
    region:       "Southern Europe",
    capital:      "Gibraltar",
    currency:     "GIP",
  },

  tin_types: {

    Individual: {
      name: "TIN",
      format: "NNNNNN (6 or more digits)",
      description: "Individuals in Gibraltar are identified for tax purposes by a Tax Identification Number issued by the Income Tax Office.\n" +
        "• Issuance: Assigned to taxpayers on registration with the Income Tax Office.\n\n" +

        "Formatting & Rules\n" +
        "• Length: 6 or more numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Gibraltarian numeric structural format.\n" +
        "• Syntax Check: Confirms the value is at least 6 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{5})\d{6,}$/.test(tin)) {
          return { valid: false, message: "Does not match the Gibraltarian Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "TIN",
      format: "NNNNNN (6 or more digits)",
      description: "Legal entities in Gibraltar are identified for tax purposes by a Tax Identification Number issued by the Income Tax Office.\n" +
        "• Issuance: Assigned to businesses and other entities on registration with the Income Tax Office.\n\n" +

        "Formatting & Rules\n" +
        "• Length: 6 or more numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Gibraltarian numeric structural format.\n" +
        "• Syntax Check: Confirms the value is at least 6 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{5})\d{6,}$/.test(tin)) {
          return { valid: false, message: "Does not match the Gibraltarian Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
