// Chile TIN validation
// Individual: RUT / RUN (Rol Único Tributario / Nacional) — 8+ digits with check digit (0-9 or K)
// Entity:     RUT (Rol Único Tributario) — 8+ digits with check digit (0-9 or K)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['CL'] = {

  name: "Chile",
  flag: "../assets/countries/032-cl-chile.webp",

  metadata: {
    region:       "South America",
    capital:      "Santiago",
    currency:     "CLP",
  },

  tin_types: {

    Individual: {
      name: "RUT / RUN",
      format: "NN.NNN.NNN-V",
      description: "Individuals in Chile are identified for tax purposes by their RUN (Rol Único Nacional), which functions as the RUT (Rol Único Tributario) issued by the Servicio de Impuestos Internos (SII).\n" +
        "• Issuance: Assigned to citizens and residents and used across tax, banking and identity systems.\n\n" +

        "Formatting & Rules\n" +
        "• Structure: A body of 7–8 digits followed by a single check character (a digit 0–9 or the letter K).\n" +
        "• Grouping: May be written plain (12345678-5), dotted (12.345.678-5), or as a continuous 8-digit-plus-K / 9-digit string.\n" +
        "• Separators: Dots as thousands separators and a hyphen before the check character are permitted; no spaces.\n" +
        "• The value cannot consist of a single repeated character.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Chilean RUT/RUN structural format.\n" +
        "• Syntax Check: Confirms the value is a valid RUT body and check character in plain, dotted or continuous form, and rejects strings made up of a single repeated character.\n" +
        "• Exclusions: This is a format-only check. It does not compute the Modulus 11 check digit, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^(?!([0-9K])\1{7,8}-\1)[0-9]{7,8}-[0-9K]$/,
          /^(?!([0-9])[0-9]{7}\1[Kk])[0-9]{8}[Kk]$/,
          /^(?!([0-9])\1{8})[0-9]{9}$/,
          /^(?!([0-9K])\1{1,2}\.\1{3}\.\1{3}-\1)[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[0-9K]$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Chilean Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "RUT",
      format: "NN.NNN.NNN-V",
      description: "Legal entities in Chile are identified for tax purposes by a RUT (Rol Único Tributario) issued by the Servicio de Impuestos Internos (SII).\n" +
        "• Issuance: Assigned to businesses and other entities on registration with the SII.\n\n" +

        "Formatting & Rules\n" +
        "• Structure: A body of 7–8 digits followed by a single check character (a digit 0–9 or the letter K).\n" +
        "• Grouping: May be written plain (76123456-7) or dotted (76.123.456-7).\n" +
        "• Separators: Dots as thousands separators and a hyphen before the check character are permitted; no spaces.\n" +
        "• The value cannot consist of a single repeated character.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Chilean RUT structural format.\n" +
        "• Syntax Check: Confirms the value is a valid RUT body and check character in plain or dotted form, and rejects strings made up of a single repeated character.\n" +
        "• Exclusions: This is a format-only check. It does not compute the Modulus 11 check digit, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^(?!([0-9K])\1{7,8}-\1)[0-9]{7,8}-[0-9K]$/,
          /^(?!([0-9K])\1{1,2}\.\1{3}\.\1{3}-\1)[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[0-9K]$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Chilean Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
