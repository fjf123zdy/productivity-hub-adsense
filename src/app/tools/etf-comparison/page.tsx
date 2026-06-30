'use client'

import { useState, useMemo } from 'react'
import { ArrowLeftRight, TrendingUp, DollarSign, Building2, BarChart3 } from 'lucide-react'
import { etfDatabase, formatER, formatPct, formatB, ETFData } from '@/lib/etf-data'
import { InContentAdPlaceholder } from '@/components/ads/AdPlaceholder'

export default function ETFComparisonPage() {
  const [ticker1, setTicker1] = useState('VOO')
  const [ticker2, setTicker2] = useState('ASHR')

  const etf1 = useMemo(() => etfDatabase.find(e => e.ticker === ticker1)!, [ticker1])
  const etf2 = useMemo(() => etfDatabase.find(e => e.ticker === ticker2)!, [ticker2])

  const tickers = etfDatabase.map(e => e.ticker).sort()

  const compareMetric = (v1: number, v2: number, lowerIsBetter: boolean): string => {
    if (Math.abs(v1 - v2) < 0.0001) return 'text-gray-900'
    if (lowerIsBetter) return v1 < v2 ? 'text-green-600 font-semibold' : 'text-red-600'
    return v1 > v2 ? 'text-green-600 font-semibold' : 'text-red-600'
  }

  const diffBadge = (v1: number, v2: number, suffix: string) => {
    const diff = Math.abs(v1 - v2)
    if (diff < 0.0001) return <span className="text-gray-400 text-xs">equal</span>
    const sign = v1 > v2 ? '>' : '<'
    return <span className="text-xs text-gray-500">{sign} by {formatPct(diff).replace('+', '')} {suffix}</span>
  }

  return (
    <div className="bg-white">
      <div className="content-container">
        <div className="py-12 sm:py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              ETF Comparison Tool
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Compare US and China ETFs side by side. Expense ratios, performance, yield, top holdings, and sector weights — all in one view.
            </p>
          </div>

          {/* Selectors */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">ETF 1</label>
                <select
                  value={ticker1}
                  onChange={e => setTicker1(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {tickers.map(t => (
                    <option key={`e1-${t}`} value={t} disabled={t === ticker2}>{t} — {etfDatabase.find(e => e.ticker === t)?.name}</option>
                  ))}
                </select>
              </div>
              <ArrowLeftRight className="h-6 w-6 text-gray-400 mt-6 shrink-0" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">ETF 2</label>
                <select
                  value={ticker2}
                  onChange={e => setTicker2(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {tickers.map(t => (
                    <option key={`e2-${t}`} value={t} disabled={t === ticker1}>{t} — {etfDatabase.find(e => e.ticker === t)?.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Card 1 */}
            <div className="card border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary-100 rounded-lg font-bold text-primary-700">{etf1.ticker}</div>
                <div>
                  <div className="font-semibold text-gray-900">{etf1.name}</div>
                  <div className="text-xs text-gray-500">{etf1.issuer} · Since {etf1.inception.slice(0, 4)}</div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary-100 rounded-lg font-bold text-primary-700">{etf2.ticker}</div>
                <div>
                  <div className="font-semibold text-gray-900">{etf2.name}</div>
                  <div className="text-xs text-gray-500">{etf2.issuer} · Since {etf2.inception.slice(0, 4)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Table */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary-600" />
              Key Metrics Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200 text-left">
                    <th className="py-3 pr-4 font-semibold text-gray-700 w-1/3">Metric</th>
                    <th className="py-3 px-4 font-semibold text-gray-700 text-right w-1/3">{etf1.ticker}</th>
                    <th className="py-3 pl-4 font-semibold text-gray-700 text-right w-1/3">{etf2.ticker}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {([
                    { label: 'Expense Ratio', key: 'expenseRatio' as const, fmt: (v: number) => formatER(v), lowerBetter: true },
                    { label: 'AUM', key: 'aum' as const, fmt: (v: number) => formatB(v), lowerBetter: false },
                    { label: 'Dividend Yield', key: 'dividendYield' as const, fmt: (v: number) => formatPct(v), lowerBetter: false },
                    { label: 'YTD Return', key: 'ytdReturn' as const, fmt: (v: number) => formatPct(v), lowerBetter: false },
                    { label: '1-Year Return', key: 'oneYearReturn' as const, fmt: (v: number) => formatPct(v), lowerBetter: false },
                    { label: '5-Year Ann.', key: 'fiveYearAnnualized' as const, fmt: (v: number) => formatPct(v), lowerBetter: false },
                    { label: 'P/E Ratio', key: 'pe' as const, fmt: (v: number | null) => v ? v.toFixed(1) + 'x' : 'N/A', lowerBetter: true },
                    { label: 'Avg Volume', key: 'avgVolume' as const, fmt: (v: string) => v, lowerBetter: false },
                  ] as const).map(row => (
                    <tr key={row.label}>
                      <td className="py-3 pr-4 font-medium text-gray-700">{row.label}</td>
                      <td className={`py-3 px-4 text-right font-mono ${typeof etf1[row.key] === 'number' && typeof etf2[row.key] === 'number' ? compareMetric(etf1[row.key] as number, etf2[row.key] as number, row.lowerBetter) : 'text-gray-900'}`}>
                        {row.fmt(etf1[row.key] as never)}
                      </td>
                      <td className={`py-3 pl-4 text-right font-mono ${typeof etf1[row.key] === 'number' && typeof etf2[row.key] === 'number' ? compareMetric(etf2[row.key] as number, etf1[row.key] as number, row.lowerBetter) : 'text-gray-900'}`}>
                        {row.fmt(etf2[row.key] as never)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* In-content ad */}
          <InContentAdPlaceholder className="mb-8" />

          {/* Top Holdings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary-600" />
                {etf1.ticker} — Top 5 Holdings
              </h3>
              <div className="space-y-2">
                {etf1.topHoldings.map((h, i) => (
                  <div key={h.ticker} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-gray-300 w-5">{i + 1}</span>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{h.name}</div>
                        <div className="text-xs text-gray-400">{h.ticker}</div>
                      </div>
                    </div>
                    <span className="font-mono text-sm font-semibold text-gray-700">{(h.weight * 100).toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary-600" />
                {etf2.ticker} — Top 5 Holdings
              </h3>
              <div className="space-y-2">
                {etf2.topHoldings.map((h, i) => (
                  <div key={h.ticker} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-gray-300 w-5">{i + 1}</span>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{h.name}</div>
                        <div className="text-xs text-gray-400">{h.ticker}</div>
                      </div>
                    </div>
                    <span className="font-mono text-sm font-semibold text-gray-700">{(h.weight * 100).toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sector Weights */}
          <div className="card mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary-600" />
              Sector Weight Comparison
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[[etf1, ticker1], [etf2, ticker2]].map(([etf, tk]) => (
                <div key={tk as string}>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">{tk as string} Sectors</h4>
                  <div className="space-y-2">
                    {(etf as ETFData).sectorWeights.slice(0, 7).map(s => (
                      <div key={s.sector}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">{s.sector}</span>
                          <span className="font-mono font-medium text-gray-900">{(s.weight * 100).toFixed(1)}%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-primary-500 rounded-full" style={{ width: `${s.weight * 100}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Verdict */}
          <div className="card bg-gray-50">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Quick Verdict</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Lower Fee:</span>{' '}
                <span className="font-bold text-gray-900">
                  {etf1.expenseRatio < etf2.expenseRatio ? etf1.ticker : etf2.expenseRatio < etf1.expenseRatio ? etf2.ticker : 'Tie'}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Higher Dividend:</span>{' '}
                <span className="font-bold text-gray-900">
                  {etf1.dividendYield > etf2.dividendYield ? etf1.ticker : etf2.dividendYield > etf1.dividendYield ? etf2.ticker : 'Tie'}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Larger AUM:</span>{' '}
                <span className="font-bold text-gray-900">
                  {etf1.aum > etf2.aum ? etf1.ticker : etf2.ticker}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
