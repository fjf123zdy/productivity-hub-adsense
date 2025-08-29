import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, Clock, Target, TrendingUp, Timer, Calendar } from 'lucide-react'
import { HeaderAdPlaceholder, InContentAdPlaceholder } from '@/components/ads/AdPlaceholder'

export const metadata: Metadata = {
  title: 'Free Productivity Tools - Calculators & Utilities',
  description: 'Free productivity tools including time calculators, goal trackers, productivity scorers, and more. Boost your efficiency with our easy-to-use utilities.',
  keywords: 'productivity tools, time calculator, goal tracker, productivity score, free tools, efficiency calculator',
}

const tools = [
  {
    name: 'Time Calculator',
    description: 'Calculate work hours, break times, and optimize your daily schedule. Perfect for time tracking and planning.',
    icon: Clock,
    href: '/tools/time-calculator',
    category: 'Time Management',
    popular: true,
  },
  {
    name: 'Productivity Score',
    description: 'Assess your productivity level with our comprehensive scoring system. Get personalized improvement suggestions.',
    icon: TrendingUp,
    href: '/tools/productivity-score',
    category: 'Assessment',
    popular: true,
  },
  {
    name: 'Goal Tracker',
    description: 'Set, track, and achieve your goals with our intuitive goal management system.',
    icon: Target,
    href: '/tools/goal-tracker',
    category: 'Goal Setting',
    popular: false,
  },
  {
    name: 'Break Timer',
    description: 'Pomodoro technique timer with customizable work and break intervals for optimal focus.',
    icon: Timer,
    href: '/tools/break-timer',
    category: 'Focus',
    popular: true,
  },
  {
    name: 'Schedule Optimizer',
    description: 'Optimize your daily schedule based on your energy levels and task priorities.',
    icon: Calendar,
    href: '/tools/schedule-optimizer',
    category: 'Planning',
    popular: false,
  },
  {
    name: 'Efficiency Calculator',
    description: 'Calculate your work efficiency and identify bottlenecks in your workflow.',
    icon: Calculator,
    href: '/tools/efficiency-calculator',
    category: 'Analysis',
    popular: false,
  },
]

const categories = [
  { name: 'All Tools', count: tools.length },
  { name: 'Time Management', count: tools.filter(t => t.category === 'Time Management').length },
  { name: 'Assessment', count: tools.filter(t => t.category === 'Assessment').length },
  { name: 'Goal Setting', count: tools.filter(t => t.category === 'Goal Setting').length },
  { name: 'Focus', count: tools.filter(t => t.category === 'Focus').length },
  { name: 'Planning', count: tools.filter(t => t.category === 'Planning').length },
  { name: 'Analysis', count: tools.filter(t => t.category === 'Analysis').length },
]

export default function ToolsPage() {
  const popularTools = tools.filter(tool => tool.popular)
  const allTools = tools

  return (
    <div className="bg-white">
      <div className="content-container">
        {/* Header */}
        <div className="py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Free Productivity Tools
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Boost your efficiency with our collection of free productivity tools. 
              From time calculators to goal trackers, everything you need to optimize your workflow.
            </p>
          </div>
        </div>

        {/* Header Ad */}
        <HeaderAdPlaceholder className="mb-16" />

        {/* Popular Tools */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Tools</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularTools.map((tool) => (
              <div key={tool.name} className="card group hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <tool.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                      {tool.name}
                    </h3>
                    <span className="text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tool.description}
                </p>
                <Link
                  href={tool.href}
                  className="btn-primary w-full text-center block"
                >
                  Use Tool
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* In-Content Ad */}
        <InContentAdPlaceholder className="my-16" />

        {/* All Tools */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">All Tools</h2>
            <div className="text-sm text-gray-500">
              {tools.length} tools available
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors duration-200"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allTools.map((tool) => (
              <div key={tool.name} className="card group hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <tool.icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                        {tool.name}
                      </h3>
                      {tool.popular && (
                        <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">
                      {tool.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {tool.description}
                </p>
                <Link
                  href={tool.href}
                  className="text-sm font-semibold text-primary-600 hover:text-primary-500 transition-colors duration-200"
                >
                  Try it now →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Tool?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Can't find the productivity tool you're looking for? Let us know what you need, 
            and we'll consider adding it to our collection.
          </p>
          <Link
            href="/contact"
            className="btn-primary px-6 py-3"
          >
            Request a Tool
          </Link>
        </div>
      </div>
    </div>
  )
}
