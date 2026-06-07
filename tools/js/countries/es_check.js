// Spain TIN validation
// Individual: NIF/DNI (8 digits + letter), NIE-KLM (K/L/M + 7 digits + letter),
//             NIE-XYZ (X/Y/Z + 7 digits + letter)
// Entity:     CIF (letter from restricted set + 7 digits + letter or digit)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['ES'] = {

  name: "Spain",
  flag: "../assets/countries/029-es-spain.webp",

  metadata: {
    region:       "Southern Europe",
    capital:      "Madrid",
    population:   "47.4M",
    currency:     "EUR",
    gdpPerCapita: "$32,000",
    funFact: "Every year, the small Spanish town of Buñol hosts La Tomatina, the world's largest organized food fight. For exactly one hour, over 20,000 festival-goers pelt each other with roughly 120 tons of overripe, squashed tomatoes. The chaotic tradition started completely by accident in 1945 during a parade scuffle and has grown into a massive global attraction. Once the hour is up, fire trucks hose down the streets, and the natural acidity of the tomatoes leaves the town's historic pathways incredibly clean."
  },

  tin_types: {

    Individual: {
      name: "NIF / DNI / NIE",
      format: "NNNNNNNNL  or  [KLM]NNNNNNNL  or  [XYZ]NNNNNNNL",
      description: "The Spanish Tax Identification Number (Número de Identificación Fiscal, NIF) is assigned to individuals " +
        "for tax and identification purposes. Spanish nationals typically use a National Identity Document number (DNI) as their NIF, " +
        "while foreign nationals use a Foreign Identity Number (NIE).\n\n" +
        "For Spanish nationals, the NIF consists of 8 digits followed by a letter. For foreign nationals, the NIF begins with a letter, " +
        "followed by 7 digits, and ends with a letter.\n\n" +
        "Validation scope: This check verifies only that the value follows the expected NIF format. " +
        "It does not confirm that the number has been issued, is active, or belongs to the individual.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const dniPattern = /^(?!([0-9])\1{7}[A-Z]$)\d{8}[A-Z]$/;
        const nieKLM     = /^(?!([KLM])\1{7}[A-Z]$)[KLM]\d{7}[A-Z]$/;
        const nieXYZ     = /^(?!([XYZ])\1{7}[A-Z]$)[XYZ]\d{7}[A-Z]$/;

        if (dniPattern.test(tin) || nieKLM.test(tin) || nieXYZ.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Spanish Individual TIN format (DNI or NIE)." };
      }
    },

    Entity: {
      name: "NIF",
      format: "LNNNNNNNA",
      description: "The Spanish Tax Identification Number (Número de Identificación Fiscal, NIF) is assigned to companies, " +
        "organisations, and other legal entities registered in Spain.\n\n" +
        "Entity NIFs begin with a letter that identifies the type of entity, followed by 7 digits. Depending on the type of entity, " +
        "the identifier may end with either a letter or a digit.\n\n" +
        "Validation scope: This check verifies only that the value follows the expected entity NIF format. " +
        "It does not confirm that the number has been issued, is active, or belongs to the entity.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const cifPattern = /^(?!([A-Z])\1{7}[A-Z0-9]$)[ABCDEFGHJPQRSUVWN]\d{7}[A-Z0-9]$/;

        if (cifPattern.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Spanish Entity TIN format (CIF)." };
      }
    }

  }
};
