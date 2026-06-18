// Monaco TIN validation
// Monaco does not issue Tax Identification Numbers for individuals or entities.

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['MC'] = {

  supported: false,

  name: "Monaco",
  flag: "../assets/countries/130-mc-monaco.webp",

  metadata: {
    region:       "Southern Europe",
    capital:      "Monaco",
    population:   "36K",
    currency:     "EUR",
    gdpPerCapita: "$185,000",
    funFact: "Monaco is the world's second smallest country by area, yet it has the highest population density of any sovereign nation on Earth — packing roughly 36,000 residents into just 2.08 km², most of them in high-rise apartments stacked up a steep Mediterranean hillside."
  },

  tin_types: {

    Individual: {
      name: "No TIN",
      format: "N/A",
      description: "Monaco does not issue Tax Identification Numbers (TINs) for individuals.\n" +
        "• Monaco residents and nationals are not assigned a TIN by Monegasque authorities for tax identification purposes.\n\n" +

        "Tax Residency Context\n" +
        "• Monaco levies no personal income tax on its residents. As a result, no individual tax identification system is in place.\n" +
        "• Individuals with ties to other countries may hold a TIN issued by their country of citizenship or prior tax residency.\n\n" +

        "Validation Scope\n" +
        "No validation is available for this jurisdiction.\n" +
        "• No Format to Check: Monaco does not define a TIN format for individuals.",

      validate() {
        return {
          valid:   false,
          noTin:   true,
          message: "Monaco does not issue Tax Identification Numbers for individuals."
        };
      }
    },

    Entity: {
      name: "No TIN",
      format: "N/A",
      description: "Monaco does not issue Tax Identification Numbers (TINs) for entities.\n" +
        "• Legal entities registered in Monaco are not assigned a TIN by Monegasque tax authorities.\n\n" +

        "Tax Residency Context\n" +
        "• Monaco has no corporate income tax on profits derived from purely local trade. Entities active in Monaco may hold registration numbers (e.g. RCI — Répertoire du Commerce et de l'Industrie), but these are not tax identification numbers.\n" +
        "• Entities with operations or shareholders in other jurisdictions may be subject to TIN requirements in those countries.\n\n" +

        "Validation Scope\n" +
        "No validation is available for this jurisdiction.\n" +
        "• No Format to Check: Monaco does not define a TIN format for entities.",

      validate() {
        return {
          valid:   false,
          noTin:   true,
          message: "Monaco does not issue Tax Identification Numbers for entities."
        };
      }
    }

  }
};
