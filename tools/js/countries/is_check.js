// Iceland TIN validation
// Individual: Kennitala — YYMMDD-NNNN (first digit 0–9, hyphen optional)
// Entity:     Kennitala — same format, but 4 is added to the first digit (first digit 4–9)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['IS'] = {

  name: "Iceland",
  flag: "../assets/countries/005-is-iceland.webp",

  metadata: {
    region:       "Northern Europe",
    capital:      "Reykjavík",
    population:   "370K",
    currency:     "ISK",
    gdpPerCapita: "$76,000",
    funFact: "Iceland has no public railway system and hasn't had a passenger train in its entire modern history. " +
      "Because of the island's tiny population, massive volcanic fields, and constant geothermal shifting, building a train network has never been practical or safe. " +
      "Instead, locals and tourists rely entirely on a single main highway, Route 1 (the Ring Road), to drive around the country."
  },

  tin_types: {

    Individual: {
      name: "Kennitala",
      format: "DDMMYY-NNNN or DDMMYYNNNN",
      description: "The Icelandic identification number (kennitala) is a 10-digit identifier assigned to individuals. " +
        "The first six digits represent the date of birth (DDMMYY), followed by four additional digits.\n\n" +
        "Validation scope: This check verifies only that the value follows the expected kennitala format. " +
        "It does not confirm that the number has been issued, is active, or belongs to the individual.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const digits = tin.replace("-", "");

        if (!/^\d{10}$/.test(digits)) {
          return { valid: false, message: "Does not match the Icelandic Individual TIN format." };
        }

        // Format: DDMMYY-NNNN — validate with or without hyphen
        if (!/^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])\d{2}-?\d{4}$/.test(tin)) {
          return { valid: false, message: "Does not match the Icelandic Individual TIN format." };
        }

        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "Kennitala",
      format: "NNNNNN-NNNN or NNNNNNNNNN",
      description: "The Icelandic identification number (kennitala) is a 10-digit identifier assigned to companies, " +
        "organisations, and other legal entities registered in Iceland.\n\n" +
        "Validation scope: This check verifies only that the value follows the expected kennitala format. " +
        "It does not confirm that the number has been issued, is active, or belongs to the entity.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const digits = tin.replace("-", "");

        if (!/^\d{10}$/.test(digits)) {
          return { valid: false, message: "Does not match the Icelandic Entity TIN format." };
        }

        // First digit is DD's tens digit + 4 (e.g. day 01–09 → 41–49, day 30–31 → 70–71)
        if (!/^(4[1-9]|[56]\d|7[01])(0[1-9]|1[0-2])\d{2}-?\d{4}$/.test(tin)) {
          return { valid: false, message: "Does not match the Icelandic Entity TIN format." };
        }

        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
