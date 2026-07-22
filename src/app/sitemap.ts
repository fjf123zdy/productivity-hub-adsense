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

  // Blog posts
  const blogPosts = [
    'sp500-etf-voo-ivv-spy-comparison',
    'csi-300-etf-guide',
    'us-vs-china-etf-fees',
    'nasdaq-100-etf-qqq-qqqm-comparison',
    'a-share-industry-etf-guide',
    'hang-seng-index-etf-guide',
    'dividend-etf-us-vs-china',
    'real-estate-etf-us-reit-vs-china-property',
    'small-cap-etf-russell-2000-csi-500-chinext',
    'thematic-etf-risks-underperformance',
    'emerging-markets-etf-eem-vwo-country',
    'build-global-etf-portfolio-guide',
    'semiconductor-etf-soxx-smh-soxl-comparison',
    'ai-infrastructure-etf-data-center-power-grid',
    'magnificent-seven-concentration-problem',
    'cloud-computing-etf-clou-skyy-wcld',
    'robotics-automation-etf-botz-robo-arkq',
    'dividend-aristocrats-etf-nobl-schd-international',
    'healthcare-etf-xlv-ibb-china-pharma',
    'infrastructure-etf-gii-pave-igf-supercycle',
    'low-volatility-etf-usmv-splv-defense',
    'factor-investing-smart-beta-etf-guide',
    'european-equity-etf-vgk-ezu-fez-stoxx-ftse',
    'us-bond-etf-agg-bnd-tlt-lqd-guide',
    'growth-vs-value-etf-vug-vtv-schg-schv',
    'covered-call-etf-jepi-jepq-xyld-divo',
    // === Newly registered: previously missing articles ===
    'adr-vs-local-stock-vs-etf-china',
    'bond-etf-us-china-comparison',
    'china-tech-etf-kweb-hstech',
    'core-satellite-etf-portfolio',
    'csi-500-vs-csi-1000-etf',
    'currency-hedged-etf-guide',
    'equal-weight-vs-cap-weight-etf',
    'esg-etf-us-vs-china',
    'etf-liquidity-explained',
    'etf-portfolio-rebalancing',
    'etf-tax-efficiency-us-hk-china',
    'etf-tracking-error-explained',
    'gold-etf-us-vs-china',
    'how-to-read-etf-fact-sheet',
    'japan-etf-nikkei-225-topix',
    'leveraged-inverse-etf-decay-risk',
    'lump-sum-vs-dca-etf',
    'semiconductor-etf-smh-soxx-china',
    'india-etf-inda-indy-flin-epi',
    'energy-sector-etf-xle-vde-ixc-feny',
    'uranium-nuclear-energy-etf-ura-urnm-nlr',
    'international-developed-etf-vea-schf-iefa-vxus',
    'etf-vs-mutual-fund-comparison-2026',
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
