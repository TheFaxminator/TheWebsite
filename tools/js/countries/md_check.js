// Moldova TIN validation
// Moldova does issue Tax Identification Numbers, but structural validation is not yet implemented.

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['MD'] = {

  supported: false,

  name: "Moldova, Republic of",
  flag: "../assets/countries/129-md-moldova.webp",

  // Shown in the "not supported" banner instead of the default "No TIN issued" wording.
  unsupportedNote: "Moldova does issue TINs, but automated format validation is not yet supported.",

  metadata: {
    region:       "Eastern Europe",
    capital:      "Chișinău",
    population:   "2.4M",
    currency:     "MDL",
    gdpPerCapita: "$7,700",
    funFact: "Moldova is home to Mileștii Mici, holder of the Guinness World Record for the world's largest wine collection — over 1.5 million bottles stored along roughly 200 km of underground limestone tunnels."
  },

  tin_types: {

    Individual: {
      name: "IDNP",
      format: "Not yet supported",
      description: "Moldova does issue Tax Identification Numbers to individuals, but automated format validation is not yet available in this tool.\n" +
        "• Individuals are identified by an IDNP (Numărul de identificare de stat) — a 13-digit personal state identification number that also serves as the fiscal code (codul fiscal).\n\n" +

        "Validation Scope\n" +
        "Format validation for Moldova is not yet supported.\n" +
        "• This jurisdiction is recognised, but a structural format check has not yet been implemented. Support may be added in a future update.",

      validate() {
        return {
          valid:        false,
          notSupported: true,
          message:      "Format validation for Moldova is not yet supported."
        };
      }
    },

    Entity: {
      name: "IDNO",
      format: "Not yet supported",
      description: "Moldova does issue Tax Identification Numbers to entities, but automated format validation is not yet available in this tool.\n" +
        "• Legal entities are identified by an IDNO (Numărul de identificare de stat) — a 13-digit unique state identification number that also serves as the fiscal code (codul fiscal).\n\n" +

        "Validation Scope\n" +
        "Format validation for Moldova is not yet supported.\n" +
        "• This jurisdiction is recognised, but a structural format check has not yet been implemented. Support may be added in a future update.",

      validate() {
        return {
          valid:        false,
          notSupported: true,
          message:      "Format validation for Moldova is not yet supported."
        };
      }
    }

  }
};
