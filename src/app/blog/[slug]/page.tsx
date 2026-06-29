import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import { HeaderAdPlaceholder, InContentAdPlaceholder } from '@/components/ads/AdPlaceholder'
import { ArticleStructuredData } from '@/components/seo/StructuredData'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
    },
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white">
      <ArticleStructuredData
        title={post.title}
        description={post.description}
        url={`/blog/${post.slug}/`}
        publishedTime={post.date}
        author={post.author}
      />

      <div className="content-container">
        {/* Breadcrumb */}
        <div className="pt-8 pb-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-gray-500 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to all articles
          </Link>
        </div>

        {/* Article Header */}
        <div className="py-8 border-b border-gray-200">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mb-4">
            <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
              {post.category}
            </span>
            <span className="text-gray-500 flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="text-gray-500 flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            <span className="text-gray-500 flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {post.description}
          </p>
        </div>

        {/* Header Ad */}
        <HeaderAdPlaceholder className="my-8" />

        {/* Article Content */}
        <div className="py-8">
          <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary-600 prose-strong:text-gray-900 prose-blockquote:border-primary-500 prose-blockquote:text-gray-600 prose-li:text-gray-600">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                // Render links with target blank and external icon
                a: ({ href, children, ...props }) => {
                  const isExternal = href?.startsWith('http')
                  return (
                    <Link
                      href={href || '#'}
                      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      {...props}
                    >
                      {children}
                    </Link>
                  )
                },
                // Style tables
                table: ({ children }) => (
                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full divide-y divide-gray-300 border border-gray-200 rounded-lg">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-gray-50">{children}</thead>
                ),
                th: ({ children }) => (
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-4 py-3 text-sm text-gray-600 border-t border-gray-100">
                    {children}
                  </td>
                ),
                // Style blockquotes
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary-500 bg-primary-50 px-4 py-2 my-4 rounded-r-lg">
                    {children}
                  </blockquote>
                ),
                // Style call-to-action blocks
                hr: () => <hr className="my-12 border-gray-200" />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>
        </div>

        {/* In-Content Ad */}
        <InContentAdPlaceholder className="my-12" />

        {/* Article Footer */}
        <div className="py-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="text-sm text-gray-500 mb-2">
              <strong>Disclaimer:</strong> ETF Bridge is an educational resource. This article does not constitute investment advice. Past performance does not guarantee future results. All data is current as of the article date and may change.
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to all articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
