import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer — ETF Bridge',
  description: 'Investment disclaimer for ETF Bridge. We are an educational resource, not a financial advisor. Read our full disclaimer before using our ETF comparisons and tools.',
}

export default function DisclaimerPage() {
  return (
    <div className="bg-white">
      <div className="content-container">
        <div className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
              Disclaimer
            </h1>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-yellow-800 font-semibold">
                  ETF Bridge is an educational resource. We do not provide investment advice, financial advice,
                  or recommendations to buy or sell any securities. All content is for informational and
                  educational purposes only.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">1. No Investment Advice</h2>
                <p>
                  The information provided on ETF Bridge (the "Site") is for general informational and educational
                  purposes only. Nothing on this Site constitutes investment advice, financial advice, trading advice,
                  or any other type of advice. You should not treat any information on this Site as a recommendation
                  to make any particular investment decision.
                </p>
                <p>
                  ETF Bridge is not a registered investment adviser, broker-dealer, or financial planner. We do not
                  know your personal financial circumstances, objectives, or risk tolerance. Any investment decisions
                  you make are solely your responsibility.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">2. Accuracy of Information</h2>
                <p>
                  While we strive to provide accurate and up-to-date information, we make no warranties or
                  representations as to the accuracy, completeness, or timeliness of any content on this Site.
                  ETF data (expense ratios, AUM, performance, holdings) may change. Always verify information
                  with the official fund provider before making investment decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">3. No Guarantee of Results</h2>
                <p>
                  Past performance is not indicative of future results. ETF Bridge does not guarantee any
                  specific investment outcomes. Investing involves risk, including the potential loss of principal.
                  International investing carries additional risks, including currency fluctuations, political
                  instability, and differing regulatory environments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">4. Affiliate Disclosure</h2>
                <p>
                  ETF Bridge may receive compensation through affiliate links or advertising. However, our
                  content is editorially independent, and we do not accept payment in exchange for favorable
                  ETF rankings, reviews, or recommendations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">5. Third-Party Content</h2>
                <p>
                  Our Site may link to third-party websites or display advertisements served by Google AdSense
                  and other ad networks. We do not endorse, control, or assume responsibility for any third-party
                  content, products, or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">6. Contact</h2>
                <p>
                  If you have questions about this disclaimer, please contact us at{' '}
                  <a href="/contact" className="text-primary-600 hover:underline">our contact page</a>.
                </p>
              </section>

              <p className="text-sm text-gray-400 pt-8">
                Last updated: June 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
