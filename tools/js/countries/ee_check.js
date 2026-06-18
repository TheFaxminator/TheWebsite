// Estonia TIN validation
// Individual: Isikukood (personal identification code) — 11 digits, format GYYMMDDSSSC
// Entity:     Registrikood (registration code) — 8 digits, leading digit 1, 8, or 9

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['EE'] = {

  name: "Estonia",
  flag: "../assets/countries/012-ee-estonia.webp",

  metadata: {
    region:       "Northern Europe",
    capital:      "Tallinn",
    population:   "1.4M",
    currency:     "EUR",
    gdpPerCapita: "$28,000",
    funFact: "Estonia is widely regarded as the world's most advanced digital society — it was the first country to offer online voting in a national election (2005), and today almost every public service is available online. Citizens can even form a company, pay taxes, and access medical records digitally in minutes, all underpinned by a blockchain-secured national identity system that Estonians call X-Road."
  },

  tin_types: {

    Individual: {
      name: "Isikukood",
      format: "GYYMMDDNNNN",
      description: "Estonia issues one type of Tax Identification Number for individuals: the Isikukood (personal identification code), a structured 11-digit number assigned to all Estonian citizens and residents.\n" +
        "• Isikukood: Used for tax purposes, social security, healthcare, and all official interactions with Estonian public authorities.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 11 digits, with no separators.\n" +
        "• G (1st digit): Encodes sex and century of birth. Odd = male, even = female. 1–2 = 19th century, 3–4 = 20th century, 5–6 = 21st century. Valid values are 1 through 6.\n" +
        "• YY (2nd–3rd digits): Two-digit year of birth.\n" +
        "• MM (4th–5th digits): Month of birth (01–12).\n" +
        "• DD (6th–7th digits): Day of birth (01–31).\n" +
        "• Separators: None allowed (no hyphens, no spaces).\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the expected Estonian individual TIN format.\n" +
        "• Syntax Check: Verifies that the TIN is exactly 11 digits and that the first digit is in the valid range (1–6).\n" +
        "• Exclusions: This is a format-only check. It does not validate the date components, the checksum digit, or whether the number is active and assigned to a real person.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const pattern = /^[1-6]\d{10}$/;

        if (pattern.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Estonian Individual TIN format (Isikukood — 11 digits, first digit 1–6)." };
      }
    },

    Entity: {
      name: "Registrikood",
      format: "NNNNNNNN",
      description: "Estonia issues one type of Tax Identification Number for legal entities: the Registrikood (registration code), an 8-digit number assigned upon registration in the Estonian Business Register.\n" +
        "• Registrikood: Used by companies, non-profit associations, and foundations to identify themselves in all tax and official dealings.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 8 digits.\n" +
        "• The first digit identifies the entity type:\n" +
        "  – 1: Public limited companies (AS), private limited companies (OÜ), general partnerships (TÜ), limited partnerships (UÜ), and commercial associations.\n" +
        "  – 8: Non-profit associations (MTÜ).\n" +
        "  – 9: Foundations (SA).\n" +
        "• The remaining 7 digits form a unique sequential identifier.\n" +
        "• Separators: None allowed (no hyphens, no spaces).\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows the expected Estonian entity TIN format.\n" +
        "• Syntax Check: Verifies that the TIN is exactly 8 digits and that the first digit is 1, 8, or 9.\n" +
        "• Exclusions: This is a format-only check. It does not validate the checksum or verify whether the number is active and registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const pattern = /^[189]\d{7}$/;

        if (pattern.test(tin)) {
          return { valid: true, message: "Valid Tax Identification Number." };
        }

        return { valid: false, message: "Does not match the Estonian Entity TIN format (Registrikood — 8 digits, first digit 1, 8, or 9)." };
      }
    }

  }
};
