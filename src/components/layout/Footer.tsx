import Link from 'next/link'
import Image from 'next/image'
import { SITE, FOOTER_SERVICES, FOOTER_GUIDES, FOOTER_COMPANY } from '@/lib/constants'

const SOCIALS = [
  {
    label: 'Instagram',
    handle: '@sawlafilms',
    href: 'https://www.instagram.com/sawlafilms',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    handle: 'Sawla Films',
    href: 'https://www.youtube.com/@sawlafilms',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    handle: 'Sawla Films',
    href: 'https://www.facebook.com/sawlafilms',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'Sawla Films',
    href: 'https://www.linkedin.com/company/sawlafilms',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    handle: SITE.whatsapp1,
    href: `https://wa.me/${SITE.whatsapp1Raw}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
]

function FooterCol({ title, links, accentColor = 'text-white/28' }: {
  title: string
  links: readonly { label: string; href: string; external?: boolean }[]
  accentColor?: string
}) {
  return (
    <nav aria-label={`${title} footer navigation`}>
      <h3 className={`text-[9px] font-medium ${accentColor} tracking-[0.12em] uppercase mb-3.5 pb-2 border-b border-white/[0.06]`}>
        {title}
      </h3>
      <ul className="flex flex-col gap-[7px]" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[12px] font-light text-white/60 hover:text-white transition-colors duration-200"
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-[clamp(40px,5vw,64px)] pb-6 border-t border-white/[0.04]" role="contentinfo">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">

        {/*
          Layout (desktop):
            col 1 (row-span-2) : brand + contact
            cols 2-4 row 1     : Services | Guide | Company
            cols 2-4 row 2     : Socials strip
        */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-8 mb-9">

          {/* Brand column — spans both rows on lg */}
          <div className="lg:row-span-2 lg:border-r lg:border-white/[0.04] lg:pr-8">
            <Link href="/" className="flex items-center" aria-label="Sawla Films home">
              <Image src="/brand/sawla-films-logo-bgremoved.png" alt="Sawla Films logo" width={160} height={160} className="object-contain" />
            </Link>
            <p className="text-[12px] font-light text-white/55 leading-[1.7] mb-5">
              Ethiopia film fixer and production support for international documentaries, factual series, commercials, and independent films. Based in Addis Ababa.
            </p>

            <div className="space-y-2 mb-4">
              <div>
                <p className="text-[9px] font-medium text-white/40 tracking-[0.1em] uppercase mb-0.5">Email</p>
                <a href={`mailto:${SITE.email}`} className="text-[12px] font-light text-white/75 hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="text-[9px] font-medium text-white/40 tracking-[0.1em] uppercase mb-0.5">WhatsApp & Mobile (Primary)</p>
                <a href={`https://wa.me/${SITE.whatsapp1Raw}`} target="_blank" rel="noopener noreferrer" className="text-[12px] font-light text-white/75 hover:text-white transition-colors">
                  {SITE.whatsapp1}
                </a>
              </div>
              <div>
                <p className="text-[9px] font-medium text-white/35 tracking-[0.1em] uppercase mb-0.5">WhatsApp & Mobile (Alternate)</p>
                <a href={`https://wa.me/${SITE.whatsapp2Raw}`} target="_blank" rel="noopener noreferrer" className="text-[12px] font-light text-white/65 hover:text-white transition-colors">
                  {SITE.whatsapp2}
                </a>
              </div>
            </div>

            <p className="text-[10px] text-white/35 font-light">
              Integrated logistics through{' '}
              <a href={SITE.sisterSite} target="_blank" rel="noopener noreferrer" className="text-gold/75 hover:text-gold transition-colors">
                Sawla Tours
              </a>
            </p>
          </div>

          {/* Row 1 — 3 link columns */}
          <FooterCol title="Services"      links={FOOTER_SERVICES} accentColor="text-ember" />
          <FooterCol title="Filming Guide" links={FOOTER_GUIDES}   accentColor="text-teal-mid" />
          <FooterCol title="Company"       links={FOOTER_COMPANY}  accentColor="text-white/55" />

          {/* Row 2 — socials strip pinned to columns 2-4 (not the brand column) */}
          <div className="lg:col-start-2 lg:col-span-3 lg:border-t lg:border-white/[0.04] lg:pt-6">
            <p className="text-[9px] font-medium text-white/30 tracking-[0.14em] uppercase mb-3.5">
              Follow our work
            </p>
            <div className="flex flex-wrap gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} — ${s.handle}`}
                  className="group flex items-center gap-2.5 border border-white/[0.07] rounded-[3px] px-3.5 py-2 hover:border-ember/40 hover:bg-ember/[0.05] transition-all duration-200"
                >
                  <span className="text-white/35 group-hover:text-ember transition-colors duration-200">
                    {s.icon}
                  </span>
                  <span className="flex flex-col leading-none">
                    <span className="text-[9px] font-medium text-white/28 tracking-[0.1em] uppercase group-hover:text-white/50 transition-colors">
                      {s.label}
                    </span>
                    <span className="text-[11px] font-light text-white/55 group-hover:text-white transition-colors mt-0.5">
                      {s.handle}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 flex-wrap">
          <p className="text-[10px] text-white/35 font-light">
            © {new Date().getFullYear()} Sawla Films · ethiopiafilmfixer.com · All rights reserved.
          </p>
          <div className="flex flex-wrap gap-2">
            {['NDA-safe', 'Producer-first', 'Ethiopia-based'].map((badge) => (
              <span key={badge} className="text-[9px] font-normal text-white/45 border border-white/[0.07] px-2 py-0.5 rounded-[1px] tracking-[0.06em] uppercase">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
