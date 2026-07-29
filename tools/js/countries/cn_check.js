// China TIN validation
// Individual: 18-char resident ID, or prefixed IDs (C/W/H/M/T + 17, J + 14)
// Entity:     Unified Social Credit Code / registration numbers (15 or 18 characters)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['CN'] = {

  name: "China",
  flag: "../assets/countries/073-cn-china.webp",

  metadata: {
    region:       "East Asia",
    capital:      "Beijing",
    currency:     "CNY",
  },

  tin_types: {

    Individual: {
      name: "TIN",
      format: "NNNNNNNNNNNNNNNNNV",
      description: "Individuals in China are identified for tax purposes by their 18-character Resident Identity Card number. Prefixed identifiers are issued to certain non-resident and special categories of taxpayer by the State Taxation Administration.\n" +
        "• Issuance: Assigned to citizens on the national ID card; prefixed numbers (C, W, H, M, T, J) cover Hong Kong/Macao/Taiwan residents, foreigners and other categories.\n\n" +

        "Formatting & Rules\n" +
        "• Resident ID: 17 digits followed by a check character that is a digit or the letter X.\n" +
        "• Prefixed IDs: a leading letter (C, W, H, M or T) followed by 17 characters, or J followed by 14 digits.\n" +
        "• Separators: No spaces or punctuation are allowed.\n" +
        "• The value cannot consist of a single repeated character.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Chinese individual structural format.\n" +
        "• Syntax Check: Confirms the value is a valid 18-character resident ID or a recognised prefixed identifier, and rejects strings made up of a single repeated character.\n" +
        "• Exclusions: This is a format-only check. It does not compute the ID check digit, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^(?!([0-9Xx])\1{17})\d{17}(?:\d|[Xx])$/,
          /^(?!([A-Za-z0-9])\1{17})C(?:\d{17}|\d{16}[A-Za-z])$/,
          /^(?!([A-Za-z0-9])\1{17})W(?:\d{17}|\d{16}[A-Za-z])$/,
          /^(?!([A-Za-z0-9])\1{14})J\d{14}$/,
          /^(?!([A-Za-z0-9])\1{17})H(?:\d{17}|\d{16}[A-Za-z])$/,
          /^(?!([A-Za-z0-9])\1{17})M(?:\d{17}|\d{16}[A-Za-z])$/,
          /^(?!([A-Za-z0-9])\1{17})T(?:\d{17}|\d{16}[A-Za-z])$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Chinese Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "Unified Social Credit Code",
      format: "NNNNNNNNXXXXXXXXXX",
      description: "Legal entities in China are identified for tax purposes by the Unified Social Credit Code (USCC) or older registration numbers issued by the State Taxation Administration.\n" +
        "• Issuance: Assigned to businesses and other organisations on registration.\n\n" +

        "Formatting & Rules\n" +
        "• Length: 15 digits (legacy registration number), 18 digits, or an 18-character USCC (8 digits followed by 10 digits/uppercase letters).\n" +
        "• Separators: No spaces or punctuation are allowed; letters are uppercase.\n" +
        "• The value cannot consist of a single repeated character.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Chinese entity structural format.\n" +
        "• Syntax Check: Confirms the value is a 15-digit, 18-digit or 18-character USCC identifier, and rejects strings made up of a single repeated character.\n" +
        "• Exclusions: This is a format-only check. It does not compute the USCC check character, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^(?!([0-9])\1{14})\d{15}$/,
          /^(?!([0-9])\1{17})\d{18}$/,
          /^(?!([0-9A-Z])\1{17})\d{8}[0-9A-Z]{10}$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Chinese Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
