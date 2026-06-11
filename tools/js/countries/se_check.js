// Sweden TIN validation
// Validation is regex-based only (no checksum algorithm).

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['SE'] = {

  name: "Sweden",
  flag: "../assets/countries/002-se-sweden.webp",

  metadata: {
    region:       "Northern Europe",
    capital:      "Stockholm",
    population:   "10.5M",
    currency:     "SEK",
    gdpPerCapita: "$55,400",
    funFact: "On September 3, 1967 (Dagen H), Sweden switched from left-hand to right-hand driving. " +
      "Despite fears of total chaos on the roads, traffic accidents actually dropped to an all-time low with zero fatalities over the weekend. " +
      "Because drivers were so anxious about the change, they paid hyper-focused attention and drove incredibly safely — " +
      "though accident rates slowly returned to normal once everyone got comfortable."
  },

  tin_types: {

    Individual: {
      name: "Personnummer / Samordningsnummer",
      format: "YYMMDD-NNNN, YYYYMMDD-NNNN or YYYYMMDD+NNNN",
      description: "Sweden issues two types of Taxpayer Identification Numbers for individuals: Personnummer and Samordningsnummer.\n" +
        "• Personnummer: For people registered as residents in Sweden (typically staying 1+ year). It is permanent.\n" +
        "• Samordningsnummer: For people not (or not yet) registered as residents, such as short-term visitors, certain foreigners, or Swedes abroad who need an ID for authorities. It can later be converted to a personnummer.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 11 or 13 characters including separator.\n" +
        "• Separators: Hyphen (-) or plus (+) comes after the date part, but no spaces or other punctuation.\n" +
        "• The first 6 or 8 digits correspond to a date of birth (YYMMDD or YYYYMMDD).\n" +
        "• Plus sign (+) is used instead of hyphen (-) for individuals who have turned 100.\n\n" +

        "Validation scope\n" + 
        "This check verifies that the input follows the expected Swedish Personnummer / Samordningsnummer format.\n" +
        "• Syntax Check: Verifies that the first 6/8 digits represent a calendar date (including samordningsnummer offsets) and contain no spaces or unexpected characters.\n" +
        "• Exclusions: This is a format-only check. It does not verify if the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

		if (!/^(?!([0-9])\1{5}-\1{4})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01]|[6-9][1-9])-\d{4}$/.test(tin) &&
			!/^(?!([0-9])\1{7}-\1{4})(19|20)[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01]|[6-9][1-9])-\d{4}$/.test(tin) &&
			!/^(?!([0-9])\1{5}\+\1{4})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01]|[6-9][1-9])\+\d{4}$/.test(tin) &&
			!/^(?!([0-9])\1{7}\+\1{4})(19|20)[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01]|[6-9][1-9])\+\d{4}$/.test(tin)) {
			
		  return { valid: false, message: "Does not match the Swedish Individual TIN format." };
		}

        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "Organisationsnummer",
      format: "NNNNNN-NNNN",
      description: "A Swedish organisation number (Organisationsnummer) is a 10-digit identifier assigned by the Swedish Companies Registration Office  " +
        "(Bolagsverket) to companies, organisations, associations, and other legal entities. It follows the same general structure as a Personnummer but is not " +
        "based on a date of birth.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 11 characters including separator.\n" +
        "• Separators: Hyphen (-) only after the first six digits, but no spaces or other punctuation.\n" +
        "• First digit: Usually indicates the type of entity (e.g., 1, 2, 3, 5, 6, 7, 8, 9).\n" +
        "• No plus sign (+) is used (unlike some personal identity numbers for people over 100).\n\n" +

        "Validation scope\n" + 
        "This check verifies that the input follows the expected Swedish Organisationsnummer format.\n" +
        "• Syntax Check: No syntax check performed beyond format and allowed characters.\n" +
        "• Exclusions: This is a format-only check. It does not verify if the number is active, has been issued, or belongs to a real entity in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^\d{6}-\d{4}$/.test(tin) && !/^\d{10}$/.test(tin)) {
          return { valid: false, message: "Does not match the Swedish Entity TIN format." };
        }

        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
