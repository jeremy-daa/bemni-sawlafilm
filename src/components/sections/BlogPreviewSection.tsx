import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'

export async function BlogPreviewSection() {
  const allPosts = await getAllPosts()
  // Pick the first 3 posts for the preview
  const posts = allPosts.slice(0, 3)

  return (
    <section className="bg-cream py-[clamp(56px,8vw,96px)]" aria-labelledby="blog-preview-title">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">

        {/* Header row */}
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2.5 text-[10px] font-medium tracking-[0.18em] uppercase text-ember mb-3">
              <span className="w-5 h-px bg-ember" aria-hidden="true" />
              Field notes
            </div>
            <h2
              id="blog-preview-title"
              className="font-serif font-light text-ink text-display-md tracking-[-0.02em] leading-[1.15]"
            >
              Practical production<br />
              <em className="italic">intelligence from the field</em>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-[11px] font-medium text-ember tracking-[0.06em] border-b border-ember/30 pb-0.5 hover:border-ember transition-colors whitespace-nowrap shrink-0"
          >
            All field notes →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-warm border border-black/[0.07] rounded-[4px] overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Image */}
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: '3/2', backgroundColor: post.image.dominantColor }}
              >
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />
                <span className="absolute bottom-3 left-3 text-[10px] font-medium tracking-[0.07em] uppercase px-2.5 py-1 rounded-[2px] bg-black/55 text-white backdrop-blur-sm border border-white/15">
                  {post.category}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif font-light text-ink text-[18px] leading-[1.28] tracking-[-0.01em] mb-2.5 group-hover:text-ember transition-colors">
                  {post.title}
                </h3>
                <p className="text-[13px] font-light text-steel leading-[1.7] flex-1 mb-4 line-clamp-2">
                  {post.metaDescription}
                </p>
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

        {/* Mobile see-all link */}
        <div className="mt-7 sm:hidden text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[12px] font-medium text-ember tracking-[0.06em] border-b border-ember/30 pb-0.5 hover:border-ember transition-colors"
          >
            View all field notes →
          </Link>
        </div>

      </div>
    </section>
  )
}
