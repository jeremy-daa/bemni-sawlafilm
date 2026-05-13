import { clsx } from 'clsx'
import { Eyebrow } from './Eyebrow'

interface SectionHeaderProps {
  eyebrow: string
  title: React.ReactNode
  subtitle?: string
  light?: boolean
  centered?: boolean
  className?: string
  id?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
  centered = false,
  className,
  id,
}: SectionHeaderProps) {
  return (
    <header className={clsx('mb-10 md:mb-14', centered && 'text-center', className)}>
      <Eyebrow centered={centered} className="mb-2.5">
        {eyebrow}
      </Eyebrow>
      <h2
        id={id}
        className={clsx(
          'font-serif font-light leading-[1.1] tracking-[-0.02em]',
          'text-display-lg',
          light ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'mt-2.5 text-body-md font-light max-w-xl',
            light ? 'text-white/45' : 'text-silver',
            centered && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </header>
  )
}
