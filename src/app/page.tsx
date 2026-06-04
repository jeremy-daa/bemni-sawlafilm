import { HeroSection }         from '@/components/sections/HeroSection'
import { StatStrip }           from '@/components/sections/StatStrip'
import { DefinitionSection }   from '@/components/sections/DefinitionSection'
import { QuickAnswersSection } from '@/components/sections/QuickAnswersSection'
import { ProofSection }        from '@/components/sections/ProofSection'
import { ValueSection }        from '@/components/sections/ValueSection'
import { ServicesSection }     from '@/components/sections/ServicesSection'
import { CinematicGallerySection } from '@/components/sections/CinematicGallerySection'
import InteractiveMap          from '@/components/sections/InteractiveMap'
import { ProcessSection }      from '@/components/sections/ProcessSection'
import { GuideSection }        from '@/components/sections/GuideSection'
import { WhySection }          from '@/components/sections/WhySection'
import { CTASection }          from '@/components/sections/CTASection'
import { BlogPreviewSection }  from '@/components/sections/BlogPreviewSection'
import { JsonLd }              from '@/components/seo/JsonLd'
import { homepageSchema }      from '@/lib/schema'

export default async function HomePage() {
  return (
    <>
      <JsonLd
        id="homepage-schema"
        data={homepageSchema(
          'Sawla Films is an Ethiopia-based film fixer and production support company helping international crews with permits, access, logistics, customs, drone coordination, local crew, and on-ground fixing across all 12 regional states. Built for international productions that need clarity, control, and calm execution.'
        )}
      />

      {/* 1. Full-bleed video hero */}
      <HeroSection />

      {/* 2. Proof stats strip */}
      <StatStrip />

      {/* 3. "What is a film fixer?" definition */}
      <DefinitionSection />

      {/* 3.5. The Field Network (Interactive Map) */}
      <InteractiveMap />

      {/* 4. FAQ / Quick answers for producers */}
      <QuickAnswersSection />

      {/* 5. Social proof — quote + client list */}
      <ProofSection />

      {/* 6. Value proposition + deliverables list */}
      <ValueSection />

      {/* 7. Service cards (6 featured) */}
      <ServicesSection />

      {/* 7.5. Cinematic Gallery Showcase */}
      <CinematicGallerySection />

      {/* 8. 4-step process */}
      <ProcessSection />

      {/* 9. Ethiopia filming guide cards */}
      <GuideSection />

      {/* 10. Why choose Sawla Films */}
      <WhySection />

      {/* 11. Blog preview — 3 latest field notes */}
      <BlogPreviewSection />

      {/* 12. Final CTA — feasibility check */}
      <CTASection />
    </>
  )
}
