interface AdPlaceholderProps {
  width?: string | number
  height?: string | number
  className?: string
  label?: string
}

export default function AdPlaceholder({ 
  width = '100%', 
  height = 250, 
  className = '',
  label = 'Advertisement'
}: AdPlaceholderProps) {
  return (
    <div 
      className={`ad-container ${className}`}
      style={{ width, height }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50/60">
        <div className="ad-placeholder">
          {label}
        </div>
        <div className="mt-1 text-[10px] text-gray-300">
          {typeof width === 'number' ? `${width}px` : width} × {typeof height === 'number' ? `${height}px` : height}
        </div>
      </div>
    </div>
  )
}

// Pre-configured placeholder components
export function HeaderAdPlaceholder({ className }: { className?: string }) {
  return (
    <AdPlaceholder
      width={728}
      height={90}
      className={className}
      label="Header Banner Ad"
    />
  )
}

export function SidebarAdPlaceholder({ className }: { className?: string }) {
  return (
    <AdPlaceholder
      width={300}
      height={250}
      className={className}
      label="Sidebar Ad"
    />
  )
}

export function InContentAdPlaceholder({ className }: { className?: string }) {
  return (
    <AdPlaceholder
      width="100%"
      height={200}
      className={className}
      label="In-Content Ad"
    />
  )
}

export function FooterAdPlaceholder({ className }: { className?: string }) {
  return (
    <AdPlaceholder
      width={728}
      height={90}
      className={className}
      label="Footer Banner Ad"
    />
  )
}
