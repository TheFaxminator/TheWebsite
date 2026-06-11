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
      description: "Spain issues several types of Taxpayer Identification Numbers for individuals: NIF/DNI for Spanish nationals and NIE for foreign nationals.\n" +
        "• NIF/DNI: Assigned to Spanish nationals. Consists of 8 digits followed by a check letter.\n" +
        "• NIE (KLM): Special NIFs assigned to certain Spanish citizens (e.g., minors or citizens abroad without a DNI).\n" +
        "• NIE (XYZ): Assigned to foreign nationals. Begins with X, Y, or Z, followed by 7 digits and a check letter.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 9 characters for all formats.\n" +
        "• NIF/DNI: 8 numeric digits followed by 1 uppercase check letter.\n" +
        "• NIE: 1 uppercase letter prefix (K, L, M, X, Y, or Z), followed by 7 digits and 1 uppercase check letter.\n" +
        "• Separators: None allowed (no hyphens, no spaces).\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows one of the expected Spanish individual TIN formats.\n" +
        "• Syntax Check: Verifies the format matches one of the three accepted patterns (NIF/DNI or NIE).\n" +
        "• Exclusions: This is a format-only check. It does not verify if the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const dniPattern = /^(?!([0-9])\1{7}[A-Z]$)\d{8}[A-Z]$/;
        const niePattern = /^(?![KLMXYZ](\d)\1{6}[A-Z]$)[KLMXYZ]\d{7}[A-Z]$/;

        if (dniPattern.test(tin) || niePattern.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Spanish Individual TIN format (DNI or NIE)." };
      }
    },

    Entity: {
      name: "NIF",
      format: "LNNNNNNNA",
      description: "Spain issues one type of Taxpayer Identification Number for entities: NIF (also known as CIF, Código de Identificación Fiscal).\n" +
        "• NIF: Assigned to companies, organisations, associations, and other legal entities registered in Spain.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 9 characters.\n" +
        "• The first character is an uppercase letter identifying the entity type (A, B, C, D, E, F, G, H, J, P, Q, R, S, U, V, W, or N).\n" +
        "• Characters 2–8 are 7 numeric digits.\n" +
        "• The 9th character is either a letter or a digit, depending on the entity type.\n" +
        "• Separators: None allowed (no hyphens, no spaces).\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the expected Spanish entity NIF structural format.\n" +
        "• Syntax Check: Verifies the entity type letter, 7 numeric digits, and a valid alphanumeric check character.\n" +
        "• Exclusions: This is a format-only check. It does not validate the control character, nor does it verify if the number is active, issued, or belongs to a real entity.",

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
