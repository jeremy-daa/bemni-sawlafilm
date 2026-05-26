import { PROCESS_STEPS } from '@/lib/constants'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function ProcessSection() {
  return (
    <section
      className="bg-ink py-[clamp(56px,8vw,100px)] relative overflow-hidden"
      aria-labelledby="process-title"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-[-100px] -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(211,176,58,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-[-150px] -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">

        <div className="reveal">
          <SectionHeader
            eyebrow="How we work"
            title={
              <>
                We keep production clean<br />
                by working in parallel, not in sequence
              </>
            }
            subtitle="Four disciplined stages. Everything confirmed before the first call time."
            light
          />
        </div>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">

          {/* Connector line — desktop only */}
          <div
            className="process-connector hidden lg:block"
            aria-hidden="true"
          />

          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.n}
              className={`reveal reveal-delay-${i * 100} lg:pr-5 lg:last:pr-0 group`}
            >
              {/* Circle */}
              <div className="w-[42px] h-[42px] rounded-full bg-charcoal border border-ember/50 flex items-center justify-center mb-4 relative z-10 transition-all duration-200 group-hover:border-ember group-hover:bg-ember/10">
                <span className="font-serif text-[17px] font-light text-ember">{step.n}</span>
              </div>
              <h3 className="text-[13px] font-medium text-white mb-2.5 leading-[1.3]">
                {step.title}
              </h3>
              <p className="text-[12px] font-light text-white/40 leading-[1.7]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="reveal mt-10 text-center font-serif font-light text-[15px] text-white/28 italic">
          We do not sell shortcuts. We deliver clarity, preparation, and calm execution —
          so that when the light is perfect and the access is confirmed, your crew is ready.
        </p>
      </div>
    </section>
  )
}
