// Ghana TIN validation
// Individual: Taxpayer Identification Number — 1 letter followed by 10 digits
// Entity:     Taxpayer Identification Number — 1 letter followed by 10 digits

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['GH'] = {

  name: "Ghana",
  flag: "../assets/countries/093-gh-ghana.webp",

  metadata: {
    region:       "West Africa",
    capital:      "Accra",
    currency:     "GHS",
  },

  tin_types: {

    Individual: {
      name: "TIN",
      format: "LNNNNNNNNNN",
      description: "Individuals in Ghana are identified for tax purposes by a Taxpayer Identification Number (TIN) issued by the Ghana Revenue Authority.\n" +
        "• Issuance: Assigned to taxpayers on registration with the Ghana Revenue Authority.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 11 characters.\n" +
        "• Structure: A leading uppercase letter followed by 10 digits (e.g. P0001234567).\n" +
        "• Separators: No spaces or punctuation are allowed.\n" +
        "• The value cannot consist of a single repeated character.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Ghanaian 11-character structural format.\n" +
        "• Syntax Check: Confirms the value is a leading letter followed by 10 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated character.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([A-Z0-9])\1{10})[A-Z]\d{10}$/.test(tin)) {
          return { valid: false, message: "Does not match the Ghanaian Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "TIN",
      format: "LNNNNNNNNNN",
      description: "Legal entities in Ghana are identified for tax purposes by a Taxpayer Identification Number (TIN) issued by the Ghana Revenue Authority.\n" +
        "• Issuance: Assigned to businesses and other entities on registration with the Ghana Revenue Authority.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 11 characters.\n" +
        "• Structure: A leading uppercase letter followed by 10 digits (e.g. C0001234567).\n" +
        "• Separators: No spaces or punctuation are allowed.\n" +
        "• The value cannot consist of a single repeated character.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Ghanaian 11-character structural format.\n" +
        "• Syntax Check: Confirms the value is a leading letter followed by 10 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated character.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([A-Z0-9])\1{10})[A-Z]\d{10}$/.test(tin)) {
          return { valid: false, message: "Does not match the Ghanaian Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
