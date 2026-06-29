import type { Metadata } from 'next'
import { WebsiteStructuredData } from '@/components/seo/StructuredData'
import { BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About ETF Bridge — Our Mission & Approach',
  description: 'Learn about ETF Bridge — our mission to help global investors compare and understand ETFs across US and China markets with data-driven tools and analysis.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      <WebsiteStructuredData />
      <div className="content-container">
        <div className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <BarChart3 className="h-12 w-12 text-primary-600" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                About ETF Bridge
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Helping global investors navigate US and China ETFs with clarity and confidence.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-0">Our Mission</h2>
                <p>
                  ETF Bridge was built to fill a gap in the investing world: there is no single place where global investors
                  can easily compare index funds across US and China markets. Our mission is to provide clear, data-driven
                  ETF comparisons, expense ratio analysis, and educational content that helps investors make informed
                  cross-border investment decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">What We Cover</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>US ETFs</strong> — S&P 500 (VOO, IVV, SPY), Nasdaq-100 (QQQ, QQQM), sector ETFs, dividend ETFs, and more.</li>
                  <li><strong>China ETFs</strong> — CSI 300, SSE 50, ChiNext, STAR Market, and sector-specific A-share ETFs.</li>
                  <li><strong>Asia-Pacific ETFs</strong> — Hang Seng Index, Nikkei 225, KOSPI 200, and regional funds.</li>
                  <li><strong>Cross-Border Analysis</strong> — Fee comparisons, tax implications, currency risks, and brokerage guides.</li>
                  <li><strong>Investing Tools</strong> — Free calculators for expense ratios, DCA projections, and ETF comparisons.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">Our Approach</h2>
                <p>
                  We believe ETF investing should be transparent and accessible. Every comparison and guide on ETF Bridge is:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Data-driven</strong> — We source data from fund providers, SEC filings, CSRC filings, and public exchanges.</li>
                  <li><strong>Unbiased</strong> — We do not accept payment for ETF recommendations. Our analysis is independent.</li>
                  <li><strong>Educational</strong> — We explain the "why" behind the numbers, so you understand the full picture.</li>
                  <li><strong>Global</strong> — We cover both developed and emerging markets, with a focus on cross-border perspectives.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">Important Disclaimer</h2>
                <p>
                  ETF Bridge is an educational resource — <strong>we do not provide investment advice</strong>.
                  All content is for informational purposes only. Past performance does not guarantee future results.
                  Always do your own research and consult with a qualified financial advisor before making investment decisions.
                  Read our full <a href="/disclaimer" className="text-primary-600 hover:underline">disclaimer</a> for more details.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
