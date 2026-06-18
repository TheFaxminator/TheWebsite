// Bermuda TIN validation
// Bermuda does not issue Tax Identification Numbers for individuals or entities.

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['BM'] = {

  supported: false,

  name: "Bermuda",
  flag: "../assets/countries/197-bm-bermuda.webp",

  metadata: {
    region:       "North Atlantic Ocean",
    capital:      "Hamilton",
    population:   "64K",
    currency:     "BMD",
    gdpPerCapita: "$117,000",
    funFact: "Bermuda is a British Overseas Territory with one of the highest GDP per capita figures in the world, largely due to its status as a major hub for international insurance and reinsurance — yet it levies no income tax, capital gains tax, or withholding tax on individuals or corporations."
  },

  tin_types: {

    Individual: {
      name: "No TIN",
      format: "N/A",
      description: "Bermuda does not issue Tax Identification Numbers (TINs) for individuals.\n" +
        "• Bermuda residents and nationals are not assigned a TIN by Bermudian authorities for tax identification purposes.\n\n" +

        "Tax Residency Context\n" +
        "• Bermuda levies no personal income tax, capital gains tax, or withholding tax. As a result, no individual tax identification system is in place.\n" +
        "• Individuals with ties to other countries may hold a TIN issued by their country of citizenship or prior tax residency.\n\n" +

        "Validation Scope\n" +
        "No validation is available for this jurisdiction.\n" +
        "• No Format to Check: Bermuda does not define a TIN format for individuals.",

      validate() {
        return {
          valid:   false,
          noTin:   true,
          message: "Bermuda does not issue Tax Identification Numbers for individuals."
        };
      }
    },

    Entity: {
      name: "No TIN",
      format: "N/A",
      description: "Bermuda does not issue Tax Identification Numbers (TINs) for entities.\n" +
        "• Legal entities registered in Bermuda are not assigned a TIN by Bermudian tax authorities.\n\n" +

        "Tax Residency Context\n" +
        "• Bermuda has no corporate income tax. Entities incorporated in Bermuda may hold a company registration number issued by the Registrar of Companies, but this is not a tax identification number.\n" +
        "• Entities with operations or shareholders in other jurisdictions may be subject to TIN requirements in those countries.\n\n" +

        "Validation Scope\n" +
        "No validation is available for this jurisdiction.\n" +
        "• No Format to Check: Bermuda does not define a TIN format for entities.",

      validate() {
        return {
          valid:   false,
          noTin:   true,
          message: "Bermuda does not issue Tax Identification Numbers for entities."
        };
      }
    }

  }
};
