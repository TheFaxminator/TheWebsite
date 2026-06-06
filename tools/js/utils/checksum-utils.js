const ChecksumUtils = (() => {

  // Computes the Mod-11 check digit given an array of digits and a weights array.
  // weights.length must equal the number of digits to include in the sum (excludes the check digit itself).
  // Returns the expected check digit (0-9), or -1 if the weighted sum produces a remainder of 1
  // (which would require check digit 10 — an impossible single digit, meaning the number is inherently invalid).
  function mod11(digits, weights) {
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
      sum += digits[i] * weights[i];
    }
    const remainder = sum % 11;
    if (remainder === 0) return 0;
    const check = 11 - remainder;
    if (check === 10) return -1; // inherently invalid combination
    return check;
  }

  return { mod11 };
})();
