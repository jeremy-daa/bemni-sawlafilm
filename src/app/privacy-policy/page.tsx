import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sawla Films Ethiopia',
  description: 'Privacy policy and data handling procedures for Sawla Films Ethiopia.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    url: '/privacy-policy',
  }
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-warm pt-[120px] pb-24">
      <div className="max-w-[860px] mx-auto px-[clamp(20px,4vw,48px)]">
        <h1 className="font-serif font-light text-ink text-display-md leading-[1.1] tracking-[-0.02em] mb-8">
          Privacy Policy
        </h1>
        
        <div className="blog-prose max-w-none">
          <p className="text-[14px] font-light text-steel leading-[1.8] mb-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>

          <h2 className="font-serif font-light text-[24px] text-ink mb-4">1. Information We Collect</h2>
          <p className="text-[14px] font-light text-steel leading-[1.8] mb-6">
            When you request a quote or contact Sawla Films, we collect personal and production-related information necessary to assess and fulfill your request. This may include your name, email address, phone number, production company details, and project specifics (e.g., shoot dates, locations, equipment lists).
          </p>

          <h2 className="font-serif font-light text-[24px] text-ink mb-4">2. How We Use Your Information</h2>
          <p className="text-[14px] font-light text-steel leading-[1.8] mb-6">
            We use the collected information exclusively to:
          </p>
          <ul className="list-disc pl-5 text-[14px] font-light text-steel leading-[1.8] mb-6 space-y-2">
            <li>Provide accurate production logistics and fixer quotes.</li>
            <li>Communicate with you regarding your production requirements.</li>
            <li>Facilitate filming permits, customs clearances, and local crew sourcing (only when explicitly contracted to do so).</li>
          </ul>

          <h2 className="font-serif font-light text-[24px] text-ink mb-4">3. Confidentiality and NDA Compliance</h2>
          <p className="text-[14px] font-light text-steel leading-[1.8] mb-6">
            We treat all production details as strictly confidential. Sawla Films operates under a default Non-Disclosure Agreement (NDA) policy for all incoming requests. Your project details, talent movements, and proprietary information will never be shared with third parties without your explicit consent, except where required by Ethiopian authorities for the sole purpose of securing necessary permits and clearances.
          </p>

          <h2 className="font-serif font-light text-[24px] text-ink mb-4">4. Data Retention</h2>
          <p className="text-[14px] font-light text-steel leading-[1.8] mb-6">
            We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law.
          </p>

          <h2 className="font-serif font-light text-[24px] text-ink mb-4">5. Contact Us</h2>
          <p className="text-[14px] font-light text-steel leading-[1.8] mb-6">
            If you have questions regarding this Privacy Policy or how your data is handled, please contact us at:
            <br /><br />
            <strong>Sawla Films</strong><br />
            Addis Ababa, Ethiopia<br />
            Email: <a href={`mailto:${SITE.email}`} className="text-ember hover:underline">{SITE.email}</a><br />
            Phone: {SITE.whatsapp1}
          </p>
        </div>
      </div>
    </div>
  )
}
