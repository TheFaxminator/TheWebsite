// Sweden TIN validation
// Validation is regex-based only (no checksum algorithm).

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['SE'] = {

  name: "Sweden",
  flag: "../assets/countries/002-se-sweden.webp",

  metadata: {
    region:       "Northern Europe",
    capital:      "Stockholm",
    population:   "10.5M",
    currency:     "SEK",
    gdpPerCapita: "$55,400",
    funFact: "On September 3, 1967 (Dagen H), Sweden switched from left-hand to right-hand driving. " +
      "Despite fears of total chaos on the roads, traffic accidents actually dropped to an all-time low with zero fatalities over the weekend. " +
      "Because drivers were so anxious about the change, they paid hyper-focused attention and drove incredibly safely — " +
      "though accident rates slowly returned to normal once everyone got comfortable."
  },

  tin_types: {

    Individual: {
      name: "Personnummer",
      format: "YYMMDD-NNNN or YYYYMMDD-NNNN",
      description: "A Swedish taxpayer identification number for individuals may be either a personal identity number " +
        "(personnummer) or a coordination number (samordningsnummer). Personal identity numbers are assigned to individuals " +
        "registered in Sweden. Coordination numbers are assigned to individuals who need a Swedish identification number " +
        "but are not registered in Sweden. The first six or eight digits represent the date of birth (YYMMDD/YYYYMMDD).\n\n" +
        "Validation scope: This check verifies only that the value follows the expected Swedish TIN format. " +
        "It does not confirm that the number has been issued, is active, or belongs to the individual.",

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
      format: "NNNNNN-NNNN",
      description: "A Swedish organisation number (organisationsnummer) is a 10-digit identifier assigned to companies, " +
        "organisations, and other legal entities. Organisation numbers follow the same general format as Swedish personal " +
        "identity numbers but are not based on a date of birth.\n\n" +
        "Validation scope: This check verifies only that the value follows the expected Swedish organisation number format. " +
        "It does not confirm that the number has been issued, is active, or belongs to the entity.",

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
