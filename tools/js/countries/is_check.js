// Iceland TIN validation
// Individual: Kennitala — YYMMDD-NNNN (first digit 0–9, hyphen optional)
// Entity:     Kennitala — same format, but 4 is added to the first digit (first digit 4–9)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['IS'] = {

  name: "Iceland",
  flag: "../assets/countries/005-is-iceland.png",

  metadata: {
    region:       "Northern Europe",
    capital:      "Reykjavík",
    population:   "370K",
    currency:     "ISK",
    gdpPerCapita: "$76,000",
    funFact: "Iceland's kennitala (identification number) is used for virtually every interaction with public and private institutions — from filing taxes and visiting a doctor to borrowing library books — making it one of the most pervasive civil ID systems in the world."
  },

  tin_types: {

    Individual: {
      name: "Kennitala (einstaklingar)",
      format: "YYMMDD-NNNN or YYMMDNNNN",
      description: "The Icelandic personal identification number (kennitala) is a 10-digit number assigned to all " +
        "individuals registered in Iceland. The first six digits represent the date of birth in YYMMDD order, " +
        "followed by an optional hyphen and a four-digit individual number. The ninth digit encodes the birth " +
        "century (9 = 1900s, 0 = 2000s) and the tenth is a check digit. Issued and maintained by " +
        "Þjóðskrá Íslands (Statistics Iceland / National Registry).",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        // Strip optional hyphen for length/digit check
        const digits = tin.replace("-", "");

        if (!/^\d{10}$/.test(digits)) {
          return { valid: false, message: "Does not match the Icelandic Individual TIN format." };
        }

        // Format: YYMMDD-NNNN — validate with or without hyphen
        if (!/^[0-9]\d(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])-?\d{4}$/.test(tin)) {
          return { valid: false, message: "Does not match the Icelandic Individual TIN format." };
        }

        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "Kennitala (lögaðilar)",
      format: "YYMMDD-NNNN or YYMMDNNNN (first digit +4)",
      description: "Legal entities registered in Iceland use the same kennitala format as individuals, but with " +
        "4 added to the first digit of the number. This shifts the first digit into the range 4–9, making it " +
        "possible to distinguish entity kennitölu from individual kennitölu at a glance. The remaining digits " +
        "follow the YYMMDD-NNNN structure based on the entity's registration date. Issued by " +
        "Fyrirtækjaskrá (the Companies Registry) under Skatturinn (the Icelandic Tax Authority).",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const digits = tin.replace("-", "");

        if (!/^\d{10}$/.test(digits)) {
          return { valid: false, message: "Does not match the Icelandic Entity TIN format." };
        }

        // First digit must be 4–9 (original first digit 0–5 with 4 added)
        if (!/^[4-9]\d(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])-?\d{4}$/.test(tin)) {
          return { valid: false, message: "Does not match the Icelandic Entity TIN format." };
        }

        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
