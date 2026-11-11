import type { CSSProperties } from 'react'

/**
 * Fundo animado: fileiras de silhuetas em diagonal que deslizam sem parar
 * (efeito carrossel). Usa só CSS, sem JavaScript.
 *
 * `src` é o "tile" quadrado da figura (public/images/runner-tile.webp).
 * Cada fileira tem altura (--h), velocidade (--dur) e opacidade (--o) próprias,
 * o que cria um efeito de profundidade (paralaxe).
 */
const rows = [
  { top: '8%', h: 150, dur: 70, opacity: 0.07 },
  { top: '30%', h: 230, dur: 48, opacity: 0.14 },
  { top: '60%', h: 170, dur: 62, opacity: 0.09 },
  { top: '82%', h: 120, dur: 80, opacity: 0.06 },
]

export function RunnerCarousel({ src }: { src: string }) {
  return (
    <div aria-hidden className="runner-carousel pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="runner-field">
        {rows.map((row) => (
          <div
            key={row.top}
            className="runner-row"
            style={
              {
                top: row.top,
                '--h': `${row.h}px`,
                '--dur': `${row.dur}s`,
                '--o': row.opacity,
                '--img': `url(${src})`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  )
}
