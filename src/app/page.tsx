import Link from 'next/link'
import { Clock, Target, TrendingUp, Calculator, BookOpen, Zap } from 'lucide-react'
import { HeaderAdPlaceholder, InContentAdPlaceholder } from '@/components/ads/AdPlaceholder'

const features = [
  {
    name: 'Time Management Tools',
    description: 'Calculate work hours, break times, and optimize your daily schedule with our free calculators.',
    icon: Clock,
    href: '/tools/time-calculator',
  },
  {
    name: 'Goal Tracking',
    description: 'Set, track, and achieve your productivity goals with our comprehensive tracking system.',
    icon: Target,
    href: '/tools/goal-tracker',
  },
  {
    name: 'Performance Analytics',
    description: 'Measure your productivity score and identify areas for improvement.',
    icon: TrendingUp,
    href: '/tools/productivity-score',
  },
]

const recentPosts = [
  {
    title: '10 Time Management Techniques That Actually Work',
    excerpt: 'Discover proven strategies to maximize your daily productivity and eliminate time wasters.',
    href: '/blog/time-management-techniques',
    category: 'Time Management',
    readTime: '8 min read',
  },
  {
    title: 'The Ultimate Guide to Deep Work',
    excerpt: 'Learn how to achieve focused, high-value work in our distraction-filled world.',
    href: '/blog/deep-work-guide',
    category: 'Focus',
    readTime: '12 min read',
  },
  {
    title: 'Productivity Apps vs. Simple Systems: What Works Better?',
    excerpt: 'Compare digital tools with traditional methods to find your perfect productivity system.',
    href: '/blog/productivity-apps-vs-simple-systems',
    category: 'Tools',
    readTime: '6 min read',
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
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Boost Your Productivity with 
                <span className="text-primary-600"> Smart Tools</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover powerful productivity tools, time management techniques, and efficiency tips. 
                Free calculators, comprehensive guides, and expert insights to maximize your performance.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/tools"
                  className="btn-primary px-6 py-3 text-base"
                >
                  Explore Free Tools
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
            <h2 className="text-base font-semibold leading-7 text-primary-600">Everything You Need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Productivity Tools & Resources
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From time calculators to goal trackers, we provide the tools and knowledge you need to optimize your workflow and achieve more.
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
              Latest Productivity Insights
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Expert tips, proven strategies, and actionable advice to help you work smarter, not harder.
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
                Ready to boost your productivity?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-200">
                Join thousands of professionals who use our tools and guides to optimize their workflow and achieve more in less time.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/tools"
                  className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started for free
                </Link>
                <Link
                  href="/about"
                  className="text-base font-semibold leading-7 text-white hover:text-primary-200"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
