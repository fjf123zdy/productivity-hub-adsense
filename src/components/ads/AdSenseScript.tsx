'use client'

import Script from 'next/script'

export default function AdSenseScript() {
  // Replace with your actual AdSense publisher ID
  const ADSENSE_PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || 'ca-pub-XXXXXXXXXXXXXXXX'

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
