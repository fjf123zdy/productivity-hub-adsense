import type { Metadata } from 'next'
import { WebsiteStructuredData } from '@/components/seo/StructuredData'
import { BarChart3, GraduationCap, Globe, LineChart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About ETF Bridge — Our Story & Author',
  description: 'ETF Bridge was built by Gerberal, an economics PhD and investor with 20+ years of experience. Based in Beijing, we help global investors compare and understand ETFs across US and China markets.',
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
                Cross-border ETF research for global investors — built by an investor who lives the problem.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-12">
              {/* Author Section — E-E-A-T anchor */}
              <section>
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  {/* Author avatar placeholder */}
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-primary-100 border-2 border-primary-200 flex items-center justify-center">
                    <GraduationCap className="h-10 w-10 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mt-0">About the Author</h2>
                    <p className="text-lg font-semibold text-gray-800">Gerberal — Founder & Research Lead</p>
                    <ul className="list-none pl-0 space-y-2 mt-3 text-base">
                      <li className="flex items-start gap-2">
                        <GraduationCap className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span><strong>PhD in Economics</strong> — academic training in macroeconomics, international finance, and quantitative analysis.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <LineChart className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span><strong>20+ years of financial investment experience</strong> — across equities, ETFs, fixed income, and derivatives in both US and China markets. Combines long-term asset allocation with tactical short-to-medium-term positioning.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Based in Beijing, China</strong> — investing across US, China, and Hong Kong markets with firsthand experience navigating cross-border tax, currency, and regulatory complexities.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Story Section */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900">Why I Built ETF Bridge</h2>
                <p>
                  I started investing in US ETFs in the early 2000s, when SPY was still the only game in town.
                  Over the years, as China's ETF market grew from nothing to one of the world's largest, I found
                  myself constantly switching between Chinese-language resources for onshore ETFs and English-language
                  resources for US-listed funds. There was no single place where a global investor — whether based in
                  Beijing, Singapore, or San Francisco — could compare ETFs across both markets on a level playing field.
                </p>
                <p>
                  ETF Bridge is my attempt to fill that gap. Every article on this site draws on two decades of
                  firsthand investing experience: the fees I've paid, the tax traps I've fallen into, and the
                  structural differences between markets that only become visible when you're invested in both.
                </p>
              </section>

              {/* Approach Section */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900">Our Research Approach</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Primary source data</strong> — We pull expense ratios, holdings, and performance from
                    fund provider filings (SEC, CSRC, SFC), not third-party aggregators. Numbers are verified against
                    the latest fact sheets available at time of publication.
                  </li>
                  <li>
                    <strong>Cross-border lens</strong> — Every comparison is evaluated from multiple investor
                    perspectives: US taxpayer, China mainland investor, Hong Kong resident, Singapore non-treaty
                    investor. The "right" ETF depends on where you pay taxes.
                  </li>
                  <li>
                    <strong>No investment advice</strong> — ETF Bridge is an educational resource. We explain
                    what ETFs hold, what they cost, and how they compare — but we do not tell you what to buy,
                    sell, or hold. All investment decisions involve risk, and you should consult a qualified
                    financial advisor for your specific situation.
                  </li>
                  <li>
                    <strong>Transparent methodology</strong> — Where data is approximate (market returns, PE ratios),
                    we use "~" and cite the source. Where data is definitive (expense ratios, fund structure), we
                    cite the exact filing. You can always trace our numbers back to the original source.
                  </li>
                </ul>
              </section>

              {/* What We Cover */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900">What We Cover</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                  {[
                    { title: 'US ETFs', desc: 'VOO, QQQ, SCHD, sector ETFs, bond ETFs — fees, holdings, fund structure.' },
                    { title: 'China ETFs', desc: 'CSI 300, CSI 500, ChiNext, STAR Market — onshore and US-listed access.' },
                    { title: 'HK & Asia ETFs', desc: 'Hang Seng Index, TraHK, Nikkei 225, India Nifty 50 ETFs.' },
                    { title: 'Cross-Border Analysis', desc: 'Withholding taxes, currency hedging, ADR vs local vs ETF trade-offs.' },
                    { title: 'Investing Frameworks', desc: 'Portfolio construction, factor investing, rebalancing, DCA vs lump sum.' },
                    { title: 'Free Tools', desc: 'ETF comparison, expense ratio calculator, DCA projector, cross-border fee analyzer.' },
                  ].map((item) => (
                    <div key={item.title} className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 text-base">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact / Corrections */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900">Corrections & Contact</h2>
                <p>
                  ETF data changes constantly — expense ratios get updated, AUM grows, new ETFs launch.
                  If you find an error, an outdated number, or a missing ETF in any of our comparisons,
                  please reach out via our <a href="/contact" className="text-primary-600 hover:underline">contact page</a>.
                  We commit to reviewing and correcting factual errors within 48 hours.
                </p>
              </section>

              {/* Disclaimer — Required for AdSense */}
              <section className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-amber-900 mt-0">Important Disclaimer</h2>
                <p className="text-amber-800 text-sm leading-relaxed">
                  ETF Bridge is an educational resource. <strong>We do not provide investment advice.</strong>
                  All content is for informational purposes only. Past performance does not guarantee future results.
                  ETF holdings, expense ratios, and tax treatments are subject to change. Investing involves risk,
                  including the potential loss of principal. Currency fluctuations can amplify gains and losses for
                  cross-border investments. Always do your own research and consult with a qualified financial advisor
                  before making investment decisions. Read our full{' '}
                  <a href="/disclaimer" className="text-primary-600 hover:underline font-semibold">disclaimer</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
