import { clsx } from 'clsx'

interface EyebrowProps {
  children: React.ReactNode
  light?: boolean
  centered?: boolean
  className?: string
}

export function Eyebrow({ children, light = false, centered = false, className }: EyebrowProps) {
  return (
    <div
      className={clsx(
        'inline-flex items-center gap-2.5',
        'text-[10px] font-medium tracking-[0.18em] uppercase',
        light ? 'text-ember' : 'text-ember',
        centered && 'justify-center',
        className,
      )}
    >
      {!centered && (
        <span className="block w-6 h-px bg-ember flex-shrink-0" aria-hidden="true" />
      )}
      {centered && (
        <span className="block w-5 h-px bg-ember flex-shrink-0" aria-hidden="true" />
      )}
      {children}
      {centered && (
        <span className="block w-5 h-px bg-ember flex-shrink-0" aria-hidden="true" />
      )}
    </div>
  )
}
