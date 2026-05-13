import { clsx } from 'clsx'
import Link from 'next/link'

type Variant = 'primary' | 'ghost' | 'outline' | 'gold' | 'teal-outline'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: Variant
  className?: string
  external?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-ember text-white border border-ember hover:bg-ember-glow hover:border-ember-glow',
  ghost:
    'bg-transparent text-white/80 border border-white/22 hover:border-white/50 hover:text-white',
  outline:
    'bg-transparent text-steel border border-black/15 hover:border-ember hover:text-ember',
  gold:
    'bg-ember text-white border border-ember hover:bg-ember-glow hover:border-ember-glow w-full justify-center',
  'teal-outline':
    'bg-transparent text-teal border border-teal/20 hover:border-teal hover:bg-teal/5',
}

export function Button({
  children,
  href,
  variant = 'primary',
  className,
  external,
  onClick,
  type = 'button',
  fullWidth,
}: ButtonProps) {
  const base = clsx(
    'inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.08em] uppercase',
    'px-6 py-3 rounded-[2px] transition-all duration-250 ease-out-expo',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2',
    variantClasses[variant],
    fullWidth && 'w-full justify-center',
    className,
  )

  if (href) {
    return (
      <Link
        href={href}
        className={base}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  )
}
