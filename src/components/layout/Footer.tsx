import Link from 'next/link'
import Image from 'next/image'
import { SITE, FOOTER_SERVICES, FOOTER_GUIDES, FOOTER_COMPANY } from '@/lib/constants'

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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-9">

          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center" aria-label="Sawla Films home">
              <Image src="/brand/sawla-films-logo-bgremoved.png" alt="Sawla Films logo" width={160} height={160} className="object-contain" />
            </Link>
            <p className="text-[12px] font-light text-white/55 leading-[1.7] mb-5">
              Ethiopia film fixer and production support for international documentaries, factual series, commercials, and independent films. Based in Addis Ababa.
            </p>

            {/* Contact details */}
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

          <FooterCol title="Services"      links={FOOTER_SERVICES} accentColor="text-ember" />
          <FooterCol title="Filming Guide" links={FOOTER_GUIDES}   accentColor="text-teal-mid" />
          <FooterCol title="Company"       links={FOOTER_COMPANY}  accentColor="text-white/55" />
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
