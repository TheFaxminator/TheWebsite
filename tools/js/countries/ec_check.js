// Ecuador TIN validation
// Individual: Cédula / RUC — 10 digits
// Entity:     RUC (Registro Único de Contribuyentes) — 13 digits

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['EC'] = {

  name: "Ecuador",
  flag: "../assets/countries/082-ec-ecuador.webp",

  metadata: {
    region:       "South America",
    capital:      "Quito",
    currency:     "USD",
  },

  tin_types: {

    Individual: {
      name: "Cédula / RUC",
      format: "NNNNNNNNNN",
      description: "Individuals in Ecuador are identified for tax purposes by their cédula (national identity number), administered by the Servicio de Rentas Internas (SRI).\n" +
        "• Issuance: Assigned to citizens and residents; a natural person's RUC extends the cédula with additional digits.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 10 numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation (e.g. 1712345678).\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Ecuadorian 10-digit structural format.\n" +
        "• Syntax Check: Confirms the value is exactly 10 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not compute the check digit, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{9})\d{10}$/.test(tin)) {
          return { valid: false, message: "Does not match the Ecuadorian Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "RUC",
      format: "NNNNNNNNNNNNN",
      description: "Legal entities in Ecuador are identified for tax purposes by the RUC (Registro Único de Contribuyentes) issued by the Servicio de Rentas Internas (SRI).\n" +
        "• Issuance: Assigned to businesses and other entities on registration with the SRI.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 13 numeric digits.\n" +
        "• Structure: A continuous string of digits with no letters, spaces or punctuation (e.g. 1790012345001).\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the Ecuadorian 13-digit structural format.\n" +
        "• Syntax Check: Confirms the value is exactly 13 digits with no spaces or unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not compute the check digit, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (!/^(?!([0-9])\1{12})\d{13}$/.test(tin)) {
          return { valid: false, message: "Does not match the Ecuadorian Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
