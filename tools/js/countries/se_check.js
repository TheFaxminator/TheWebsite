// Sweden TIN validation
// Validation is regex-based only (no checksum algorithm).

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['SE'] = {

  name: "Sweden",
  flag: "../assets/countries/002-se-sweden.png",

  metadata: {
    region:       "Northern Europe",
    capital:      "Stockholm",
    population:   "10.5M",
    currency:     "SEK",
    gdpPerCapita: "$55,400",
    funFact: "Sweden introduced its personal identity number (personnummer) system in 1947, making it one of the earliest countries in the world to assign a unique numeric identifier to every resident — a system that underpins everything from healthcare and banking to tax filing today."
  },

  tin_types: {

    Individual: {
      name: "Personnummer",
      format: "YYMMDD-NNNN or YYYYMMDD-NNNN",
      description: "The Swedish personal identity number (personnummer) is assigned to all persons registered " +
        "in Sweden. It consists of a date of birth component followed by a dash and a four-digit suffix. " +
        "The short form uses a two-digit year (YYMMDD-NNNN) and the long form uses a four-digit year (YYYYMMDD-NNNN). " +
        "Issued by the Swedish Tax Agency (Skatteverket).",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^(?!([0-9])\1{5}-\1{4})\d{6}-\d{4}$/,
          /^(?!([0-9])\1{7}-\1{4})\d{8}-\d{4}$/,
        ];

        if (patterns.some(r => r.test(tin))) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return {
          valid: false,
          message: "Does not match the Swedish Individual TIN format." 
        };
      }
    },

    Entity: {
      name: "Organisationsnummer",
      format: "YYMMDD-NNNN",
      description: "The Swedish organisation number (organisationsnummer) follows the same structure as the " +
        "personnummer and is assigned to all legal entities registered in Sweden. " +
        "It consists of six date-based digits, a dash, and a four-digit suffix. " +
        "Issued by the Swedish Companies Registration Office (Bolagsverket).",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (/^(?!([0-9])\1{5}-\1{4})\d{6}-\d{4}$/.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return {
          valid: false,
          message: "Does not match the Swedish Entity TIN format."
        };
      }
    }

  }
};
