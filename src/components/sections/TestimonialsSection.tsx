import { TESTIMONIALS } from '@/lib/constants'

const FLAG: Record<string, string> = {
  'South Korea': '🇰🇷',
  'Japan': '🇯🇵',
  'USA': '🇺🇸',
  'Germany': '🇩🇪',
  'Israel': '🇮🇱',
}

export function TestimonialsSection() {
  return (
    <section className="bg-cream py-[clamp(56px,8vw,96px)]" aria-labelledby="testimonials-title">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">

        <div className="mb-10">
          <div className="flex items-center gap-2.5 text-[10px] font-medium tracking-[0.18em] uppercase text-ember mb-3">
            <span className="w-5 h-px bg-ember" aria-hidden="true" />
            International productions
          </div>
          <h2
            id="testimonials-title"
            className="font-serif font-light text-ink text-display-md tracking-[-0.02em] leading-[1.15] mb-3"
          >
            What productions say
          </h2>
          <p className="text-[13px] font-light text-silver leading-[1.75] max-w-[540px]">
            Feedback from international crews who worked with us across Ethiopia. Shared with permission; names withheld by request where applicable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="bg-warm border border-black/[0.07] border-l-[3px] border-l-ember rounded-[3px] p-6 flex flex-col"
            >
              <span className="block font-serif text-[52px] text-ember/15 leading-[0.7] italic mb-3" aria-hidden="true">"</span>
              <blockquote className="flex-1">
                <p className="font-serif font-light text-[15px] text-ink leading-[1.65] italic mb-3">
                  {t.quote}
                </p>
                <p className="text-[12px] font-light text-steel leading-[1.75]">
                  {t.body}
                </p>
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-black/[0.07] flex items-center justify-between gap-3">
                <span className="text-[11px] font-light text-silver leading-[1.5]">
                  {t.role}
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-ink/60 tracking-[0.03em] shrink-0">
                  <span aria-hidden="true">{FLAG[t.country] ?? ''}</span>
                  {t.country}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-[11px] font-light text-silver/55 italic">
          Additional references available on request for qualified productions, subject to applicable NDAs.
        </p>
      </div>
    </section>
  )
}
