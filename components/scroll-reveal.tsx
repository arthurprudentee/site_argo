'use client'

import { useEffect } from 'react'

/**
 * Revela com animação todo elemento marcado com `data-reveal`
 * assim que ele entra na tela (inclusive os do topo, ao carregar).
 *
 * Uso: <div data-reveal data-delay="200" /> ou data-reveal="left | down | scale | fade"
 */
export function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.style.setProperty('--reveal-delay', `${el.dataset.delay ?? 0}ms`)
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
