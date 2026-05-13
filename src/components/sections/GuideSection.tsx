import Link from 'next/link'
import { GUIDE_CARDS } from '@/lib/constants'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function GuideSection() {
  return (
    <section
      className="bg-[#EDEBE5] py-[clamp(56px,8vw,100px)]"
      aria-labelledby="guide-title"
    >
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">

        <div className="reveal">
          <SectionHeader
            eyebrow="Ethiopia filming guide"
            title="Producer-ready guides for filming in Ethiopia"
            subtitle="Reduce back-and-forth and build a schedule that holds."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {GUIDE_CARDS.map((card, i) => (
            <article
              key={card.title}
              className={`reveal reveal-delay-${Math.min((i + 1) * 100, 500)} group relative bg-cream border border-black/[0.07] border-t-[2px] border-t-teal-mid rounded-[3px] p-5 transition-transform duration-250 ease-out-expo hover:-translate-y-[3px]`}
            >
              <span className="block text-[9px] font-medium text-teal-mid tracking-[0.12em] uppercase mb-2">
                {card.tag}
              </span>
              <h3 className="text-[13px] font-medium text-ink mb-1.5 leading-[1.35]">
                {card.title}
              </h3>
              <p className="text-[12px] font-light text-silver leading-[1.65] mb-3.5">
                {card.desc}
              </p>
              <Link
                href={card.href}
                className="arrow-link text-[10px] font-medium text-teal-mid tracking-[0.06em] uppercase"
              >
                Read guide
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-7 text-center reveal">
          <Link
            href="/ethiopia-filming-guide"
            className="inline-flex items-center gap-2 bg-transparent text-teal border border-teal/20 text-[11px] font-medium tracking-[0.06em] uppercase px-5 py-2.5 rounded-[2px] hover:border-teal hover:bg-teal/5 transition-all duration-200"
          >
            Explore the full Ethiopia filming guide for producers →
          </Link>
        </div>
      </div>
    </section>
  )
}
