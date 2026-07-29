// Dominica TIN validation
// Individual: Tax Identification Number — 7 digits
// Entity:     Tax Identification Number — 7 digits

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['DM'] = {

  name: "Dominica",
  flag: "../assets/countries/080-dm-dominica.webp",

  metadata: {
    region:       "Caribbean",
    capital:      "Roseau",
    currency:     "XCD",
  },

  tin_types: {

    Individual: {
      name: "TIN",
      format: "NNNNNNN",
      description: "Individuals in Dominica are issued a Tax Identification Number (TIN) by the Inland Revenue Division for tax administration purposes.\n" +
        "• Issuance: Assigned to taxpayers on registration with the Inland Revenue Division.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 7 numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation (e.g. 1234567).\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Dominican 7-digit structural format.\n" +
        "• Syntax Check: Confirms the value is exactly 7 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{6})\d{7}$/.test(tin)) {
          return { valid: false, message: "Does not match the Dominican Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "TIN",
      format: "NNNNNNN",
      description: "Legal entities in Dominica are issued a Tax Identification Number (TIN) by the Inland Revenue Division for tax administration purposes.\n" +
        "• Issuance: Assigned to businesses and other entities on registration with the Inland Revenue Division.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 7 numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation (e.g. 1234567).\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Dominican 7-digit structural format.\n" +
        "• Syntax Check: Confirms the value is exactly 7 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{6})\d{7}$/.test(tin)) {
          return { valid: false, message: "Does not match the Dominican Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
