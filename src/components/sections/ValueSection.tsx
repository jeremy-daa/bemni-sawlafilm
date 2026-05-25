import { DELIVERABLES } from '@/lib/constants'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PremiumImage } from '@/components/ui/PremiumImage'
import metadataJson from '@/data/metadata.json'
import { FullMediaRecord } from '@/types/gallery'

export function ValueSection() {
  const record = (metadataJson as { records: FullMediaRecord[] }).records.find(
    (item) => item.slug === 'erta-ale'
  );

  return (
    <section
      className="bg-warm py-[clamp(56px,8vw,100px)]"
      aria-labelledby="value-title"
    >
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[72px] items-start">

          {/* Left */}
          <div>
            <div className="reveal">
              <SectionHeader
                eyebrow="Local expertise"
                title={
                  <>
                    Shoot-ready days,<br />
                    built from the{' '}
                    <em className="not-italic text-ember">ground up</em>
                  </>
                }
                id="value-title"
              />
            </div>
            <p className="reveal reveal-delay-100 text-body-lg font-light text-steel leading-[1.8] mt-0 mb-7">
              Most successful shoots in Ethiopia are decided before the first call time — not
              through optimism, but through approvals that match the schedule, access that respects
              context, and logistics designed for real movement. Sawla Films brings structure to
              the moving parts so your crew can stay focused on story, performance, and visuals.
            </p>
            {/* Outcome callout */}
            <div className="reveal reveal-delay-200 bg-ink rounded-[3px] px-5 py-5 mb-8">
              <p className="font-serif font-light text-gold text-[16px] italic leading-[1.5]">
                Outcome: a production that feels controlled, even when the environment is dramatic.
              </p>
            </div>

            {/* Injected Premium Image */}
            {record && (
              <div className="reveal reveal-delay-300 w-full h-[320px] rounded-[4px] overflow-hidden shadow-2xl relative">
                <PremiumImage
                  assets={record.assets}
                  altText={record.seoDescription || record.altText}
                  dominantColor={record.dominantColors[0]}
                  className="w-full h-full object-cover"
                  useFullResolution={false}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </div>

          {/* Right — deliverables */}
          <ul className="flex flex-col" aria-label="What we deliver">
            {DELIVERABLES.map((item, i) => (
              <li
                key={item.n}
                className={`reveal reveal-delay-${Math.min((i + 1) * 100, 500)} grid grid-cols-[26px_1fr] gap-3 py-3 border-b border-black/[0.07] items-start`}
              >
                <span className="font-serif text-[11px] text-ember italic pt-0.5">{item.n}</span>
                <span className="text-[13px] font-light text-steel leading-[1.65]">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
