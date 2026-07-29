// Andorra TIN validation
// Individual: NRT (Número de Registre Tributari) — F/E prefix, 6 digits, 1 letter
// Entity:     NRT (Número de Registre Tributari) — A/C/D/E/G/L/O/P/U prefix, 6 digits, 1 letter

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['AD'] = {

  name: "Andorra",
  flag: "../assets/countries/047-ad-andorra.webp",

  metadata: {
    region:       "Southern Europe",
    capital:      "Andorra la Vella",
    currency:     "EUR",
  },

  tin_types: {

    Individual: {
      name: "NRT (Número de Registre Tributari)",
      format: "LNNNNNNL or L-NNNNNN-L",
      description: "Individuals in Andorra are identified for tax purposes by the NRT (Número de Registre Tributari), the Tax Registration Number issued by the Andorran tax authority (Departament de Tributs i de Fronteres).\n" +
        "• Prefix: For individuals the number begins with F (resident natural persons) or E (non-resident natural persons).\n\n" +

        "Formatting & Rules\n" +
        "• Length: 8 characters (a leading letter, 6 digits and a trailing letter).\n" +
        "• Structure: A single prefix letter, followed by 6 digits, followed by a trailing check letter (e.g. F123456Z).\n" +
        "• Separators: The number may optionally be written with hyphens grouping the three parts (e.g. F-123456-Z).\n" +
        "• The number is written in uppercase.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Andorran NRT structural format, with or without hyphen separators.\n" +
        "• Syntax Check: Confirms an F or E prefix, 6 digits and a trailing letter, and rejects strings made up of a single repeated character.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const plain  = /^(?!([A-Z0-9])\1{7})[FE]\d{6}[A-Z]$/;
        const hyphen = /^(?!([A-Z0-9])\1{8})[FE]-\d{6}-[A-Z]$/;

        if (!plain.test(tin) && !hyphen.test(tin)) {
          return { valid: false, message: "Does not match the Andorran Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "NRT (Número de Registre Tributari)",
      format: "LNNNNNNL or L-NNNNNN-L",
      description: "Legal entities in Andorra are identified by the NRT (Número de Registre Tributari), the Tax Registration Number issued by the Andorran tax authority (Departament de Tributs i de Fronteres).\n" +
        "• Prefix: For entities the number begins with one of A, C, D, E, G, L, O, P or U, denoting the category of taxable person (e.g. companies, government bodies, associations).\n\n" +

        "Formatting & Rules\n" +
        "• Length: 8 characters (a leading letter, 6 digits and a trailing letter).\n" +
        "• Structure: A single prefix letter, followed by 6 digits, followed by a trailing check letter (e.g. L707070Z).\n" +
        "• Separators: The number may optionally be written with hyphens grouping the three parts (e.g. L-707070-Z).\n" +
        "• The number is written in uppercase.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Andorran NRT structural format, with or without hyphen separators.\n" +
        "• Syntax Check: Confirms a valid entity prefix (A, C, D, E, G, L, O, P or U), 6 digits and a trailing letter, and rejects strings made up of a single repeated character.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const plain  = /^(?!([A-Z0-9])\1{7})[ACDEGLOPU]\d{6}[A-Z]$/;
        const hyphen = /^(?!([A-Z0-9])\1{8})[ACDEGLOPU]-\d{6}-[A-Z]$/;

        if (!plain.test(tin) && !hyphen.test(tin)) {
          return { valid: false, message: "Does not match the Andorran Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
