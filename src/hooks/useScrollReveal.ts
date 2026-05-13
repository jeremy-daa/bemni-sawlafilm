'use client'
import { useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.08) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    )

    const targets = el.querySelectorAll<HTMLElement>('.reveal')
    targets.forEach((t) => observer.observe(t))

    // Also observe the container itself if it has the class
    if (el.classList.contains('reveal')) observer.observe(el)

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
