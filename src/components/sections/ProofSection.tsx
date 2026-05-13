import Link from 'next/link'

export function ProofSection() {
  return (
    <section
      className="bg-graphite py-[clamp(56px,8vw,100px)] relative overflow-hidden"
      aria-labelledby="proof-title"
    >
      {/* Hatch pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 41px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Quote */}
          <figure className="reveal bg-white/[0.04] border border-white/[0.07] border-l-[3px] border-l-ember rounded-[3px] p-8">
            <span className="block font-serif text-[72px] text-ember/20 leading-[0.7] italic mb-4" aria-hidden="true">"</span>
            <blockquote>
              <p className="font-serif font-light text-[17px] text-white/82 leading-[1.72] italic mb-5 text-slate-50">
                Getting access to that location would have been impossible without local knowledge
                and the right relationships. The preparation was meticulous, the execution was calm.
              </p>
            </blockquote>
            <figcaption className="text-[10px] font-normal text-white/33 tracking-[0.04em] border-t border-white/[0.07] pt-3.5 leading-[1.6] text-slate-50">
              Series Producer · UK Documentary Series · 2023<br />
              Name and production withheld by request (NDA)
            </figcaption>
          </figure>

          {/* Proof copy */}
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
    </section>
  )
}
