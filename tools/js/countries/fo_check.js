// Faroe Islands TIN validation
// Individual: P-tal — 6+3 grouped (NNNNNN-NNN) or 9 digits
// Entity:     V-tal — 8 digits

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['FO'] = {

  name: "Faroe Islands",
  flag: "../assets/countries/203-fo-faroe-islands.webp",

  metadata: {
    region:       "Northern Europe",
    capital:      "Tórshavn",
    currency:     "DKK",
  },

  tin_types: {

    Individual: {
      name: "P-tal",
      format: "NNNNNN-NNN",
      description: "Individuals in the Faroe Islands are identified for tax purposes by their P-tal (personal number), administered by TAKS, the Faroese tax authority.\n" +
        "• Issuance: Assigned to citizens and residents registered in the national population register.\n\n" +

        "Formatting & Rules\n" +
        "• Length: 9 digits.\n" +
        "• Grouping: May be written as continuous digits, or grouped as NNNNNN-NNN with a hyphen after the first 6 digits.\n" +
        "• Separators: Only a single hyphen in the grouped form; no spaces.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Faroese P-tal structural format.\n" +
        "• Syntax Check: Confirms the value is 9 digits (continuous or grouped as NNNNNN-NNN), and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^(?!([0-9])\1{5}-\1{3})\d{6}-\d{3}$/,
          /^(?!([0-9])\1{8})\d{9}$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Faroese Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "V-tal",
      format: "NNNNNNNN",
      description: "Legal entities in the Faroe Islands are identified for tax purposes by their V-tal (business number), administered by TAKS, the Faroese tax authority.\n" +
        "• Issuance: Assigned to businesses and other entities on registration.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 8 numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation (e.g. 12345678).\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Faroese 8-digit structural format.\n" +
        "• Syntax Check: Confirms the value is exactly 8 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{7})\d{8}$/.test(tin)) {
          return { valid: false, message: "Does not match the Faroese Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
