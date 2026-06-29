import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, BarChart3, TrendingUp, Globe, ArrowLeftRight } from 'lucide-react'
import { HeaderAdPlaceholder, InContentAdPlaceholder } from '@/components/ads/AdPlaceholder'

export const metadata: Metadata = {
  title: 'Free ETF Investing Tools — Comparison & Calculators',
  description: 'Free ETF comparison tools, expense ratio calculators, and index explorers. Compare US and China ETFs side by side with real data.',
  keywords: 'ETF tools, ETF comparison tool, expense ratio calculator, index fund calculator, US ETF vs China ETF, investing tools',
}

const tools = [
  {
    name: 'ETF Comparison Tool',
    description: 'Compare US and China ETFs side by side — expense ratios, performance, dividend yield, top holdings, and AUM in one view.',
    icon: ArrowLeftRight,
    href: '/tools/etf-comparison',
    category: 'Comparison',
    popular: true,
  },
  {
    name: 'Expense Ratio Calculator',
    description: 'Calculate the real impact of ETF fees on your returns. Compare VOO (0.03%) vs CSI 300 ETF (0.15%+) over 10, 20, 30 years.',
    icon: Calculator,
    href: '/tools/expense-ratio-calculator',
    category: 'Calculator',
    popular: true,
  },
  {
    name: 'Index Explorer',
    description: 'Deep dive into S&P 500, Nasdaq-100, CSI 300, and Hang Seng Index — sector weights, top 10 holdings, historical returns, and PE ratios.',
    icon: BarChart3,
    href: '/tools/index-explorer',
    category: 'Research',
    popular: true,
  },
  {
    name: 'DCA Calculator',
    description: 'Dollar-cost averaging simulator — project returns from regular ETF investments over time with real historical data.',
    icon: TrendingUp,
    href: '/tools/dca-calculator',
    category: 'Calculator',
    popular: false,
  },
  {
    name: 'Cross-Border Fee Analyzer',
    description: 'Compare total costs of investing in US ETFs from overseas — expense ratios + withholding tax + brokerage fees + currency conversion.',
    icon: Globe,
    href: '/tools/cross-border-fee-analyzer',
    category: 'Analysis',
    popular: false,
  },
]

const categories = [
  { name: 'All Tools', count: tools.length },
  { name: 'Comparison', count: tools.filter(t => t.category === 'Comparison').length },
  { name: 'Calculator', count: tools.filter(t => t.category === 'Calculator').length },
  { name: 'Research', count: tools.filter(t => t.category === 'Research').length },
  { name: 'Analysis', count: tools.filter(t => t.category === 'Analysis').length },
]

export default function ToolsPage() {
  const popularTools = tools.filter(tool => tool.popular)
  const allTools = tools

  return (
    <div className="bg-white">
      <div className="content-container">
        {/* Header */}
        <div className="py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Free ETF Investing Tools
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Compare ETFs across US and China markets, calculate real expense costs,
              and explore major indices — all with free, data-driven tools.
            </p>
          </div>
        </div>

        {/* Header Ad */}
        <HeaderAdPlaceholder className="mb-16" />

        {/* Popular Tools */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Tools</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularTools.map((tool) => (
              <div key={tool.name} className="card group hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <tool.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                      {tool.name}
                    </h3>
                    <span className="text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tool.description}
                </p>
                <Link
                  href={tool.href}
                  className="btn-primary w-full text-center block"
                >
                  Use Tool
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* In-Content Ad */}
        <InContentAdPlaceholder className="my-16" />

        {/* All Tools */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">All Tools</h2>
            <div className="text-sm text-gray-500">
              {tools.length} tools available — more coming soon
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors duration-200"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allTools.map((tool) => (
              <div key={tool.name} className="card group hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <tool.icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                        {tool.name}
                      </h3>
                      {tool.popular && (
                        <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">
                      {tool.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {tool.description}
                </p>
                <Link
                  href={tool.href}
                  className="text-sm font-semibold text-primary-600 hover:text-primary-500 transition-colors duration-200"
                >
                  Try it now →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 mb-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want a specific ETF tool?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Have an idea for an ETF calculator or comparison tool we should build?
            Let us know — we are constantly expanding our toolkit for global investors.
          </p>
          <Link
            href="/contact"
            className="btn-primary px-6 py-3"
          >
            Suggest a Tool
          </Link>
        </div>
      </div>
    </div>
  )
}
