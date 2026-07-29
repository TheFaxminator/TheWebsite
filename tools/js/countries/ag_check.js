// Antigua and Barbuda TIN validation
// Individual: Tax Identification Number (6 or more digits)
// Entity:     Tax Identification Number (6 digits, hyphen, 2 digits)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['AG'] = {

  name: "Antigua and Barbuda",
  flag: "../assets/countries/049-ag-antigua-and-barbuda.webp",

  metadata: {
    region:       "Caribbean",
    capital:      "Saint John's",
    currency:     "XCD",
  },

  tin_types: {

    Individual: {
      name: "TIN",
      format: "NNNNNN (6 or more digits)",
      description: "Individuals in Antigua and Barbuda are issued a Tax Identification Number (TIN) by the Inland Revenue Department for tax administration purposes.\n" +
        "• Issuance: Assigned to taxpayers on registration with the Inland Revenue Department.\n\n" +

        "Formatting & Rules\n" +
        "• Length: 6 or more numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Antiguan numeric structural format.\n" +
        "• Syntax Check: Confirms the value is at least 6 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1+$)\d{6,}$/.test(tin)) {
          return { valid: false, message: "Does not match the Antiguan Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "TIN",
      format: "NNNNNN-NN",
      description: "Legal entities in Antigua and Barbuda are issued a Tax Identification Number (TIN) by the Inland Revenue Department for tax administration purposes.\n" +
        "• Issuance: Assigned to businesses and other entities on registration with the Inland Revenue Department.\n\n" +

        "Formatting & Rules\n" +
        "• Length: 8 digits arranged as 6 digits, a hyphen, then 2 digits (e.g. 123456-78).\n" +
        "• Separators: A single hyphen separates the two groups; no spaces or other punctuation are allowed.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Antiguan hyphenated structural format.\n" +
        "• Syntax Check: Confirms 6 digits, a hyphen and 2 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{5}-\1{2})\d{6}-\d{2}$/.test(tin)) {
          return { valid: false, message: "Does not match the Antiguan Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
