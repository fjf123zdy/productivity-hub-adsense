'use client'

import { useState } from 'react'
import { BarChart3, TrendingUp, Building2, Globe } from 'lucide-react'
import { majorIndices } from '@/lib/etf-data'
import { InContentAdPlaceholder } from '@/components/ads/AdPlaceholder'

export default function IndexExplorerPage() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const idx = majorIndices[selectedIdx]

  return (
    <div className="bg-white">
      <div className="content-container">
        <div className="py-12 sm:py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Market Index Explorer
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Deep dive into the S&P 500, Nasdaq-100, CSI 300, and Hang Seng Index — sector weights, top companies, valuation, and historical returns.
            </p>
          </div>

          {/* Index Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {majorIndices.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setSelectedIdx(i)}
                className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  i === selectedIdx
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div>{m.name}</div>
                <div className={`text-xs mt-0.5 ${i === selectedIdx ? 'text-primary-100' : 'text-gray-400'}`}>{m.country}</div>
              </button>
            ))}
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'P/E Ratio', value: idx.pe.toFixed(1) + 'x', icon: BarChart3, color: 'text-blue-600' },
              { label: 'Div Yield', value: (idx.dividendYield * 100).toFixed(2) + '%', icon: TrendingUp, color: 'text-green-600' },
              { label: 'YTD Return', value: (idx.ytdReturn >= 0 ? '+' : '') + (idx.ytdReturn * 100).toFixed(1) + '%', icon: TrendingUp, color: idx.ytdReturn >= 0 ? 'text-green-600' : 'text-red-600' },
              { label: '5-Year Ann.', value: (idx.fiveYearAnnualized >= 0 ? '+' : '') + (idx.fiveYearAnnualized * 100).toFixed(1) + '%', icon: TrendingUp, color: idx.fiveYearAnnualized >= 0 ? 'text-green-600' : 'text-red-600' },
            ].map((card, i) => (
              <div key={i} className="card text-center">
                <card.icon className={`h-5 w-5 mx-auto mb-2 ${card.color}`} />
                <div className="text-xs text-gray-500">{card.label}</div>
                <div className={`text-2xl font-bold mt-1 ${card.color}`}>{card.value}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="card mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-primary-600" />
              <h2 className="text-xl font-bold text-gray-900">{idx.name}</h2>
              <span className="text-sm text-gray-400">— {idx.country}</span>
            </div>
            <p className="text-gray-600 leading-relaxed">{idx.description}</p>
          </div>

          {/* Ad */}
          <InContentAdPlaceholder className="mb-8" />

          {/* Sector Weights + Top Companies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Sector Weights */}
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary-600" />
                Sector Allocation
              </h3>
              <div className="space-y-3">
                {idx.topSectors.map(s => {
                  const pct = (s.weight * 100).toFixed(1)
                  return (
                    <div key={s.sector}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 font-medium">{s.sector}</span>
                        <span className="font-mono font-semibold text-gray-900">{pct}%</span>
                      </div>
                      <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary-500 rounded-full"
                          style={{ width: `${s.weight * 100}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Top Companies */}
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary-600" />
                Top Companies
              </h3>
              <div className="space-y-3">
                {idx.topCompanies.map((c, i) => (
                  <div key={c} className="flex items-center gap-4 py-2 border-b border-gray-100 last:border-0">
                    <span className="text-2xl font-bold text-gray-200 w-8 text-center">{i + 1}</span>
                    <span className="font-medium text-gray-900">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cross-Index Comparison */}
          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Cross-Index Snapshot</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200 text-left">
                    <th className="py-3 pr-4 font-semibold text-gray-700">Index</th>
                    <th className="py-3 px-4 font-semibold text-gray-700 text-right">Country</th>
                    <th className="py-3 px-4 font-semibold text-gray-700 text-right">P/E</th>
                    <th className="py-3 px-4 font-semibold text-gray-700 text-right">Div Yield</th>
                    <th className="py-3 px-4 font-semibold text-gray-700 text-right">YTD</th>
                    <th className="py-3 px-4 font-semibold text-gray-700 text-right">1-Year</th>
                    <th className="py-3 pl-4 font-semibold text-gray-700 text-right">5-Year Ann.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {majorIndices.map(m => (
                    <tr key={m.id} className={m.id === idx.id ? 'bg-primary-50' : ''}>
                      <td className="py-3 pr-4 font-semibold text-gray-900">{m.name}</td>
                      <td className="py-3 px-4 text-right text-gray-600">{m.country}</td>
                      <td className="py-3 px-4 text-right font-mono text-gray-900">{m.pe.toFixed(1)}x</td>
                      <td className="py-3 px-4 text-right font-mono text-gray-900">{(m.dividendYield * 100).toFixed(2)}%</td>
                      <td className="py-3 px-4 text-right font-mono text-gray-900">{(m.ytdReturn >= 0 ? '+' : '') + (m.ytdReturn * 100).toFixed(1)}%</td>
                      <td className="py-3 px-4 text-right font-mono text-gray-900">{(m.oneYearReturn >= 0 ? '+' : '') + (m.oneYearReturn * 100).toFixed(1)}%</td>
                      <td className="py-3 pl-4 text-right font-mono text-gray-900">{(m.fiveYearAnnualized >= 0 ? '+' : '') + (m.fiveYearAnnualized * 100).toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
