/**
 * ETF Data Update Script
 *
 * Fetches live price & performance data from Yahoo Finance,
 * merges it with static metadata, and regenerates etf-data.ts.
 *
 * Run: node scripts/update-etf-data.js
 */

const yahooFinance = require('yahoo-finance2').default;
const fs = require('fs');
const path = require('path');

// ---- Config ----
const ETF_LIST = [
  // US Broad
  { ticker: 'VOO', yahooSymbol: 'VOO' },
  { ticker: 'IVV', yahooSymbol: 'IVV' },
  { ticker: 'SPY', yahooSymbol: 'SPY' },
  // US Nasdaq / Tech
  { ticker: 'QQQ', yahooSymbol: 'QQQ' },
  { ticker: 'QQQM', yahooSymbol: 'QQQM' },
  // US Sector
  { ticker: 'SMH', yahooSymbol: 'SMH' },
  // China Onshore (approximated via US-listed counterparts for free API)
  { ticker: '510300', yahooSymbol: '510300.SS' },
  { ticker: '159919', yahooSymbol: '159919.SZ' },
  // US-Listed China
  { ticker: 'ASHR', yahooSymbol: 'ASHR' },
  { ticker: 'FXI', yahooSymbol: 'FXI' },
  { ticker: 'MCHI', yahooSymbol: 'MCHI' },
  // HK
  { ticker: '2800.HK', yahooSymbol: '2800.HK' },
];

// Major indices for the Index Explorer
const INDEX_LIST = [
  { id: 'sp500', yahooSymbol: '^GSPC' },
  { id: 'nasdaq100', yahooSymbol: '^NDX' },
  { id: 'csi300', yahooSymbol: '000300.SS' },
  { id: 'hsi', yahooSymbol: '^HSI' },
];

const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'lib', 'etf-data.ts');

// ---- Helpers ----
function safeNum(val) {
  if (val === null || val === undefined || isNaN(val)) return null;
  return val;
}

function formatER(rawExpenseRatio) {
  // If Yahoo returns an expense ratio as a decimal (e.g. 0.0003), use directly
  if (typeof rawExpenseRatio === 'number' && rawExpenseRatio < 1) {
    return rawExpenseRatio;
  }
  return null; // fall back to static value
}

function calcAnnualizedReturn(history, years) {
  if (!history || history.length < 2) return null;
  const sorted = [...history].sort((a, b) => new Date(a.date) - new Date(b.date));
  const targetDate = new Date();
  targetDate.setFullYear(targetDate.getFullYear() - years);
  const startIdx = sorted.findIndex(d => new Date(d.date) >= targetDate);
  if (startIdx < 0) return null;
  const startClose = sorted[startIdx].close;
  const endClose = sorted[sorted.length - 1].close;
  if (!startClose || !endClose || startClose <= 0) return null;
  return Math.pow(endClose / startClose, 1 / years) - 1;
}

// ---- Main ----
async function fetchData() {
  console.log(`[${new Date().toISOString()}] Starting ETF data update...`);

  const results = {};

  for (const etf of ETF_LIST) {
    console.log(`  Fetching ${etf.ticker} (${etf.yahooSymbol})...`);
    try {
      // Fetch quote and 5-year historical in parallel
      const [quote, historical] = await Promise.all([
        yahooFinance.quote(etf.yahooSymbol).catch(() => null),
        yahooFinance.historical(etf.yahooSymbol, {
          period1: '2021-06-30',
          period2: new Date().toISOString().split('T')[0],
        }).catch(() => null),
      ]);

      // Calculate returns
      const now = new Date();
      const ytdStart = new Date(now.getFullYear(), 0, 1);
      const oneYearStart = new Date();
      oneYearStart.setFullYear(oneYearStart.getFullYear() - 1);

      let ytdReturn = null;
      let oneYearReturn = null;
      let fiveYear = null;

      if (historical && historical.length > 0) {
        const sorted = [...historical].sort((a, b) => new Date(a.date) - new Date(b.date));

        // YTD
        const ytdIdx = sorted.findIndex(d => new Date(d.date) >= ytdStart);
        if (ytdIdx >= 0) {
          ytdReturn = (sorted[sorted.length - 1].close - sorted[ytdIdx].close) / sorted[ytdIdx].close;
        }

        // 1-year
        const oneYearIdx = sorted.findIndex(d => new Date(d.date) >= oneYearStart);
        if (oneYearIdx >= 0) {
          oneYearReturn = (sorted[sorted.length - 1].close - sorted[oneYearIdx].close) / sorted[oneYearIdx].close;
        }

        // 5-year annualized
        fiveYear = calcAnnualizedReturn(historical, 5);
      }

      results[etf.ticker] = {
        price: safeNum(quote?.regularMarketPrice) || null,
        dividendYield: safeNum(quote?.trailingAnnualDividendYield) || null,
        pe: safeNum(quote?.trailingPE) || null,
        aum: safeNum(quote?.totalAssets) || null,
        volume: safeNum(quote?.regularMarketVolume) || null,
        avgDailyVolume10Day: safeNum(quote?.averageDailyVolume10Day) || null,
        ytdReturn: ytdReturn !== null ? ytdReturn : null,
        oneYearReturn: oneYearReturn !== null ? oneYearReturn : null,
        fiveYearAnnualized: fiveYear !== null ? fiveYear : null,
        expenseRatio: formatER(quote?.annualReportExpenseRatio),
      };

      console.log(`    ✓ ${etf.ticker}: price=${results[etf.ticker].price}, ytd=${results[etf.ticker].ytdReturn?.toFixed(4)}, 1yr=${results[etf.ticker].oneYearReturn?.toFixed(4)}`);
    } catch (err) {
      console.error(`    ✗ ${etf.ticker}: ${err.message}`);
      results[etf.ticker] = { error: true };
    }
    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 500));
  }

  // Fetch index data too
  const indexResults = {};
  for (const idx of INDEX_LIST) {
    console.log(`  Fetching index ${idx.id} (${idx.yahooSymbol})...`);
    try {
      const history = await yahooFinance.historical(idx.yahooSymbol, {
        period1: '2021-06-30',
        period2: new Date().toISOString().split('T')[0],
      }).catch(() => null);

      const now = new Date();
      const ytdStart = new Date(now.getFullYear(), 0, 1);
      const oneYearStart = new Date();
      oneYearStart.setFullYear(oneYearStart.getFullYear() - 1);

      if (history && history.length > 0) {
        const sorted = [...history].sort((a, b) => new Date(a.date) - new Date(b.date));
        const ytdIdx = sorted.findIndex(d => new Date(d.date) >= ytdStart);
        const oneYearIdx = sorted.findIndex(d => new Date(d.date) >= oneYearStart);
        const ytd = ytdIdx >= 0 ? (sorted[sorted.length - 1].close - sorted[ytdIdx].close) / sorted[ytdIdx].close : null;
        const oneYr = oneYearIdx >= 0 ? (sorted[sorted.length - 1].close - sorted[oneYearIdx].close) / sorted[oneYearIdx].close : null;
        const fiveYr = calcAnnualizedReturn(history, 5);

        indexResults[idx.id] = { ytd, oneYear: oneYr, fiveYear: fiveYr };
        console.log(`    ✓ ${idx.id}: ytd=${ytd?.toFixed(4)}, 1yr=${oneYr?.toFixed(4)}`);
      } else {
        indexResults[idx.id] = { error: true };
      }
    } catch (err) {
      console.error(`    ✗ ${idx.id}: ${err.message}`);
      indexResults[idx.id] = { error: true };
    }
    await new Promise(r => setTimeout(r, 500));
  }

  return { etf: results, indices: indexResults };
}

function generateETFDataFile(liveData) {
  // Read the current file to extract static metadata (topHoldings, sectorWeights, etc.)
  const currentFile = fs.readFileSync(OUTPUT_FILE, 'utf8');

  let newFile = currentFile;

  // Update ETF database entries with live performance data
  for (const etf of ETF_LIST) {
    const data = liveData.etf[etf.ticker];
    if (!data || data.error) continue;

    // Update performance numbers via regex
    const perfKeys = [
      { key: 'ytdReturn', value: data.ytdReturn },
      { key: 'oneYearReturn', value: data.oneYearReturn },
      { key: 'fiveYearAnnualized', value: data.fiveYearAnnualized },
    ];

    for (const pk of perfKeys) {
      if (pk.value === null || pk.value === undefined) continue;
      // Match: ticker: 'VOO', ... ytdReturn: 0.112, ...
      const regex = new RegExp(`(ticker:\\s*'${etf.ticker.replace(/\./g, '\\.')}'[\\s\\S]*?${pk.key}:\\s*)([\\d.eE+-]+)`, 'm');
      newFile = newFile.replace(regex, (match, prefix) => `${prefix}${pk.value.toFixed(4)}`);
    }

    // Update dividendYield if available
    if (data.dividendYield !== null && data.dividendYield !== undefined) {
      const divRegex = new RegExp(`(ticker:\\s*'${etf.ticker.replace(/\./g, '\\.')}'[\\s\\S]*?dividendYield:\\s*)([\\d.eE+-]+)`, 'm');
      newFile = newFile.replace(divRegex, (match, prefix) => `${prefix}${data.dividendYield.toFixed(4)}`);
    }

    // Update PE if available
    if (data.pe !== null && data.pe !== undefined && !isNaN(data.pe)) {
      const peRegex = new RegExp(`(ticker:\\s*'${etf.ticker.replace(/\./g, '\\.')}'[\\s\\S]*?pe:\\s*)([\\d.eE+-]+|null)`, 'm');
      newFile = newFile.replace(peRegex, (match, prefix) => `${prefix}${data.pe.toFixed(1)}`);
    }

    // Update AUM (convert to billions)
    if (data.aum !== null && data.aum !== undefined && !isNaN(data.aum)) {
      const aumB = data.aum / 1e9; // Yahoo returns raw AUM
      if (aumB > 0.01) {
        const aumRegex = new RegExp(`(ticker:\\s*'${etf.ticker.replace(/\./g, '\\.')}'[\\s\\S]*?aum:\\s*)([\\d.eE+-]+)`, 'm');
        newFile = newFile.replace(aumRegex, (match, prefix) => `${prefix}${aumB.toFixed(1)}`);
      }
    }
  }

  // Update majorIndices with live performance
  for (const idx of INDEX_LIST) {
    const data = liveData.indices[idx.id];
    if (!data || data.error) continue;

    const indexPerfKeys = [
      { key: 'ytdReturn', value: data.ytd },
      { key: 'oneYearReturn', value: data.oneYear },
      { key: 'fiveYearAnnualized', value: data.fiveYear },
    ];

    for (const pk of indexPerfKeys) {
      if (pk.value === null || pk.value === undefined) continue;
      const regex = new RegExp(`(id:\\s*'${idx.id}'[\\s\\S]*?${pk.key}:\\s*)([\\d.eE+-]+)`, 'm');
      newFile = newFile.replace(regex, (match, prefix) => `${prefix}${pk.value.toFixed(4)}`);
    }
  }

  // Add update timestamp
  const timestamp = `// Auto-updated: ${new Date().toISOString()}\n`;
  if (newFile.startsWith('// Auto-updated:')) {
    newFile = newFile.replace(/^\/\/ Auto-updated:.*$/m, timestamp.trim());
  } else {
    newFile = timestamp + newFile;
  }

  return newFile;
}

// ---- Run ----
async function main() {
  try {
    const liveData = await fetchData();
    const updated = generateETFDataFile(liveData);

    fs.writeFileSync(OUTPUT_FILE, updated, 'utf8');
    console.log(`\n✅ ETF data written to ${OUTPUT_FILE}`);
    console.log('Done.');
  } catch (err) {
    console.error('Fatal error:', err);
    process.exit(1);
  }
}

main();
