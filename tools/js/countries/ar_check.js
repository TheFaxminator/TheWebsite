// Argentina TIN validation
// Individual: CUIL (Código Único de Identificación Laboral) — prefix 20/23/24/27, 8 digits, check digit
// Entity:     CUIT (Clave Única de Identificación Tributaria) — prefix 30/33, 8 digits, check digit

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['AR'] = {

  name: "Argentina",
  flag: "../assets/countries/050-ar-argentina.webp",

  metadata: {
    region:       "South America",
    capital:      "Buenos Aires",
    currency:     "ARS",
  },

  tin_types: {

    Individual: {
      name: "CUIL",
      format: "NN-NNNNNNNN-N or NNNNNNNNNNN",
      description: "Individuals in Argentina are identified for tax purposes by the CUIL (Código Único de Identificación Laboral) issued by ANSES, or the equivalent CUIT for self-employed taxpayers issued by AFIP.\n" +
        "• Prefix: For individuals the number begins with 20, 23, 24 or 27, denoting gender and disambiguation.\n\n" +

        "Formatting & Rules\n" +
        "• Length: 11 digits (a 2-digit prefix, an 8-digit base derived from the national identity document, and a single check digit).\n" +
        "• Structure: Written as PP-NNNNNNNN-C (e.g. 20-12345678-9) or as 11 continuous digits.\n" +
        "• Separators: Hyphens grouping the three parts are optional; no spaces or other punctuation are allowed.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Argentine CUIL structural format, with or without hyphen separators.\n" +
        "• Syntax Check: Confirms a valid individual prefix (20, 23, 24 or 27), an 8-digit base and a check digit, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not calculate the Modulus 11 check digit, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const hyphen = /^(?!([0-9])\1-\1{8}-\1)(?:20|23|24|27)-\d{8}-\d$/;
        const plain  = /^(?!([0-9])\1{10})(?:20|23|24|27)\d{9}$/;

        if (!hyphen.test(tin) && !plain.test(tin)) {
          return { valid: false, message: "Does not match the Argentine Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "CUIT",
      format: "NN-NNNNNNNN-N or NNNNNNNNNNN",
      description: "Legal entities in Argentina are identified by the CUIT (Clave Única de Identificación Tributaria) issued by AFIP, the federal tax authority.\n" +
        "• Prefix: For entities the number begins with 30 or 33, denoting a legal person.\n\n" +

        "Formatting & Rules\n" +
        "• Length: 11 digits (a 2-digit prefix, an 8-digit base and a single check digit).\n" +
        "• Structure: Written as PP-NNNNNNNN-C (e.g. 30-12345678-9) or as 11 continuous digits.\n" +
        "• Separators: Hyphens grouping the three parts are optional; no spaces or other punctuation are allowed.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Argentine CUIT structural format, with or without hyphen separators.\n" +
        "• Syntax Check: Confirms a valid entity prefix (30 or 33), an 8-digit base and a check digit, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not calculate the Modulus 11 check digit, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const hyphen = /^(?!([0-9])\1-\1{8}-\1)(?:30|33)-\d{8}-\d$/;
        const plain  = /^(?!([0-9])\1{10})(?:30|33)\d{9}$/;

        if (!hyphen.test(tin) && !plain.test(tin)) {
          return { valid: false, message: "Does not match the Argentine Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
