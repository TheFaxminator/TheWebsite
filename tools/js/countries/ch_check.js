// Switzerland TIN validation
// Individual: AHV/AVS number (13 digits, prefix 756)
// Entity:     UID/IDE/IDI (CHE + 9 digits)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['CH'] = {

  name: "Switzerland",
  flag: "../assets/countries/040-ch-switzerland.webp",

  metadata: {
    region:       "Central Europe",
    capital:      "Bern",
    population:   "8.7M",
    currency:     "CHF",
    gdpPerCapita: "$92,400",
    funFact: "Switzerland has four official national languages — German, French, Italian, and Romansh — and the country's own ISO " +
      "alpha-3 code (CHE) comes not from any of its names, but from its Latin name Confoederatio Helvetica, the same root that " +
      "gives the Swiss franc its currency symbol CHF.",
  },

  tin_types: {

    Individual: {
      name: "AHV/AVS Number",
      format: "756.NNNN.NNNN.NN or 756NNNNNNNNNN",
      description: "Switzerland issues one type of Taxpayer Identification Number for individuals: the AHV/AVS number.\n" +
        "• AHV/AVS: A 13-digit personal identification number assigned to every individual registered in the Swiss social security system. Used for social security, health insurance, and tax purposes. Issued by the Central Compensation Office.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 13 digits, or 16 characters in the dotted formatted variant.\n" +
        "• The first 3 digits are always 756 (Switzerland's ISO 3166-1 numeric country code).\n" +
        "• Followed by 9 randomly assigned digits and 1 final check digit.\n" +
        "• Formatted variant: Digits grouped as 756.XXXX.XXXX.XX with dots as separators.\n" +
        "• Unformatted variant: The same 13 digits written without any separators.\n" +
        "• Separators: Dots (.) are used only in the formatted variant. No spaces or other punctuation.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows one of the expected Swiss AHV/AVS structural formats.\n" +
        "• Syntax Check: Verifies the input matches either the dotted (756.XXXX.XXXX.XX) or plain (756XXXXXXXXXX) format.\n" +
        "• Exclusions: This is a format-only check. It does not validate the check digit, nor does it verify if the number has been issued or is active in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }
        const formatted   = /^(?!756\.([0-9])\1{3}\.\1{4}\.\1{2})756\.\d{4}\.\d{4}\.\d{2}$/.test(tin);
        const unformatted = /^(?!756([0-9])\1{9})756\d{10}$/.test(tin);
        if (!formatted && !unformatted) {
          return { valid: false, message: "Does not match the Swiss Individual format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "UID / IDE / IDI",
      format: "CHE-NNN.NNN.NNN or CHENNNNNNNNN",
      description: "Switzerland issues one type of Taxpayer Identification Number for entities: UID (also known as IDE in French or IDI in Italian).\n" +
        "• UID: A unique identifier assigned to businesses, associations, foundations, and other legal entities registered in Switzerland. Administered by the Federal Statistical Office and used for VAT registration, government filings, and business correspondence.\n\n" +

        "Formatting & Rules\n" +
        "• Length: 12 characters in the formatted variant (CHE-NNN.NNN.NNN), or 12 characters in the unformatted variant (CHENNNNNNNNN).\n" +
        "• The prefix CHE is Switzerland's ISO 3166-1 alpha-3 country code.\n" +
        "• Followed by 8 assigned digits and 1 final modulo-11 check digit (9 digits total after the prefix).\n" +
        "• Formatted variant: Digits grouped as CHE-NNN.NNN.NNN (hyphen after prefix, dots between digit groups).\n" +
        "• Unformatted variant: Same number without hyphen or dots (CHENNNNNNNNN).\n" +
        "• Separators: Hyphen and dots are used only in the formatted variant. No spaces.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows one of the expected Swiss UID structural formats.\n" +
        "• Syntax Check: Verifies the input matches either the formatted (CHE-NNN.NNN.NNN) or unformatted (CHENNNNNNNNN) variant.\n" +
        "• Exclusions: This is a format-only check. It does not validate the check digit, nor does it verify if the entity is active or appears in official registers.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }
        const formatted   = /^(?!CHE-([0-9])\1{2}\.\1{3}\.\1{3})CHE-\d{3}\.\d{3}\.\d{3}$/.test(tin);
        const unformatted = /^(?!CHE([0-9])\1{8})CHE\d{9}$/.test(tin);
        if (!formatted && !unformatted) {
          return { valid: false, message: "Does not match the Swiss Entity format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
