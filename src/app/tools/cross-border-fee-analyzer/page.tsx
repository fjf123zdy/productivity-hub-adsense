'use client'

import { useState, useMemo } from 'react'
import { Globe, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react'
import { crossBorderConfig } from '@/lib/etf-data'
import { InContentAdPlaceholder } from '@/components/ads/AdPlaceholder'

const SCENARIOS = [
  { id: 'us-investor-china', label: 'US Investor → China A-Shares (ASHR)', investorCountry: 'US', etfCountry: 'China', ticker: 'ASHR', er: 0.65, divYield: 1.9, annualReturn: 8.0 },
  { id: 'us-investor-us', label: 'US Investor → US S&P 500 (VOO)', investorCountry: 'US', etfCountry: 'US', ticker: 'VOO', er: 0.03, divYield: 1.3, annualReturn: 10.0 },
  { id: 'china-investor-us', label: 'China Investor → US Nasdaq (QDII)', investorCountry: 'China', etfCountry: 'US', ticker: 'QDII-ETF', er: 0.80, divYield: 0.42, annualReturn: 12.5 },
  { id: 'hk-investor-china', label: 'HK Investor → China A-Shares (Stock Connect)', investorCountry: 'HK', etfCountry: 'China', ticker: '510300', er: 0.20, divYield: 2.7, annualReturn: 8.0 },
]

export default function CrossBorderFeeAnalyzerPage() {
  const [scenarioIdx, setScenarioIdx] = useState(0)
  const [investment, setInvestment] = useState(50000)
  const [years, setYears] = useState(20)

  const scenario = SCENARIOS[scenarioIdx]
  const investorConfig = crossBorderConfig[scenario.investorCountry as keyof typeof crossBorderConfig]

  const analysis = useMemo(() => {
    const grossReturn = scenario.annualReturn / 100
    const netReturn = grossReturn - scenario.er / 100
    const monthlyRate = netReturn / 12
    const totalMonths = years * 12
    let balance = investment
    for (let m = 0; m < totalMonths; m++) {
      balance = balance * (1 + monthlyRate)
    }
    const finalValue = Math.round(balance)

    // Fee breakdown
    const annualFee = investment * (scenario.er / 100)
    const totalFees = annualFee * years
    const annualDivGross = investment * (scenario.divYield / 100)
    const withholdingRate = investorConfig.withholdingTax
    const annualDivTax = annualDivGross * withholdingRate
    const totalDivTax = Math.round(annualDivTax * years)
    const totalFeesRounded = Math.round(totalFees + totalDivTax)

    // Final after all costs
    const netAfterTax = Math.round(finalValue - totalDivTax)

    return {
      finalValue,
      netAfterTax,
      totalManagementFees: Math.round(totalFees),
      totalDivTax,
      totalAllCosts: totalFeesRounded,
      annualizedCostPct: ((scenario.er + (scenario.divYield / 100) * withholdingRate * 100) / 100 * 100).toFixed(1),
      effectiveReturn: (scenario.annualReturn - scenario.er - (scenario.divYield * withholdingRate * 100) / 100).toFixed(1),
    }
  }, [scenario, investment, years, investorConfig])

  return (
    <div className="bg-white">
      <div className="content-container">
        <div className="py-12 sm:py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Cross-Border Fee Analyzer
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Understand the hidden costs of investing across borders: management fees, dividend withholding tax, FX conversion, and custody charges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Controls */}
            <div className="lg:col-span-1">
              <div className="card space-y-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary-600" />
                  Scenario
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Scenario</label>
                  <div className="space-y-2">
                    {SCENARIOS.map((s, i) => (
                      <button
                        key={s.id}
                        onClick={() => setScenarioIdx(i)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm border transition-colors ${
                          i === scenarioIdx
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold text-xs">{s.label}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{s.ticker} · ER {s.er.toFixed(2)}%</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Investment: <span className="text-primary-600 font-bold">${investment.toLocaleString()}</span>
                  </label>
                  <input
                    type="range" min="5000" max="500000" step="5000" value={investment}
                    onChange={e => setInvestment(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Holding Period: <span className="text-primary-600 font-bold">{years} years</span>
                  </label>
                  <input
                    type="range" min="1" max="30" step="1" value={years}
                    onChange={e => setYears(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Config notes */}
              <div className="card mt-4 bg-amber-50 border border-amber-200">
                <h3 className="text-sm font-semibold text-amber-800 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  {scenario.investorCountry} Tax Regime
                </h3>
                <p className="text-xs text-amber-700 mt-2">{investorConfig.notes}</p>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-2 space-y-6">
              {/* Summary */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="card bg-green-50 border border-green-200">
                  <div className="text-xs text-green-600 font-medium">Est. Final Value</div>
                  <div className="text-xl font-bold text-green-700">${analysis.finalValue.toLocaleString()}</div>
                </div>
                <div className="card bg-red-50 border border-red-200">
                  <div className="text-xs text-red-600 font-medium">Total All Costs</div>
                  <div className="text-xl font-bold text-red-700">${analysis.totalAllCosts.toLocaleString()}</div>
                </div>
                <div className="card bg-amber-50 border border-amber-200">
                  <div className="text-xs text-amber-600 font-medium">Mgmt Fee Cost</div>
                  <div className="text-xl font-bold text-amber-700">${analysis.totalManagementFees.toLocaleString()}</div>
                </div>
                <div className="card bg-purple-50 border border-purple-200">
                  <div className="text-xs text-purple-600 font-medium">Div Tax Cost</div>
                  <div className="text-xl font-bold text-purple-700">${analysis.totalDivTax.toLocaleString()}</div>
                </div>
              </div>

              {/* Cost Breakdown Bar */}
              <div className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary-600" />
                  Cost Breakdown Visualization
                </h3>
                {analysis.totalAllCosts > 0 && (
                  <div className="h-12 w-full bg-gray-100 rounded-xl overflow-hidden flex">
                    <div
                      className="h-full bg-red-400 flex items-center justify-center text-xs text-white font-medium"
                      style={{ width: `${Math.max((analysis.totalManagementFees / analysis.totalAllCosts) * 100, 5)}%` }}
                    >
                      ER
                    </div>
                    <div
                      className="h-full bg-purple-400 flex items-center justify-center text-xs text-white font-medium"
                      style={{ width: `${Math.max((analysis.totalDivTax / analysis.totalAllCosts) * 100, 5)}%` }}
                    >
                      Div Tax
                    </div>
                    <div className="flex-1 h-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                      Gain
                    </div>
                  </div>
                )}
                <div className="flex gap-6 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-400 rounded" />
                    <span className="text-gray-600">Management Fee (ER): ${analysis.totalManagementFees.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-purple-400 rounded" />
                    <span className="text-gray-600">Dividend Withholding Tax: ${analysis.totalDivTax.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <InContentAdPlaceholder />

              {/* Effective Rate */}
              <div className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary-600" />
                  Effective Cost Analysis
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-gray-500">Stated Annual Return</div>
                    <div className="text-2xl font-bold text-gray-900">{scenario.annualReturn.toFixed(1)}%</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-gray-500">Gross Blended Cost</div>
                    <div className="text-2xl font-bold text-red-600">{analysis.annualizedCostPct}% /yr</div>
                    <div className="text-xs text-gray-400">ER + dividend tax drag</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-gray-500">Effective Net Return</div>
                    <div className="text-2xl font-bold text-green-600">{analysis.effectiveReturn}% /yr</div>
                    <div className="text-xs text-gray-400">After all costs</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-gray-500">Final After All Costs</div>
                    <div className="text-2xl font-bold text-gray-900">${analysis.netAfterTax.toLocaleString()}</div>
                  </div>
                </div>
              </div>

              {/* Key Insight */}
              <div className="card bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Key Takeaway</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Investing in <strong>{scenario.ticker}</strong> from <strong>{scenario.investorCountry}</strong> costs an estimated
                  <strong className="text-red-600"> ${analysis.totalAllCosts.toLocaleString()}</strong> over {years} years
                  (${investment.toLocaleString()} initial, {scenario.annualReturn}% gross return).
                  That's {analysis.annualizedCostPct}% per year in combined costs — management fees plus dividend tax drag.
                  Cross-border investing adds real friction. Use the lowest-cost access channel available in your jurisdiction.
                </p>
                <p className="text-xs text-gray-400 mt-4">
                  Simplified model. Does not include brokerage commissions, FX conversion spreads, custody fees, estate tax,
                  or capital gains tax. Dividend yield assumed constant. Actual costs may be higher. Consult a tax advisor
                  for your specific situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
