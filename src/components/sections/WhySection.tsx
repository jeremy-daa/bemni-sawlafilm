import { WHY_ITEMS } from '@/lib/constants'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function WhySection() {
  return (
    <section
      className="bg-cream py-[clamp(56px,8vw,100px)]"
      aria-labelledby="why-title"
    >
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">

        <div className="reveal">
          <SectionHeader
            eyebrow="Why producers choose Sawla Films"
            title="Five reasons productions come back"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {WHY_ITEMS.map((item, i) => {
            const isEven  = i % 2 === 1
            const isLast  = i === WHY_ITEMS.length - 1
            const noBottom = isLast || (WHY_ITEMS.length % 2 === 0 && i === WHY_ITEMS.length - 2)

            return (
              <div
                key={item.title}
                className={[
                  `reveal reveal-delay-${Math.min((i + 1) * 100, 500)}`,
                  'py-5 md:py-[22px]',
                  isEven  ? 'md:pl-7 md:pr-0 md:border-l border-black/[0.07]' : 'md:pr-7',
                  !isLast ? 'border-b border-black/[0.07]' : '',
                  isLast && WHY_ITEMS.length % 2 === 1 ? 'md:col-span-2 md:border-b-0' : '',
                ].join(' ')}
              >
                {/* Title with left bar accent */}
                <h3 className="flex items-center gap-2.5 text-[14px] font-medium text-ink mb-2.5 leading-[1.3]">
                  <span className="w-[3px] h-[15px] bg-ember rounded-[1px] flex-shrink-0" aria-hidden="true" />
                  {item.title}
                </h3>
                <p className="text-[13px] font-light text-steel leading-[1.75] mb-2.5">
                  {item.desc}
                </p>
                {/* Micro-proof */}
                <p className="text-[11px] font-light text-silver italic border-l-2 border-black/[0.07] pl-2.5 leading-[1.6]">
                  {item.proof}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
