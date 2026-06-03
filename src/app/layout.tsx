import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import { homeMetadata, homeSchema } from '@/lib/metadata'
import { Navbar }           from '@/components/layout/Navbar'
import { Footer }           from '@/components/layout/Footer'
import { WhatsAppButton }   from '@/components/layout/WhatsAppButton'
import { ScrollRevealInit } from '@/components/ScrollRevealInit'
import { CustomCursor }     from '@/components/ui/CustomCursor'
import '@/styles/globals.css'

/* ── Fonts ─────────────────────────────────────────────────────────────────── */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

/* ── Metadata ───────────────────────────────────────────────────────────────── */
export const metadata: Metadata = homeMetadata

/* ── Layout ─────────────────────────────────────────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* DNS prefetch for analytics */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QCJN482VFT"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QCJN482VFT');
            `,
          }}
        />

        {/* JSON-LD structured data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
          strategy="beforeInteractive"
        />
      </head>

      <body className="bg-cream text-ink antialiased overflow-x-hidden">
        {/* Client-side scroll reveal observer */}
        <ScrollRevealInit />

        {/* Global smooth cursor for non-touch devices */}
        <CustomCursor />

        {/* Navigation */}
        <Navbar />

        {/* Page content */}
        <main id="main-content">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Sticky WhatsApp button */}
        <WhatsAppButton />
      </body>
    </html>
  )
}
