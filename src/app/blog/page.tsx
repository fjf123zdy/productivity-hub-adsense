import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, User } from 'lucide-react'
import { HeaderAdPlaceholder, SidebarAdPlaceholder } from '@/components/ads/AdPlaceholder'

export const metadata: Metadata = {
  title: 'ETF Guides & Comparisons — US & China Market Insights',
  description: 'In-depth ETF comparisons, index fund guides, and cross-border investing analysis. Compare S&P 500, Nasdaq, CSI 300 ETFs with data-driven insights.',
  keywords: 'ETF comparison, US ETF guide, China ETF guide, S&P 500 ETF, CSI 300 ETF, index fund analysis, cross-border investing',
}

const blogPosts = [
  {
    id: 1,
    title: 'S&P 500 ETF Showdown: VOO vs IVV vs SPY — Which One Wins in 2025?',
    excerpt: 'A data-driven comparison of the three largest S&P 500 ETFs by AUM. We break down expense ratios, tracking error, tax efficiency, and dividend handling to help you choose.',
    author: 'ETF Bridge Research',
    date: '2025-06-20',
    readTime: '10 min read',
    category: 'US ETFs',
    href: '/blog/sp500-etf-voo-ivv-spy-comparison',
    featured: true,
  },
  {
    id: 2,
    title: 'CSI 300 ETF Guide: How to Invest in China\'s Blue-Chip Index',
    excerpt: 'Everything global investors need to know about tracking China\'s largest 300 A-share companies through ETFs — available options, fees, inclusion mechanisms, and key risks.',
    author: 'ETF Bridge Research',
    date: '2025-06-18',
    readTime: '12 min read',
    category: 'China ETFs',
    href: '/blog/csi-300-etf-guide',
    featured: true,
  },
  {
    id: 3,
    title: 'US vs China ETF Fees: Why Expense Ratios Differ So Much',
    excerpt: 'US equity ETFs average 0.03%–0.09% expense ratios, while China ETFs often charge 0.15%–0.60%. We explain the structural reasons behind this gap.',
    author: 'ETF Bridge Research',
    date: '2025-06-15',
    readTime: '8 min read',
    category: 'Cross-Border',
    href: '/blog/us-vs-china-etf-fees',
    featured: false,
  },
  {
    id: 4,
    title: 'Nasdaq-100 ETF Face-Off: QQQ vs QQQM vs Invesco Alternatives',
    excerpt: 'Comparing the major Nasdaq-100 tracking ETFs on cost, liquidity, and suitability for long-term investors vs traders.',
    author: 'ETF Bridge Research',
    date: '2025-06-12',
    readTime: '9 min read',
    category: 'US ETFs',
    href: '/blog/nasdaq-100-etf-qqq-qqqm-comparison',
    featured: false,
  },
  {
    id: 5,
    title: 'A-Share Industry ETFs: How to Play China\'s Sector Rotation',
    excerpt: 'An overview of China\'s sector-specific ETFs — semiconductor, new energy, healthcare, and consumer — and how they compare to US sector counterparts.',
    author: 'ETF Bridge Research',
    date: '2025-06-10',
    readTime: '11 min read',
    category: 'China ETFs',
    href: '/blog/a-share-industry-etf-guide',
    featured: false,
  },
  {
    id: 6,
    title: 'Hang Seng Index ETFs: Gateway to Hong Kong Equities',
    excerpt: 'Compare HSI-tracking ETFs available to international investors. Understand the index composition, sector concentration, and how it fits into a global portfolio.',
    author: 'ETF Bridge Research',
    date: '2025-06-08',
    readTime: '7 min read',
    category: 'Asia ETFs',
    href: '/blog/hang-seng-index-etf-guide',
    featured: false,
  },
  {
    id: 7,
    title: 'Dividend ETFs: US vs China — Which Market Pays Better?',
    excerpt: 'Comparing dividend yields, payout ratios, and tax treatment between US dividend aristocrat ETFs and China high-dividend ETFs.',
    author: 'ETF Bridge Research',
    date: '2025-06-05',
    readTime: '8 min read',
    category: 'Cross-Border',
    href: '/blog/dividend-etf-us-vs-china',
    featured: false,
  },
]

const categories = [
  { name: 'All Posts', count: blogPosts.length, href: '/blog' },
  { name: 'US ETFs', count: blogPosts.filter(p => p.category === 'US ETFs').length, href: '/blog/category/us-etfs' },
  { name: 'China ETFs', count: blogPosts.filter(p => p.category === 'China ETFs').length, href: '/blog/category/china-etfs' },
  { name: 'Cross-Border', count: blogPosts.filter(p => p.category === 'Cross-Border').length, href: '/blog/category/cross-border' },
  { name: 'Asia ETFs', count: blogPosts.filter(p => p.category === 'Asia ETFs').length, href: '/blog/category/asia-etfs' },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="bg-white">
      <div className="content-container">
        {/* Header */}
        <div className="py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              ETF Guides &amp; Comparisons
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Data-driven ETF analysis for global investors. Compare US and China index funds,
              understand expense ratios, and make informed cross-border investment decisions.
            </p>
          </div>
        </div>

        {/* Header Ad */}
        <HeaderAdPlaceholder className="mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Analysis</h2>
                <div className="grid gap-8 md:grid-cols-2">
                  {featuredPosts.map((post) => (
                    <article key={post.id} className="card">
                      <div className="flex items-center gap-x-4 text-xs mb-4">
                        <span className="text-gray-500 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        <span className="text-gray-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                        <span className="relative z-10 rounded-full bg-primary-50 px-3 py-1.5 font-medium text-primary-600">
                          {post.category}
                        </span>
                      </div>
                      <div className="group relative">
                        <h3 className="text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 mb-3">
                          <Link href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-sm leading-6 text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <User className="h-3 w-3" />
                          <span>By {post.author}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
              <div className="space-y-8">
                {regularPosts.map((post) => (
                  <article key={post.id} className="card">
                    <div className="flex items-center gap-x-4 text-xs mb-4">
                      <span className="text-gray-500 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <span className="text-gray-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                      <span className="relative z-10 rounded-full bg-primary-50 px-3 py-1.5 font-medium text-primary-600">
                        {post.category}
                      </span>
                    </div>
                    <div className="group relative">
                      <h3 className="text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 mb-3">
                        <Link href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-sm leading-6 text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <User className="h-3 w-3" />
                          <span>By {post.author}</span>
                        </div>
                        <Link
                          href={post.href}
                          className="text-sm font-semibold text-primary-600 hover:text-primary-500"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        href={category.href}
                        className="flex items-center justify-between text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                      >
                        <span>{category.name}</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar Ad */}
              <SidebarAdPlaceholder />

              {/* Newsletter Signup */}
              <div className="card bg-primary-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ETF Insights Weekly</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get our latest ETF comparisons and cross-border investing guides delivered to your inbox.
                </p>
                <form className="space-y-3" action="#">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full btn-primary text-sm py-2"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
