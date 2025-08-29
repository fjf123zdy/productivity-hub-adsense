import Link from 'next/link'
import { Zap } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tools', href: '/tools' },
    { name: 'Guides', href: '/guides' },
    { name: 'About', href: '/about' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Contact', href: '/contact' },
  ],
  tools: [
    { name: 'Time Calculator', href: '/tools/time-calculator' },
    { name: 'Productivity Score', href: '/tools/productivity-score' },
    { name: 'Break Timer', href: '/tools/break-timer' },
    { name: 'Goal Tracker', href: '/tools/goal-tracker' },
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
                <Zap className="h-8 w-8 text-primary-600" />
                <span className="text-xl font-bold text-gray-900">ProductivityHub</span>
              </Link>
              <p className="text-sm text-gray-600 max-w-md">
                Your ultimate destination for productivity tools, time management tips, and efficiency guides. 
                Boost your performance with our free resources and expert insights.
              </p>
              <div className="text-xs text-gray-500">
                © {new Date().getFullYear()} ProductivityHub. All rights reserved.
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
                    Popular Tools
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
              Made with ❤️ for productivity enthusiasts worldwide
            </p>
            <p className="text-xs text-gray-500 mt-2 sm:mt-0">
              Optimized for performance and user experience
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
