import Link from 'next/link'
import { TrendingUp, BarChart3, Calculator, Globe, ArrowLeftRight } from 'lucide-react'
import { HeaderAdPlaceholder, InContentAdPlaceholder } from '@/components/ads/AdPlaceholder'

const features = [
  {
    name: 'ETF Comparison Tool',
    description: 'Compare US and China ETFs side by side — expense ratios, holdings, performance, and dividend yields in one view.',
    icon: ArrowLeftRight,
    href: '/tools/etf-comparison',
  },
  {
    name: 'Expense Ratio Calculator',
    description: 'See how much ETF fees really cost you over time. Compare VOO, IVV, CSI 300 ETFs and optimize your portfolio costs.',
    icon: Calculator,
    href: '/tools/expense-ratio-calculator',
  },
  {
    name: 'Market Index Explorer',
    description: 'Deep dive into S&P 500, Nasdaq-100, CSI 300, and Hang Seng Index — sector weights, top holdings, and historical returns.',
    icon: BarChart3,
    href: '/tools/index-explorer',
  },
]

const recentPosts = [
  {
    title: 'S&P 500 ETF Showdown: VOO vs IVV vs SPY — Which One Wins in 2025?',
    excerpt: 'A data-driven comparison of the three largest S&P 500 ETFs by AUM, fees, tracking error, and tax efficiency.',
    href: '/blog/sp500-etf-voo-ivv-spy-comparison',
    category: 'US ETFs',
    readTime: '10 min read',
  },
  {
    title: 'CSI 300 ETF Guide: How to Invest in China\'s Blue-Chip Index',
    excerpt: 'Everything you need to know about tracking China\'s largest 300 A-share companies through ETFs — fees, options, and risks.',
    href: '/blog/csi-300-etf-guide',
    category: 'China ETFs',
    readTime: '12 min read',
  },
  {
    title: 'US vs China ETF Fees: Why Expense Ratios Differ So Much',
    excerpt: 'A deep dive into the structural reasons behind the fee gap between US and Chinese ETFs, and what it means for your returns.',
    href: '/blog/us-vs-china-etf-fees',
    category: 'Cross-Border',
    readTime: '8 min read',
  },
]

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="content-container">
          <div className="mx-auto max-w-3xl py-16 sm:py-24 lg:py-32">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                  <Globe className="mr-1.5 h-4 w-4" />
                  Bridging US &amp; China Markets
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Compare ETFs Across
                <span className="text-primary-600"> US &amp; China</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Side-by-side ETF comparisons, expense ratio calculators, and expert investing guides.
                Helping global investors navigate S&amp;P 500, Nasdaq, CSI 300, and Hang Seng Index funds — all in one place.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/tools"
                  className="btn-primary px-6 py-3 text-base"
                >
                  Explore ETF Tools
                </Link>
                <Link
                  href="/blog"
                  className="text-base font-semibold leading-7 text-gray-900 hover:text-primary-600"
                >
                  Read Guides <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Ad */}
      <div className="content-container">
        <HeaderAdPlaceholder className="mb-16" />
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-24">
        <div className="content-container">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Free ETF Tools &amp; Resources</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need to Compare and Choose ETFs
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From expense ratio calculators to in-depth market index profiles, we provide the data and analysis global investors need to make informed ETF decisions.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500"
                      >
                        Try it now <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* In-Content Ad */}
      <div className="content-container">
        <InContentAdPlaceholder className="my-16" />
      </div>

      {/* Recent Blog Posts */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="content-container">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest ETF Insights &amp; Comparisons
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Data-driven analyses, side-by-side comparisons, and actionable guides for cross-border ETF investors.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {recentPosts.map((post) => (
              <article key={post.title} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="text-gray-500">{post.readTime}</span>
                  <span className="relative z-10 rounded-full bg-primary-50 px-3 py-1.5 font-medium text-primary-600">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="btn-primary px-6 py-3"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="content-container">
          <div className="py-16 sm:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start comparing ETFs across markets today
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-200">
                Join global investors who use ETF Bridge to compare US and China index funds, calculate real costs, and make smarter cross-border investment decisions.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/tools"
                  className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Explore free tools
                </Link>
                <Link
                  href="/about"
                  className="text-base font-semibold leading-7 text-white hover:text-primary-200"
                >
                  About ETF Bridge <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
