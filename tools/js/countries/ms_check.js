// Montserrat TIN validation
// Montserrat does not issue Tax Identification Numbers for individuals or entities.

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['MS'] = {

  supported: false,

  name: "Montserrat",
  flag: "../assets/countries/198-ms-montserrat.webp",

  metadata: {
    region:       "Caribbean",
    capital:      "Brades (de facto)",
    currency:     "XCD",
  },

  tin_types: {

    Individual: {
      name: "No TIN",
      format: "N/A",
      description: "Montserrat does not issue Tax Identification Numbers (TINs) for individuals.\n" +
        "• Although a policy decision has been made to introduce a TIN, it has not been implemented, so no TIN or equivalent identifier is issued for tax purposes.\n\n" +

        "Tax Residency Context\n" +
        "• Montserrat does levy income tax, administered by the Inland Revenue Department, but taxpayers are not assigned a dedicated tax identification number.\n" +
        "• Individuals with ties to other countries may hold a TIN issued by their country of citizenship or prior tax residency.\n\n" +

        "Validation Scope\n" +
        "No validation is available for this jurisdiction.\n" +
        "• No Format to Check: Montserrat does not define a TIN format for individuals.",

      validate() {
        return {
          valid:   false,
          noTin:   true,
          message: "Montserrat does not issue Tax Identification Numbers for individuals."
        };
      }
    },

    Entity: {
      name: "No TIN",
      format: "N/A",
      description: "Montserrat does not issue Tax Identification Numbers (TINs) for entities.\n" +
        "• Although a policy decision has been made to introduce a TIN, it has not been implemented, so no TIN or equivalent identifier is issued for tax purposes.\n\n" +

        "Tax Residency Context\n" +
        "• Montserrat does levy income tax, administered by the Inland Revenue Department. Entities may hold a registration number issued by the Registrar of Companies, but this is not a tax identification number.\n" +
        "• Entities with operations or shareholders in other jurisdictions may be subject to TIN requirements in those countries.\n\n" +

        "Validation Scope\n" +
        "No validation is available for this jurisdiction.\n" +
        "• No Format to Check: Montserrat does not define a TIN format for entities.",

      validate() {
        return {
          valid:   false,
          noTin:   true,
          message: "Montserrat does not issue Tax Identification Numbers for entities."
        };
      }
    }

  }
};
