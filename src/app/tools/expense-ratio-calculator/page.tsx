'use client'

import { useState, useMemo } from 'react'
import { Calculator, TrendingDown } from 'lucide-react'
import { InContentAdPlaceholder } from '@/components/ads/AdPlaceholder'

const PRESET_ETFS = [
  { ticker: 'VOO', name: 'VOO (S&P 500)', er: 0.03 },
  { ticker: 'QQQ', name: 'QQQ (Nasdaq-100)', er: 0.18 },
  { ticker: 'SPY', name: 'SPY (S&P 500)', er: 0.0945 },
  { ticker: 'ASHR', name: 'ASHR (CSI 300)', er: 0.65 },
  { ticker: '510300', name: '510300 (CSI 300 onshore)', er: 0.20 },
  { ticker: 'FXI', name: 'FXI (FTSE China 50)', er: 0.74 },
  { ticker: 'SMH', name: 'SMH (Semiconductor)', er: 0.35 },
  { ticker: '2800.HK', name: 'TraHK (Hang Seng)', er: 0.10 },
]

export default function ExpenseRatioCalculatorPage() {
  const [initialInvestment, setInitialInvestment] = useState(50000)
  const [monthlyContribution, setMonthlyContribution] = useState(1000)
  const [years, setYears] = useState(30)
  const [annualReturn, setAnnualReturn] = useState(7)
  const [selectedETFs, setSelectedETFs] = useState<string[]>(['VOO', 'ASHR'])

  const toggleETF = (ticker: string) => {
    setSelectedETFs(prev =>
      prev.includes(ticker) ? prev.filter(t => t !== ticker) : [...prev, ticker]
    )
  }

  const projections = useMemo(() => {
    const monthlyRate = annualReturn / 100 / 12
    const totalMonths = years * 12

    return selectedETFs.map(ticker => {
      const etf = PRESET_ETFS.find(e => e.ticker === ticker)!
      const monthlyFeeRate = (annualReturn - etf.er) / 100 / 12
      const grossReturnRate = monthlyRate

      // Monthly compounding with contributions
      let grossBalance = initialInvestment
      let netBalance = initialInvestment
      let totalFeesPaid = 0

      for (let m = 0; m < totalMonths; m++) {
        grossBalance = grossBalance * (1 + grossReturnRate) + monthlyContribution
        netBalance = netBalance * (1 + monthlyFeeRate) + monthlyContribution
      }

      totalFeesPaid = grossBalance - netBalance

      return {
        ticker: etf.ticker,
        name: etf.name,
        expenseRatio: etf.er,
        finalGross: Math.round(grossBalance),
        finalNet: Math.round(netBalance),
        feesPaid: Math.round(totalFeesPaid),
        feePctOfReturns: grossBalance > initialInvestment
          ? ((totalFeesPaid / (grossBalance - initialInvestment - monthlyContribution * totalMonths)) * 100).toFixed(1)
          : '0',
      }
    }).sort((a, b) => b.finalNet - a.finalNet)
  }, [initialInvestment, monthlyContribution, years, annualReturn, selectedETFs])

  const best = projections[0]
  const worst = projections[projections.length - 1]
  const feeSpread = projections.length > 1 ? best.feesPaid - worst.feesPaid : 0

  return (
    <div className="bg-white">
      <div className="content-container">
        <div className="py-12 sm:py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              ETF Expense Ratio Calculator
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              See how much ETF fees really cost you over time. A tiny difference in expense ratios can compound into tens of thousands of dollars.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Panel */}
            <div className="lg:col-span-1">
              <div className="card space-y-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary-600" />
                  Your Parameters
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Initial Investment: <span className="text-primary-600 font-bold">${initialInvestment.toLocaleString()}</span>
                  </label>
                  <input
                    type="range" min="1000" max="1000000" step="1000" value={initialInvestment}
                    onChange={e => setInitialInvestment(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400"><span>$1,000</span><span>$1,000,000</span></div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Contribution: <span className="text-primary-600 font-bold">${monthlyContribution.toLocaleString()}</span>
                  </label>
                  <input
                    type="range" min="0" max="10000" step="100" value={monthlyContribution}
                    onChange={e => setMonthlyContribution(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400"><span>$0</span><span>$10,000</span></div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Investment Period: <span className="text-primary-600 font-bold">{years} years</span>
                  </label>
                  <input
                    type="range" min="1" max="50" step="1" value={years}
                    onChange={e => setYears(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400"><span>1</span><span>50</span></div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Annual Return: <span className="text-primary-600 font-bold">{annualReturn}%</span>
                  </label>
                  <input
                    type="range" min="1" max="15" step="0.5" value={annualReturn}
                    onChange={e => setAnnualReturn(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400"><span>1%</span><span>15%</span></div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select ETFs to Compare
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {PRESET_ETFS.map(etf => (
                      <button
                        key={etf.ticker}
                        onClick={() => toggleETF(etf.ticker)}
                        className={`text-left px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${
                          selectedETFs.includes(etf.ticker)
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold">{etf.ticker}</div>
                        <div className="text-gray-400">{etf.er.toFixed(3)}% ER</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Summary Cards */}
              {projections.length > 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="card bg-primary-50 border border-primary-200">
                    <div className="text-sm text-primary-600 font-medium">Best Outcome</div>
                    <div className="text-2xl font-bold text-primary-700">{best?.ticker}</div>
                    <div className="text-sm text-gray-600">${best?.finalNet?.toLocaleString()}</div>
                    <div className="text-xs text-primary-500 mt-1">${best?.feesPaid?.toLocaleString()} in fees</div>
                  </div>
                  {worst && best?.ticker !== worst?.ticker && (
                    <div className="card bg-red-50 border border-red-200">
                      <div className="text-sm text-red-600 font-medium">Worst Outcome</div>
                      <div className="text-2xl font-bold text-red-700">{worst?.ticker}</div>
                      <div className="text-sm text-gray-600">${worst?.finalNet?.toLocaleString()}</div>
                      <div className="text-xs text-red-500 mt-1">${worst?.feesPaid?.toLocaleString()} in fees</div>
                    </div>
                  )}
                  <div className="card bg-amber-50 border border-amber-200">
                    <div className="text-sm text-amber-600 font-medium">Fee Spread</div>
                    <div className="text-2xl font-bold text-amber-700">${feeSpread.toLocaleString()}</div>
                    <div className="text-xs text-amber-500 mt-1">
                      Extra cost of choosing the most expensive ETF
                    </div>
                  </div>
                </div>
              )}

              {/* Projection Table */}
              <div className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-primary-600" />
                  {years}-Year Projection Table
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 text-left">
                        <th className="py-3 pr-4 font-semibold text-gray-700">ETF</th>
                        <th className="py-3 px-4 font-semibold text-gray-700 text-right">Expense Ratio</th>
                        <th className="py-3 px-4 font-semibold text-gray-700 text-right">Final Balance</th>
                        <th className="py-3 px-4 font-semibold text-gray-700 text-right">Total Fees Paid</th>
                        <th className="py-3 pl-4 font-semibold text-gray-700 text-right">Fee % of Gains</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projections.map((p, i) => (
                        <tr key={p.ticker} className={`border-b border-gray-100 ${i === 0 ? 'bg-green-50' : ''}`}>
                          <td className="py-3 pr-4">
                            <span className="font-semibold text-gray-900">{p.ticker}</span>
                            <span className="text-gray-400 ml-2 text-xs">{p.name}</span>
                            {i === 0 && <span className="ml-2 text-xs text-green-600 font-medium">🥇 Best</span>}
                          </td>
                          <td className="py-3 px-4 text-right font-mono text-gray-900">{p.expenseRatio.toFixed(3)}%</td>
                          <td className="py-3 px-4 text-right font-mono font-semibold text-gray-900">${p.finalNet.toLocaleString()}</td>
                          <td className="py-3 px-4 text-right font-mono text-red-600">${p.feesPaid.toLocaleString()}</td>
                          <td className="py-3 pl-4 text-right font-mono text-gray-500">{p.feePctOfReturns}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Visual bar chart */}
              <div className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Fee Impact Visualization</h3>
                <div className="space-y-4">
                  {projections.map(p => {
                    const maxValue = Math.max(...projections.map(x => x.finalNet))
                    const widthPct = (p.finalNet / maxValue) * 100
                    const feeWidthPct = p.feesPaid > 0 ? (p.feesPaid / (p.finalNet + p.feesPaid)) * 100 : 0
                    return (
                      <div key={p.ticker}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-semibold text-gray-700">{p.ticker} ({p.expenseRatio.toFixed(3)}%)</span>
                          <span className="text-gray-500">${p.finalNet.toLocaleString()}</span>
                        </div>
                        <div className="h-8 w-full bg-gray-100 rounded-lg overflow-hidden flex">
                          <div
                            className="h-full bg-primary-500 rounded-l-lg flex items-center justify-end pr-2 text-xs text-white font-medium"
                            style={{ width: `${Math.max(widthPct, 2)}%`, minWidth: '40px' }}
                          >
                            {widthPct > 10 ? 'Net' : ''}
                          </div>
                          {feeWidthPct > 1 && (
                            <div
                              className="h-full bg-red-400 flex items-center justify-center text-xs text-white font-medium"
                              style={{ width: `${Math.max(feeWidthPct, 2)}%`, minWidth: '20px' }}
                            >
                              Fees
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Ad Slot */}
              <InContentAdPlaceholder />

              {/* Key Insight */}
              <div className="card bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Key Takeaway</h3>
                <p className="text-gray-600 leading-relaxed">
                  {projections.length > 1 ? (
                    <>
                      Over <strong>{years} years</strong>, choosing <strong>{best?.ticker}</strong> over{' '}
                      <strong>{worst?.ticker}</strong> would save you approximately{' '}
                      <strong className="text-primary-600">${Math.abs(feeSpread).toLocaleString()}</strong> in fees.
                      {feeSpread > 10000 && (
                        <> That's real money — a year of retirement spending, or a college tuition payment.</>
                      )}
                      {feeSpread < 5000 && (
                        <> The fee difference is modest in this comparison. When fees are close, pick the ETF with better liquidity and structural features.</>
                      )}
                    </>
                  ) : (
                    'Select at least two ETFs to see a comparison.'
                  )}
                </p>
                <p className="text-xs text-gray-400 mt-4">
                  Assumptions: {annualReturn}% annual gross return, monthly compounding, contributions at start of each month.
                  Does not account for taxes, tracking error, securities lending offsets, or bid-ask spreads. Actual results will differ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
