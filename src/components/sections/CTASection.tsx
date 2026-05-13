import Link from 'next/link'
import { SITE, CTA_RECEIVES } from '@/lib/constants'

export function CTASection() {
  return (
    <section
      className="bg-ash py-[clamp(64px,10vw,110px)] relative overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Right ambient glow */}
      <div
        className="absolute top-1/2 right-[-150px] -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,52,27,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="max-w-[600px] mx-auto text-center">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2.5 text-[10px] font-medium tracking-[0.18em] uppercase text-ember mb-4 reveal">
            <span className="w-5 h-px bg-ember" aria-hidden="true" />
            Start here
            <span className="w-5 h-px bg-ember" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2
            id="cta-title"
            className="reveal font-serif font-light text-white leading-[1.1] tracking-[-0.02em] mb-3.5"
            style={{ fontSize: 'clamp(32px,5vw,52px)' }}
          >
            Start with a<br />
            <em className="text-gold not-italic">quick feasibility check</em>
          </h2>

          {/* Subhead */}
          <p className="reveal reveal-delay-100 text-[14px] font-light text-white/50 leading-[1.8] mb-8">
            You do not need a finished plan to reach us. A location list, rough dates, crew size,
            and subject matter is enough. We will reply with initial permit considerations,
            logistics drivers, access questions, and a realistic next-step plan.
          </p>

          {/* What producers receive */}
          <div className="reveal reveal-delay-200 grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 text-left">
            {CTA_RECEIVES.map((item) => (
              <div
                key={item}
                className="flex gap-2.5 items-start bg-white/[0.032] border border-white/[0.055] px-3.5 py-2.5 rounded-[3px] transition-all duration-200 hover:bg-white/[0.055] hover:border-ember/30"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-ember/20 flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-ember" />
                </div>
                <span className="text-[11px] font-light text-white/50 leading-[1.5]">{item}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <Link
            href="/request-a-quote"
            className="reveal reveal-delay-300 block w-full bg-ember text-white text-[13px] font-medium tracking-[0.06em] uppercase px-9 py-4 rounded-[2px] hover:bg-ember-glow transition-all duration-250 ease-out-expo hover:-translate-y-[2px] mb-5"
          >
            Request a Fixer / Get a Quote
          </Link>

          {/* Divider */}
          <div className="reveal reveal-delay-400 w-12 h-px bg-white/10 mx-auto my-5" />

          {/* Contact details */}
          <div className="reveal reveal-delay-400 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 flex-wrap text-[11px] text-white/28 mb-4">
            <span>
              Email{' '}
              <a href={`mailto:${SITE.email}`} className="text-white/60 hover:text-white transition-colors">
                {SITE.email}
              </a>
            </span>
            <span>
              WhatsApp{' '}
              <a href={`https://wa.me/${SITE.whatsapp1Raw}`} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                {SITE.whatsapp1}
              </a>
            </span>
            <span>
              Alternate{' '}
              <a href={`https://wa.me/${SITE.whatsapp2Raw}`} target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white transition-colors">
                {SITE.whatsapp2}
              </a>
            </span>
          </div>

          {/* WhatsApp pill */}
          <div className="reveal reveal-delay-500">
            <a
              href={`https://wa.me/${SITE.whatsapp1Raw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-mid/18 border border-teal-mid/35 text-white/60 text-[11px] font-normal px-4 py-2 rounded-full hover:bg-teal-mid/28 transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" aria-hidden="true" />
              Message us on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
