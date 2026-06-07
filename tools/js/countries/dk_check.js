// Denmark TIN validation
// Validation is regex-based only (no checksum algorithm).

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['DK'] = {

  name: "Denmark",
  flag: "../assets/countries/003-dk-denmark.png",

  metadata: {
    region:       "Northern Europe",
    capital:      "Copenhagen",
    population:   "5.9M",
    currency:     "DKK",
    gdpPerCapita: "$68,000",
    funFact: "The most staggering fraud in Denmark's history is a tax heist where a small network of foreign traders " +
      "essentially treated the Danish treasury like a free ATM, stealing over $1.4 billion (DKK 12.7 billion)."
  },

  tin_types: {

    Individual: {
      name: "CPR-nummer",
      format: "DDMMYY-NNNN",
      description: "The Danish Personal Identification Number (CPR number) is a 10-digit identifier assigned to individuals " +
        "registered in the Danish Civil Registration System. The first six digits represent the date of birth (DDMMYY), " +
        "followed by four additional digits.\n\n" +
        "Validation scope: This check verifies only that the value follows the expected CPR number format. " +
        "It does not confirm that the number has been issued, is active, or belongs to the individual.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (/^(?!([0-9])\1{5}-\1{4})\d{6}-\d{4}$/.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return {
          valid: false,
          message: "Does not match the Danish Individual TIN format."
        };
      }
    },

    Entity: {
      name: "CVR-nummer",
      format: "NNNNNNNN",
      description: "The Danish Central Business Register Number (CVR number) is an 8-digit identifier assigned to " +
        "businesses and other legal entities registered in Denmark.\n\n" +
        "Validation scope: This check verifies only that the value follows the expected CVR number format. " +
        "It does not confirm that the number has been issued, is active, or belongs to the entity.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (/^(?!([0-9])\1{7})\d{8}$/.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return {
          valid: false,
          message: "Does not match the Danish Entity TIN format."
        };
      }
    }

  }
};
