// Croatia TIN validation
// Individual: Osobni identifikacijski broj / OIB (11 digits)
// Entity:     Osobni identifikacijski broj / OIB (11 digits)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['HR'] = {

  name: "Croatia",
  flag: "../assets/countries/009-hr-croatia.webp",

  metadata: {
    region:       "Southern Europe",
    capital:      "Zagreb",
    population:   "3.9M",
    currency:     "EUR",
    gdpPerCapita: "$23,000",
    funFact: "Croatia is the birthplace of the necktie. The distinctive knotted cravat worn by Croatian soldiers in the Thirty Years' War (1618–1648) caught the eye of Parisian fashion, spreading across Europe and evolving into the modern tie — a $7 billion global industry today that still carries the name of its Croatian origins."
  },

  tin_types: {

    Individual: {
      name: "Osobni identifikacijski broj (OIB)",
      format: "NNNNNNNNNNN",
      description: "Croatia issues one Taxpayer Identification Number used for both individuals and entities: the Osobni identifikacijski broj (OIB), or Personal Identification Number in English.\n" +
        "• OIB: A permanent 11-digit identifier assigned to all Croatian citizens, residents, and legal entities by the Tax Administration (Porezna uprava). Used for tax filing, social security, healthcare, and identification across all Croatian public services and official records.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 11 continuous numeric digits.\n" +
        "• Separators: No spaces, hyphens, or other punctuation are allowed.\n" +
        "• The 11th digit is a check digit calculated using the ISO 7064 Mod 11,10 algorithm.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Croatian 11-digit structural format.\n" +
        "• Syntax Check: Verifies the input is exactly 11 numeric digits with no spaces or unexpected characters.\n" +
        "• Exclusions: This is a format-only check. It does not calculate the ISO 7064 check digit, nor does it verify if the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (/^(?!([0-9])\1{10})\d{11}$/.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Croatian Individual TIN format." };
      }
    },

    Entity: {
      name: "Osobni identifikacijski broj (OIB)",
      format: "NNNNNNNNNNN",
      description: "Croatia issues one Taxpayer Identification Number used for both individuals and entities: the Osobni identifikacijski broj (OIB), or Personal Identification Number in English.\n" +
        "• OIB: A permanent 11-digit identifier assigned to all Croatian citizens, residents, and legal entities by the Tax Administration (Porezna uprava). Used for VAT registration, tax filing, invoicing, and identification in all official Croatian registries.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 11 continuous numeric digits.\n" +
        "• Separators: No spaces, hyphens, or other punctuation are allowed.\n" +
        "• The 11th digit is a check digit calculated using the ISO 7064 Mod 11,10 algorithm.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Croatian 11-digit structural format.\n" +
        "• Syntax Check: Verifies the input is exactly 11 numeric digits with no spaces or unexpected characters.\n" +
        "• Exclusions: This is a format-only check. It does not calculate the ISO 7064 check digit, nor does it verify if the number is active, registered, or belongs to a real entity.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (/^(?!([0-9])\1{10})\d{11}$/.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Croatian Entity TIN format." };
      }
    }

  }
};
