// Australia TIN validation
// Individual: Tax File Number (TFN) — 8 or 9 digits, optionally grouped
// Entity:     Australian Business Number (ABN) — 11 digits, optionally grouped

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['AU'] = {

  name: "Australia",
  flag: "../assets/countries/030-au-australia.webp",

  metadata: {
    region:       "Oceania",
    capital:      "Canberra",
    currency:     "AUD",
  },

  tin_types: {

    Individual: {
      name: "Tax File Number (TFN)",
      format: "NNN NNN NNN or NNNNNNNNN",
      description: "Individuals in Australia are identified for tax purposes by a Tax File Number (TFN) issued by the Australian Taxation Office (ATO).\n" +
        "• Issuance: Assigned to taxpayers on registration with the ATO and used for lodging returns and reporting income.\n\n" +

        "Formatting & Rules\n" +
        "• Length: 8 or 9 digits (older TFNs are 8 digits; newer ones are 9).\n" +
        "• Grouping: May be written as continuous digits, or spaced as NNN NNN NN (8 digits) or NNN NNN NNN (9 digits).\n" +
        "• Separators: Only single spaces between groups are allowed; no other punctuation.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Australian TFN structural format.\n" +
        "• Syntax Check: Confirms the value is 8 or 9 digits (grouped or continuous) with no unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply the TFN checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        const patterns = [
          /^(?!([0-9])\1{7,8})\d{8,9}$/,
          /^(?!([0-9])\1{2}\s\1{3}\s\1{2})(\d{3}\s\d{3}\s\d{2})$/,
          /^(?!([0-9])\1{2}\s\1{3}\s\1{3})(\d{3}\s\d{3}\s\d{3})$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Australian Individual TIN (TFN) format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "Australian Business Number (ABN)",
      format: "NN NNN NNN NNN or NNNNNNNNNNN",
      description: "Legal entities in Australia are identified for tax purposes by an Australian Business Number (ABN) issued by the Australian Business Register (ABR).\n" +
        "• Issuance: Assigned to businesses and other entities on registration and used for tax filing, invoicing and GST.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 11 digits.\n" +
        "• Grouping: May be written as continuous digits, or spaced as NN NNN NNN NNN.\n" +
        "• Separators: Only single spaces between groups are allowed; no other punctuation.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Australian ABN structural format.\n" +
        "• Syntax Check: Confirms the value is 11 digits (grouped or continuous) with no unexpected characters, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply the ABN checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        const patterns = [
          /^(?!([0-9])\1{10})\d{11}$/,
          /^(?!([0-9])\1{1}\s\1{3}\s\1{3}\s\1{3})(\d{2}\s\d{3}\s\d{3}\s\d{3})$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Australian Entity TIN (ABN) format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
