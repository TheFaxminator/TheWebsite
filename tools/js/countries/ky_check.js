// Cayman Islands TIN validation
// The Cayman Islands does not issue Tax Identification Numbers for individuals or entities.

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['KY'] = {

  supported: false,

  name: "Cayman Islands",
  flag: "../assets/countries/196-ky-cayman-islands.webp",

  metadata: {
    region:       "Caribbean",
    capital:      "George Town",
    population:   "69K",
    currency:     "KYD",
    gdpPerCapita: "$58,000",
    funFact: "The Cayman Islands is one of the world's largest offshore financial centres — a British Overseas Territory with no income tax, no corporate tax, and no capital gains tax, yet it hosts more than 100,000 registered companies, making it one of the most company-dense jurisdictions on the planet relative to its population."
  },

  tin_types: {

    Individual: {
      name: "No TIN",
      format: "N/A",
      description: "The Cayman Islands does not issue Tax Identification Numbers (TINs) for individuals.\n" +
        "• Cayman Islands residents and nationals are not assigned a TIN by Caymanian authorities for tax identification purposes.\n\n" +

        "Tax Residency Context\n" +
        "• The Cayman Islands levies no personal income tax, capital gains tax, or withholding tax. As a result, no individual tax identification system is in place.\n" +
        "• Individuals with ties to other countries may hold a TIN issued by their country of citizenship or prior tax residency.\n\n" +

        "Validation Scope\n" +
        "No validation is available for this jurisdiction.\n" +
        "• No Format to Check: The Cayman Islands does not define a TIN format for individuals.",

      validate() {
        return {
          valid:   false,
          noTin:   true,
          message: "The Cayman Islands does not issue Tax Identification Numbers for individuals."
        };
      }
    },

    Entity: {
      name: "No TIN",
      format: "N/A",
      description: "The Cayman Islands does not issue Tax Identification Numbers (TINs) for entities.\n" +
        "• Legal entities registered in the Cayman Islands are not assigned a TIN by Caymanian tax authorities.\n\n" +

        "Tax Residency Context\n" +
        "• The Cayman Islands has no corporate income tax. Entities incorporated there may hold a company registration number issued by the Registrar of Companies, but this is not a tax identification number.\n" +
        "• Entities with operations or shareholders in other jurisdictions may be subject to TIN requirements in those countries.\n\n" +

        "Validation Scope\n" +
        "No validation is available for this jurisdiction.\n" +
        "• No Format to Check: The Cayman Islands does not define a TIN format for entities.",

      validate() {
        return {
          valid:   false,
          noTin:   true,
          message: "The Cayman Islands does not issue Tax Identification Numbers for entities."
        };
      }
    }

  }
};
