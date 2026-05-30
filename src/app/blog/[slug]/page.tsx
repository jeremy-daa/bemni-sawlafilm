import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'
import { SITE } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      images: [{ url: post.image.srcFull, alt: post.image.alt }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-warm">

      {/* HERO — full-bleed image with dark overlay */}
      <div className="relative bg-ink pt-[80px] overflow-hidden" style={{ minHeight: '420px' }}>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image.srcFull}
            alt={post.image.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-ink/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[860px] mx-auto px-[clamp(20px,4vw,48px)] pt-8 pb-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.1em]">
              <li><Link href="/" className="hover:text-white/60 transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-white/15">›</li>
              <li><Link href="/blog" className="hover:text-white/60 transition-colors">Field Notes</Link></li>
              <li aria-hidden="true" className="text-white/15">›</li>
              <li className="text-white/50 truncate max-w-[200px]">{post.category}</li>
            </ol>
          </nav>

          {/* Category tag */}
          <span className="inline-block text-[10px] font-medium tracking-[0.1em] uppercase text-ember border border-ember/40 bg-ember/[0.08] px-3 py-1 rounded-[2px] mb-5">
            {post.category}
          </span>

          {/* Title */}
          <h1
            className="font-serif font-light text-white leading-[1.1] tracking-[-0.02em] mb-5"
            style={{ fontSize: 'clamp(26px,4vw,46px)' }}
          >
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-white/40 font-light">
            <span>{post.author}</span>
            <span aria-hidden="true" className="w-1 h-1 rounded-full bg-white/20" />
            <span>{post.readingTime}</span>
            <span aria-hidden="true" className="w-1 h-1 rounded-full bg-white/20" />
            <span>Verified {post.lastVerified}</span>
          </div>
        </div>
      </div>

      {/* ARTICLE */}
      <div className="max-w-[860px] mx-auto px-[clamp(20px,4vw,48px)] py-[clamp(40px,6vw,72px)]">

        {/* Producer summary callout */}
        {post.producerSummary && (
          <div className="bg-ember/[0.06] border-l-[3px] border-ember rounded-r-[3px] px-6 py-5 mb-10">
            <p className="text-[10px] font-medium text-ember tracking-[0.12em] uppercase mb-2">
              Producer Summary
            </p>
            <p className="font-serif font-light text-ink text-[18px] italic leading-[1.65]">
              {post.producerSummary}
            </p>
          </div>
        )}

        {/* Body */}
        <article
          className="blog-prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <hr className="border-none border-t border-black/[0.07] my-12" />

        {/* CTA */}
        <div className="bg-ash rounded-[4px] p-8">
          <p className="text-[10px] font-medium text-ember tracking-[0.14em] uppercase mb-3">
            Work with Sawla Films
          </p>
          <h2 className="font-serif font-light text-white text-[26px] italic leading-[1.2] mb-3">
            Ready to plan your Ethiopia production?
          </h2>
          <p className="text-[13px] font-light text-white/55 leading-[1.75] mb-6">
            Share your dates, locations, crew size, equipment notes, and access requirements. We will respond with a practical pathway.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-2 bg-ember text-white text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3 rounded-[2px] hover:bg-ember-glow transition-all hover:-translate-y-px"
            >
              Request a Fixer / Get a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent text-white/65 border border-white/20 text-[11px] font-medium uppercase px-5 py-3 rounded-[2px] hover:border-white/40 hover:text-white transition-all"
            >
              Contact us
            </Link>
          </div>
          <p className="mt-4 text-[11px] text-white/30">{SITE.email}</p>
        </div>

        {/* Back link */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="text-[12px] font-medium text-ember tracking-[0.05em] hover:text-ember/70 transition-colors flex items-center gap-1.5"
          >
            ← Back to all field notes
          </Link>
        </div>
      </div>
    </div>
  )
}
