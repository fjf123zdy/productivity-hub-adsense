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

export function WebsiteStructuredData() {
  return (
    <StructuredData
      type="WebSite"
      title="ETF Bridge — Compare US & China ETFs"
      description="Compare S&P 500, Nasdaq, CSI 300 ETFs side by side. Expense ratio calculators, index fund guides, and cross-border investing insights."
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
