type LogoProps = {
  className?: string
  showWordmark?: boolean
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="10" className="fill-[#0A0D12]" />
      <path
        d="M24 6 40 15.5V32.5L24 42 8 32.5V15.5Z"
        stroke="var(--color-ember)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M24 16 32 20.8V29.2L24 34 16 29.2V20.8Z" fill="var(--color-cyan)" />
    </svg>
  )
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      {showWordmark && (
        <span className="font-display text-lg font-semibold tracking-tight text-ink">
          bancada
        </span>
      )}
    </div>
  )
}
