'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { clsx } from 'clsx'
import { useNavScroll } from '@/hooks/useNavScroll'
import { SITE, NAV_SERVICES, NAV_GUIDES } from '@/lib/constants'

const TOP_NAV = [
  { label: 'Home',          href: '/',                             dropdown: null },
  { label: 'Services',      href: '/ethiopia-film-fixer-services', dropdown: 'services' },
  { label: 'Filming Guide', href: '/ethiopia-filming-guide',       dropdown: 'guides' },
  { label: 'Gallery',       href: '/gallery',                      dropdown: null },
  { label: 'Our Work',      href: '/case-studies',                 dropdown: null },
  { label: 'About',         href: '/about',                        dropdown: null },
  { label: 'FAQ',           href: '/faq',                          dropdown: null },
  { label: 'Blog',          href: '/blog',                         dropdown: null },
]

export function Navbar() {
  const scrolled   = useNavScroll(40)
  const [open, setOpen]         = useState(false)
  const [activeDD, setActiveDD] = useState<string | null>(null)
  const ddTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handler = () => setActiveDD(null)
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  const showDD = (name: string) => { if (ddTimer.current) clearTimeout(ddTimer.current); setActiveDD(name) }
  const hideDD = () => { ddTimer.current = setTimeout(() => setActiveDD(null), 120) }

  const toggleMobile = () => {
    setOpen((v) => { document.body.style.overflow = !v ? 'hidden' : ''; return !v })
  }
  const closeMobile = () => { setOpen(false); document.body.style.overflow = '' }

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 h-[80px] transition-all duration-400",
          scrolled
            ? "bg-ink/75 border-b border-white/10 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)] h-full flex items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center flex-shrink-0"
            aria-label="Sawla Films — Ethiopia Film Fixer — Home"
          >
            <Image
              src="/brand/sawla-films-logo-bgremoved.png"
              alt="Sawla Films logo"
              width={60}
              height={60}
              className="object-contain w-auto h-auto"
              priority
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-4 xl:gap-6" role="list">
            {TOP_NAV.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => item.dropdown && showDD(item.dropdown)}
                onMouseLeave={() => item.dropdown && hideDD()}
              >
                <Link
                  href={item.href}
                  className="link-hover-slide text-[10px] xl:text-[11px] font-normal text-white/60 tracking-[0.05em] xl:tracking-[0.06em] uppercase hover:text-white transition-colors duration-200 flex items-center gap-1"
                  onClick={() => setActiveDD(null)}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className="w-3 h-3 opacity-40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {item.dropdown === "services" && activeDD === "services" && (
                  <div
                    className={clsx(
                      "absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[340px] border border-white/15 rounded-[4px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] py-3 z-50 transition-all duration-300",
                      scrolled
                        ? "bg-[#0A0A0A]/95 backdrop-blur-none"
                        : "bg-ink/75 backdrop-blur-2xl backdrop-saturate-150"
                    )}
                    onMouseEnter={() => showDD("services")}
                    onMouseLeave={hideDD}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <p className="text-[9px] font-medium text-ember tracking-[0.14em] uppercase px-4 pb-2 border-b border-white/[0.06] mb-1">
                      Film Fixer Services
                    </p>
                    {NAV_SERVICES.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center gap-2.5 px-4 py-2 hover:bg-white/[0.05] transition-colors group"
                        onClick={() => setActiveDD(null)}
                      >
                        <span
                          className="w-1 h-1 rounded-full bg-ember/50 flex-shrink-0 group-hover:bg-ember transition-colors"
                          aria-hidden="true"
                        />
                        <span className="text-[12px] font-light text-white/60 group-hover:text-white transition-colors">
                          {s.label}
                        </span>
                      </Link>
                    ))}
                    <div className="border-t border-white/[0.06] mt-1 pt-1 px-4">
                      <Link
                        href="/ethiopia-film-fixer-services"
                        className="text-[10px] font-medium text-ember tracking-[0.06em] uppercase hover:text-ember-glow transition-colors"
                        onClick={() => setActiveDD(null)}
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                )}

                {item.dropdown === "guides" && activeDD === "guides" && (
                  <div
                    className={clsx(
                      "absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[300px] border border-white/15 rounded-[4px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] py-3 z-50 transition-all duration-300",
                      scrolled
                        ? "bg-[#0A0A0A]/95 backdrop-blur-none"
                        : "bg-ink/75 backdrop-blur-2xl backdrop-saturate-150"
                    )}
                    onMouseEnter={() => showDD("guides")}
                    onMouseLeave={hideDD}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <p className="text-[9px] font-medium text-teal-mid tracking-[0.14em] uppercase px-4 pb-2 border-b border-white/[0.06] mb-1">
                      Ethiopia Filming Guide
                    </p>
                    {NAV_GUIDES.map((g) => (
                      <Link
                        key={g.href}
                        href={g.href}
                        className="flex items-center gap-2.5 px-4 py-2 hover:bg-white/[0.05] transition-colors group"
                        onClick={() => setActiveDD(null)}
                      >
                        <span
                          className="w-1 h-1 rounded-full bg-teal-mid/50 flex-shrink-0 group-hover:bg-teal-mid transition-colors"
                          aria-hidden="true"
                        />
                        <span className="text-[12px] font-light text-white/60 group-hover:text-white transition-colors">
                          {g.label}
                        </span>
                      </Link>
                    ))}
                    <div className="border-t border-white/[0.06] mt-1 pt-1 px-4">
                      <Link
                        href="/ethiopia-filming-guide"
                        className="text-[10px] font-medium text-teal-mid tracking-[0.06em] uppercase hover:text-teal transition-colors"
                        onClick={() => setActiveDD(null)}
                      >
                        Full filming guide →
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="hidden xl:block text-[10px] text-white/30 hover:text-white/60 transition-colors tracking-[0.03em] truncate max-w-[220px]"
            >
              {SITE.email}
            </a>
            <Link
              href="/request-a-quote"
              className="hidden sm:inline-flex items-center gap-1.5 bg-ember text-white text-[10px] font-medium tracking-[0.09em] uppercase px-4 py-2 rounded-[2px] hover:bg-ember-glow transition-colors whitespace-nowrap"
            >
              Request a Fixer
            </Link>
            <button
              className="lg:hidden flex flex-col gap-[5px] p-1.5 -mr-1"
              onClick={toggleMobile}
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
            >
              <span
                className={clsx(
                  "block w-[22px] h-px bg-white transition-all duration-300",
                  open && "translate-y-[6.5px] rotate-45",
                )}
              />
              <span
                className={clsx(
                  "block w-[22px] h-px bg-white transition-all duration-300",
                  open && "opacity-0 scale-x-0",
                )}
              />
              <span
                className={clsx(
                  "block w-[22px] h-px bg-white transition-all duration-300",
                  open && "-translate-y-[6.5px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className={clsx(
          "fixed inset-0 top-[80px] z-40 lg:hidden bg-ink/85 backdrop-blur-2xl backdrop-saturate-150",
          "flex flex-col px-[clamp(20px,4vw,48px)] py-8 overflow-y-auto",
          "transition-opacity duration-300",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <nav className="mb-6" aria-label="Mobile navigation links">
          {TOP_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className="block font-serif text-[26px] font-light text-white/75 hover:text-white py-2.5 border-b border-white/[0.06] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={closeMobile}
            className="block font-serif text-[26px] font-light text-white/75 hover:text-white py-2.5 border-b border-white/[0.06] transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="mb-5">
          <p className="text-[9px] font-medium text-ember tracking-[0.14em] uppercase mb-2.5">
            Services
          </p>
          {NAV_SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={closeMobile}
              className="block text-[12px] font-light text-white/45 hover:text-white transition-colors py-1.5"
            >
              {s.label}
            </Link>
          ))}
        </div>

        <div className="mb-8">
          <p className="text-[9px] font-medium text-teal-mid tracking-[0.14em] uppercase mb-2.5">
            Filming Guide
          </p>
          {NAV_GUIDES.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              onClick={closeMobile}
              className="block text-[12px] font-light text-white/45 hover:text-white transition-colors py-1.5"
            >
              {g.label}
            </Link>
          ))}
        </div>

        <Link
          href="/request-a-quote"
          onClick={closeMobile}
          className="bg-ember text-white text-[13px] font-medium tracking-[0.06em] uppercase px-6 py-4 rounded-[2px] text-center hover:bg-ember-glow transition-colors mb-5"
        >
          Request a Fixer / Get a Quote
        </Link>

        <div className="mt-auto pt-5 border-t border-white/[0.06]">
          <p className="text-[9px] font-medium text-white/30 tracking-[0.12em] uppercase mb-3">
            Direct contact
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="block text-[12px] text-white/50 hover:text-white transition-colors mb-2 font-light"
          >
            {SITE.email}
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp1Raw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[12px] text-white/50 hover:text-white transition-colors mb-1.5 font-light"
          >
            WhatsApp {SITE.whatsapp1}
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp2Raw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[12px] text-white/40 hover:text-white transition-colors font-light"
          >
            WhatsApp {SITE.whatsapp2}
          </a>
        </div>
      </div>
    </>
  );
}
