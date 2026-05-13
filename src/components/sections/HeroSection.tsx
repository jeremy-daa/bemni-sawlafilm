'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/constants'

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-ink"
      aria-label="Hero — Ethiopia Film Fixer"
    >
      {/* ── Background video ── */}
      <div className="absolute inset-0 z-0">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/assets/video/hero-banner.mp4" type="video/mp4" />
        </video>
        {/* Layered overlays for cinematic depth */}
        <div className="absolute inset-0 bg-ink/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />
      </div>

      {/* ── Film grain ── */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* ── Camera corners ── */}
      <div className="absolute inset-5 z-20 pointer-events-none camera-corners">
        <div className="camera-corner-br absolute bottom-0 right-0" />
        <div className="camera-corner-bl absolute bottom-0 left-0" />
      </div>

      {/* ── REC indicator ── */}
      <div className="absolute top-[76px] left-6 z-20 flex items-center gap-1.5 bg-ember/12 border border-ember/35 px-3 py-1 rounded-[1px]" aria-label="Recording indicator">
        <span className="w-1.5 h-1.5 rounded-full bg-ember rec-blink" aria-hidden="true" />
        <span className="text-[9px] font-medium tracking-[0.15em] uppercase text-ember">REC</span>
      </div>

      {/* ── Location caption ── */}
      <p className="absolute bottom-6 right-6 z-20 text-[9px] font-light text-white/22 tracking-[0.12em] uppercase">
        Ethiopia · On location
      </p>

      {/* ── Hero content ── */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)] pt-20 pb-16">
        <div className="max-w-[620px]">

          {/* Logo above fold */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {/* <Image
              src="/brand/sawla-films-logo.jpg"
              alt="Sawla Films Ethiopia film fixer"
              width={80}
              height={72}
              className="rounded-[4px] opacity-90"
              priority
            /> */}
          </div>

          {/* Eyebrow */}
          <div
            className="flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase text-ember mb-5 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="w-6 h-px bg-ember" aria-hidden="true" />
            Ethiopia · Film Fixer · Production Support
          </div>

          {/* H1 */}
          <h1
            className="font-serif font-light text-white leading-[1.08] tracking-[-0.02em] mb-5 animate-fade-up"
            style={{ fontSize: 'clamp(36px,5.5vw,64px)', animationDelay: '0.32s' }}
          >
            Ethiopia Film Fixer<br />
            for <em className="text-gold not-italic">Permits, Logistics</em><br />
            and Production Support
          </h1>

          {/* Entity definition */}
          <p
            className="text-[12px] font-light text-white/45 leading-[1.75] italic border-l-2 border-ember pl-4 mb-5 max-w-[460px] animate-fade-up"
            style={{ animationDelay: '0.44s' }}
          >
            Sawla Films is an Ethiopia-based film fixer and production support company helping international crews with permits, access, logistics, customs, drone coordination, local crew, and on-ground fixing across all 12 regional states. Seven working languages.
          </p>

          {/* Subhead */}
          <p
            className="text-[14px] font-light text-white/65 leading-[1.75] max-w-[480px] mb-8 animate-fade-up"
            style={{ animationDelay: '0.54s' }}
          >
            Built for international productions that need clarity, control, and calm execution.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 mb-5 animate-fade-up"
            style={{ animationDelay: '0.64s' }}
          >
            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-2 bg-ember text-white text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3.5 rounded-[2px] hover:bg-ember-glow transition-all duration-250 ease-out-expo hover:-translate-y-px"
            >
              Request a Fixer / Get a Quote
            </Link>
            <Link
              href="/ethiopia-film-fixer-services"
              className="inline-flex items-center gap-2 bg-transparent text-white/80 border border-white/22 text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3.5 rounded-[2px] hover:border-white/50 hover:text-white transition-all duration-250 hover:-translate-y-px"
            >
              Explore Services
            </Link>
          </div>

          {/* Contact micro-line */}
          <div
            className="text-[11px] text-white/30 leading-[1.8] animate-fade-up"
            style={{ animationDelay: '0.74s' }}
          >
            <a href={`mailto:${SITE.email}`} className="text-white/55 hover:text-white/80 transition-colors">
              {SITE.email}
            </a>
            <span className="mx-3 text-white/15">|</span>
            <a href={`https://wa.me/${SITE.whatsapp1Raw}`} target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white/80 transition-colors">
              WhatsApp {SITE.whatsapp1}
            </a>
          </div>
          <p className="text-[10px] text-white/18 italic mt-1.5 animate-fade-up text-gray-50" style={{ animationDelay: '0.82s' }}>
            Trusted production support for international broadcast, documentary, commercial and factual teams. NDA-safe by default.
          </p>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[9px] font-light text-white/22 tracking-[0.14em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/22 to-transparent" />
      </div>
    </section>
  )
}
