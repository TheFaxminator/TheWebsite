// Brazil TIN validation
// Individual: CPF (Cadastro de Pessoas Físicas) — 11 digits, plain or NNN.NNN.NNN-NN
// Entity:     CNPJ (Cadastro Nacional da Pessoa Jurídica) — 14 digits, plain or NN.NNN.NNN/NNNN-NN

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['BR'] = {

  name: "Brazil",
  flag: "../assets/countries/064-br-brazil.webp",

  metadata: {
    region:       "South America",
    capital:      "Brasília",
    currency:     "BRL",
  },

  tin_types: {

    Individual: {
      name: "CPF",
      format: "NNN.NNN.NNN-NN",
      description: "Individuals in Brazil are identified for tax purposes by the CPF (Cadastro de Pessoas Físicas) issued by the Receita Federal.\n" +
        "• Issuance: Assigned to citizens and residents and used across tax, banking and identity systems.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 11 digits.\n" +
        "• Grouping: May be written as continuous digits, or formatted as NNN.NNN.NNN-NN.\n" +
        "• Separators: Dots and a hyphen before the final two digits are permitted; no spaces.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Brazilian CPF structural format.\n" +
        "• Syntax Check: Confirms the value is 11 digits in continuous or dotted form, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not compute the CPF check digits, nor does it confirm the number is active or assigned to a real person in official records.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^(?!([0-9])\1{10})\d{11}$/,
          /^(?!([0-9])\1{2}\.\1{3}\.\1{3}-\1{2})\d{3}\.\d{3}\.\d{3}-\d{2}$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Brazilian Individual TIN (CPF) format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    },

    Entity: {
      name: "CNPJ",
      format: "NN.NNN.NNN/NNNN-NN",
      description: "Legal entities in Brazil are identified for tax purposes by the CNPJ (Cadastro Nacional da Pessoa Jurídica) issued by the Receita Federal.\n" +
        "• Issuance: Assigned to businesses and other entities on registration with the Receita Federal.\n\n" +

        "Formatting & Rules\n" +
        "• Length: Exactly 14 digits.\n" +
        "• Grouping: May be written as continuous digits, or formatted as NN.NNN.NNN/NNNN-NN.\n" +
        "• Separators: Dots, a slash and a hyphen are permitted in the grouped form; no spaces.\n" +
        "• The value cannot consist of a single repeated digit.\n\n" +

        "Validation Scope\n" +
        "This check verifies that the input follows an accepted Brazilian CNPJ structural format.\n" +
        "• Syntax Check: Confirms the value is 14 digits in continuous or formatted form, and rejects strings made up of a single repeated digit.\n" +
        "• Exclusions: This is a format-only check. It does not compute the CNPJ check digits, nor does it query registries to confirm the entity is currently active or legally registered.",

      validate(tin) {
        if (/\s/.test(tin)) {
          return { valid: false, message: "TIN must not contain spaces." };
        }

        const patterns = [
          /^(?!([0-9])\1{13})\d{14}$/,
          /^(?!([0-9])\1{1}\.\1{3}\.\1{3}\/\1{4}-\1{2})\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/
        ];
        if (!patterns.some(re => re.test(tin))) {
          return { valid: false, message: "Does not match the Brazilian Entity TIN (CNPJ) format." };
        }
        return { valid: true, message: "Valid Tax Identification Number." };
      }
    }

  }
};
