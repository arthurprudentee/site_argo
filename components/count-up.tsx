'use client'

import { useEffect, useState } from 'react'

/** Número que sobe de 0 até `to` ao carregar (respeita "reduzir movimento"). */
export function CountUp({ to, delay = 900, duration = 1800 }: { to: number; delay?: number; duration?: number }) {
  const [value, setValue] = useState(to)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    setValue(0)
    const timer = window.setTimeout(() => {
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(to * eased))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, delay)

    return () => {
      window.clearTimeout(timer)
      cancelAnimationFrame(frame)
    }
  }, [to, delay, duration])

  return <span className="tabular-nums">{value.toLocaleString('pt-BR')}</span>
}
