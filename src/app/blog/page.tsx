import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Ethiopia Film Production Blog | Field Guides & Insights | Sawla Films',
  description: 'Practical field guides, permit advice, location intelligence, and production insights for international crews filming in Ethiopia.',
  alternates: { canonical: '/blog' },
  openGraph: {
    url: '/blog',
  }
}

const CATEGORY_COLORS: Record<string, string> = {
  'Permits, Customs & Compliance':      'text-ember border-ember/40 bg-ember/[0.07]',
  'Location Scouting & Field Guides':   'text-teal-mid border-teal-mid/40 bg-teal-mid/[0.07]',
  'Production Blueprints':              'text-gold border-gold/40 bg-gold/[0.07]',
  'Insider Fixer Reports':              'text-steel border-black/15 bg-black/[0.04]',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <div className="bg-ink pt-[80px] pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.1em]">
              <li><Link href="/" className="hover:text-white/60 transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-white/15">›</li>
              <li className="text-white/50">Field Notes</li>
            </ol>
          </nav>
          <div className="max-w-[680px]">
            <Eyebrow className="mb-4">Field notes & production guides</Eyebrow>
            <h1
              className="font-serif font-light text-white leading-[1.08] tracking-[-0.02em] mb-4"
              style={{ fontSize: 'clamp(32px,4.5vw,52px)' }}
            >
              Ethiopia on Film —<br />
              <em className="text-gold not-italic italic">Practical Field Intelligence</em>
            </h1>
            <p className="text-[14px] font-light text-white/55 leading-[1.8] mb-7">
              Permit pathways, location guides, customs advice, logistics decisions, and field insights from the Sawla Films production team. Written for producers who need to understand Ethiopia before the shoot starts.
            </p>
          </div>
        </div>
      </div>

      {/* POST GRID */}
      <section className="bg-warm py-[clamp(40px,6vw,72px)]">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-cream border border-black/[0.07] rounded-[4px] overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Cover image */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: '16/9', backgroundColor: post.image.dominantColor }}
                >
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                  />
                  {/* Subtle gradient so category tag is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />
                  {/* Category badge over image */}
                  <span
                    className="absolute bottom-3 left-3 text-[10px] font-medium tracking-[0.08em] uppercase px-2.5 py-1 rounded-[2px] backdrop-blur-sm bg-black/50 text-white border border-white/20"
                  >
                    {post.category}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  {/* Title */}
                  <h2 className="font-serif font-light text-ink text-[19px] leading-[1.25] tracking-[-0.01em] mb-2.5 group-hover:text-ember transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[13px] font-light text-steel leading-[1.7] flex-1 mb-4 line-clamp-3">
                    {post.metaDescription}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-black/[0.06]">
                    <span className="text-[11px] text-silver font-light">{post.readingTime}</span>
                    <span className="text-[11px] font-medium text-ember tracking-[0.04em] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ash py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="max-w-[540px]">
            <h2 className="font-serif font-light text-white text-display-md italic leading-[1.2] mb-4">
              Ready to plan your Ethiopia production?
            </h2>
            <p className="text-[14px] font-light text-white/50 leading-[1.8] mb-6">
              Every production is different. Share your dates, regions, crew size, and access needs and we will give you a practical picture of what your shoot requires.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/request-a-quote"
                className="inline-flex items-center gap-2 bg-ember text-white text-[12px] font-medium tracking-[0.07em] uppercase px-7 py-3.5 rounded-[2px] hover:bg-ember-glow transition-all hover:-translate-y-px"
              >
                Request a Fixer / Get a Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent text-white/65 border border-white/20 text-[12px] font-medium uppercase px-6 py-3.5 rounded-[2px] hover:border-white/40 hover:text-white transition-all"
              >
                Contact us
              </Link>
            </div>
            <p className="mt-4 text-[11px] text-white/28">{SITE.email}</p>
          </div>
        </div>
      </section>

    </div>
  )
}
