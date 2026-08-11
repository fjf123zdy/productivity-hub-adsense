'use client'

import Script from 'next/script'

export default function AdSenseScript() {
  // Real publisher ID (matches public/ads.txt); env var can override
  const ADSENSE_PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || 'ca-pub-8773122680772217'

  return (
    <>
      {/* AdSense Script */}
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      
      {/* AdSense Auto Ads (Optional - enables automatic ad placement) */}
      <Script
        id="adsense-auto-ads"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "${ADSENSE_PUBLISHER_ID}",
              enable_page_level_ads: true
            });
          `,
        }}
      />
    </>
  )
}
