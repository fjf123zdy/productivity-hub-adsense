import Link from 'next/link'
import { BarChart3 } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'ETF Guides', href: '/blog' },
    { name: 'Tools', href: '/tools' },
    { name: 'About', href: '/about' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Contact', href: '/contact' },
  ],
  tools: [
    { name: 'ETF Comparison', href: '/tools/etf-comparison' },
    { name: 'Expense Ratio Calculator', href: '/tools/expense-ratio-calculator' },
    { name: 'Index Explorer', href: '/tools/index-explorer' },
    { name: 'DCA Calculator', href: '/tools/dca-calculator' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="content-container">
        <div className="py-12 lg:py-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* Brand section */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <BarChart3 className="h-8 w-8 text-primary-600" />
                <span className="text-xl font-bold text-gray-900">ETF Bridge</span>
              </Link>
              <p className="text-sm text-gray-600 max-w-md">
                Helping global investors compare ETFs across US and China markets.
                Side-by-side analysis, fee calculators, and expert guides for smarter cross-border index investing.
              </p>
              <div className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} ETF Bridge. All rights reserved.
              </div>
            </div>

            {/* Links sections */}
            <div className="mt-12 xl:mt-0 xl:col-span-2">
              <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
                {/* Main navigation */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                    Navigation
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {navigation.main.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                    ETF Tools
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {navigation.tools.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                    Legal
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500">
              ETF Bridge does not provide investment advice. All content is for informational and educational purposes only.
            </p>
            <p className="text-xs text-gray-500 mt-2 sm:mt-0">
              Data sourced from fund providers, SEC filings, and public exchanges.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
