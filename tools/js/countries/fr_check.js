// France TIN validation
// Individual: Numéro Fiscal de Référence / SPI — 13 digits, starting with 0–3
// Entity:     SIREN — 9 digits
//             SIRET — 14 digits (SIREN + 5-digit establishment code)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['FR'] = {

  name: "France",
  flag: "../assets/countries/013-fr-france.webp",

  metadata: {
    region:       "Western Europe",
    capital:      "Paris",
    population:   "68M",
    currency:     "EUR",
    gdpPerCapita: "$43,000",
    funFact: "France is the world's most visited country, attracting around 90 million tourists a year — more than its entire population. Yet despite this, France is also home to the most Michelin-starred restaurants of any nation, a distinction that reflects a cultural obsession with cuisine so deep that French gastronomy was inscribed on UNESCO's list of Intangible Cultural Heritage in 2010."
  },

  tin_types: {

    Individual: {
      name: "Numéro Fiscal (SPI)",
      format: "[0,1,2,3]NNNNNNNNNNNN",
      description: "France issues one type of Tax Identification Number for individuals: the Numéro Fiscal de Référence, also known as the SPI (Simplification des Procédures d'Imposition) or numéro fiscal.\n" +
        "• Numéro Fiscal: Assigned to all individuals liable to pay tax in France. It is printed on tax notices, pre-filled tax returns, and correspondence from the Direction Générale des Finances Publiques (DGFiP).\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 13 digits.\n" +
        "• The first digit is 0, 1, 2, or 3, reflecting the taxpayer category and registration origin.\n" +
        "• The remaining 12 digits form a unique sequence assigned by the tax authority.\n" +
        "• Separators: None allowed (no hyphens, no spaces).\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the expected French individual TIN format.\n" +
        "• Syntax Check: Verifies that the TIN is exactly 13 digits and begins with a digit in the range 0–3.\n" +
        "• Exclusions: This is a format-only check. It does not verify whether the number is active or assigned to a real person in French tax records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const pattern = /^(?!([0-9])\1{12})[0-3]\d{12}$/;

        if (pattern.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the French Individual TIN format (Numéro Fiscal — 13 digits starting with 0–3)." };
      }
    },

    Entity: {
      name: "SIREN / SIRET",
      format: "NNNNNNNNN or  NNNNNNNNNNNNNN",
      description: "France issues two closely related identifiers for legal entities: SIREN and SIRET.\n" +
        "• SIREN (Système d'Identification du Répertoire des Entreprises): The primary 9-digit identifier assigned to every legal entity registered in France. It uniquely identifies the business as a whole.\n" +
        "• SIRET (Système d'Identification du Répertoire des Établissements): A 14-digit identifier that identifies a specific establishment of a business. It is formed by appending a 5-digit NIC (Numéro Interne de Classement) to the SIREN.\n\n" +

        "Formatting & Rules\n" +
        "• SIREN: Exactly 9 digits.\n" +
        "• SIRET: Exactly 14 digits (the first 9 being the entity's SIREN, followed by the 5-digit establishment code).\n" +
        "• Both are purely numeric with no letters.\n" +
        "• Separators: None allowed (no hyphens, no spaces).\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input matches either the SIREN or SIRET format.\n" +
        "• Syntax Check: Verifies that the TIN is exactly 9 digits (SIREN) or exactly 14 digits (SIRET).\n" +
        "• Exclusions: This is a format-only check. It does not apply the Luhn algorithm check digit validation, nor does it verify whether the number is active or registered with INSEE.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const sirenPattern = /^(?!([0-9])\1{8})\d{9}$/;
        const siretPattern = /^(?!([0-9])\1{13})\d{14}$/;

        if (sirenPattern.test(tin)) {
          return { valid: true, message: "Valid SIREN — French Entity Tax Identification Number." };
        }

        if (siretPattern.test(tin)) {
          return { valid: true, message: "Valid SIRET — French Establishment Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the French Entity TIN format (SIREN — 9 digits, or SIRET — 14 digits)." };
      }
    }

  }
};
