// Greece TIN validation
// Individual & Entity: AFM (Αριθμός Φορολογικού Μητρώου) — 9 digits

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['GR'] = {

  name: "Greece",
  flag: "../assets/countries/015-gr-greece.webp",

  metadata: {
    region:       "Southern Europe",
    capital:      "Athens",
    population:   "10.4M",
    currency:     "EUR",
    gdpPerCapita: "$23,500",
    funFact: "Greece has one of the longest coastlines in the world — around 13,600 km — and roughly 6,000 islands and islets, yet only about 227 of them are inhabited.",
  },

  tin_types: {

    Individual: {
      name: "AFM (Αριθμός Φορολογικού Μητρώου)",
      format: "NNNNNNNNN",
      description: "Individuals in Greece are identified for tax purposes by an AFM (Αριθμός Φορολογικού Μητρώου), or Tax Registration Number.\n" +
        "• Issuance: Assigned by the Independent Authority for Public Revenue (AADE) and used across all dealings with the Greek tax administration.\n" +
        "• Purpose: Required for employment, filing tax returns, banking, and most official transactions.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 9 continuous digits.\n" +
        "• Separators: No spaces or punctuation are allowed.\n" +
        "• The 9th digit is a check digit derived from the preceding 8 digits (Modulus 11).\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Greek 9-digit structural format.\n" +
        "• Syntax Check: Confirms the input is exactly 9 digits, is not a single digit repeated 9 times, and contains no spaces or unexpected characters.\n" +
        "• Exclusions: This is a format-only check. It does not perform the Modulus 11 check-digit calculation, nor does it verify that the number is active or assigned in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{8})\d{9}$/.test(tin)) {
          return { valid: false, message: "Does not match the Greek Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "AFM (Αριθμός Φορολογικού Μητρώου)",
      format: "NNNNNNNNN",
      description: "Businesses and organizations in Greece are identified by an AFM (Αριθμός Φορολογικού Μητρώου), the same Tax Registration Number scheme used for individuals.\n" +
        "• Issuance: Assigned by the Independent Authority for Public Revenue (AADE) upon registration of the entity.\n" +
        "• Purpose: Used for tax filing, invoicing, VAT, and identifying the legal entity in official Greek registries.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 9 continuous digits.\n" +
        "• Separators: No spaces or punctuation are allowed.\n" +
        "• The 9th digit is a check digit derived from the preceding 8 digits (Modulus 11).\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Greek 9-digit structural format.\n" +
        "• Syntax Check: Confirms the input is exactly 9 digits, is not a single digit repeated 9 times, and contains no spaces or unexpected characters.\n" +
        "• Exclusions: This is a format-only check. It does not perform the Modulus 11 check-digit calculation, nor does it query government databases to confirm the entity is active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{8})\d{9}$/.test(tin)) {
          return { valid: false, message: "Does not match the Greek Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
