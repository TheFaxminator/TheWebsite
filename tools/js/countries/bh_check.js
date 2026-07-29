// Bahrain TIN validation
// Individual: Personal / tax identification number — 9 digits
// Entity:     VAT / tax registration number — 15 digits

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['BH'] = {

  name: "Bahrain",
  flag: "../assets/countries/054-bh-bahrain.webp",

  metadata: {
    region:       "Western Asia",
    capital:      "Manama",
    currency:     "BHD",
  },

  tin_types: {

    Individual: {
      name: "TIN",
      format: "NNNNNNNNN",
      description: "Individuals in Bahrain are identified for tax purposes by a personal identification number issued by the National Bureau for Revenue (NBR).\n" +
        "• Issuance: Assigned to taxpayers and residents for tax administration purposes.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 9 numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation (e.g. 123456789).\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Bahraini 9-digit structural format.\n" +
        "• Syntax Check: Confirms the value is exactly 9 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{8})\d{9}$/.test(tin)) {
          return { valid: false, message: "Does not match the Bahraini Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "TIN",
      format: "NNNNNNNNNNNNNNN",
      description: "Legal entities in Bahrain are identified for tax purposes by a VAT / tax registration number issued by the National Bureau for Revenue (NBR).\n" +
        "• Issuance: Assigned to businesses and other entities on registration with the National Bureau for Revenue.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 15 numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Bahraini 15-digit structural format.\n" +
        "• Syntax Check: Confirms the value is exactly 15 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{14})\d{15}$/.test(tin)) {
          return { valid: false, message: "Does not match the Bahraini Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
