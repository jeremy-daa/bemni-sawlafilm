'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/constants'
import { StaggerContainer, StaggerItem } from '@/components/ui/FadeIn'

export function HeroSection() {
  // Simulated camera timecode ticking at 24fps
  const [timecode, setTimecode] = useState('00:04:12:00')

  useEffect(() => {
    let frames = 0
    let seconds = 12
    let minutes = 4
    let hours = 0

    const interval = setInterval(() => {
      frames++
      if (frames >= 24) {
        frames = 0
        seconds++
        if (seconds >= 60) {
          seconds = 0
          minutes++
          if (minutes >= 60) {
            minutes = 0
            hours++
          }
        }
      }
      const pad = (n: number) => String(n).padStart(2, '0')
      setTimecode(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`)
    }, 41.67) // 24 fps

    return () => clearInterval(interval)
  }, [])
  return (
    <section
      className="relative h-screen max-h-[102vh] min-h-[600px] flex items-center overflow-hidden bg-ink"
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
      <div className="absolute inset-5 z-20 pointer-events-none camera-corners hidden md:block">
        <div className="camera-corner-br absolute bottom-0 right-0" />
        <div className="camera-corner-bl absolute bottom-0 left-0" />
      </div>

      {/* ── Top-right Camera HUD ── */}
      <div className="absolute top-[76px] right-[96px] z-20 flex flex-col items-end gap-2 pointer-events-none hidden md:flex" aria-label="Camera Viewfinder HUD">
        {/* REC & Timecode Row */}
        <div className="flex items-center gap-3 bg-ink/30 backdrop-blur-[2px] border border-white/10 px-3 py-1.5 rounded-[2px]">
          {/* Blinking REC indicator */}
          <div className="flex items-center gap-1.5 border-r border-white/10 pr-3">
            <span className="w-2 h-2 rounded-full bg-ember rec-blink" aria-hidden="true" />
            <span className="text-[10px] font-semibold tracking-[0.12em] text-ember uppercase">REC</span>
          </div>
          {/* Ticking Timecode */}
          <span className="font-mono text-[10px] font-medium tracking-[0.08em] text-white/70">
            TC {timecode}
          </span>
        </div>

        {/* Camera settings row */}
        <div className="flex items-center gap-2.5 text-[8px] font-mono tracking-[0.05em] text-white/35 uppercase">
          <span>4K RAW</span>
          <span>•</span>
          <span>23.98 fps</span>
          <span>•</span>
          <span>ISO 800</span>
        </div>
      </div>


      {/* ── Hero content ── */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)] pt-[100px] md:pt-[120px] pb-10 md:pb-16">
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

          <StaggerContainer>
            {/* Eyebrow */}
            <StaggerItem>
              <div className="flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase text-ember mb-5">
                <span className="w-6 h-px bg-ember" aria-hidden="true" />
                Ethiopia · Film Fixer · Production Support
              </div>
            </StaggerItem>

            {/* H1 */}
            <StaggerItem>
              <h1
                className="font-serif font-light text-white leading-[1.1] tracking-[-0.02em] mb-5"
                style={{ fontSize: 'clamp(30px,5.5vw,64px)' }}
              >
                Ethiopia Film Fixer<br />
                for <em className="text-gold not-italic">Permits, Logistics</em><br className="hidden sm:inline" />{' '}
                and Production Support
              </h1>
            </StaggerItem>

            {/* Entity definition */}
            <StaggerItem>
              <p className="text-[12px] font-light text-white/45 leading-[1.75] italic border-l-2 border-ember pl-4 mb-5 max-w-[460px] hidden md:block">
                Sawla Films is an Ethiopia-based film fixer and production support company helping international crews with permits, access, logistics, customs, drone coordination, local crew, and on-ground fixing across all 12 regional states. Seven working languages.
              </p>
            </StaggerItem>

            {/* Subhead */}
            <StaggerItem>
              <p className="text-[14px] font-light text-white/65 leading-[1.75] max-w-[480px] mb-8">
                Built for international productions that need clarity, control, and calm execution.
              </p>
            </StaggerItem>

            {/* CTAs */}
            <StaggerItem>
              <div className="flex flex-wrap gap-3 mb-5">
                <Link
                  href="/request-a-quote"
                  className="inline-flex items-center gap-2 bg-ember text-white text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3.5 rounded-[2px] hover:bg-ember-glow transition-all duration-250 ease-out-expo hover:-translate-y-px"
                >
                  Request a Fixer / Get a Quote
                </Link>
                <Link
                  href="/ethiopia-film-fixer-services"
                  className="inline-flex items-center gap-2 bg-transparent text-white/80 border border-white/22 text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3.5 rounded-[2px] hover:border-white/50 hover:text-white transition-all duration-250 hover:-translate-y-px hidden sm:inline-flex"
                >
                  Explore Services
                </Link>
              </div>
            </StaggerItem>

            {/* Contact micro-line */}
            <StaggerItem>
              <div className="text-[11px] text-white/30 leading-[1.8]">
                <a href={`mailto:${SITE.email}`} className="text-white/55 hover:text-white/80 transition-colors">
                  {SITE.email}
                </a>
                <span className="mx-3 text-white/15">|</span>
                <a href={`https://wa.me/${SITE.whatsapp1Raw}`} target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white/80 transition-colors">
                  WhatsApp {SITE.whatsapp1}
                </a>
              </div>
              <p className="text-[10px] text-white/18 italic mt-1.5 hidden md:block">
                Trusted production support for international broadcast, documentary, commercial and factual teams. NDA-safe by default.
              </p>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </div>

    </section>
  )
}
