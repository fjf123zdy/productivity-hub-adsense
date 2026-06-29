import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  description: string
  keywords: string
  date: string
  author: string
  category: string
  readTime: string
  content: string
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs.readdirSync(postsDirectory)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || slug,
    description: data.meta_description || data.description || '',
    keywords: data.meta_keywords || data.keywords || '',
    date: data.date || '',
    author: data.author || 'ETF Bridge Research',
    category: data.category || 'Uncategorized',
    readTime: data.read_time || data.readTime || '5 min read',
    content,
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllSlugs()
  return slugs
    .map(slug => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}
