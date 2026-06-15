// Austria TIN validation
// Individual: Steuernummer (9 digits plain or NN-NNN/NNNN formatted)
// Entity:     UID-Nummer / VAT number (ATU + 8 digits)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['AT'] = {

  name: "Austria",
  flag: "../assets/countries/006-at-austria.webp",

  metadata: {
    region:       "Central Europe",
    capital:      "Vienna",
    population:   "9.1M",
    currency:     "EUR",
    gdpPerCapita: "$56,000",
    funFact: "Austria is home to one of the oldest zoos in the world — the Tiergarten Schönbrunn in Vienna, founded in 1752 by Emperor Franz I as an imperial menagerie. It has operated continuously ever since and is consistently ranked among the best zoos in Europe."
  },

  tin_types: {

    Individual: {
      name: "Steuernummer",
      format: "NNNNNNNNN  or  NN-NNN/NNNN",
      description: "Austria issues one type of Taxpayer Identification Number for individuals: the Steuernummer (Tax Number).\n" +
        "• Steuernummer: Assigned by the local tax office (Finanzamt) to individuals who file a tax return or are registered for tax purposes in Austria.\n\n" +

        "Formatting & Rules\n" +
        "• Plain format: Exactly 9 continuous numeric digits with no separators.\n" +
        "• Formatted variant: Written as NN-NNN/NNNN, using a hyphen after the first 2 digits and a forward slash after the next 3 digits.\n" +
        "• Both formats represent the same underlying 9-digit number.\n" +
        "• Separators: None in the plain format. Hyphen and slash only in the formatted variant. No spaces permitted.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input matches one of the accepted Austrian individual TIN formats.\n" +
        "• Syntax Check: Verifies the input matches either the 9-digit plain format or the NN-NNN/NNNN formatted variant.\n" +
        "• Exclusions: This is a format-only check. It does not validate the check digit, nor does it verify if the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const plain     = /^(?!([0-9])\1{8})\d{9}$/.test(tin);
        const formatted = /^(?!([0-9])\1{1}-\1{3}\/\1{4})\d{2}-\d{3}\/\d{4}$/.test(tin);

        if (plain || formatted) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Austrian Individual TIN format." };
      }
    },

    Entity: {
      name: "UID-Nummer (VAT Number)",
      format: "ATUNNNNNNNNN",
      description: "Austria issues one type of Taxpayer Identification Number for entities: the Umsatzsteuer-Identifikationsnummer (UID-Nummer), commonly known as the VAT number.\n" +
        "• UID-Nummer: Assigned to businesses and legal entities registered for VAT in Austria. Used for intra-EU trade, cross-border VAT reporting, and identification in official Austrian tax records.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 12 characters — prefix ATU followed by 8 numeric digits.\n" +
        "• The prefix AT identifies Austria as the issuing EU member state.\n" +
        "• The letter U follows AT as a fixed character in all Austrian VAT numbers.\n" +
        "• Followed by exactly 8 numeric digits.\n" +
        "• Separators: None allowed (no hyphens, no spaces).\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the expected Austrian VAT number structural format.\n" +
        "• Syntax Check: Verifies the ATU prefix followed by exactly 8 numeric digits with no extra characters.\n" +
        "• Exclusions: This is a format-only check. It does not validate the check digit, nor does it verify if the number is active, registered, or belongs to a real entity.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (/^(?!ATU([0-9])\1{7})ATU\d{8}$/.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Austrian Entity TIN format." };
      }
    }

  }
};
