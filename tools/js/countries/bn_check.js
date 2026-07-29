// Brunei Darussalam TIN validation
// Individual: IC / TIN — 8 digits, optionally grouped NN-NNNNNN
// Entity:     Business registration number — prefix P, RC or RFC followed by 8 digits

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['BN'] = {

  name: "Brunei Darussalam",
  flag: "../assets/countries/065-bn-brunei.webp",

  metadata: {
    region:       "Southeast Asia",
    capital:      "Bandar Seri Begawan",
    currency:     "BND",
  },

  tin_types: {

    Individual: {
      name: "TIN",
      format: "NNNNNNNN or NN-NNNNNN",
      description: "Individuals in Brunei Darussalam are identified for tax purposes by a Tax Identification Number derived from their identity card number, administered by the Revenue Division of the Ministry of Finance and Economy.\n" +
        "• Issuance: Assigned to taxpayers and residents for tax administration purposes.\n\n" +

        "Formatting & Rules\n" +
        "• Length: 8 digits.\n" +
        "• Grouping: May be written as continuous digits, or grouped as NN-NNNNNN with a single hyphen.\n" +
        "• Separators: Only a single hyphen in the grouped form; no spaces or other punctuation.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Bruneian individual structural format.\n" +
        "• Syntax Check: Confirms the value is 8 digits (continuous or grouped as NN-NNNNNN) with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^(?!([0-9])\1{7})\d{8}$/,
          /^(?!([0-9])\1{1}-\1{6})\d{2}-\d{6}$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Bruneian Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "Business Registration Number",
      format: "P/RC/RFC + NNNNNNNN",
      description: "Legal entities in Brunei Darussalam are identified for tax purposes by a business registration number issued by the Registry of Companies and Business Names, used by the Revenue Division of the Ministry of Finance and Economy.\n" +
        "• Issuance: Assigned to businesses and other entities on registration, carrying a prefix indicating the entity category.\n\n" +

        "Formatting & Rules\n" +
        "• Structure: A prefix of P, RC or RFC followed by exactly 8 digits (e.g. P12345678, RC12345678, RFC12345678).\n" +
        "• Separators: No spaces or punctuation are allowed; prefixes are uppercase.\n" +
        "• The digits cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Bruneian entity structural format.\n" +
        "• Syntax Check: Confirms the value is a P, RC or RFC prefix followed by 8 digits with no spaces or unexpected characters, and rejects strings whose digits are a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^(?!P([0-9])\1{8})P\d{8}$/,
          /^(?!RC([0-9])\1{8})RC\d{8}$/,
          /^(?!RFC([0-9])\1{8})RFC\d{8}$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Bruneian Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
