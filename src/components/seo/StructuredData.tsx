import { generateStructuredData } from '@/lib/seo'

interface StructuredDataProps {
  title?: string
  description?: string
  url?: string
  image?: string
  type?: 'WebSite' | 'Article' | 'WebPage'
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

export default function StructuredData(props: StructuredDataProps) {
  const structuredData = generateStructuredData(props)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

// Specific structured data components
export function WebsiteStructuredData() {
  return (
    <StructuredData
      type="WebSite"
      title="ProductivityHub - Tools & Tips for Maximum Efficiency"
      description="Discover powerful productivity tools, time management techniques, and efficiency tips to boost your performance."
      url="/"
    />
  )
}

export function ArticleStructuredData({
  title,
  description,
  url,
  publishedTime,
  modifiedTime,
  author,
}: {
  title: string
  description: string
  url: string
  publishedTime: string
  modifiedTime?: string
  author?: string
}) {
  return (
    <StructuredData
      type="Article"
      title={title}
      description={description}
      url={url}
      publishedTime={publishedTime}
      modifiedTime={modifiedTime}
      author={author}
    />
  )
}

export function ToolStructuredData({
  title,
  description,
  url,
}: {
  title: string
  description: string
  url: string
}) {
  return (
    <StructuredData
      type="WebPage"
      title={title}
      description={description}
      url={url}
    />
  )
}
