// Auto-updated: 2026-07-21T09:21:22.468Z
// Pre-loaded static ETF data for all tools
// Data current as of late June 2026

export interface ETFData {
  ticker: string
  name: string
  issuer: string
  market: 'US' | 'China' | 'HK'
  expenseRatio: number // as decimal, e.g. 0.0003 = 0.03%
  aum: number // in billions USD
  inception: string
  dividendYield: number // as decimal
  category: string
  trackingIndex: string
  ytdReturn: number
  oneYearReturn: number
  fiveYearAnnualized: number
  topHoldings: { name: string; ticker: string; weight: number }[]
  sectorWeights: { sector: string; weight: number }[]
  pe: number | null
  avgVolume: string
}

export const etfDatabase: ETFData[] = [
  // ---- US Broad Market ----
  {
    ticker: 'VOO', name: 'Vanguard S&P 500 ETF', issuer: 'Vanguard', market: 'US',
    expenseRatio: 0.0003, aum: 1000, inception: '2010-09-07',
    dividendYield: 0.013, category: 'Large Cap Blend', trackingIndex: 'S&P 500',
    ytdReturn: 0.112, oneYearReturn: 0.255, fiveYearAnnualized: 0.135,
    topHoldings: [
      { name: 'Nvidia', ticker: 'NVDA', weight: 0.079 },
      { name: 'Apple', ticker: 'AAPL', weight: 0.07 },
      { name: 'Microsoft', ticker: 'MSFT', weight: 0.064 },
      { name: 'Amazon', ticker: 'AMZN', weight: 0.042 },
      { name: 'Meta', ticker: 'META', weight: 0.028 },
    ],
    sectorWeights: [
      { sector: 'Technology', weight: 0.39 }, { sector: 'Financials', weight: 0.11 },
      { sector: 'Healthcare', weight: 0.11 }, { sector: 'Consumer Cyclical', weight: 0.10 },
      { sector: 'Communication', weight: 0.09 }, { sector: 'Industrials', weight: 0.08 },
      { sector: 'Other', weight: 0.12 },
    ],
    pe: 21.6, avgVolume: '$4B daily',
  },
  {
    ticker: 'IVV', name: 'iShares Core S&P 500 ETF', issuer: 'BlackRock', market: 'US',
    expenseRatio: 0.0003, aum: 850, inception: '2000-05-15',
    dividendYield: 0.0132, category: 'Large Cap Blend', trackingIndex: 'S&P 500',
    ytdReturn: 0.108, oneYearReturn: 0.253, fiveYearAnnualized: 0.133,
    topHoldings: [
      { name: 'Nvidia', ticker: 'NVDA', weight: 0.079 }, { name: 'Apple', ticker: 'AAPL', weight: 0.07 },
      { name: 'Microsoft', ticker: 'MSFT', weight: 0.064 }, { name: 'Amazon', ticker: 'AMZN', weight: 0.042 },
      { name: 'Meta', ticker: 'META', weight: 0.028 },
    ],
    sectorWeights: [
      { sector: 'Technology', weight: 0.39 }, { sector: 'Financials', weight: 0.11 },
      { sector: 'Healthcare', weight: 0.11 }, { sector: 'Consumer Cyclical', weight: 0.10 },
      { sector: 'Communication', weight: 0.09 }, { sector: 'Industrials', weight: 0.08 },
      { sector: 'Other', weight: 0.12 },
    ],
    pe: 21.6, avgVolume: '$6B daily',
  },
  {
    ticker: 'SPY', name: 'SPDR S&P 500 ETF Trust', issuer: 'State Street', market: 'US',
    expenseRatio: 0.000945, aum: 790, inception: '1993-01-22',
    dividendYield: 0.0127, category: 'Large Cap Blend', trackingIndex: 'S&P 500',
    ytdReturn: 0.11, oneYearReturn: 0.254, fiveYearAnnualized: 0.133,
    topHoldings: [
      { name: 'Nvidia', ticker: 'NVDA', weight: 0.079 }, { name: 'Apple', ticker: 'AAPL', weight: 0.07 },
      { name: 'Microsoft', ticker: 'MSFT', weight: 0.064 }, { name: 'Amazon', ticker: 'AMZN', weight: 0.042 },
      { name: 'Meta', ticker: 'META', weight: 0.028 },
    ],
    sectorWeights: [
      { sector: 'Technology', weight: 0.39 }, { sector: 'Financials', weight: 0.11 },
      { sector: 'Healthcare', weight: 0.11 }, { sector: 'Consumer Cyclical', weight: 0.10 },
      { sector: 'Communication', weight: 0.09 }, { sector: 'Industrials', weight: 0.08 },
      { sector: 'Other', weight: 0.12 },
    ],
    pe: 21.6, avgVolume: '$45B daily',
  },

  // ---- US Nasdaq / Tech ----
  {
    ticker: 'QQQ', name: 'Invesco QQQ Trust', issuer: 'Invesco', market: 'US',
    expenseRatio: 0.0018, aum: 480, inception: '1999-03-10',
    dividendYield: 0.0042, category: 'Large Cap Growth', trackingIndex: 'Nasdaq-100',
    ytdReturn: 0.165, oneYearReturn: 0.34, fiveYearAnnualized: 0.19,
    topHoldings: [
      { name: 'Nvidia', ticker: 'NVDA', weight: 0.085 }, { name: 'Apple', ticker: 'AAPL', weight: 0.078 },
      { name: 'Microsoft', ticker: 'MSFT', weight: 0.075 }, { name: 'Amazon', ticker: 'AMZN', weight: 0.055 },
      { name: 'Broadcom', ticker: 'AVGO', weight: 0.045 },
    ],
    sectorWeights: [
      { sector: 'Technology', weight: 0.58 }, { sector: 'Communication', weight: 0.16 },
      { sector: 'Consumer Cyclical', weight: 0.14 }, { sector: 'Healthcare', weight: 0.05 },
      { sector: 'Other', weight: 0.07 },
    ],
    pe: 28.0, avgVolume: '$41B daily',
  },
  {
    ticker: 'QQQM', name: 'Invesco NASDAQ 100 ETF', issuer: 'Invesco', market: 'US',
    expenseRatio: 0.0015, aum: 95, inception: '2020-10-13',
    dividendYield: 0.0045, category: 'Large Cap Growth', trackingIndex: 'Nasdaq-100',
    ytdReturn: 0.165, oneYearReturn: 0.34, fiveYearAnnualized: 0.19,
    topHoldings: [
      { name: 'Nvidia', ticker: 'NVDA', weight: 0.085 }, { name: 'Apple', ticker: 'AAPL', weight: 0.078 },
      { name: 'Microsoft', ticker: 'MSFT', weight: 0.075 }, { name: 'Amazon', ticker: 'AMZN', weight: 0.055 },
      { name: 'Broadcom', ticker: 'AVGO', weight: 0.045 },
    ],
    sectorWeights: [
      { sector: 'Technology', weight: 0.58 }, { sector: 'Communication', weight: 0.16 },
      { sector: 'Consumer Cyclical', weight: 0.14 }, { sector: 'Healthcare', weight: 0.05 },
      { sector: 'Other', weight: 0.07 },
    ],
    pe: 28.0, avgVolume: '$1.5B daily',
  },

  // ---- US Sector ----
  {
    ticker: 'SMH', name: 'VanEck Semiconductor ETF', issuer: 'VanEck', market: 'US',
    expenseRatio: 0.0035, aum: 25, inception: '2011-12-20',
    dividendYield: 0.004, category: 'Technology - Semiconductors', trackingIndex: 'MVIS US Listed Semiconductor 25',
    ytdReturn: 0.35, oneYearReturn: 0.52, fiveYearAnnualized: 0.28,
    topHoldings: [
      { name: 'Nvidia', ticker: 'NVDA', weight: 0.20 }, { name: 'TSMC', ticker: 'TSM', weight: 0.12 },
      { name: 'Broadcom', ticker: 'AVGO', weight: 0.09 }, { name: 'ASML', ticker: 'ASML', weight: 0.06 },
      { name: 'AMD', ticker: 'AMD', weight: 0.05 },
    ],
    sectorWeights: [{ sector: 'Technology - Semiconductors', weight: 1.0 }],
    pe: 32.0, avgVolume: '$2B daily',
  },

  // ---- China Onshore ----
  {
    ticker: '510300', name: '华泰柏瑞沪深300ETF', issuer: 'Huatai-PineBridge', market: 'China',
    expenseRatio: 0.002, aum: 19, inception: '2012-05-04',
    dividendYield: 0.027, category: 'Large Cap Blend', trackingIndex: 'CSI 300',
    ytdReturn: 0.08, oneYearReturn: 0.31, fiveYearAnnualized: 0.07,
    topHoldings: [
      { name: 'Zhongji Innolight', ticker: '300308', weight: 0.050 },
      { name: 'CATL', ticker: '300750', weight: 0.038 },
      { name: 'Kweichow Moutai', ticker: '600519', weight: 0.028 },
      { name: 'Eoptolink', ticker: '300502', weight: 0.028 },
      { name: 'Ping An Insurance', ticker: '601318', weight: 0.020 },
    ],
    sectorWeights: [
      { sector: 'Technology', weight: 0.325 }, { sector: 'Financials', weight: 0.19 },
      { sector: 'Industrials', weight: 0.163 }, { sector: 'Basic Materials', weight: 0.10 },
      { sector: 'Consumer', weight: 0.117 }, { sector: 'Other', weight: 0.105 },
    ],
    pe: 17.6, avgVolume: '¥6B daily',
  },
  {
    ticker: '159919', name: '嘉实沪深300ETF', issuer: 'Harvest', market: 'China',
    expenseRatio: 0.005, aum: 6.2, inception: '2012-05-07',
    dividendYield: 0.026, category: 'Large Cap Blend', trackingIndex: 'CSI 300',
    ytdReturn: 0.076, oneYearReturn: 0.308, fiveYearAnnualized: 0.068,
    topHoldings: [
      { name: 'Zhongji Innolight', ticker: '300308', weight: 0.050 },
      { name: 'CATL', ticker: '300750', weight: 0.038 },
      { name: 'Kweichow Moutai', ticker: '600519', weight: 0.028 },
      { name: 'Eoptolink', ticker: '300502', weight: 0.028 },
      { name: 'Ping An Insurance', ticker: '601318', weight: 0.020 },
    ],
    sectorWeights: [
      { sector: 'Technology', weight: 0.325 }, { sector: 'Financials', weight: 0.19 },
      { sector: 'Industrials', weight: 0.163 }, { sector: 'Basic Materials', weight: 0.10 },
      { sector: 'Consumer', weight: 0.117 }, { sector: 'Other', weight: 0.105 },
    ],
    pe: 17.6, avgVolume: '¥1.5B daily',
  },

  // ---- US-Listed China ETFs ----
  {
    ticker: 'ASHR', name: 'Xtrackers Harvest CSI 300 China A-Shares ETF', issuer: 'DWS/Harvest', market: 'US',
    expenseRatio: 0.0065, aum: 1.7, inception: '2013-11-06',
    dividendYield: 0.019, category: 'China A-Shares', trackingIndex: 'CSI 300',
    ytdReturn: 0.075, oneYearReturn: 0.30, fiveYearAnnualized: 0.06,
    topHoldings: [
      { name: 'Zhongji Innolight', ticker: '300308', weight: 0.050 },
      { name: 'CATL', ticker: '300750', weight: 0.038 },
      { name: 'Kweichow Moutai', ticker: '600519', weight: 0.028 },
      { name: 'Eoptolink', ticker: '300502', weight: 0.028 },
      { name: 'Ping An Insurance', ticker: '601318', weight: 0.020 },
    ],
    sectorWeights: [
      { sector: 'Technology', weight: 0.325 }, { sector: 'Financials', weight: 0.19 },
      { sector: 'Industrials', weight: 0.163 }, { sector: 'Basic Materials', weight: 0.10 },
      { sector: 'Consumer', weight: 0.117 }, { sector: 'Other', weight: 0.105 },
    ],
    pe: 17.6, avgVolume: '$20M daily',
  },
  {
    ticker: 'FXI', name: 'iShares China Large-Cap ETF', issuer: 'BlackRock', market: 'US',
    expenseRatio: 0.0074, aum: 5.5, inception: '2004-10-05',
    dividendYield: 0.022, category: 'China Large Cap', trackingIndex: 'FTSE China 50',
    ytdReturn: 0.12, oneYearReturn: 0.35, fiveYearAnnualized: 0.02,
    topHoldings: [
      { name: 'Tencent', ticker: '0700.HK', weight: 0.10 },
      { name: 'Alibaba', ticker: '9988.HK', weight: 0.09 },
      { name: 'Meituan', ticker: '3690.HK', weight: 0.07 },
      { name: 'Xiaomi', ticker: '1810.HK', weight: 0.05 },
      { name: 'JD.com', ticker: '9618.HK', weight: 0.04 },
    ],
    sectorWeights: [
      { sector: 'Technology', weight: 0.30 }, { sector: 'Financials', weight: 0.28 },
      { sector: 'Communication', weight: 0.15 }, { sector: 'Consumer Cyclical', weight: 0.12 },
      { sector: 'Energy', weight: 0.08 }, { sector: 'Other', weight: 0.07 },
    ],
    pe: 12.5, avgVolume: '$1.2B daily',
  },
  {
    ticker: 'MCHI', name: 'iShares MSCI China ETF', issuer: 'BlackRock', market: 'US',
    expenseRatio: 0.0059, aum: 6.5, inception: '2011-03-29',
    dividendYield: 0.018, category: 'China Broad Market', trackingIndex: 'MSCI China Index',
    ytdReturn: 0.14, oneYearReturn: 0.38, fiveYearAnnualized: 0.03,
    topHoldings: [
      { name: 'Tencent', ticker: '0700.HK', weight: 0.12 },
      { name: 'Alibaba', ticker: '9988.HK', weight: 0.08 },
      { name: 'Meituan', ticker: '3690.HK', weight: 0.06 },
      { name: 'Xiaomi', ticker: '1810.HK', weight: 0.04 },
      { name: 'Ping An Insurance', ticker: '601318', weight: 0.03 },
    ],
    sectorWeights: [
      { sector: 'Technology', weight: 0.28 }, { sector: 'Consumer Cyclical', weight: 0.22 },
      { sector: 'Financials', weight: 0.18 }, { sector: 'Communication', weight: 0.15 },
      { sector: 'Other', weight: 0.17 },
    ],
    pe: 14.2, avgVolume: '$300M daily',
  },

  // ---- Hang Seng / HK ----
  {
    ticker: '2800.HK', name: 'Tracker Fund of Hong Kong', issuer: 'State Street', market: 'HK',
    expenseRatio: 0.001, aum: 15, inception: '1999-11-12',
    dividendYield: 0.035, category: 'Large Cap Blend', trackingIndex: 'Hang Seng Index',
    ytdReturn: 0.09, oneYearReturn: 0.28, fiveYearAnnualized: 0.02,
    topHoldings: [
      { name: 'HSBC', ticker: '0005.HK', weight: 0.08 },
      { name: 'AIA', ticker: '1299.HK', weight: 0.07 },
      { name: 'Tencent', ticker: '0700.HK', weight: 0.07 },
      { name: 'Alibaba', ticker: '9988.HK', weight: 0.06 },
      { name: 'Meituan', ticker: '3690.HK', weight: 0.05 },
    ],
    sectorWeights: [
      { sector: 'Financials', weight: 0.32 }, { sector: 'Technology', weight: 0.25 },
      { sector: 'Real Estate', weight: 0.08 }, { sector: 'Consumer', weight: 0.15 },
      { sector: 'Utilities', weight: 0.08 }, { sector: 'Other', weight: 0.12 },
    ],
    pe: 10.8, avgVolume: 'HK$2B daily',
  },
]

export function getETFByTicker(ticker: string): ETFData | undefined {
  return etfDatabase.find(e => e.ticker === ticker)
}

export function getETFsByMarket(market: ETFData['market']): ETFData[] {
  return etfDatabase.filter(e => e.market === market)
}

export function getETFsByCategory(category: string): ETFData[] {
  return etfDatabase.filter(e => e.category === category)
}

export function getAllTickers(): string[] {
  return etfDatabase.map(e => e.ticker)
}

export function formatER(er: number): string {
  return (er * 100).toFixed(3) + '%'
}

export function formatPct(n: number): string {
  return (n >= 0 ? '+' : '') + (n * 100).toFixed(1) + '%'
}

export function formatB(n: number): string {
  return '$' + n.toFixed(1) + 'B'
}

export const majorIndices = [
  {
    id: 'sp500',
    name: 'S&P 500',
    country: 'USA',
    pe: 21.6,
    dividendYield: 0.013,
    ytdReturn: 0.11,
    oneYearReturn: 0.26,
    fiveYearAnnualized: 0.135,
    description: 'The benchmark for US large-cap equities. 503 constituents, float-adjusted market-cap weighted.',
    topSectors: [
      { sector: 'Information Technology', weight: 0.39 },
      { sector: 'Financials', weight: 0.11 },
      { sector: 'Health Care', weight: 0.11 },
      { sector: 'Consumer Discretionary', weight: 0.10 },
    ],
    topCompanies: ['Nvidia (NVDA)', 'Apple (AAPL)', 'Microsoft (MSFT)', 'Amazon (AMZN)', 'Meta (META)'],
  },
  {
    id: 'nasdaq100',
    name: 'Nasdaq-100',
    country: 'USA',
    pe: 28.0,
    dividendYield: 0.0042,
    ytdReturn: 0.165,
    oneYearReturn: 0.34,
    fiveYearAnnualized: 0.19,
    description: 'The 100 largest non-financial companies on Nasdaq. Heavily weighted toward technology and growth.',
    topSectors: [
      { sector: 'Technology', weight: 0.58 },
      { sector: 'Communication Services', weight: 0.16 },
      { sector: 'Consumer Discretionary', weight: 0.14 },
    ],
    topCompanies: ['Nvidia (NVDA)', 'Apple (AAPL)', 'Microsoft (MSFT)', 'Amazon (AMZN)', 'Broadcom (AVGO)'],
  },
  {
    id: 'csi300',
    name: 'CSI 300 (沪深300)',
    country: 'China',
    pe: 17.6,
    dividendYield: 0.027,
    ytdReturn: 0.08,
    oneYearReturn: 0.31,
    fiveYearAnnualized: 0.07,
    description: 'China\'s blue-chip benchmark. 300 largest A-shares by market cap and liquidity across Shanghai and Shenzhen.',
    topSectors: [
      { sector: 'Technology', weight: 0.325 },
      { sector: 'Financials', weight: 0.19 },
      { sector: 'Industrials', weight: 0.163 },
    ],
    topCompanies: ['Zhongji Innolight (300308)', 'CATL (300750)', 'Kweichow Moutai (600519)', 'Eoptolink (300502)', 'Ping An (601318)'],
  },
  {
    id: 'hsi',
    name: 'Hang Seng Index (恒生指數)',
    country: 'Hong Kong',
    pe: 10.8,
    dividendYield: 0.035,
    ytdReturn: 0.09,
    oneYearReturn: 0.28,
    fiveYearAnnualized: 0.02,
    description: 'The benchmark for Hong Kong equities. Heavy financials exposure (~32%). The cheapest by PE among the four majors.',
    topSectors: [
      { sector: 'Financials', weight: 0.32 },
      { sector: 'Technology', weight: 0.25 },
      { sector: 'Consumer', weight: 0.15 },
    ],
    topCompanies: ['HSBC (0005.HK)', 'AIA (1299.HK)', 'Tencent (0700.HK)', 'Alibaba (9988.HK)', 'Meituan (3690.HK)'],
  },
]

// Cross-border fee data
export const crossBorderConfig = {
  US: {
    withholdingTax: 0.30, // 30% for non-treaty; 15% for treaty (China)
    estateTax: true,
    brokerageFee: 0.00005, // ~0.005% typical ETF trade
    notes: 'US-domiciled ETFs; 30% dividend withholding for non-treaty, 15% for China treaty countries',
  },
  China: {
    withholdingTax: 0.10, // 10% on dividends for foreign investors via Stock Connect
    estateTax: false,
    brokerageFee: 0.0008, // higher on A-shares
    notes: 'China A-shares via Stock Connect; 10% dividend withholding; no estate tax',
  },
  HK: {
    withholdingTax: 0.00, // 0% on HK dividends
    estateTax: false,
    brokerageFee: 0.001,
    notes: 'Hong Kong-listed ETFs; no dividend withholding; no capital gains tax; low-cost',
  },
}
