// Germany TIN validation
// Individual: Steueridentifikationsnummer (11 digits) / Steuernummer (10–11 digits, formatted or plain)
// Entity:     USt-IdNr. / VAT number (DE + 9 digits)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['DE'] = {

  name: "Germany",
  flag: "../assets/countries/014-de-germany.webp",

  metadata: {
    region:       "Central Europe",
    capital:      "Berlin",
    population:   "84.4M",
    currency:     "EUR",
    gdpPerCapita: "$54,000",
    funFact: "Germany is home to over 1,500 different types of beer and approximately 1,300 breweries — more than any other country on Earth. The tradition is so deeply embedded in culture that Bavaria even classifies beer as a staple food (Grundnahrungsmittel), a designation it held for centuries before modern food law caught up."
  },

  tin_types: {

    Individual: {
      name: "Steuer-ID / Steuernummer",
      format: "NNNNNNNNNNN , NN/NNN/NNNNN  or  NNNNNNNNNN(N)",
      description: "Germany issues two types of Taxpayer Identification Numbers for individuals: Steueridentifikationsnummer (Steuer-ID) and Steuernummer.\n" +
        "• Steuer-ID: A permanent 11-digit tax identification number assigned to all individuals registered in Germany. Issued once at birth or upon first registration and never changes.\n" +
        "• Steuernummer: A tax number assigned by local tax offices (Finanzämter) to individuals required to file a tax return. Format varies by federal state and may be 10 or 11 digits, written with or without slash separators.\n\n" +

        "Formatting & Rules\n" +
        "• Steuer-ID: Exactly 11 digits. No separators. The first digit is never 0.\n" +
        "• Steuernummer (unformatted): 10 or 11 numeric digits depending on the federal state. No separators.\n" +
        "• Steuernummer (formatted): Written as NN/NNN/NNNNN with slash separators (10 significant digits).\n" +
        "• Separators: None for Steuer-ID and unformatted Steuernummer. Slashes (/) only in the formatted Steuernummer variant. No spaces.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input matches one of the accepted German individual TIN formats.\n" +
        "• Syntax Check: Verifies the input matches either the 11-digit Steuer-ID, the 10–11 digit unformatted Steuernummer, or the NN/NNN/NNNNN formatted Steuernummer.\n" +
        "• Exclusions: This is a format-only check. It does not validate the check digit, nor does it verify if the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const steuerId    = /^(?!([0-9])\1{10})\d{11}$/.test(tin);
        const steuerNrRaw = /^(?!([0-9])\1{9,10})\d{10,11}$/.test(tin);
        const steuerNrFmt = /^(?!([0-9])\1{1}\/\1{3}\/\1{5})\d{2}\/\d{3}\/\d{5}$/.test(tin);

        if (steuerId || steuerNrRaw || steuerNrFmt) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the German Individual TIN format." };
      }
    },

    Entity: {
      name: "VAT Number (USt-IdNr.)",
      format: "DENNNNNNNNN",
      description: "Germany issues one type of Taxpayer Identification Number for entities: the Umsatzsteuer-Identifikationsnummer (USt-IdNr.), commonly known as the VAT number.\n" +
        "• USt-IdNr.: Assigned to businesses, organisations, and other legal entities registered for VAT in Germany. Used for intra-EU trade and cross-border VAT reporting.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 11 characters — prefix DE followed by 9 numeric digits.\n" +
        "• The prefix DE identifies Germany as the issuing EU member state.\n" +
        "• Followed by exactly 9 numeric digits.\n" +
        "• Separators: None allowed (no hyphens, no spaces).\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the expected German VAT number structural format.\n" +
        "• Syntax Check: Verifies the DE prefix followed by exactly 9 numeric digits with no extra characters.\n" +
        "• Exclusions: This is a format-only check. It does not validate the check digit, nor does it verify if the number is active, registered, or belongs to a real entity.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        if (/^(?!DE([0-9])\1{8})DE\d{9}$/.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the German Entity TIN format." };
      }
    }

  }
};
