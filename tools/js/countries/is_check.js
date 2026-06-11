// Iceland TIN validation
// Individual: Kennitala — DDMMYY-NNNN (first digit 0–3, hyphen optional)
// Entity:     Kennitala — same format, but 4 is added to the tens digit of the day (first digit 4–7)

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
      description: "Iceland issues one type of Taxpayer Identification Number for individuals: Kennitala.\n" +
        "• Kennitala: Assigned to all individuals living or registered in Iceland. Serves as both a personal ID and tax identification number.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 10 digits, or 11 characters when the optional hyphen separator is included.\n" +
        "• Separators: Hyphen (-) is optional after the date part (DDMMYY). No spaces or other punctuation.\n" +
        "• The first 6 digits represent the date of birth (DDMMYY).\n" +
        "• The first digit of the day part is 0–3 (distinguishes individuals from entities).\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Icelandic 10-digit structural format.\n" +
        "• Syntax Check: Verifies that the first 6 digits represent a valid calendar date and that the format contains no spaces or unexpected characters.\n" +
        "• Exclusions: This is a format-only check. It does not verify check digit, if the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])\d{2}-?\d{4}$/.test(tin)) {
          return { valid: false, message: "Does not match the Icelandic Individual TIN format." };
        }

        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "Kennitala",
      format: "DDMMYY-NNNN or DDMMYYNNNN",
      description: "Iceland uses the same Kennitala format for legal entities, with a modification to distinguish them from individuals.\n" +
        "• Kennitala: Assigned to companies, organisations, associations, and other legal entities registered in Iceland.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 10 digits, or 11 characters when the optional hyphen separator is included.\n" +
        "• Separators: Hyphen (-) is optional after the first 6 digits. No spaces or other punctuation.\n" +
        "• The first digit is the tens digit of the birth day + 4 (e.g. day 01 → first digit 4).\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Icelandic entity Kennitala structural format.\n" +
        "• Syntax Check: Verifies the entity specific first digit offset and that the remaining digits follow the expected pattern.\n" +
        "• Exclusions: This is a format-only check. It does not verify check digit, if the number is active, issued, or belongs to a real entity.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        // DD+40 encodes the day: 01–09 → 41–49, 10–19 → 50–59, 20–29 → 60–69, 30–31 → 70–71
        if (!/^(4[1-9]|[56]\d|7[01])(0[1-9]|1[0-2])\d{2}-?\d{4}$/.test(tin)) {
          return { valid: false, message: "Does not match the Icelandic Entity TIN format." };
        }

        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
