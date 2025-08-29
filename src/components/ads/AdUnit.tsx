'use client'

import { useEffect, useRef } from 'react'

interface AdUnitProps {
  adSlot: string
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  adLayout?: string
  adLayoutKey?: string
  style?: React.CSSProperties
  className?: string
  responsive?: boolean
}

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function AdUnit({
  adSlot,
  adFormat = 'auto',
  adLayout,
  adLayoutKey,
  style,
  className = '',
  responsive = true,
}: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const ADSENSE_PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || 'ca-pub-XXXXXXXXXXXXXXXX'

  useEffect(() => {
    if (typeof window !== 'undefined' && adRef.current) {
      try {
        // Initialize adsbygoogle array if it doesn't exist
        window.adsbygoogle = window.adsbygoogle || []
        
        // Push the ad configuration
        window.adsbygoogle.push({})
      } catch (error) {
        console.error('AdSense error:', error)
      }
    }
  }, [])

  // Default styles for different ad formats
  const getDefaultStyle = () => {
    const baseStyle: React.CSSProperties = {
      display: 'block',
      textAlign: 'center',
      ...style,
    }

    switch (adFormat) {
      case 'rectangle':
        return { ...baseStyle, width: '300px', height: '250px' }
      case 'vertical':
        return { ...baseStyle, width: '160px', height: '600px' }
      case 'horizontal':
        return { ...baseStyle, width: '728px', height: '90px' }
      default:
        return baseStyle
    }
  }

  return (
    <div className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={getDefaultStyle()}
        data-ad-client={ADSENSE_PUBLISHER_ID}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout={adLayout}
        data-ad-layout-key={adLayoutKey}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  )
}

// Pre-configured ad components for common placements
export function HeaderAd({ className }: { className?: string }) {
  return (
    <AdUnit
      adSlot="1234567890" // Replace with your actual ad slot ID
      adFormat="horizontal"
      className={className}
      style={{ maxWidth: '728px', margin: '0 auto' }}
    />
  )
}

export function SidebarAd({ className }: { className?: string }) {
  return (
    <AdUnit
      adSlot="1234567891" // Replace with your actual ad slot ID
      adFormat="rectangle"
      className={className}
      style={{ maxWidth: '300px', margin: '0 auto' }}
    />
  )
}

export function InContentAd({ className }: { className?: string }) {
  return (
    <AdUnit
      adSlot="1234567892" // Replace with your actual ad slot ID
      adFormat="auto"
      className={className}
      responsive={true}
    />
  )
}

export function FooterAd({ className }: { className?: string }) {
  return (
    <AdUnit
      adSlot="1234567893" // Replace with your actual ad slot ID
      adFormat="horizontal"
      className={className}
      style={{ maxWidth: '728px', margin: '0 auto' }}
    />
  )
}
