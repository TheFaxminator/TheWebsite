// Cyprus TIN validation
// Individual: Αριθμός Φορολογικής Ταυτότητας / ΑΦΤ (8 digits + 1 letter)
// Entity:     Αριθμός Φορολογικής Ταυτότητας / ΑΦΤ (8 digits + 1 letter)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['CY'] = {

  name: "Cyprus",
  flag: "../assets/countries/010-cy-cyprus.webp",

  metadata: {
    region:       "Southern Europe",
    capital:      "Nicosia",
    population:   "1.3M",
    currency:     "EUR",
    gdpPerCapita: "$34,000",
    funFact: "Cyprus is the only country in the world whose national flag depicts a map of the country itself. The copper-coloured outline on the flag is no coincidence either — the island gave copper its very name, as the Latin word for copper, cuprum, is derived directly from Kypros, the ancient name for Cyprus."
  },

  tin_types: {

    Individual: {
      name: "Αριθμός Φορολογικής Ταυτότητας (ΑΦΤ)",
      format: "[0,6,9]NNNNNNNL",
      description: "Cyprus issues one Taxpayer Identification Number used for both individuals and entities: the Αριθμός Φορολογικής Ταυτότητας (ΑΦΤ), or Tax Identification Number in English.\n" +
        "• ΑΦΤ: Assigned by the Cyprus Tax Department to all individuals registered for tax purposes in Cyprus. Used for income tax filing, VAT, and identification across all Cypriot tax authorities.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 9 characters — 8 numeric digits followed by 1 uppercase letter.\n" +
        "• The first digit must be 0, 6, or 9 — any other leading digit is invalid.\n" +
        "• The final character is an uppercase Latin letter (A–Z) used as a check character.\n" +
        "• Separators: No spaces, hyphens, or other punctuation are allowed.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Cypriot TIN structural format.\n" +
        "• Syntax Check: Verifies the input consists of exactly 8 numeric digits followed by one uppercase letter, with no spaces or unexpected characters.\n" +
        "• First Digit Check: Verifies that the leading digit is 0, 6, or 9, as required for individual TINs.\n" +
        "• Exclusions: This is a format-only check. It does not validate the check letter, nor does it verify if the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (/^(?!([0-9])\1{7})[069]\d{7}[A-Z]$/.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Cypriot Individual TIN format." };
      }
    },

    Entity: {
      name: "Αριθμός Φορολογικής Ταυτότητας (ΑΦΤ)",
      format: "NNNNNNNNL",
      description: "Cyprus issues one Taxpayer Identification Number used for both individuals and entities: the Αριθμός Φορολογικής Ταυτότητας (ΑΦΤ), or Tax Identification Number in English.\n" +
        "• ΑΦΤ: Assigned by the Cyprus Tax Department to all businesses and legal entities registered for tax or VAT purposes in Cyprus. Used for corporate tax filing, VAT registration, and identification in all official Cypriot registries.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 9 characters — 8 numeric digits followed by 1 uppercase letter.\n" +
        "• The final character is an uppercase Latin letter (A–Z) used as a check character.\n" +
        "• Separators: No spaces, hyphens, or other punctuation are allowed.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Cypriot TIN structural format.\n" +
        "• Syntax Check: Verifies the input consists of exactly 8 numeric digits followed by one uppercase letter, with no spaces or unexpected characters.\n" +
        "• Exclusions: This is a format-only check. It does not validate the check letter, nor does it verify if the number is active, registered, or belongs to a real entity.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (/^(?!([0-9])\1{7})\d{8}[A-Z]$/.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Cypriot Entity TIN format." };
      }
    }

  }
};
