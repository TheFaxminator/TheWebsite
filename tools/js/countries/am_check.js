// Armenia TIN validation
// Individual: Taxpayer Identification Number (HVHH) — 8 digits
// Entity:     Taxpayer Identification Number (HVHH) — 8 digits

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['AM'] = {

  name: "Armenia",
  flag: "../assets/countries/051-am-armenia.webp",

  metadata: {
    region:       "Western Asia",
    capital:      "Yerevan",
    currency:     "AMD",
  },

  tin_types: {

    Individual: {
      name: "TIN (HVHH)",
      format: "NNNNNNNN",
      description: "Individuals in Armenia are identified for tax purposes by a Taxpayer Identification Number (HVHH — Հարկ վճարողի հաշվառման համար) issued by the State Revenue Committee.\n" +
        "• Issuance: Assigned to taxpayers on registration with the State Revenue Committee.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 8 numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation (e.g. 12345678).\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Armenian 8-digit structural format.\n" +
        "• Syntax Check: Confirms the value is exactly 8 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{7})\d{8}$/.test(tin)) {
          return { valid: false, message: "Does not match the Armenian Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "TIN (HVHH)",
      format: "NNNNNNNN",
      description: "Legal entities in Armenia are identified for tax purposes by a Taxpayer Identification Number (HVHH — Հարկ վճարողի հաշվառման համար) issued by the State Revenue Committee.\n" +
        "• Issuance: Assigned to businesses and other entities on registration with the State Revenue Committee.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 8 numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation (e.g. 12345678).\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Armenian 8-digit structural format.\n" +
        "• Syntax Check: Confirms the value is exactly 8 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{7})\d{8}$/.test(tin)) {
          return { valid: false, message: "Does not match the Armenian Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
