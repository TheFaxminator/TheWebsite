// Denmark TIN validation
// Validation is regex-based only (no checksum algorithm).

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['DK'] = {

  name: "Denmark",
  flag: "../assets/countries/003-dk-denmark.webp",

  metadata: {
    region:       "Northern Europe",
    capital:      "Copenhagen",
    population:   "5.9M",
    currency:     "DKK",
    gdpPerCapita: "$68,000",
    funFact: "The most staggering fraud in Denmark's history is a tax heist where a small network of foreign traders " +
      "essentially treated the Danish treasury like a free ATM, stealing over $1.4 billion (DKK 12.7 billion)."
  },

  tin_types: {

    Individual: {
      name: "CPR",
      format: "DDMMYY-NNNN",
      description: "Denmark issues one type of Taxpayer Identification Numbers for individuals: CPR (Det Centrale Persopnregister number).\n" +
        "• CPR: A number issued to all individuals living or working in Denmark. Serves as personal id or tax identification number.\n\n" +
        
        "Formatting & Rules\n" +
        "• Length: Exactly 11 characters including separator.\n" +
        "• Separators: Hyphen (-) comes after the date part, but no spaces or other punctuation.\n" +
        "• The first 6 digits correspond to a date of birth (YYMMDD).\n\n" +
        
		"Validation Scope\n" + 
		"This check verifies that the input follows the Danish 11-digit structural format.\n" +
        "• Syntax Check: Verifies that the first 4 digits represent a valid calendar date (Does not validate year) and contain no spaces or unexpected characters.\n" +
        "• Exclusions: This is a format-only check. It does not perform Modulus 11 mathematical checksums, nor does it verify if the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (/^(?!([0-9])\1{5}-\1{4})(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])[0-9]{2}-\d{4}$/.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return {
          valid: false,
          message: "Does not match the Danish Individual TIN format."
        };
      }
    },

    Entity: {
      name: "CVR",
      format: "NNNNNNNN",
      description: "A Danish CVR number (Central Business Register number) is assigned by the Danish Business Authority (Erhvervsstyrelsen) " + 
      "to companies, organisations, associations, and other legal entities.\n\n" +

		"Formatting & Rules\n" +
		"• Length: Exactly 8 numeric digits.\n" +
		"• Separators: None allowed (no hyphen, no spaces, no 'CVR' prefix).\n" +
		"• Only digits 0-9 are permitted.\n\n" +

		"Validation scope\n" + 
		"This check verifies that the input follows the expected Danish CVR format.\n" +
		"• Syntax Check: Exactly 8 digits, no separators or extra characters.\n" +
		"• Exclusions: This is a format-only check. It does not verify if the number is active, issued, or belongs to a real entity.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (/^(?!([0-9])\1{7})\d{8}$/.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return {
          valid: false,
          message: "Does not match the Danish Entity TIN format."
        };
      }
    }

  }
};
