export function DefinitionSection() {
  return (
    <section
      className="bg-warm py-10 md:py-16 border-b border-black/[0.07]"
      aria-labelledby="def-title"
    >
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="flex gap-0 items-stretch max-w-[760px] reveal">
          {/* Vertical label */}
          <div
            className="flex-shrink-0 flex items-center pr-5 border-r border-ember"
            aria-hidden="true"
          >
            <span
              className="text-[9px] font-medium text-ember tracking-[0.16em] uppercase"
              style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
            >
              What is a film fixer
            </span>
          </div>
          {/* Content */}
          <div className="pl-7">
            <h2
              id="def-title"
              className="font-serif font-light text-ink text-display-sm italic mb-2.5 leading-[1.3]"
            >
              A film fixer is the person who makes the impossible shot, possible.
            </h2>
            <p className="text-body-md font-light text-steel leading-[1.8]">
              A film fixer handles permits, logistics, access, local crew, and on-ground
              coordination for international productions filming abroad. In Ethiopia — where
              approvals span multiple federal, regional, and site-level authorities — your fixer
              turns a location wish list into approved, scheduled shoot days. On a shoot in
              Ethiopia, your film fixer is the person who makes your production move.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
