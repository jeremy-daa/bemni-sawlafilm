import { QA_ITEMS } from '@/lib/constants'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function QuickAnswersSection() {
  const left  = QA_ITEMS.slice(0, 4)
  const right = QA_ITEMS.slice(4)

  return (
    <section
      className="bg-cream py-[clamp(56px,8vw,100px)]"
      aria-labelledby="qa-title"
    >
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="reveal">
          <SectionHeader
            eyebrow="Quick answers for producers"
            title={<>What producers ask<br />before they call</>}
            subtitle="Fast clarity for international teams planning a shoot in Ethiopia."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-x-14">
          {[left, right].map((col, ci) => (
            <div key={ci}>
              {col.map((item, i) => (
                <article
                  key={item.q}
                  className={`reveal reveal-delay-${(i + 1) * 100} py-4 border-b border-black/[0.07]`}
                >
                  <div className="flex gap-3 items-start mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0 mt-[7px]" aria-hidden="true" />
                    <p className="text-[13px] font-medium text-ink leading-[1.4]">{item.q}</p>
                  </div>
                  <p className="text-[13px] font-light text-steel leading-[1.75] pl-[18px]">
                    {item.a}
                  </p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
