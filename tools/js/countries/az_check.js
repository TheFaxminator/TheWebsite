// Azerbaijan TIN validation
// Individual: VÖEN ending in 2 (10 digits) or FIN (7 alphanumeric characters)
// Entity:     VÖEN ending in 1 (10 digits)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['AZ'] = {

  name: "Azerbaijan",
  flag: "../assets/countries/052-az-azerbaijan.webp",

  metadata: {
    region:       "Western Asia",
    capital:      "Baku",
    currency:     "AZN",
  },

  tin_types: {

    Individual: {
      name: "VÖEN / FIN",
      format: "NNNNNNNNN2 or XXXXXXX",
      description: "Individuals in Azerbaijan are identified for tax purposes by a VÖEN (Vergi Ödəyicisinin Eyniləşdirmə Nömrəsi — Taxpayer Identification Number) issued by the State Tax Service. A 7-character FIN (Fərdi İdentifikasiya Nömrəsi) printed on the national ID card is also accepted.\n" +
        "• Issuance: The VÖEN is assigned to taxpayers on registration with the State Tax Service; the FIN is assigned to citizens and residents on their identity document.\n\n" +

        "Formatting & Rules\n" +
        "• VÖEN: Exactly 10 digits, where the final digit is 2 for an individual (e.g. 1234567892).\n" +
        "• FIN: Exactly 7 characters made up of uppercase letters and digits (the letter O is not used).\n" +
        "• Separators: No spaces or punctuation are allowed in either format.\n" +
        "• The value cannot consist of a single repeated character.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Azerbaijani individual structural format.\n" +
        "• Syntax Check: Confirms the value is either a 10-digit VÖEN ending in 2 or a 7-character alphanumeric FIN, with no spaces or unexpected characters, and rejects strings made up of a single repeated character.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^(?!([0-9])\1{9})\d{9}2$/,
          /^(?!([A-NP-Z0-9])\1{6})[A-NP-Z0-9]{7}$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Azerbaijani Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "VÖEN",
      format: "NNNNNNNNN1",
      description: "Legal entities in Azerbaijan are identified for tax purposes by a VÖEN (Vergi Ödəyicisinin Eyniləşdirmə Nömrəsi — Taxpayer Identification Number) issued by the State Tax Service.\n" +
        "• Issuance: Assigned to businesses and other entities on registration with the State Tax Service.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 10 digits, where the final digit is 1 for a legal entity (e.g. 1234567891).\n" +
        "• Separators: No spaces or punctuation are allowed.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Azerbaijani 10-digit VÖEN structural format.\n" +
        "• Syntax Check: Confirms the value is 10 digits ending in 1 with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{9})\d{9}1$/.test(tin)) {
          return { valid: false, message: "Does not match the Azerbaijani Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
