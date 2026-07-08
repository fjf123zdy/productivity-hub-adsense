'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react'
import type { BlogPost } from '@/lib/posts'

const POSTS_PER_PAGE = 8

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="card">
      <div className="flex items-center gap-x-4 text-xs mb-4">
        <span className="text-gray-500 flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
        <span className="text-gray-500 flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {post.readTime}
        </span>
        <span className="relative z-10 rounded-full bg-primary-50 px-3 py-1.5 font-medium text-primary-600">
          {post.category}
        </span>
      </div>
      <div className="group relative">
        <h3 className="text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 mb-3">
          <Link href={`/blog/${post.slug}`}>
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </h3>
        <p className="text-sm leading-6 text-gray-600 mb-4">{post.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <User className="h-3 w-3" />
            <span>By {post.author}</span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm font-semibold text-primary-600 hover:text-primary-500"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  )
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
  if (totalPages <= 1) return null

  // Build page number array with ellipsis
  const pages: (number | 'ellipsis')[] = []
  const maxVisible = 5

  if (totalPages <= maxVisible + 2) {
    for (let i = 1; i <= totalPages; i++) pages.push(i)
  } else {
    pages.push(1)
    if (currentPage > 3) pages.push('ellipsis')

    const start = Math.max(2, currentPage - 1)
    const end = Math.min(totalPages - 1, currentPage + 1)
    for (let i = start; i <= end; i++) pages.push(i)

    if (currentPage < totalPages - 2) pages.push('ellipsis')
    pages.push(totalPages)
  }

  return (
    <nav className="flex items-center justify-center gap-1 mt-12" aria-label="Pagination">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page numbers */}
      <div className="hidden sm:flex items-center gap-1">
        {pages.map((page, i) =>
          page === 'ellipsis' ? (
            <span key={`ellipsis-${i}`} className="px-2 py-2 text-sm text-gray-400">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`min-w-[40px] px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                page === currentPage
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Mobile: current page indicator */}
      <span className="sm:hidden px-3 py-2 text-sm font-medium text-gray-700">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  )
}

export default function PaginatedBlogList({ posts }: { posts: BlogPost[] }) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE
  const pagePosts = posts.slice(startIdx, startIdx + POSTS_PER_PAGE)

  // Reset to page 1 if posts array changes (e.g. new articles added)
  // and current page is now out of bounds
  if (currentPage > totalPages && totalPages > 0) {
    // Use useEffect or just guard — for simplicity, guard the slice
    // The slice will just return empty if startIdx is beyond length
  }

  if (posts.length === 0) {
    return (
      <div className="card text-center py-12">
        <p className="text-gray-500 text-lg">More articles coming soon.</p>
        <p className="text-gray-400 text-sm mt-2">
          We're working on in-depth ETF comparisons and cross-border investing guides. Check back soon.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">All Articles</h2>
        <p className="text-sm text-gray-500">
          Showing {startIdx + 1}–{Math.min(startIdx + POSTS_PER_PAGE, posts.length)} of {posts.length}
        </p>
      </div>

      <div className="space-y-8">
        {pagePosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}
