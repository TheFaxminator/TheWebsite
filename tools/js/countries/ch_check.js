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
      description: "The AHV/AVS number is a 13-digit personal identification number assigned to every individual registered " +
        "in the Swiss social security system. It is used for social security, health insurance, and tax purposes, and is " +
        "issued by the Central Compensation Office.\n\n" +
        "The number is structured as follows: the first three digits are always 756, Switzerland's ISO 3166-1 numeric country code. " +
        "This is followed by seven randomly assigned digits and a final check digit, giving 13 digits in total. " +
        "In formatted form the digits are grouped as 756.XXXX.XXXX.XX, where the last group of two contains the check digit. " +
        "The unformatted variant is the same 13 digits written without separators.\n\n" +
        "Validation scope: This validation checks whether the entered value matches the expected AHV/AVS number format, " +
        "accepting both the dotted and unformatted variants. It does not verify the check digit or confirm that the number " +
        "has been issued or is active in official records.",

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
      description: "The UID (also known as IDE or IDI depending on language region) is a unique identifier assigned to " +
        "businesses, associations, foundations, and other legal entities registered in Switzerland. It is administered by " +
        "the Federal Statistical Office and is used across VAT registration, official government filings, and business correspondence.\n\n" +
        "The number is structured as follows: the prefix CHE — Switzerland's ISO 3166-1 alpha-3 country code — is followed by " +
        "eight assigned digits and a final modulo-11 check digit, giving nine digits in total after the prefix. " +
        "In formatted form the digits are grouped as CHE-XXX.XXX.XXX, where the last group of three ends with the check digit. " +
        "The unformatted variant omits the hyphen and dots.\n\n" +
        "Validation scope: This validation checks whether the entered value matches the expected UID format, " +
        "accepting both the formatted and unformatted variants. It does not verify the check digit or confirm that the entity " +
        "is active or appears in official registers.",

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
