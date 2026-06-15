// Belgium TIN validation
// Individual: Numéro de registre national / Nationaal registernummer (11 digits)
// Entity:     Numéro d'entreprise / Ondernemingsnummer (10 digits, starts with 0 or 1)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['BE'] = {

  name: "Belgium",
  flag: "../assets/countries/007-be-belgium.webp",

  metadata: {
    region:       "Western Europe",
    capital:      "Brussels",
    population:   "11.6M",
    currency:     "EUR",
    gdpPerCapita: "$55,000",
    funFact: "Belgium holds the world record for the most comic strip artists per square kilometre. The country has produced globally beloved characters including Tintin, the Smurfs, and Lucky Luke — and Brussels alone has over 50 giant comic strip murals painted on building walls as part of its official Comic Strip Route."
  },

  tin_types: {

    Individual: {
      name: "Numéro de registre national / Nationaal registernummer",
      format: "NNNNNNNNNNN",
      description: "Belgium issues one type of Taxpayer Identification Number for individuals: the Numéro de registre national (French) or Nationaal registernummer (Dutch), known in English as the National Registry Number.\n" +
        "• National Registry Number: A permanent 11-digit identifier assigned to all individuals registered in the Belgian National Register. Used for tax filing, social security, and identification across Belgian public services.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 11 continuous numeric digits.\n" +
        "• Separators: No spaces, hyphens, or other punctuation are allowed.\n" +
        "• The first 6 digits encode the date of birth (YYMMDD).\n" +
        "• The next 3 digits form a sequence number (odd for male, even for female).\n" +
        "• The final 2 digits are a check number derived from the preceding 9 digits.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Belgian 11-digit structural format.\n" +
        "• Syntax Check: Verifies the input is exactly 11 numeric digits with no spaces or unexpected characters.\n" +
        "• Exclusions: This is a format-only check. It does not calculate the modulo-97 check digits, nor does it verify if the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (/^(?!([0-9])\1{10})\d{11}$/.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Belgian Individual TIN format." };
      }
    },

    Entity: {
      name: "Numéro d'entreprise / Ondernemingsnummer",
      format: "NNNNNNNNNN",
      description: "Belgium issues one type of Taxpayer Identification Number for entities: the Numéro d'entreprise (French) or Ondernemingsnummer (Dutch), known in English as the Enterprise Number.\n" +
        "• Enterprise Number: A 10-digit identifier assigned to businesses, organisations, and other legal entities upon registration with the Crossroads Bank for Enterprises (CBE/KBO). Used for VAT, tax filing, and official identification in all Belgian registries.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 10 continuous numeric digits.\n" +
        "• Leading digit: Always 0 or 1.\n" +
        "• Separators: No spaces, hyphens, or other punctuation are allowed in the plain format.\n" +
        "• The final 2 digits are check digits calculated using a modulo-97 algorithm.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Belgian 10-digit enterprise number structural format.\n" +
        "• Syntax Check: Verifies the input is exactly 10 numeric digits, begins with 0 or 1, and contains no spaces or unexpected characters.\n" +
        "• Exclusions: This is a format-only check. It does not calculate the modulo-97 check digits, nor does it verify if the number is active, registered, or belongs to a real entity.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (/^(?!([0-1])\1{9})[0-1]\d{9}$/.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Belgian Entity TIN format." };
      }
    }

  }
};
