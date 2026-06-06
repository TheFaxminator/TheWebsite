const DateUtils = (() => {

  function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  function isValidDate(year, month, day) {
    if (month < 1 || month > 12) return false;
    if (day  < 1)                return false;
    return day <= daysInMonth(year, month);
  }

  // Resolves the birth century for a Norwegian fødselsnummer / D-nummer.
  // individualNumber: the three-digit individual number (digits 7-9, 0-indexed 6-8).
  // yy: the two-digit year component (digits 5-6, 0-indexed 4-5).
  // Returns full 4-digit year, or null if the combination is illegal.
  function resolveNorwegianYear(individualNumber, yy) {
    if (individualNumber >= 0 && individualNumber <= 499) {
      return 1900 + yy;
    }
    if (individualNumber >= 500 && individualNumber <= 749) {
      if (yy <= 39)  return 2000 + yy;   // born 2000-2039
      if (yy >= 54)  return 1800 + yy;   // born 1854-1899
      return null;                        // yy 40-53 with this range is unassigned
    }
    if (individualNumber >= 900 && individualNumber <= 999) {
      return 1900 + yy;
    }
    return null; // 750-899 not assigned
  }

  return { isValidDate, resolveNorwegianYear };
})();
