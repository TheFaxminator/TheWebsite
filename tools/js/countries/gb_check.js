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
      description: 
        "The Unique Taxpayer Reference (UTR) is a 10-digit number automatically allocated by HM Revenue & Customs (HMRC) to individuals " +
        "who are required to submit a tax return. It is used on tax returns (form SA100) and HMRC correspondence, but is not evidenced " +
        "on any official identity document.\n\n" +
        "The National Insurance Number (NINO) consists of two letters, six digits, and a suffix letter A, B, C or D — for example DQ123456C. " +
        "It is issued automatically to young people in the UK when they approach the age of 16, and can also be applied for by eligible " +
        "individuals. The NINO appears on PAYE coding notices, payslips, and correspondence from HMRC and the Department for Work and " +
        "Pensions (DWP). It is not proof of identity. Not all residents are issued with both a UTR and a NINO.\n\n" +
        "Validation scope: This validation checks whether the entered value matches either the UTR or NINO format. It does not verify " +
        "whether the number has been issued or is valid in official records.",

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
      description: "Entities required to submit a UK tax return are allocated a Unique Taxpayer Reference (UTR) by HM Revenue & " +
        "Customs (HMRC). The UTR is a 10-digit number used on corporation tax returns (form CT600) and HMRC correspondence. " +
        "It is not evidenced on any official document.\n\n" +
        "Not all UK resident entities are automatically issued a UTR — for example, TINs are not issued to all UK resident trusts.\n\n" +
        "Validation scope: This validation checks whether the entered value matches the 10-digit UTR format. It does not verify " +
        "whether the number has been issued or is active in official records.",

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
