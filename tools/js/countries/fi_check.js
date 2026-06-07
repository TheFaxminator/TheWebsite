// Finland TIN validation
// Individual: Henkilötunnus / HETU (DDMMYY + century separator + 3 digits + check character)
// Entity:     Y-tunnus (7 digits + hyphen + 1 check digit)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['FI'] = {

  name: "Finland",
  flag: "../assets/countries/004-fi-finland.webp",

  metadata: {
    region:       "Northern Europe",
    capital:      "Helsinki",
    population:   "5.6M",
    currency:     "EUR",
    gdpPerCapita: "$55,000",
    funFact: "Did you know that Finland is the undisputed world capital of heavy metal? The country boasts over 50 bands per 100,000 citizens—more than anywhere else on Earth. Even their children's music scene features a wildly popular heavy metal band called Hevisaurus, whose members dress up as dinosaurs. This deep love for heavy riffs might just be the secret to their legendary happiness, as Finland has also been ranked the world's happiest country for several years in a row!"
  },

  tin_types: {

    Individual: {
      name: "Social Security number",
      format: "DDMMYY[+\\-YXWVUABCDEF]NNNA",
      description: "The Finnish Personal Identity Code is an identifier assigned to individuals registered in Finland. " +
        "The first six characters represent the date of birth (DDMMYY), followed by a character (+, -, Y, X, W, V, U, A, B, C, D, E, or F) " +
        "and four additional characters.\n\n" +
        "Validation scope: This check verifies only that the value follows the expected Personal Identity Code format. " +
        "It does not confirm that the number has been issued, is active, or belongs to the individual.",

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
      name: "Business Identity Code",
      format: "NNNNNNN-N",
      description: "The Finnish Business ID is an 8-character identifier assigned to companies, organisations, " +
        "and other legal entities registered in Finland.\n\n" +
        "Validation scope: This check verifies only that the value follows the expected Business ID format. " +
        "It does not confirm that the number has been issued, is active, or belongs to the entity.",

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
