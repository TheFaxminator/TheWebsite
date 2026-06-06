// Finland TIN validation
// Individual: Henkilötunnus / HETU (DDMMYY + century separator + 3 digits + check character)
// Entity:     Y-tunnus (7 digits + hyphen + 1 check digit)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['FI'] = {

  name: "Finland",
  flag: "../assets/countries/004-fi-finland.png",

  metadata: {
    region:       "Northern Europe",
    capital:      "Helsinki",
    population:   "5.6M",
    currency:     "EUR",
    gdpPerCapita: "$55,000",
    funFact: "Finland's personal identity code (henkilötunnus) encodes both the date of birth and the birth century in a single separator character — a '+' indicates the 1800s, '-' the 1900s, and letters like 'A' the 2000s — making the century immediately readable without any additional digits."
  },

  tin_types: {

    Individual: {
      name: "Henkilötunnus (HETU)",
      format: "DDMMYY[+\\-YXWVUABCDEF]NNNC",
      description: "The Finnish personal identity code (henkilötunnus, HETU) is an 11-character identifier " +
        "assigned to all persons registered in Finland. The first six digits represent the date of birth " +
        "(DDMMYY), followed by a century separator character ('+' for 1800s, '-' for 1900s, 'A' for 2000s, " +
        "with additional letters Y X W V U B C D E F reserved for future centuries), three digits that " +
        "distinguish individuals born on the same date (odd numbers for males, even for females), and a " +
        "single alphanumeric check character. Issued by the Digital and Population Data Services Agency " +
        "(Digi- ja väestötietovirasto, DVV).",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([A-Za-z0-9+\-])\1{10})\d{6}[+\-YXWVUABCDEF]\d{3}[A-Za-z0-9]$/.test(tin)) {
          return { valid: false, message: "Does not match the Finnish Individual TIN format." };
        }

        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "Y-tunnus (Business ID)",
      format: "NNNNNNN-N",
      description: "The Finnish business identifier (Y-tunnus) is a 9-character code assigned to all legal " +
        "entities registered in Finland. It consists of seven digits, a hyphen, and a single check digit " +
        "computed using a weighted modulo-11 algorithm. The Y-tunnus is used across all official registers " +
        "and serves as both the business registration number and the tax identification number for entities. " +
        "Issued by the Finnish Patent and Registration Office (Patentti- ja rekisterihallitus, PRH) in " +
        "cooperation with the Finnish Tax Administration (Verohallinto).",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{6}-\1)\d{7}-\d$/.test(tin)) {
          return { valid: false, message: "Does not match the Finnish Entity TIN format." };
        }

        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
