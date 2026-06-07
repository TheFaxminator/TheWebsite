// Shared TIN format mask legend — renders a collapsible reference card.
// Used by countries.html (modal) and global-tin-validator.html (result panel).

window.TINFormatLegend = (() => {

  const SYMBOLS = [
    { symbol: 'N',     name: 'Number',       description: 'Numeric digit (0–9)',                 example: '123...',       color: '#22d3ee' },
    { symbol: 'L',     name: 'Letter',        description: 'Alphabetic character (A–Z)',           example: 'ABC...',         color: '#c084fc' },
    { symbol: 'A',     name: 'Alphanumeric',  description: 'Letter or digit',              example: 'A, 9',       color: '#fbbf24' },
    { symbol: 'X',     name: 'Wildcard',      description: 'Letter, digit, or special character',  example: 'A, 9, +',          color: '#cbd5e1' },
    { symbol: 'D',     name: 'Day',           description: '2-digit calendar day (01–31)',          example: '01',         color: '#34d399' },
    { symbol: 'M',     name: 'Month',         description: '2-digit calendar month (01–12)',        example: '12',         color: '#34d399' },
    { symbol: 'Y',     name: 'Year',          description: '2 or 4-digit calendar year',            example: '99 or 1999', color: '#34d399' },
    { symbol: '[...]', name: 'Literal Text',  description: 'Fixed text/numbers',  example: '[MVA], [756] ',      color: '#f97316' },
  ];

  function _injectStyles() {
    if (document.getElementById('tin-legend-styles')) return;
    const s = document.createElement('style');
    s.id = 'tin-legend-styles';
    s.textContent = `
      .tin-legend { margin-top: 1.25rem; }

      .tin-legend summary {
        cursor: pointer;
        user-select: none;
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        font-weight: 700;
        font-family: 'Cinzel Decorative', cursive;
        color: #94a3b8;
        padding: 0.55rem 0.9rem;
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 0.6rem;
        list-style: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: color 0.2s, border-color 0.2s;
      }
      .tin-legend summary::-webkit-details-marker { display: none; }
      .tin-legend summary::before {
        content: '\\25B8';
        font-size: 0.65rem;
        transition: transform 0.2s;
        display: inline-block;
      }
      .tin-legend[open] summary::before { transform: rotate(90deg); }
      .tin-legend[open] summary {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-color: transparent;
        color: #fff;
        border-color: rgba(255,255,255,0.14);
      }

      .tin-legend-body {
        border: 1px solid rgba(255,255,255,0.08);
        border-top: none;
        border-bottom-left-radius: 0.6rem;
        border-bottom-right-radius: 0.6rem;
        overflow: hidden;
      }

      .tin-legend-row {
        display: grid;
        grid-template-columns: 56px 130px 1fr 110px;
        gap: 0.75rem;
        padding: 0.45rem 0.9rem;
        font-size: 0.78rem;
        border-bottom: 1px solid rgba(255,255,255,0.05);
        align-items: center;
      }
      .tin-legend-row:last-child { border-bottom: none; }
      .tin-legend-row.legend-header {
        font-size: 0.63rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #94a3b8;
        font-weight: 700;
        font-family: 'Cinzel Decorative', cursive;
        background: rgba(255,255,255,0.04);
      }

      .tin-legend-symbol {
        font-family: monospace;
        font-size: 0.8rem;
        font-weight: 700;
        padding: 0.1rem 0.4rem;
        border-radius: 0.3rem;
        display: inline-block;
        text-align: center;
        white-space: nowrap;
      }
      .tin-legend-name { color: #cbd5e1; font-weight: 600; }
      .tin-legend-desc { color: #94a3b8; line-height: 1.4; }
      .tin-legend-example { font-family: monospace; font-size: 0.75rem; color: #94a3b8; }

      @media (max-width: 520px) {
        .tin-legend-row {
          grid-template-columns: 48px 1fr;
          grid-template-rows: auto auto;
        }
        .tin-legend-desc    { grid-column: 2; }
        .tin-legend-name    { grid-column: 2; }
        .tin-legend-example { display: none; }
        .tin-legend-row.legend-header { display: none; }
      }
    `;
    document.head.appendChild(s);
  }

  function renderCard() {
    _injectStyles();

    const rows = SYMBOLS.map(sym => `
      <div class="tin-legend-row">
        <span class="tin-legend-symbol"
              style="background:${sym.color}1a; color:${sym.color}; border:1px solid ${sym.color}40;">
          ${_esc(sym.symbol)}
        </span>
        <span class="tin-legend-name">${_esc(sym.name)}</span>
        <span class="tin-legend-desc">${_esc(sym.description)}</span>
        <span class="tin-legend-example">${_esc(sym.example)}</span>
      </div>
    `).join('');

    return `
      <details class="tin-legend">
        <summary>Format Key &nbsp;&mdash;&nbsp; mask symbol reference</summary>
        <div class="tin-legend-body">
          <div class="tin-legend-row legend-header">
            <span>Symbol</span><span>Type</span><span>Meaning</span><span>Example</span>
          </div>
          ${rows}
        </div>
      </details>
    `;
  }

  function _esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  return { renderCard };

})();
