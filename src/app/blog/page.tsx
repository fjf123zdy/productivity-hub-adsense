import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, User } from 'lucide-react'
import { HeaderAdPlaceholder, SidebarAdPlaceholder } from '@/components/ads/AdPlaceholder'

export const metadata: Metadata = {
  title: 'Productivity Blog - Tips, Guides & Strategies',
  description: 'Expert productivity tips, time management strategies, and efficiency guides. Learn from proven techniques to boost your performance and achieve more.',
  keywords: 'productivity blog, time management tips, efficiency guides, work optimization, productivity strategies',
}

const blogPosts = [
  {
    id: 1,
    title: '10 Time Management Techniques That Actually Work',
    excerpt: 'Discover proven strategies to maximize your daily productivity and eliminate time wasters. These techniques are backed by research and used by top performers.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Time Management',
    href: '/blog/time-management-techniques',
    featured: true,
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Deep Work',
    excerpt: 'Learn how to achieve focused, high-value work in our distraction-filled world. Master the art of concentration and produce your best work.',
    author: 'Mike Chen',
    date: '2024-01-12',
    readTime: '12 min read',
    category: 'Focus',
    href: '/blog/deep-work-guide',
    featured: true,
  },
  {
    id: 3,
    title: 'Productivity Apps vs. Simple Systems: What Works Better?',
    excerpt: 'Compare digital tools with traditional methods to find your perfect productivity system. Discover which approach suits your workflow best.',
    author: 'Emily Rodriguez',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Tools',
    href: '/blog/productivity-apps-vs-simple-systems',
    featured: false,
  },
  {
    id: 4,
    title: 'How to Build Unbreakable Focus in a Distracted World',
    excerpt: 'Practical strategies to improve concentration, eliminate distractions, and maintain focus for extended periods.',
    author: 'David Park',
    date: '2024-01-08',
    readTime: '10 min read',
    category: 'Focus',
    href: '/blog/build-unbreakable-focus',
    featured: false,
  },
  {
    id: 5,
    title: 'The Science of Productivity: What Research Tells Us',
    excerpt: 'Evidence-based insights into what makes people productive. Learn from the latest research in psychology and neuroscience.',
    author: 'Dr. Lisa Wang',
    date: '2024-01-05',
    readTime: '15 min read',
    category: 'Research',
    href: '/blog/science-of-productivity',
    featured: false,
  },
  {
    id: 6,
    title: 'Morning Routines of Highly Productive People',
    excerpt: 'Discover the morning habits that set successful people up for productive days. Create your own winning routine.',
    author: 'Alex Thompson',
    date: '2024-01-03',
    readTime: '7 min read',
    category: 'Habits',
    href: '/blog/morning-routines-productive-people',
    featured: false,
  },
]

const categories = [
  { name: 'All Posts', count: blogPosts.length, href: '/blog' },
  { name: 'Time Management', count: 2, href: '/blog/category/time-management' },
  { name: 'Focus', count: 2, href: '/blog/category/focus' },
  { name: 'Tools', count: 1, href: '/blog/category/tools' },
  { name: 'Habits', count: 1, href: '/blog/category/habits' },
  { name: 'Research', count: 1, href: '/blog/category/research' },
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
              Productivity Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Expert insights, proven strategies, and actionable tips to help you work smarter, 
              manage your time better, and achieve more in both work and life.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
                <div className="grid gap-8 md:grid-cols-2">
                  {featuredPosts.map((post) => (
                    <article key={post.id} className="card">
                      <div className="flex items-center gap-x-4 text-xs mb-4">
                        <span className="text-gray-500 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString()}
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
                        {new Date(post.date).toLocaleDateString()}
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest productivity tips and insights delivered to your inbox.
                </p>
                <form className="space-y-3">
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
