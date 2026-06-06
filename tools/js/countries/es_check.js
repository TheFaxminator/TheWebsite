// Spain TIN validation
// Individual: NIF/DNI (8 digits + letter), NIE-KLM (K/L/M + 7 digits + letter),
//             NIE-XYZ (X/Y/Z + 7 digits + letter)
// Entity:     CIF (letter from restricted set + 7 digits + letter or digit)

window.TIN_COUNTRIES = window.TIN_COUNTRIES || {};

window.TIN_COUNTRIES['ES'] = {

  name: "Spain",
  flag: "../assets/countries/029-es-spain.png",

  metadata: {
    region:       "Southern Europe",
    capital:      "Madrid",
    population:   "47.4M",
    currency:     "EUR",
    gdpPerCapita: "$32,000",
    funFact: "Spain uses three distinct individual tax identification formats — the DNI for nationals, and two variants of the NIE for foreign residents — all validated by the same modulo-23 check-letter algorithm, making the letter suffix the key integrity check across all formats."
  },

  tin_types: {

    Individual: {
      name: "NIF / DNI / NIE",
      format: "NNNNNNNNL  or  [KLM]NNNNNNNL  or  [XYZ]NNNNNNNL",
      description: "Spain issues three individual tax identification formats under the umbrella of the NIF " +
        "(Número de Identificación Fiscal). Spanish nationals hold a DNI (Documento Nacional de Identidad): " +
        "8 digits followed by a check letter computed via a modulo-23 algorithm. Foreign residents are issued " +
        "a NIE (Número de Identidad de Extranjero): a leading letter (K or L for certain minors and residents, " +
        "X / Y / Z for general foreign nationals), 7 digits, and a check letter. All formats are issued and " +
        "managed by the Agencia Tributaria (Spanish Tax Agency).",

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
      name: "CIF — Código de Identificación Fiscal",
      format: "LNNNNNNN[L|N]",
      description: "Legal entities in Spain are identified by the CIF (Código de Identificación Fiscal), " +
        "now officially referred to as the NIF for legal persons. It consists of a letter denoting the entity " +
        "type (A = S.A., B = S.L., C = Collective society, etc.), followed by 7 digits and a final control " +
        "character that is either a letter or a digit depending on the entity type. Valid opening letters are " +
        "A, B, C, D, E, F, G, H, J, P, Q, R, S, U, V, W, and N. Issued by the Agencia Tributaria.",

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
