// Georgia TIN validation
// Individual: Personal number — 11 digits, or older 9 digits
// Entity:     Taxpayer identification number — 9 digits

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['GE'] = {

  name: "Georgia",
  flag: "../assets/countries/092-ge-georgia.webp",

  metadata: {
    region:       "Western Asia",
    capital:      "Tbilisi",
    currency:     "GEL",
  },

  tin_types: {

    Individual: {
      name: "Personal Number",
      format: "NNNNNNNNNNN",
      description: "Individuals in Georgia are identified for tax purposes by their personal number, issued by the Public Service Development Agency and used by the Revenue Service.\n" +
        "• Issuance: Assigned to citizens and residents on their national identity document.\n\n" +

        "Formatting & Rules\n" +
        "• Length: 11 digits (current personal number) or 9 digits (older format).\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Georgian individual structural format.\n" +
        "• Syntax Check: Confirms the value is 11 or 9 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^(?!([0-9])\1{10})\d{11}$/,
          /^(?!([0-9])\1{8})\d{9}$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Georgian Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "TIN",
      format: "NNNNNNNNN",
      description: "Legal entities in Georgia are identified for tax purposes by a taxpayer identification number issued by the National Agency of Public Registry and used by the Revenue Service.\n" +
        "• Issuance: Assigned to businesses and other entities on registration.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 9 numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation (e.g. 123456789).\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Georgian 9-digit structural format.\n" +
        "• Syntax Check: Confirms the value is exactly 9 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{8})\d{9}$/.test(tin)) {
          return { valid: false, message: "Does not match the Georgian Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
