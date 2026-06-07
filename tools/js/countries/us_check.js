// United States TIN validation
// Validation is regex-based only (no checksum algorithm).
// Flag: add a US flag image to assets/countries/ and update the path below.

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['US'] = {

  name: "United States",
  flag: "../assets/countries/043-us-usa.png",

  metadata: {
    region:       "North America",
    capital:      "Washington, D.C.",
    population:   "335M",
    currency:     "USD",
    gdpPerCapita: "$80,300",
    funFact: "The original Form 1040 from 1913 — the very first year of the modern US income tax — was only four pages long, including two pages of instructions! " +
      "Today, the federal tax code has ballooned to over 75,000 pages, and the basic 1040 instruction booklet alone is over 100 pages long."
  },

  tin_types: {

    Individual: {
      name: "SSN / ITIN",
      format: "NNN-NN-NNNN or NNNNNNNNN",
      description: "A U.S. taxpayer identification number for individuals may be either a Social Security Number (SSN) " +
        "or an Individual Taxpayer Identification Number (ITIN). An SSN is issued by the Social Security Administration. " +
        "An ITIN is issued to individuals who are required to have a U.S. taxpayer identification number but are not " +
        "eligible to obtain an SSN. ITINs always begin with the number 9.\n\n" +
        "Validation scope: This check verifies only that the value follows the expected SSN or ITIN format. " +
        "It does not confirm that the number has been issued, is active, or belongs to the individual.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^\d{3}-\d{2}-\d{4}$/.test(tin) && !/^\d{9}$/.test(tin)) {
          return { valid: false, message: "Does not match the US Individual TIN format." };
        }

        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "EIN (Employer Identification Number)",
      format: "NN-NNNNNNN or NNNNNNNNN",
      description: "An Employer Identification Number (EIN) is a 9-digit U.S. taxpayer identification number issued " +
        "to businesses and other entities for tax administration purposes.\n\n" +
        "Validation scope: This check verifies only that the value follows the expected EIN format. " +
        "It does not confirm that the number has been issued, is active, or belongs to the entity.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^\d{2}-\d{7}$/,
          /^\d{9}$/,
        ];

        if (patterns.some(r => r.test(tin))) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return {
          valid: false,
          message: "Does not match the US Entity TIN format."
        };
      }
    }

  }
};
