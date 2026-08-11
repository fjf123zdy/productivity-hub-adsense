import type { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export function generateMetadata({
  title,
  description,
  keywords,
  image = '/og-image.jpg',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
}: SEOProps): Metadata {
  const siteName = 'ETF Bridge'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app'

  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — Compare US & China ETFs`
  const fullDescription = description || 'Compare US and China ETFs side by side. Expense ratio calculators, index fund guides, and cross-border investing insights for global investors.'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: keywords || 'ETF comparison, US ETF, China ETF, S&P 500, CSI 300, index fund, cross-border investing, expense ratio, ETF guide',
    authors: author ? [{ name: author }] : [{ name: 'ETF Bridge Research' }],
    creator: siteName,
    publisher: siteName,
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
      type,
      locale: 'en_US',
      url: fullUrl,
      siteName,
      title: fullTitle,
      description: fullDescription,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
        section,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
      creator: '@etfbridge',
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

export function generateStructuredData({
  title,
  description,
  url,
  image,
  type = 'WebSite',
  publishedTime,
  modifiedTime,
  author,
}: Omit<SEOProps, 'type'> & { type?: 'WebSite' | 'Article' | 'WebPage' }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl
  const fullImage = image && !image.startsWith('http') ? `${siteUrl}${image}` : image

  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description,
    url: fullUrl,
    ...(fullImage && { image: fullImage }),
  }

  if (type === 'Article') {
    return {
      ...baseData,
      '@type': 'Article',
      headline: title,
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      author: {
        '@type': 'Person',
        name: author || 'ETF Bridge Research',
      },
      publisher: {
        '@type': 'Organization',
        name: 'ETF Bridge',
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/logo.png`,
        },
      },
    }
  }

  if (type === 'WebSite') {
    return {
      ...baseData,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    }
  }

  return baseData
}
