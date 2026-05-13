import { STATS } from '@/lib/constants'

export function StatStrip() {
  return (
    <div
      className="bg-ink border-b border-white/[0.06]"
      aria-label="Key facts about Sawla Films"
    >
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="py-4 md:py-5 text-center border-r border-white/[0.06] last:border-r-0"
            >
              <span className="block font-serif font-light text-[26px] text-gold leading-none mb-1">
                {stat.number}
              </span>
              <span className="text-[9px] font-normal text-white/35 tracking-[0.1em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
