// Albania TIN validation
// Individual: NID / NIPT-style identifier (1 letter, 8 digits, 1 letter)
// Entity:     NIPT / NUIS (1 letter, 8 digits, 1 letter)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['AL'] = {

  name: "Albania",
  flag: "../assets/countries/045-al-albania.webp",

  metadata: {
    region:       "Southern Europe",
    capital:      "Tirana",
    currency:     "ALL",
  },

  tin_types: {

    Individual: {
      name: "NID (Numri i Identitetit)",
      format: "LNNNNNNNNL",
      description: "Individuals in Albania are identified for tax purposes by their Identity Number (Numri i Identitetit, NID), also used as their taxpayer identifier.\n" +
        "• Issuance: Assigned to citizens and residents and printed on the national identity card and biometric passport.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 10 characters.\n" +
        "• Structure: A leading letter, followed by 8 digits, followed by a trailing letter (e.g. J91234567K).\n" +
        "• Separators: No spaces or punctuation are allowed.\n" +
        "• The number is written in uppercase.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Albanian 10-character structural format.\n" +
        "• Syntax Check: Confirms the value is a letter, 8 digits and a trailing letter with no spaces or unexpected characters, and rejects strings made up of a single repeated character.\n" +
        "• Exclusions: This is a format-only check. It does not verify the embedded date-of-birth logic, apply a checksum, or confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([A-Z0-9])\1{9})[A-Z]\d{8}[A-Z]$/.test(tin)) {
          return { valid: false, message: "Does not match the Albanian Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "NIPT / NUIS",
      format: "LNNNNNNNNL",
      description: "Legal entities in Albania are identified by a NIPT (Numri i Identifikimit për Personin e Tatueshëm), also known as NUIS — the Unique Identification Number of the Taxable Person.\n" +
        "• Issuance: Assigned by the National Business Center (Qendra Kombëtare e Biznesit) upon registration and used for tax filing and invoicing.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 10 characters.\n" +
        "• Structure: A leading letter, followed by 8 digits, followed by a trailing letter (e.g. K91234567L).\n" +
        "• Separators: No spaces or punctuation are allowed.\n" +
        "• The number is written in uppercase.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Albanian 10-character structural format.\n" +
        "• Syntax Check: Confirms the value is a letter, 8 digits and a trailing letter with no spaces or unexpected characters, and rejects strings made up of a single repeated character.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query government registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([A-Z0-9])\1{9})[A-Z]\d{8}[A-Z]$/.test(tin)) {
          return { valid: false, message: "Does not match the Albanian Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
