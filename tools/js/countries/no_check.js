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
      description: "Norway issues two types of Taxpayer Identification Numbers for individuals: Fødselsnummer (National Identity Number) and D-nummer.\n" +
        "• Fødselsnummer: A permanent, lifelong identifier assigned to citizens and permanent residents registered in the National Population Register.\n" +
        "• D-nummer: A temporary identification number assigned to foreign nationals or non-residents who work short-term, pay taxes, or open bank accounts in Norway.\n\n" +
        
		"Formatting & Rules\n" +
        "• Length: Exactly 11 continuous digits.\n" +
        "• Separators: No spaces or punctuation are allowed.\n" +
        "• The first 6 digits correspond to a date of birth (DDMMYY).\n" +
        "• For D-numbers, the very first digit is increased by 4 (e.g., a day of birth on the 15th becomes 55).\n" +
        "• The 9th digit indicates gender (even for female, odd for male).\n\n" +
        
		"Validation Scope\n" + 
		"This check verifies that the input follows the Norwegian 11-digit structural format.\n" +
        "• Syntax Check: Verifies that the first 6 digits represent a valid calendar date (including D-number offsets) and contain no spaces or unexpected characters.\n" +
        "• Exclusions: This is a format-only check. It does not perform Modulus 11 mathematical checksums, nor does it verify if the number is active or assigned to a real person in official records.",

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
      description: "Businesses and organizations in Norway are identified by a 9-digit Organisasjonsnummer (Organization Number).\n" +
        "• Issuance: Numbers are issued by the Brønnøysundregistrene upon registration of the entity.\n" +
        "• Purpose: Used for tax filing, invoicing, and identifying the legal entity in all official Norwegian registries.\n\n" +
        
		"Formatting & Rules\n" +
        "• Structure: 9 continuous digits.\n" +
        "• Prefixes: The identification number begins with the digit 8 or 9.\n" +
        "• VAT Identification: If the business is VAT-registered, the number is often written with the suffix MVA (e.g., 999888777MVA), though the base TIN remains the 9 digits.\n\n" +
        
		"Validation Scope\n" + 
		"This check verifies that the input follows the Norwegian 9-digit structural format. It includes validation support for the optional trailing suffix \"MVA\".\n" +
        "• Syntax Check: Confirms the base input starts with 8 or 9, consists of exactly 9 digits and contains no spaces or unexpected characters.\n" +
        "• Exclusions: This check does not calculate the Modulus 11 check digit (the 9th digit), nor does it query government databases to see if the business is currently active or legally registered.",

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
