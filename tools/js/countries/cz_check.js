// Czechia TIN validation
// Individual: Rodné číslo (RČ) — birth number, 9 or 10 digits
// Entity:     IČO — company identification number, 8 digits

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['CZ'] = {

  name: "Czechia",
  flag: "../assets/countries/011-cz-czechia.webp",

  metadata: {
    region:       "Central Europe",
    capital:      "Prague",
    population:   "10.9M",
    currency:     "CZK",
    gdpPerCapita: "$27,000",
    funFact: "Czechia consistently ranks among the world's top beer-consuming nations per capita, brewing a tradition stretching back over 700 years — and it is home to Pilsen, the city that gave the world the Pilsner style of lager in 1842, a beer type that now accounts for the majority of all beer consumed globally."
  },

  tin_types: {

    Individual: {
      name: "Rodné číslo (RČ)",
      format: "YYMMDDXXXX  or  YYMMDXXX",
      description: "Czechia issues one type of Tax Identification Number for individuals: the Rodné číslo (RČ), commonly referred to as the birth number or personal identification number.\n" +
        "• RČ: Assigned to Czech citizens and foreign nationals resident in Czechia. It encodes the holder's date of birth and is used for both tax and social administration purposes.\n\n" +

        "Formatting & Rules\n" +
        "• Length: 9 digits (persons born before 1 January 1954) or 10 digits (persons born from 1954 onwards).\n" +
        "• The first 6 digits encode the date of birth in YYMMDD format. For women, 50 is added to the month component (e.g. January becomes 51).\n" +
        "• The remaining 3 or 4 digits are a sequence number assigned at birth.\n" +
        "• For 10-digit numbers, the entire number must be divisible by 11.\n" +
        "• Separators: A forward slash (/) is sometimes written after the 6th digit but is not part of the TIN for validation purposes.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the expected Czech individual TIN format.\n" +
        "• Syntax Check: Verifies that the TIN consists of 9 or 10 digits.\n" +
        "• Exclusions: This is a format-only check. It does not validate the date-of-birth components, the divisibility-by-11 rule for 10-digit numbers, or whether the number is active and assigned to a real person.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const pattern = /^(?!([0-9])\1{8,9})\d{9,10}$/;

        if (pattern.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Czech Individual TIN format (Rodné číslo — 9 or 10 digits)." };
      }
    },

    Entity: {
      name: "IČO",
      format: "NNNNNNNN",
      description: "Czechia issues one primary identifier for legal entities: the IČO (Identifikační číslo osoby — Identification Number of the Person), which serves as the entity's tax and registration identifier.\n" +
        "• IČO: Assigned to companies, partnerships, associations, and other legal persons registered in Czechia. It is used across all official and tax-related interactions.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 8 digits.\n" +
        "• The IČO is a purely numeric sequence with a check digit in the final position.\n" +
        "• Leading zeros are significant and must be preserved to reach the full 8-digit length.\n" +
        "• Separators: None allowed (no hyphens, no spaces).\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the expected Czech entity TIN format.\n" +
        "• Syntax Check: Verifies that the TIN consists of exactly 8 digits.\n" +
        "• Exclusions: This is a format-only check. It does not verify the check digit or whether the number is active and assigned to a real entity in the Czech Business Register.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const pattern = /^(?!([0-9])\1{7})\d{8}$/;

        if (pattern.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Czech Entity TIN format (IČO — 8 digits)." };
      }
    }

  }
};
