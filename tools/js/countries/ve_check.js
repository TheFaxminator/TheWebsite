// Venezuela TIN validation
// Venezuela does issue Tax Identification Numbers (RIF), but structural validation is not yet implemented.

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['VE'] = {

  supported: false,

  name: "Venezuela",
  flag: "../assets/countries/191-ve-venezuela.webp",

  // Shown in the "not supported" banner instead of the default "No TIN issued" wording.
  unsupportedNote: "Venezuela does issue TINs, but automated format validation is not yet supported.",

  metadata: {
    region:       "South America",
    capital:      "Caracas",
    population:   "28M",
    currency:     "VES",
    gdpPerCapita: "$3,700",
    funFact: "Venezuela is home to Angel Falls (Salto Ángel), the world's tallest uninterrupted waterfall — water plunges 979 metres from the top of Auyán-tepui, roughly 15 times the height of Niagara Falls."
  },

  tin_types: {

    Individual: {
      name: "RIF",
      format: "Not yet supported",
      description: "Venezuela does issue Tax Identification Numbers to individuals, but automated format validation is not yet available in this tool.\n" +
        "• Individuals are identified by a RIF (Registro Único de Información Fiscal) issued by SENIAT — a letter prefix (V for Venezuelan nationals, E for foreign residents, P for passport holders) followed by 8 digits and a check digit.\n\n" +

        "Validation Scope\n" +
        "Format validation for Venezuela is not yet supported.\n" +
        "• This jurisdiction is recognised, but a structural format check has not yet been implemented. Support may be added in a future update.",

      validate() {
        return {
          valid:        false,
          notSupported: true,
          message:      "Format validation for Venezuela is not yet supported."
        };
      }
    },

    Entity: {
      name: "RIF",
      format: "Not yet supported",
      description: "Venezuela does issue Tax Identification Numbers to entities, but automated format validation is not yet available in this tool.\n" +
        "• Entities are identified by a RIF (Registro Único de Información Fiscal) issued by SENIAT — a letter prefix (J for legal entities, G for government bodies) followed by 8 digits and a check digit.\n\n" +

        "Validation Scope\n" +
        "Format validation for Venezuela is not yet supported.\n" +
        "• This jurisdiction is recognised, but a structural format check has not yet been implemented. Support may be added in a future update.",

      validate() {
        return {
          valid:        false,
          notSupported: true,
          message:      "Format validation for Venezuela is not yet supported."
        };
      }
    }

  }
};
