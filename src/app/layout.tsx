import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AdSenseScript from '@/components/ads/AdSenseScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'ProductivityHub - Tools & Tips for Maximum Efficiency',
    template: '%s | ProductivityHub'
  },
  description: 'Discover powerful productivity tools, time management techniques, and efficiency tips to boost your performance. Free calculators, guides, and resources.',
  keywords: 'productivity, time management, efficiency, tools, calculators, tips, guides, work optimization',
  authors: [{ name: 'ProductivityHub Team' }],
  creator: 'ProductivityHub',
  publisher: 'ProductivityHub',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.vercel.app',
    siteName: 'ProductivityHub',
    title: 'ProductivityHub - Tools & Tips for Maximum Efficiency',
    description: 'Discover powerful productivity tools, time management techniques, and efficiency tips to boost your performance.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ProductivityHub - Boost Your Efficiency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProductivityHub - Tools & Tips for Maximum Efficiency',
    description: 'Discover powerful productivity tools and efficiency tips.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <AdSenseScript />
      </head>
      <body className={`${inter.className} h-full flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
