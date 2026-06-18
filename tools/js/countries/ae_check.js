// United Arab Emirates TIN validation
// The UAE does not issue Tax Identification Numbers for individuals.

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['AE'] = {

  supported: false,

  name: "United Arab Emirates",
  flag: "../assets/countries/187-ae-united-arab-emirates.webp",

  metadata: {
    region:       "Middle East",
    capital:      "Abu Dhabi",
    population:   "10M",
    currency:     "AED",
    gdpPerCapita: "$49,000",
    funFact: "The UAE is home to the world's tallest building, the Burj Khalifa, and despite having no personal income tax, generates the revenue to fund one of the most ambitious urban development programmes on the planet — largely through hydrocarbon exports and a thriving international business sector."
  },

  tin_types: {

    Individual: {
      name: "No TIN",
      format: "N/A",
      description: "The UAE does not issue Tax Identification Numbers (TINs) for individuals.\n" +
        "• UAE residents and nationals are not assigned a TIN by UAE federal tax authorities for personal tax identification purposes.\n\n" +

        "Tax Residency Context\n" +
        "• The UAE levies no personal income tax on individuals. As a result, no individual tax identification system is in place.\n" +
        "• Individuals with ties to other countries may hold a TIN issued by their country of citizenship or prior tax residency.\n\n" +

        "Validation Scope\n" +
        "No validation is available for this jurisdiction.\n" +
        "• No Format to Check: The UAE does not define a TIN format for individuals.",

      validate() {
        return {
          valid:   false,
          noTin:   true,
          message: "The UAE does not issue Tax Identification Numbers for individuals."
        };
      }
    },

    Entity: {
      name: "No TIN",
      format: "N/A",
      description: "The UAE does not issue Tax Identification Numbers (TINs) for entities in the traditional sense.\n" +
        "• Entities registered for VAT purposes are assigned a Tax Registration Number (TRN) by the Federal Tax Authority (FTA), but this is a VAT registration identifier, not a general-purpose TIN.\n\n" +

        "Tax Residency Context\n" +
        "• The UAE introduced VAT in 2018 and corporate income tax in 2023. Entities meeting the registration thresholds receive a TRN from the FTA. However, no universal TIN system applicable to all entities exists.\n" +
        "• Entities with operations or shareholders in other jurisdictions may be subject to TIN requirements in those countries.\n\n" +

        "Validation Scope\n" +
        "No validation is available for this jurisdiction.\n" +
        "• No Format to Check: The UAE does not operate a universal TIN format for entities.",

      validate() {
        return {
          valid:   false,
          noTin:   true,
          message: "The UAE does not issue Tax Identification Numbers for entities."
        };
      }
    }

  }
};
