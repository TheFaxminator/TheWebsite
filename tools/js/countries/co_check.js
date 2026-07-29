// Colombia TIN validation
// Individual: NIT / Cédula — 10 digits, plain or NNNNNNNNN-N
// Entity:     NIT — 10 digits, plain or NNNNNNNNN-N

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['CO'] = {

  name: "Colombia",
  flag: "../assets/countries/033-co-colombia.webp",

  metadata: {
    region:       "South America",
    capital:      "Bogotá",
    currency:     "COP",
  },

  tin_types: {

    Individual: {
      name: "NIT / Cédula",
      format: "NNNNNNNNN-N",
      description: "Individuals in Colombia are identified for tax purposes by the NIT (Número de Identificación Tributaria), based on their cédula, issued by the DIAN (Dirección de Impuestos y Aduanas Nacionales).\n" +
        "• Issuance: Assigned to taxpayers on registration with the DIAN.\n\n" +

        "Formatting & Rules\n" +
        "• Length: 10 digits, optionally written with the final digit as a check digit after a hyphen (NNNNNNNNN-N).\n" +
        "• Separators: A single hyphen before the check digit is permitted; no spaces.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Colombian NIT structural format.\n" +
        "• Syntax Check: Confirms the value is 10 digits, or 9 digits with a hyphenated check digit, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not compute the check digit, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^(?!([0-9])\1{9})\d{10}$/,
          /^(?!([0-9])\1{8}-\1)\d{9}-\d$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Colombian Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "NIT",
      format: "NNNNNNNNN-N",
      description: "Legal entities in Colombia are identified for tax purposes by the NIT (Número de Identificación Tributaria) issued by the DIAN (Dirección de Impuestos y Aduanas Nacionales).\n" +
        "• Issuance: Assigned to businesses and other entities on registration with the DIAN.\n\n" +

        "Formatting & Rules\n" +
        "• Length: 10 digits, optionally written with the final digit as a check digit after a hyphen (NNNNNNNNN-N).\n" +
        "• Separators: A single hyphen before the check digit is permitted; no spaces.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Colombian NIT structural format.\n" +
        "• Syntax Check: Confirms the value is 10 digits, or 9 digits with a hyphenated check digit, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not compute the check digit, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^(?!([0-9])\1{9})\d{10}$/,
          /^(?!([0-9])\1{8}-\1)\d{9}-\d$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Colombian Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
