// United States TIN validation
// Validation is regex-based only (no checksum algorithm).
// Flag: add a US flag image to assets/countries/ and update the path below.

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['US'] = {

  name: "United States",
  flag: "../assets/countries/043-us-usa.png",

  metadata: {
    region:       "North America",
    capital:      "Washington, D.C.",
    population:   "335M",
    currency:     "USD",
    gdpPerCapita: "$80,300",
    funFact: "Social Security Numbers were introduced in 1936 solely to track workers' earnings for Social Security — they were never intended to become a universal identifier. Today they appear on everything from bank accounts to driver's licences."
  },

  tin_types: {

    Individual: {
      name: "SSN / ITIN",
      format: "NNN-NN-NNNN or NNNNNNNNN or 9NN-7N-NNNN or 9NN-8N-NNNN",
      description: "The United States issues two types of individual TINs. " +
        "The Social Security Number (SSN) is a 9-digit number issued by the Social Security Administration " +
        "to US citizens, permanent residents, and eligible non-immigrants, formatted as NNN-NN-NNNN or as " +
        "nine consecutive digits. " +
        "The Individual Taxpayer Identification Number (ITIN) is issued by the IRS to individuals who are " +
        "required to file a US tax return but are not eligible for an SSN. ITINs always begin with 9 and have " +
        "70–88 or 90–99 as the middle two digits (formatted as 9NN-7N-NNNN or 9NN-8N-NNNN).",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          { regex: /^9\d{2}-[78]\d-\d{4}$/, label: "ITIN" },
          { regex: /^9\d{2}[78]\d\d{4}$/,   label: "ITIN" },
          { regex: /^\d{3}-\d{2}-\d{4}$/,   label: "SSN"  },
          { regex: /^\d{9}$/,                label: "SSN"  },
        ];

        for (const { regex, label } of patterns) {
          if (regex.test(tin)) {
            return { valid: true, message: "Valid Tax Identification Number." };
        }
        }

        return {
          valid: false,
          message: "Does not match the US Individual TIN format."
        };
      }
    },

    Entity: {
      name: "EIN (Employer Identification Number)",
      format: "NN-NNNNNNN or NNNNNNNNN",
      description: "The Employer Identification Number (EIN), also known as the Federal Tax Identification Number, " +
        "is a 9-digit number assigned by the IRS to businesses, trusts, estates, and other entities operating in " +
        "the United States. It is formatted as NN-NNNNNNN or as nine consecutive digits. " +
        "Issued by the Internal Revenue Service (IRS).",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^\d{2}-\d{7}$/,
          /^\d{9}$/,
        ];

        if (patterns.some(r => r.test(tin))) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return {
          valid: false,
          message: "Does not match the US Entity TIN format."
        };
      }
    }

  }
};
