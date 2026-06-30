'use client'

import { useState, useMemo } from 'react'
import { TrendingUp, Calendar, DollarSign } from 'lucide-react'
import { InContentAdPlaceholder } from '@/components/ads/AdPlaceholder'

const ETF_HISTORICAL = [
  { ticker: 'VOO', name: 'S&P 500 (VOO)', annualReturn: 10.0, worstYear: -18.2, bestYear: 31.5 },
  { ticker: 'QQQ', name: 'Nasdaq-100 (QQQ)', annualReturn: 12.5, worstYear: -32.7, bestYear: 54.8 },
  { ticker: '510300', name: 'CSI 300 (510300)', annualReturn: 8.0, worstYear: -25.3, bestYear: 52.0 },
  { ticker: '2800.HK', name: 'Hang Seng (TraHK)', annualReturn: 6.0, worstYear: -15.5, bestYear: 36.0 },
]

export default function DCACalculatorPage() {
  const [monthlyAmount, setMonthlyAmount] = useState(1000)
  const [years, setYears] = useState(20)
  const [selectedETF, setSelectedETF] = useState(0)

  const etf = ETF_HISTORICAL[selectedETF]

  const projections = useMemo(() => {
    const totalMonths = years * 12
    const monthlyRate = etf.annualReturn / 100 / 12
    const optimisticRate = (etf.annualReturn + 2) / 100 / 12
    const pessimisticRate = (etf.annualReturn - 3) / 100 / 12

    let baseValue = 0
    let optValue = 0
    let pessValue = 0
    let totalInvested = 0
    const yearlyData: { year: number; invested: number; baseValue: number; optValue: number; pessValue: number }[] = []

    for (let m = 0; m < totalMonths; m++) {
      baseValue = baseValue * (1 + monthlyRate) + monthlyAmount
      optValue = optValue * (1 + optimisticRate) + monthlyAmount
      pessValue = pessValue * (1 + pessimisticRate) + monthlyAmount
      totalInvested += monthlyAmount

      if ((m + 1) % 12 === 0) {
        yearlyData.push({
          year: (m + 1) / 12,
          invested: totalInvested,
          baseValue: Math.round(baseValue),
          optValue: Math.round(optValue),
          pessValue: Math.round(pessValue),
        })
      }
    }

    return {
      finalBase: Math.round(baseValue),
      finalOpt: Math.round(optValue),
      finalPess: Math.round(pessValue),
      totalInvested,
      totalGainBase: Math.round(baseValue - totalInvested),
      yearlyData,
    }
  }, [monthlyAmount, years, etf])

  return (
    <div className="bg-white">
      <div className="content-container">
        <div className="py-12 sm:py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              DCA (Dollar-Cost Averaging) Calculator
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Simulate the long-term returns of regular ETF investing. See how consistent monthly contributions compound over decades.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Controls */}
            <div className="lg:col-span-1">
              <div className="card space-y-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary-600" />
                  Your DCA Plan
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Investment: <span className="text-primary-600 font-bold">${monthlyAmount.toLocaleString()}</span>
                  </label>
                  <input
                    type="range" min="100" max="20000" step="100" value={monthlyAmount}
                    onChange={e => setMonthlyAmount(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400"><span>$100</span><span>$20,000</span></div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Years: <span className="text-primary-600 font-bold">{years}</span>
                  </label>
                  <input
                    type="range" min="5" max="40" step="1" value={years}
                    onChange={e => setYears(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400"><span>5</span><span>40</span></div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ETF Reference</label>
                  <div className="space-y-2">
                    {ETF_HISTORICAL.map((e, i) => (
                      <button
                        key={e.ticker}
                        onClick={() => setSelectedETF(i)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm border transition-colors ${
                          i === selectedETF
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold">{e.ticker}</div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          Hist. Return ~{e.annualReturn}% · Range {e.worstYear}% to {e.bestYear}%
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-2 space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="card bg-primary-50 border border-primary-200">
                  <div className="text-sm text-primary-600 font-medium">Total Invested</div>
                  <div className="text-2xl font-bold text-primary-700">${projections.totalInvested.toLocaleString()}</div>
                  <div className="text-xs text-primary-500">Over {years} years</div>
                </div>
                <div className="card bg-green-50 border border-green-200">
                  <div className="text-sm text-green-600 font-medium">Final Value (Base)</div>
                  <div className="text-2xl font-bold text-green-700">${projections.finalBase.toLocaleString()}</div>
                  <div className="text-xs text-green-500">{etf.annualReturn}% annual return</div>
                </div>
                <div className="card bg-amber-50 border border-amber-200">
                  <div className="text-sm text-amber-600 font-medium">Total Gain</div>
                  <div className="text-2xl font-bold text-amber-700">${projections.totalGainBase.toLocaleString()}</div>
                  <div className="text-xs text-amber-500">
                    {((projections.totalGainBase / projections.totalInvested) * 100).toFixed(0)}% return on capital
                  </div>
                </div>
              </div>

              {/* Year-by-year table */}
              <div className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary-600" />
                  Year-by-Year Projection
                </h3>
                <div className="overflow-x-auto max-h-80 overflow-y-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 text-left sticky top-0 bg-white">
                        <th className="py-2 pr-4 font-semibold text-gray-700">Year</th>
                        <th className="py-2 px-4 font-semibold text-gray-700 text-right">Invested</th>
                        <th className="py-2 px-4 font-semibold text-gray-700 text-right">Pessimistic</th>
                        <th className="py-2 px-4 font-semibold text-gray-700 text-right">Base Case</th>
                        <th className="py-2 pl-4 font-semibold text-gray-700 text-right">Optimistic</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {projections.yearlyData.map(y => (
                        <tr key={y.year}>
                          <td className="py-2 pr-4 font-medium text-gray-900">{y.year}</td>
                          <td className="py-2 px-4 text-right font-mono text-gray-500">${y.invested.toLocaleString()}</td>
                          <td className="py-2 px-4 text-right font-mono text-red-500">${y.pessValue.toLocaleString()}</td>
                          <td className="py-2 px-4 text-right font-mono font-semibold text-gray-900">${y.baseValue.toLocaleString()}</td>
                          <td className="py-2 pl-4 text-right font-mono text-green-600">${y.optValue.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <InContentAdPlaceholder />

              {/* Insight */}
              <div className="card bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Key Insight</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Investing <strong>${monthlyAmount.toLocaleString()}/month</strong> in <strong>{etf.ticker}</strong> for {years} years
                  would grow to an estimated <strong className="text-green-600">${projections.finalBase.toLocaleString()}</strong>,
                  with total contributions of ${projections.totalInvested.toLocaleString()} generating
                  ~${projections.totalGainBase.toLocaleString()} in compound gains.
                  The range — from ${projections.yearlyData[projections.yearlyData.length - 1]?.pessValue?.toLocaleString()} (pessimistic)
                  to ${projections.yearlyData[projections.yearlyData.length - 1]?.optValue?.toLocaleString()} (optimistic) —
                  reflects historical volatility. Actual returns can and will differ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
