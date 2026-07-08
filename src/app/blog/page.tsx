import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, User } from 'lucide-react'
import { HeaderAdPlaceholder, SidebarAdPlaceholder } from '@/components/ads/AdPlaceholder'
import PaginatedBlogList from '@/components/blog/PaginatedBlogList'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'ETF Guides & Comparisons — US & China Market Insights',
  description: 'In-depth ETF comparisons, index fund guides, and cross-border investing analysis. Compare S&P 500, Nasdaq, CSI 300 ETFs with data-driven insights.',
  keywords: 'ETF comparison, US ETF guide, China ETF guide, S&P 500 ETF, CSI 300 ETF, index fund analysis, cross-border investing',
}

const categories = [
  { name: 'All Posts', href: '/blog' },
  { name: 'US ETFs', href: '/blog/category/us-etfs' },
  { name: 'China ETFs', href: '/blog/category/china-etfs' },
  { name: 'Cross-Border', href: '/blog/category/cross-border' },
  { name: 'Asia ETFs', href: '/blog/category/asia-etfs' },
]

export default function BlogPage() {
  const allPosts = getAllPosts()

  // Update category counts from actual posts
  const categoriesWithCounts = categories.map(cat => {
    if (cat.name === 'All Posts') return { ...cat, count: allPosts.length }
    const matchingCat = cat.name.replace(' ', '-').toLowerCase()
    const count = allPosts.filter(p => {
      const postCat = p.category.toLowerCase().replace(/\s+/g, '-')
      return postCat === matchingCat || postCat === cat.name.toLowerCase().replace(/\s+/g, '-')
    }).length
    return { ...cat, count }
  })

  const featuredPosts = allPosts.slice(0, 2)
  const regularPosts = allPosts.slice(2)

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
                    <article key={post.slug} className="card">
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
                          <Link href={`/blog/${post.slug}`}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-sm leading-6 text-gray-600 mb-4">{post.description}</p>
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

            {/* All Posts — Paginated */}
            <PaginatedBlogList posts={regularPosts} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categoriesWithCounts.map((category) => (
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
