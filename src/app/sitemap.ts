import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Tool pages
  const toolPages = [
    'etf-comparison',
    'expense-ratio-calculator',
    'index-explorer',
    'dca-calculator',
    'cross-border-fee-analyzer',
  ].map(tool => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts — 37 articles (Phase 1 cleanup: 52 → 37)
  const blogPosts = [
    // === US ETFs (10 articles) ===
    'sp500-etf-voo-ivv-spy-comparison',
    'nasdaq-100-etf-qqq-qqqm-comparison',
    'semiconductor-etf-soxx-smh-soxl-comparison',
    'us-bond-etf-agg-bnd-tlt-lqd-guide',
    'growth-vs-value-etf-vug-vtv-schg-schv',
    'covered-call-etf-jepi-jepq-xyld-divo',
    'equal-weight-vs-cap-weight-etf',
    'mid-cap-etf-ijh-vo-iwr-schm',
    'leveraged-inverse-etf-decay-risk',
    'etf-vs-mutual-fund-comparison-2026',

    // === China ETFs (5 articles) ===
    'csi-300-etf-guide',
    'csi-500-vs-csi-1000-etf',
    'hang-seng-index-etf-guide',
    'a-share-industry-etf-guide',
    'china-tech-etf-kweb-hstech',

    // === Cross-Border (17 articles) ===
    'dividend-aristocrats-etf-nobl-schd-international',
    'energy-sector-etf-xle-vde-ixc-feny',
    'real-estate-etf-us-reit-vs-china-property',
    'healthcare-etf-xlv-ibb-china-pharma',
    'infrastructure-etf-gii-pave-igf-supercycle',
    'factor-investing-smart-beta-etf-guide',
    'us-vs-china-etf-fees',
    'adr-vs-local-stock-vs-etf-china',
    'build-global-etf-portfolio-guide',
    'core-satellite-etf-portfolio',
    'currency-hedged-etf-guide',
    'ai-infrastructure-etf-data-center-power-grid',
    'commodity-etf-dbc-gsg-pdbc-bci',
    'european-equity-etf-vgk-ezu-fez-stoxx-ftse',
    'international-developed-etf-vea-schf-iefa-vxus',
    'emerging-markets-etf-eem-vwo-country',
    'small-cap-etf-russell-2000-csi-500-chinext',

    // === Asia ETFs (2 articles) ===
    'japan-etf-nikkei-225-topix',
    'india-etf-inda-indy-flin-epi',

    // === Educational (3 articles) ===
    'etf-liquidity-explained',
    'etf-tracking-error-explained',
    'how-to-read-etf-fact-sheet',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog categories
  const blogCategories = [
    'us-etfs',
    'china-etfs',
    'cross-border',
    'asia-etfs',
  ].map(category => ({
    url: `${baseUrl}/blog/category/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...toolPages,
    ...blogPosts,
    ...blogCategories,
  ]
}
