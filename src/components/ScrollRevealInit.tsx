'use client'

import { useEffect } from 'react'

export function ScrollRevealInit() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.07, rootMargin: '0px 0px -36px 0px' },
    )

    const targets = document.querySelectorAll<HTMLElement>('.reveal')
    targets.forEach((el) => observer.observe(el))

    // Re-scan on DOM mutations (for dynamic content)
    const mutObs = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.visible)').forEach((el) =>
        observer.observe(el),
      )
    })
    mutObs.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutObs.disconnect()
    }
  }, [])

  return null
}
