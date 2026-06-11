// United Kingdom TIN validation
// Individual: UTR (Unique Taxpayer Reference, 10 digits) / NINO (National Insurance Number, LL999999L)
// Entity:     UTR (Unique Taxpayer Reference, 10 digits)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['GB'] = {

  name: "United Kingdom",
  flag: "../assets/countries/042-gb-united-kingdom.webp",

  metadata: {
    region:       "Northern Europe",
    capital:      "London",
    population:   "67.7M",
    currency:     "GBP",
    gdpPerCapita: "$46,125",
    funFact: "The UK drives on the left side of the road, a practice dating back to medieval times when horse riders kept left " +
      "to keep their sword arm — typically the right — free to face oncoming traffic.",
  },

  tin_types: {

    Individual: {
      name: "UTR / NINO",
      format: "NNNNNNNNNN or LLNNNNNNL",
      description: "The United Kingdom issues two types of Taxpayer Identification Numbers for individuals: UTR and NINO.\n" +
        "• UTR (Unique Taxpayer Reference): Automatically allocated by HMRC to individuals required to submit a tax return. Not all residents are issued both a UTR and a NINO.\n" +
        "• NINO (National Insurance Number): Issued automatically to young people in the UK approaching age 16, and available to other eligible individuals. Appears on PAYE coding notices, payslips, and HMRC/DWP correspondence. Not proof of identity.\n\n" +

        "Formatting & Rules\n" +
        "• UTR: Exactly 10 numeric digits. No separators.\n" +
        "• NINO: Exactly 9 characters — 2 uppercase letters, followed by 6 digits, and a suffix letter (A, B, C, or D). Example: DQ123456C.\n" +
        "• Separators: None allowed (no hyphens, no spaces) for either format.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input matches either the UK UTR or NINO structural format.\n" +
        "• Syntax Check: Verifies the input matches either the 10-digit UTR pattern or the NINO pattern (2 letters + 6 digits + suffix A–D).\n" +
        "• Exclusions: This is a format-only check. It does not verify if the number has been issued, is active, or belongs to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }
        tin = tin.toUpperCase();
        const utr  = /^(?!([0-9])\1{9}$)\d{10}$/.test(tin);
        const nino = /^(?!([A-Z0-9])\1{8}$)[A-Z]{2}\d{6}[ABCD]$/.test(tin);
        if (!utr && !nino) {
          return { valid: false, message: "Does not match the UK Individual format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "UTR",
      format: "NNNNNNNNNN",
      description: "The United Kingdom issues one type of Taxpayer Identification Number for entities: UTR (Unique Taxpayer Reference).\n" +
        "• UTR: Allocated by HMRC to entities required to submit a UK tax return. Not all UK resident entities are automatically issued a UTR — for example, TINs are not issued to all UK resident trusts.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 10 numeric digits.\n" +
        "• Separators: None allowed (no hyphens, no spaces).\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the UK UTR structural format.\n" +
        "• Syntax Check: Verifies exactly 10 numeric digits with no separators or extra characters.\n" +
        "• Exclusions: This is a format-only check. It does not verify if the number has been issued, is active, or belongs to a real entity.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }
        if (!/^(?!([0-9])\1{9}$)\d{10}$/.test(tin)) {
          return { valid: false, message: "Does not match the UK Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
