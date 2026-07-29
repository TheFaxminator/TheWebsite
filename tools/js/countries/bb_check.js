// Barbados TIN validation
// Individual: Taxpayer Identification Number — 13 digits beginning with 1
// Entity:     Taxpayer Identification Number — 13 digits beginning with 1

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['BB'] = {

  name: "Barbados",
  flag: "../assets/countries/056-bb-barbados.webp",

  metadata: {
    region:       "Caribbean",
    capital:      "Bridgetown",
    currency:     "BBD",
  },

  tin_types: {

    Individual: {
      name: "TIN",
      format: "1NNNNNNNNNNNN",
      description: "Individuals in Barbados are issued a Taxpayer Identification Number (TIN) by the Barbados Revenue Authority for tax administration purposes.\n" +
        "• Issuance: Assigned to taxpayers on registration with the Barbados Revenue Authority.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 13 numeric digits.\n" +
        "• Structure: A leading digit 1 followed by 12 further digits.\n" +
        "• Separators: No spaces or punctuation are allowed.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Barbadian 13-digit structural format.\n" +
        "• Syntax Check: Confirms the value begins with 1 and is exactly 13 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!(\d)\1{12})1\d{12}$/.test(tin)) {
          return { valid: false, message: "Does not match the Barbadian Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "TIN",
      format: "1NNNNNNNNNNNN",
      description: "Legal entities in Barbados are issued a Taxpayer Identification Number (TIN) by the Barbados Revenue Authority for tax administration purposes.\n" +
        "• Issuance: Assigned to businesses and other entities on registration with the Barbados Revenue Authority.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 13 numeric digits.\n" +
        "• Structure: A leading digit 1 followed by 12 further digits.\n" +
        "• Separators: No spaces or punctuation are allowed.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Barbadian 13-digit structural format.\n" +
        "• Syntax Check: Confirms the value begins with 1 and is exactly 13 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!(\d)\1{12})1\d{12}$/.test(tin)) {
          return { valid: false, message: "Does not match the Barbadian Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
