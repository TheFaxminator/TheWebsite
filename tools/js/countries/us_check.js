// United States TIN validation
// Validation is regex-based only (no checksum algorithm).
// Flag: add a US flag image to assets/countries/ and update the path below.

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['US'] = {

  name: "United States",
  flag: "../assets/countries/043-us-usa.webp",

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
      description: "The U.S. issues two types of Taxpayer Identification Numbers for individuals: Social Security Number (SSN) " +
        "or an Individual Taxpayer Identification Number (ITIN).\n" + 
		"• SSN is issued by the Social Security Administration (SSA) to US citizens, permanent residents, and certain non-citizens authorized to work.\n" + 
        "• ITIN is issued by the IRS to individuals who need to file US taxes but are not eligible for an SSN (e.g., certain non-resident aliens, dependents, or spouses of US taxpayers).\n\n" +
        
		"Formatting & Rules\n" +
        "• Length: Exactly 9 digits (11 when hyphen is used as separater).\n" +
        "• Separators: Hyphens allowed in the format NNN-NN-NNNN, but no spaces or punctuation are allowed.\n" +
        "• For ITIN, the very first digit starts with 9.\n\n" +
        
		"Validation scope\n" + 
		"This check verifies that the input follows the expected SSN or ITIN format.\n" +
		"• Syntax Check: No syntax check performed.\n" +
        "• Exclusions: This is a format-only check. It does not verify if the number is active or assigned to a real person in official records.",

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
      name: "EIN",
      format: "NN-NNNNNNN or NNNNNNNNN",
      description: "An Employer Identification Number (EIN) is a 9-digit U.S. taxpayer identification number issued " +
        "by the Internal Revenue Service (IRS) to businesses, trusts, estates, and other entities for tax administration purposes.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 9 digits (10 when hyphen is used as separator).\n" +
        "• Separators: Hyphens allowed in the format NN-NNNNNNN, but no spaces or other punctuation are allowed.\n\n" +

        "Validation scope\n" + 
        "This check verifies that the input follows the expected EIN format.\n" +
        "• Syntax Check: No syntax check performed beyond format and allowed characters.\n" +
        "• Exclusions: This is a format-only check. It does not verify if the number is active, has been issued, or belongs to a real entity in official IRS records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^\d{2}-\d{7}$/.test(tin) && !/^\d{9}$/.test(tin)) {
          return { valid: false, message: "Does not match the US Entity TIN format." };
        }

        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }
  }
};
