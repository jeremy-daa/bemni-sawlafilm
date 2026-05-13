import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ash flex items-center justify-center px-6 pt-[60px]">
      <div className="text-center max-w-[420px]">
        <span className="font-serif text-[80px] font-light text-ember/20 leading-none block mb-4">
          404
        </span>
        <h1 className="font-serif font-light text-white text-[28px] italic mb-3">
          Page not found
        </h1>
        <p className="text-[13px] font-light text-white/45 leading-[1.75] mb-8">
          This page does not exist or has been moved. Return to the homepage or send us your production brief directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-ember text-white text-[11px] font-medium tracking-[0.08em] uppercase px-5 py-3 rounded-[2px] hover:bg-ember-glow transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/request-a-quote"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white/70 border border-white/20 text-[11px] font-medium tracking-[0.08em] uppercase px-5 py-3 rounded-[2px] hover:border-white/50 hover:text-white transition-all"
          >
            Request a fixer
          </Link>
        </div>
      </div>
    </div>
  )
}
