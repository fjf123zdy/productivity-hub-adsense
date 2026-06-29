import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AdSenseScript from '@/components/ads/AdSenseScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'ETF Bridge — Compare US & China ETFs, Index Funds & Investing Guides',
    template: '%s | ETF Bridge'
  },
  description: 'Compare S&P 500, Nasdaq, CSI 300 ETFs side by side. Fee analysis, performance data, and cross-border investing guides for global investors navigating US and China markets.',
  keywords: 'ETF comparison, US ETF, China ETF, S&P 500, CSI 300, index fund, cross-border investing, ETF expense ratio, Nasdaq ETF, A-share ETF, global investor',
  authors: [{ name: 'ETF Bridge Team' }],
  creator: 'ETF Bridge',
  publisher: 'ETF Bridge',
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
    siteName: 'ETF Bridge',
    title: 'ETF Bridge — Compare US & China ETFs Side by Side',
    description: 'Compare S&P 500, Nasdaq, CSI 300 ETFs. Fee analysis, performance data, and cross-border investing guides for global investors.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ETF Bridge — Cross-Border ETF Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ETF Bridge — Compare US & China ETFs',
    description: 'Side-by-side ETF comparison, fee analysis, and investing guides for US and China markets.',
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
