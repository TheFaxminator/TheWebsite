// Anguilla TIN validation
// Individual: Tax Identification Number (leading 1, 10 digits total)
// Entity:     Tax Identification Number (leading 2, 10 digits total)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['AI'] = {

  name: "Anguilla",
  flag: "../assets/countries/200-ai-anguilla.webp",

  metadata: {
    region:       "Caribbean",
    capital:      "The Valley",
    currency:     "XCD",
  },

  tin_types: {

    Individual: {
      name: "TIN",
      format: "1NNNNNNNNN",
      description: "Individuals in Anguilla are issued a Tax Identification Number (TIN) by the Inland Revenue Department for tax administration purposes.\n" +
        "• Issuance: Assigned to taxpayers on registration with the Inland Revenue Department.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 10 numeric digits.\n" +
        "• Structure: A leading digit 1 followed by 9 further digits (e.g. 1234567890).\n" +
        "• Separators: No spaces or punctuation are allowed.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Anguillan 10-digit structural format.\n" +
        "• Syntax Check: Confirms the value begins with 1, is exactly 10 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{9})1\d{9}$/.test(tin)) {
          return { valid: false, message: "Does not match the Anguillan Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "TIN",
      format: "2NNNNNNNNN",
      description: "Legal entities in Anguilla are issued a Tax Identification Number (TIN) by the Inland Revenue Department for tax administration purposes.\n" +
        "• Issuance: Assigned to businesses and other entities on registration with the Inland Revenue Department.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 10 numeric digits.\n" +
        "• Structure: A leading digit 2 followed by 9 further digits (e.g. 2345678901).\n" +
        "• Separators: No spaces or punctuation are allowed.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Anguillan 10-digit structural format.\n" +
        "• Syntax Check: Confirms the value begins with 2, is exactly 10 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{9})2\d{9}$/.test(tin)) {
          return { valid: false, message: "Does not match the Anguillan Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
