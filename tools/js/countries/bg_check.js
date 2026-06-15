// Bulgaria TIN validation
// Individual: Единен граждански номер / EGN (10 digits)
// Entity:     Единен идентификационен код / EIK (9 digits)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['BG'] = {

  name: "Bulgaria",
  flag: "../assets/countries/008-bg-bulgaria.webp",

  metadata: {
    region:       "Eastern Europe",
    capital:      "Sofia",
    population:   "6.5M",
    currency:     "BGN",
    gdpPerCapita: "$16,000",
    funFact: "Bulgaria is the oldest country in Europe that has never changed its name since its founding in 681 AD. It also gave the world the Cyrillic alphabet — developed by the Bulgarian scholars Saints Cyril and Methodius in the 9th century and now used by over 250 million people across Eastern Europe and Central Asia."
  },

  tin_types: {

    Individual: {
      name: "Единен граждански номер (EGN)",
      format: "NNNNNNNNNN",
      description: "Bulgaria issues one type of Taxpayer Identification Number for individuals: the Единен граждански номер (EGN), or Unified Civil Number in English.\n" +
        "• EGN: A permanent 10-digit identifier assigned at birth or upon registration to all Bulgarian citizens and permanent residents. Used for tax filing, social security, healthcare, and identification across all Bulgarian public services.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 10 continuous numeric digits.\n" +
        "• Separators: No spaces, hyphens, or other punctuation are allowed.\n" +
        "• The first 6 digits encode the date of birth (YYMMDD), with the month digits adjusted for century (e.g. +20 for 1800s, +40 for 2000s).\n" +
        "• The 9th digit indicates gender (even for female, odd for male).\n" +
        "• The 10th digit is a check digit calculated using a weighted modulo-10 algorithm.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Bulgarian 10-digit structural format.\n" +
        "• Syntax Check: Verifies the input is exactly 10 numeric digits with no spaces or unexpected characters.\n" +
        "• Exclusions: This is a format-only check. It does not validate the check digit or date-of-birth encoding, nor does it verify if the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (/^(?!([0-9])\1{9})\d{10}$/.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Bulgarian Individual TIN format." };
      }
    },

    Entity: {
      name: "Единен идентификационен код (EIK)",
      format: "NNNNNNNNN",
      description: "Bulgaria issues one type of Taxpayer Identification Number for entities: the Единен идентификационен код (EIK), or Unified Identification Code in English.\n" +
        "• EIK: A 9-digit identifier assigned to businesses, organisations, and other legal entities upon registration with the Bulgarian Commercial Register. Used for tax filing, invoicing, and identification in all official Bulgarian registries.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 9 continuous numeric digits.\n" +
        "• Separators: No spaces, hyphens, or other punctuation are allowed.\n" +
        "• The 9th digit is a check digit calculated using a weighted modulo-11 algorithm.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Bulgarian 9-digit structural format.\n" +
        "• Syntax Check: Verifies the input is exactly 9 numeric digits with no spaces or unexpected characters.\n" +
        "• Exclusions: This is a format-only check. It does not calculate the check digit, nor does it verify if the number is active, registered, or belongs to a real entity.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (/^(?!([0-9])\1{8})\d{9}$/.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Bulgarian Entity TIN format." };
      }
    }

  }
};
