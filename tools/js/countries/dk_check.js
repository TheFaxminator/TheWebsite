// Denmark TIN validation
// Validation is regex-based only (no checksum algorithm).

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['DK'] = {

  name: "Denmark",
  flag: "../assets/countries/003-dk-denmark.png",

  metadata: {
    region:       "Northern Europe",
    capital:      "Copenhagen",
    population:   "5.9M",
    currency:     "DKK",
    gdpPerCapita: "$68,000",
    funFact: "Denmark's personal identification number (CPR-nummer) has been in use since 1968 and is one of the most comprehensive civil registration systems in the world — it is used for everything from tax filings and healthcare to library cards and voting registration."
  },

  tin_types: {

    Individual: {
      name: "CPR-nummer",
      format: "DDMMYY-NNNN",
      description: "The Danish personal identification number (CPR-nummer, Det Centrale Personregister) is assigned " +
        "to all persons registered in Denmark. It consists of a date of birth component (DDMMYY) followed by a " +
        "dash and a four-digit individual number. Issued and maintained by the Danish Civil Registration System " +
        "under the Ministry of the Interior and Housing.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (/^(?!([0-9])\1{5}-\1{4})\d{6}-\d{4}$/.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return {
          valid: false,
          message: "Does not match the Danish Individual TIN format."
        };
      }
    },

    Entity: {
      name: "CVR-nummer",
      format: "NNNNNNNN",
      description: "The Danish business registration number (CVR-nummer, Det Centrale Virksomhedsregister) is an " +
        "8-digit number assigned to all legal entities registered in Denmark. It serves as both the business " +
        "registration number and the tax identification number for entities. " +
        "Issued by the Danish Business Authority (Erhvervsstyrelsen).",

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
