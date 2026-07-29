// Curaçao TIN validation
// Individual: Tax Identification Number — 9 digits
// Entity:     Tax Identification Number — 9 digits

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['CW'] = {

  name: "Curaçao",
  flag: "../assets/countries/202-cw-curaçao.webp",

  metadata: {
    region:       "Caribbean",
    capital:      "Willemstad",
    currency:     "ANG",
  },

  tin_types: {

    Individual: {
      name: "TIN",
      format: "NNNNNNNNN",
      description: "Individuals in Curaçao are identified for tax purposes by a Tax Identification Number issued by the Inspectorate of Taxes (Inspectie der Belastingen).\n" +
        "• Issuance: Assigned to taxpayers and residents for tax administration purposes.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 9 numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation (e.g. 123456789).\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Curaçaoan 9-digit structural format.\n" +
        "• Syntax Check: Confirms the value is exactly 9 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{8})\d{9}$/.test(tin)) {
          return { valid: false, message: "Does not match the Curaçaoan Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "TIN",
      format: "NNNNNNNNN",
      description: "Legal entities in Curaçao are identified for tax purposes by a Tax Identification Number issued by the Inspectorate of Taxes (Inspectie der Belastingen).\n" +
        "• Issuance: Assigned to businesses and other entities on registration for tax purposes.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 9 numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation (e.g. 123456789).\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Curaçaoan 9-digit structural format.\n" +
        "• Syntax Check: Confirms the value is exactly 9 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{8})\d{9}$/.test(tin)) {
          return { valid: false, message: "Does not match the Curaçaoan Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
