// TIN Engine — orchestrates lazy-loading of per-country validation modules
// and returns structured result objects to the UI layer.

const TINEngine = (() => {

  const _loading = {}; // countryCode → Promise (deduplicates concurrent requests)

  function _loadCountry(countryCode) {
    // Already registered by a previously loaded script
    if (window.TIN_COUNTRIES && window.TIN_COUNTRIES[countryCode]) {
      return Promise.resolve(window.TIN_COUNTRIES[countryCode]);
    }

    // Deduplicate parallel calls for the same country
    if (_loading[countryCode]) return _loading[countryCode];

    _loading[countryCode] = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src   = `js/countries/${countryCode.toLowerCase()}_check.js`;

      script.onload = () => {
        delete _loading[countryCode];
        const data = window.TIN_COUNTRIES && window.TIN_COUNTRIES[countryCode];
        if (data) resolve(data);
        else reject(new Error(`Country module loaded but did not register data for: ${countryCode}`));
      };

      script.onerror = () => {
        delete _loading[countryCode];
        reject(new Error(`No validation module found for country: ${countryCode}`));
      };

      document.head.appendChild(script);
    });

    return _loading[countryCode];
  }

  async function validate(countryCode, tinType, tin) {
    if (!countryCode || !tin) {
      return {
        status:      'missing',
        valid:       false,
        countryCode: countryCode || '—',
        message:     'Please enter both a country code and a TIN before validating.'
      };
    }

    let countryData;
    try {
      countryData = await _loadCountry(countryCode);
    } catch {
      return {
        status:      'unknown',
        valid:       false,
        countryCode,
        message:     `No validation data available for country code "${countryCode}".`
      };
    }

    const typeData = countryData.tin_types[tinType];
    if (!typeData) {
      return {
        status:      'unknown',
        valid:       false,
        countryCode,
        countryName: countryData.name,
        flag:        countryData.flag,
        message:     `No validation rules found for ${tinType} TIN in ${countryCode}.`
      };
    }

    const result = typeData.validate(tin);

    return {
      status:      result.valid ? 'valid' : 'invalid',
      valid:       result.valid,
      message:     result.message,
      countryCode,
      countryName: countryData.name,
      flag:        countryData.flag,
      tinName:     typeData.name,
      format:      typeData.format,
      description: typeData.description,
      submittedTin: tin
    };
  }

  return { validate };
})();
