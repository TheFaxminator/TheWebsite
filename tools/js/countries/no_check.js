// Norway TIN validation
// Individual: Fødselsnummer / D-nummer (11 digits, Mod-11 check digits)
// Entity:     Organisasjonsnummer (9 digits, Mod-11 check digit)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['NO'] = {

  name: "Norway",
  flag: "../assets/countries/001-no-norway.webp",

  metadata: {
    region:       "Northern Europe",
    capital:      "Oslo",
    population:   "5.5M",
    currency:     "NOK",
    gdpPerCapita: "$101,800",
    funFact: "When Disney was developing Frozen, the creative team took a research trip to Norway to soak up the landscape, culture, " + 
	"and architecture. Rather than copying just one location, they stitched the fictional kingdom of Arendelle together from several " + 
	"different Norwegian gems.",
  },

  tin_types: {

    Individual: {
      name: "Fødselsnummer / D-nummer",
      format: "DDMMYYNNNNN",
      description: "The Norwegian personal identification number (fødselsnummer or D-number) consists of 11 digits. " +
        "The first six digits represent the date of birth (DDMMYY), followed by five additional digits.\n\n" +
        "D-numbers are assigned to individuals who need and are entitled to a Norwegian identification number but do not meet the criteria " +
        "for receiving a national identity number. They may be issued in connection with applications for tax deduction cards or at the " +
        "request of other authorities for various purposes. In a D-number, the first digit of the day of birth is increased by 4 " +
        "(for example, 01 becomes 41). Both fødselsnummer and D-numbers are issued by the Norwegian Tax Administration (Skatteetaten).\n\n" +
        "Validation scope: This validation checks whether the entered value matches the expected Norwegian TIN format. " +
        "It does not verify any check digits, the number has been issued or is valid in official records.",

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
      format: "[8,9]NNNNNNNN or [8,9]NNNNNNNN[MVA]",
      description: "A Norwegian organisation number (organisasjonsnummer) consists of 9 digits and is assigned to businesses, " +
        "organizations, and other registered entities by the Brønnøysund Register Centre (Brønnøysundregistrene). " +
        "Organisation numbers typically begin with 8 or 9.\n\n" +
        "Entities that are registered for VAT use the same organisation number followed by the suffix MVA " +
        "(for example, 999999999MVA). The MVA suffix is optional.\n\n" +
        "Validation scope: This check verifies only that the value follows the expected organisation number format. " +
        "It does not confirm that the organisation exists, that the number is active, or that VAT registration status is valid.",

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
