import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — ETF Bridge',
  description: 'Get in touch with ETF Bridge. Have a question, suggestion, or ETF tool idea? We would love to hear from you.',
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="content-container">
        <div className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
              Contact Us
            </h1>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <p>
                Have a question about ETFs? Want to suggest a tool or topic we should cover?
                Found an error in our data? We would love to hear from you.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
                <ul className="list-none pl-0 space-y-3">
                  <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:hello@etfbridge.com" className="text-primary-600 hover:underline">
                      hello@etfbridge.com
                    </a>
                  </li>
                  <li>
                    <strong>Response Time:</strong> We typically respond within 24–48 hours on business days.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">What We Can Help With</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>ETF data corrections or updates</li>
                  <li>Suggestions for new ETF comparison tools</li>
                  <li>Topic requests for our ETF guides and analysis</li>
                  <li>Partnership and collaboration inquiries</li>
                  <li>Technical issues with the website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900">Before You Email</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    For investment advice, please consult a{' '}
                    <strong>qualified financial advisor</strong>. ETF Bridge does not provide personal investment recommendations.
                  </li>
                  <li>
                    Review our <a href="/disclaimer" className="text-primary-600 hover:underline">disclaimer</a>{' '}
                    and <a href="/privacy" className="text-primary-600 hover:underline">privacy policy</a>
                    — many common questions are answered there.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
