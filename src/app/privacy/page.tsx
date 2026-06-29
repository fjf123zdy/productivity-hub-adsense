import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — ETF Bridge',
  description: 'Privacy policy for ETF Bridge. Learn how we collect, use, and protect your data when you visit our ETF comparison and investing guides website.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="content-container">
        <div className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>Last updated: June 2025</p>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
                <p>
                  ETF Bridge collects minimal information. When you visit our site, we may automatically
                  collect standard log information through Google Analytics, including your IP address,
                  browser type, pages visited, and time spent on pages. Our advertising partners (including
                  Google AdSense) may use cookies to serve relevant ads.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">2. Cookies & Advertising</h2>
                <p>
                  We use Google AdSense to display advertisements. Google uses cookies to serve ads based
                  on your prior visits to our site and other sites. You may opt out of personalized advertising
                  by visiting{' '}
                  <a href="https://www.google.com/settings/ads" className="text-primary-600 hover:underline">
                    Google Ads Settings
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">3. Third-Party Services</h2>
                <p>
                  We use Google Analytics to understand site traffic patterns. Google Analytics may collect
                  information about your browsing behavior. You can learn more about Google privacy practices
                  at{' '}
                  <a href="https://policies.google.com/privacy" className="text-primary-600 hover:underline">
                    policies.google.com/privacy
                  </a>.
                </p>
                <p>
                  Our site may include links to external websites (fund providers, exchanges, financial platforms).
                  We are not responsible for the privacy practices of these third-party sites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">4. Contact</h2>
                <p>
                  For privacy-related inquiries, please visit our{' '}
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
