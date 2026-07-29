// Cook Islands TIN validation
// Individual: Tax Identification Number — 5 digits
// Entity:     Tax Identification Number — 5 digits

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['CK'] = {

  name: "Cook Islands",
  flag: "../assets/countries/201-ck-cook-island.webp",

  metadata: {
    region:       "Oceania",
    capital:      "Avarua",
    currency:     "NZD",
  },

  tin_types: {

    Individual: {
      name: "TIN",
      format: "NNNNN",
      description: "Individuals in the Cook Islands are issued a Tax Identification Number (TIN) by the Revenue Management Division for tax administration purposes.\n" +
        "• Issuance: Assigned to taxpayers on registration with the Revenue Management Division.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 5 numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation (e.g. 12345).\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Cook Islands 5-digit structural format.\n" +
        "• Syntax Check: Confirms the value is exactly 5 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{4})\d{5}$/.test(tin)) {
          return { valid: false, message: "Does not match the Cook Islands Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "TIN",
      format: "NNNNN",
      description: "Legal entities in the Cook Islands are issued a Tax Identification Number (TIN) by the Revenue Management Division for tax administration purposes.\n" +
        "• Issuance: Assigned to businesses and other entities on registration with the Revenue Management Division.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 5 numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation (e.g. 12345).\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Cook Islands 5-digit structural format.\n" +
        "• Syntax Check: Confirms the value is exactly 5 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{4})\d{5}$/.test(tin)) {
          return { valid: false, message: "Does not match the Cook Islands Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
