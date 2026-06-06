// Norway TIN validation
// Individual: Fødselsnummer / D-nummer (11 digits, Mod-11 check digits)
// Entity:     Organisasjonsnummer (9 digits, Mod-11 check digit)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['NO'] = {

  name: "Norway",
  flag: "../assets/countries/001-no-norway.png",

  metadata: {
    region:       "Northern Europe",
    capital:      "Oslo",
    population:   "5.5M",
    currency:     "NOK",
    gdpPerCapita: "$101,800",
    funFact: "Norway has one of the world's most transparent tax systems — every citizen's tax return is publicly accessible online, making it possible to look up anyone's income and taxes paid."
  },

  tin_types: {

    Individual: {
      name: "Fødselsnummer / D-nummer",
      format: "DDMMYYNNNNN",
      description: "The Norwegian personal identification number (fødselsnummer) is an 11-digit number assigned " +
        "to all residents of Norway. The first six digits represent the date of birth (DDMMYY), followed by a " +
        "three-digit individual number and two check digits computed via the Mod-11 algorithm. " +
        "Non-residents who need a Norwegian identity number may be assigned a D-number, where the value 4 is " +
        "added to the first digit of the birth date. Both formats are issued by the Norwegian Tax Administration (Skatteetaten).",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }				
		
		if (!/^(0[1-9]|[12]\d|3[01]|4[1-9]|[56]\d|7[01])(0[1-9]|1[0-2])\d{7}$/.test(tin)) {
          return { valid: false, message: "Does not match the Norwegian Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "Organisasjonsnummer",
      format: "NNNNNNNNN or NNNNNNNNNMVA",
      description: "The Norwegian organisation number (organisasjonsnummer) is a 9-digit number assigned to all " +
        "legal entities registered in the Brønnøysund Register Centre (Brønnøysundregistrene). It serves as both " +
        "the business registration number and the tax identification number for entities. When used as a VAT number " +
        "it is suffixed with 'MVA' (e.g. 123456789MVA) and you must have had a turnover of 50 000 kroner. " +
        "This validation only use regular expressions to validate the TIN.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^[89]\d{8}(MVA)?$/.test(tin)) {
          return { valid: false, message: "Does not match the Norwegian Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
