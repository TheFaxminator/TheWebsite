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
      description: "Finland issues one type of Taxpayer Identification Number for individuals: Henkilötunnus (Personal Identity Code).\n" +
        "• Henkilötunnus: A number issued to all individuals registered in Finland. Serves as personal ID and tax identification number.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 11 characters.\n" +
        "• The first 6 digits represent the date of birth (DDMMYY).\n" +
        "• The 7th character is a century separator: '+' for 1800s, '-' for 1900s, and Y/X/W/V/U/A/B/C/D/E/F for 2000s onwards.\n" +
        "• Digits 8–10 are a 3-digit individual number.\n" +
        "• The 11th character is an alphanumeric check character.\n" +
        "• Separators: No spaces or extra punctuation allowed.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Finnish 11-character structural format.\n" +
        "• Syntax Check: Verifies the format matches the expected structure with a valid century separator character.\n" +
        "• Exclusions: This is a format-only check. It does not validate the check character, nor does it verify if the number is active or assigned to a real person in official records.",

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
      description: "Finland issues one type of Taxpayer Identification Number for entities: Y-tunnus (Business Identity Code).\n" +
        "• Y-tunnus: An identifier assigned to companies, organisations, associations, and other legal entities registered in Finland.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 9 characters including the hyphen separator.\n" +
        "• Format: 7 digits, a hyphen, and 1 check digit.\n" +
        "• Separators: Hyphen (-) is required between the 7-digit number and the check digit. No spaces or other punctuation.\n" +
        "• Only digits 0–9 are permitted (plus the required hyphen).\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Finnish Y-tunnus structural format.\n" +
        "• Syntax Check: Verifies exactly 7 digits, a hyphen, and 1 control mark with no extra characters.\n" +
        "• Exclusions: This is a format-only check. It does not verify if the number is active, issued, or belongs to a real entity.",

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
