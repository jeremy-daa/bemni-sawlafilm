'use client'

import { usePathname } from 'next/navigation'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchemaForPath } from '@/lib/schema'

export function BreadcrumbJsonLd() {
  const pathname = usePathname()

  if (!pathname || pathname === '/') return null

  return <JsonLd id="breadcrumb-schema" data={breadcrumbSchemaForPath(pathname)} />
}
