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
  const siteName = 'ProductivityHub'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app'
  
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Tools & Tips for Maximum Efficiency`
  const fullDescription = description || 'Discover powerful productivity tools, time management techniques, and efficiency tips to boost your performance. Free calculators, guides, and resources.'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: keywords || 'productivity, time management, efficiency, tools, calculators, tips, guides',
    authors: author ? [{ name: author }] : [{ name: 'ProductivityHub Team' }],
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
      creator: '@productivityhub',
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
        name: author || 'ProductivityHub Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'ProductivityHub',
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
