// Costa Rica TIN validation
// Individual: Cédula física / DIMEX / NITE — various formats
// Entity:     Cédula jurídica — 10 digits (plain or N-NNN-NNNNNN) or 3-130 series

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['CR'] = {

  name: "Costa Rica",
  flag: "../assets/countries/034-cr-costa-rica.webp",

  metadata: {
    region:       "Central America",
    capital:      "San José",
    currency:     "CRC",
  },

  tin_types: {

    Individual: {
      name: "Cédula / DIMEX / NITE",
      format: "N-NNNN-NNNN",
      description: "Individuals in Costa Rica are identified for tax purposes by their cédula de identidad (nationals), DIMEX (foreign residents) or NITE, administered by the Ministerio de Hacienda.\n" +
        "• Issuance: The cédula is assigned to nationals; DIMEX to foreign residents; NITE to certain entities without a cédula.\n\n" +

        "Formatting & Rules\n" +
        "• Cédula física: 9 digits, plain or grouped as N-NNNN-NNNN.\n" +
        "• DIMEX: 11 or 12 digits.\n" +
        "• NITE: the 3-120 series, written as 3-120-NNNNN or 3120NNNNN.\n" +
        "• Separators: Hyphens are permitted in the grouped forms; no spaces.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Costa Rican individual structural format.\n" +
        "• Syntax Check: Confirms the value is a valid cédula física, DIMEX or NITE structure, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^(?!([0-9])\1{8})(?:\d-\d{4}-\d{4}|\d{9})$/,
          /^(?!([0-9])\1{10,11})\d{11,12}$/,
          /^(?!([0-9])\1{9})(?:3-120-\d{5}|3120\d{5})$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Costa Rican Individual TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "Cédula jurídica",
      format: "N-NNN-NNNNNN",
      description: "Legal entities in Costa Rica are identified for tax purposes by their cédula jurídica, administered by the Ministerio de Hacienda.\n" +
        "• Issuance: Assigned to businesses and other entities on registration; the 3-130 series identifies certain legal persons.\n\n" +

        "Formatting & Rules\n" +
        "• Cédula jurídica: 10 digits, plain or grouped as N-NNN-NNNNNN.\n" +
        "• 3-130 series: written as 3-130-NNNNN or 3130NNNNN.\n" +
        "• Separators: Hyphens are permitted in the grouped forms; no spaces.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Costa Rican entity structural format.\n" +
        "• Syntax Check: Confirms the value is a valid cédula jurídica or 3-130 series structure, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not apply a checksum, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^(?!([0-9])\1{9})(?:\d-\d{3}-\d{6}|\d{10})$/,
          /^(?!([0-9])\1{9})(?:3-130-\d{5}|3130\d{5})$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Costa Rican Entity TIN format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
