'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback, useRef } from 'react'
import { TESTIMONIALS } from '@/lib/constants'

// Tallest testimonial body drives the fixed card height.
// Measured empirically — change if you add longer testimonials.
const CARD_HEIGHT = 420

export function ProofSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  // Shared drag state for both mouse and touch
  const dragStartX = useRef<number | null>(null)
  const dragStartY = useRef<number | null>(null)
  const isDragging  = useRef(false)

  const next = useCallback(() => setActive((i) => (i + 1) % TESTIMONIALS.length), [])
  const prev = useCallback(() => setActive((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [paused, next])

  // ── Touch ──────────────────────────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX
    dragStartY.current = e.touches[0].clientY
    setPaused(true)
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX.current === null || dragStartY.current === null) return
    const dx = e.changedTouches[0].clientX - dragStartX.current
    const dy = e.changedTouches[0].clientY - dragStartY.current
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) dx < 0 ? next() : prev()
    dragStartX.current = null
    dragStartY.current = null
    setPaused(false)
  }

  // ── Mouse drag ─────────────────────────────────────────────────────────────
  const onMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX
    dragStartY.current = e.clientY
    isDragging.current = false
    setPaused(true)
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return
    if (Math.abs(e.clientX - dragStartX.current) > 5) isDragging.current = true
  }
  const onMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null || dragStartY.current === null) return
    const dx = e.clientX - dragStartX.current
    const dy = e.clientY - dragStartY.current
    if (isDragging.current && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      dx < 0 ? next() : prev()
    }
    dragStartX.current = null
    dragStartY.current = null
    isDragging.current = false
    setPaused(false)
  }
  const onMouseLeaveCard = () => {
    // Cancel drag if mouse leaves, but keep paused state managed by outer div
    dragStartX.current = null
    isDragging.current = false
  }

  const t = TESTIMONIALS[active]

  return (
    <section
      className="bg-graphite py-[clamp(56px,8vw,100px)] relative overflow-hidden"
      aria-labelledby="proof-title"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 41px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Slider column */}
          <div
            className="reveal flex flex-col"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => { setPaused(false); onMouseLeaveCard() }}
          >
            {/*
              Card — FIXED height so the controls below never shift.
              Content fades in absolutely positioned inside.
            */}
            <div
              className="relative bg-white/[0.04] border border-white/[0.07] border-l-[3px] border-l-ember rounded-[3px] overflow-hidden cursor-grab active:cursor-grabbing"
              style={{
                height: CARD_HEIGHT,
                userSelect: 'none',
                WebkitUserSelect: 'none',
              }}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeaveCard}
            >
              {/* Absolutely positioned so it never influences card height */}
              <div
                key={active}
                className="absolute inset-0 p-8 overflow-y-auto"
                style={{ animation: 'slideTestimonial 0.35s ease both' }}
              >
                <span className="block font-serif text-[56px] text-ember/20 leading-[0.7] italic mb-4" aria-hidden="true">"</span>
                <figure>
                  <blockquote>
                    <p className="font-serif font-light text-[16px] text-white leading-[1.72] italic mb-3">
                      {t.quote}
                    </p>
                    <p className="text-[12px] font-light text-white/50 leading-[1.75] mb-5">
                      {t.body}
                    </p>
                  </blockquote>
                  <figcaption className="text-[10px] font-medium text-white/70 tracking-[0.06em] border-t border-white/[0.07] pt-3.5 leading-[1.6] uppercase">
                    {t.role} · {t.country}
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Controls — outside the card, never affected by content height */}
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-8 h-8 flex items-center justify-center border border-white/[0.12] rounded-[2px] text-white/50 hover:text-white hover:border-white/30 transition-colors text-lg leading-none shrink-0"
              >
                ‹
              </button>

              <div className="flex gap-1.5 items-center" role="tablist" aria-label="Testimonial navigation">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Testimonial ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`h-[3px] rounded-full transition-all duration-300 ${
                      i === active ? 'w-6 bg-ember' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-8 h-8 flex items-center justify-center border border-white/[0.12] rounded-[2px] text-white/50 hover:text-white hover:border-white/30 transition-colors text-lg leading-none shrink-0"
              >
                ›
              </button>

              <span className="text-[10px] text-white/20 tracking-[0.05em] ml-1 tabular-nums shrink-0">
                {active + 1} / {TESTIMONIALS.length}
              </span>
            </div>
          </div>

          {/* Proof copy — unchanged */}
          <div className="reveal reveal-delay-200">
            <div className="flex items-center gap-2.5 text-[10px] font-medium tracking-[0.18em] uppercase text-ember mb-3.5">
              <span className="w-5 h-px bg-ember" aria-hidden="true" />
              Trusted production support
            </div>
            <h2
              id="proof-title"
              className="font-serif font-light text-white text-display-md italic leading-[1.2] mb-4"
            >
              Shared carefully.<br />Proven in the field.
            </h2>
            <p className="text-[13px] font-light text-white/45 leading-[1.8] mb-3">
              Our team has supported or coordinated work connected with international broadcasters
              and production companies, including projects associated with Netflix, NHK, BBC, Al
              Jazeera, and KBS.
            </p>
            <p className="text-[11px] font-light text-white/25 italic mb-5">
              References and further details are shared privately where appropriate and subject to applicable NDAs.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/clients" className="arrow-link text-[11px] font-normal text-gold tracking-[0.04em] hover:text-gold/80 transition-colors">
                View clients and selected credits
              </Link>
              <Link href="/case-studies" className="arrow-link text-[11px] font-normal text-gold tracking-[0.04em] hover:text-gold/80 transition-colors">
                Read production case studies
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes slideTestimonial {
          from { opacity: 0; transform: translateX(14px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
