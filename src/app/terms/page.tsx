import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — ETF Bridge',
  description: 'Terms of service for ETF Bridge. By using our ETF comparison tools and guides, you agree to these terms.',
}

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="content-container">
        <div className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
              Terms of Service
            </h1>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>Last updated: June 2025</p>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using ETF Bridge (the "Site"), you agree to be bound by these Terms of Service.
                  If you do not agree, please do not use the Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">2. Content Disclaimer</h2>
                <p>
                  All content on ETF Bridge is for informational and educational purposes only. We do not provide
                  investment, financial, legal, or tax advice. You should consult qualified professionals before
                  making any investment decisions. Please read our full{' '}
                  <a href="/disclaimer" className="text-primary-600 hover:underline">disclaimer</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">3. Intellectual Property</h2>
                <p>
                  All original content on ETF Bridge, including articles, comparisons, tools, and design,
                  is our intellectual property. You may share short excerpts with attribution and a link back
                  to the original content. Reproduction of full articles or tools without permission is prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">4. Limitation of Liability</h2>
                <p>
                  ETF Bridge shall not be liable for any damages arising from your use of, or reliance on,
                  any content on this Site. You use our ETF comparison tools and information at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">5. Changes to Terms</h2>
                <p>
                  We may update these Terms of Service from time to time. Continued use of the Site after
                  changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">6. Contact</h2>
                <p>
                  For questions about these terms, visit our{' '}
                  <a href="/contact" className="text-primary-600 hover:underline">contact page</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
