export type Photo = { src: string; alt: string }

/**
 * Carrossel automático infinito (estilo "marquee"): as fotos deslizam sem parar
 * da direita para a esquerda. Só CSS. Pausa ao passar o mouse.
 * A lista é duplicada para o loop não ter emenda.
 */
export function PhotoCarousel({ photos }: { photos: Photo[] }) {
  const loop = [...photos, ...photos]

  return (
    <section id="galeria" className="overflow-hidden py-20">
      <div data-reveal className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">Por dentro da ARGO</p>
          <h2 className="section-title">Treino, estrutura e <span>energia.</span></h2>
        </div>
      </div>

      <div className="photo-marquee mt-12">
        <div className="photo-track" style={{ ['--dur' as string]: `${photos.length * 22}s` }}>
          {loop.map((p, i) => (
            <figure
              key={i}
              aria-hidden={i >= photos.length}
              className="aspect-[4/5] w-64 shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:w-72 lg:w-80"
            >
              <img src={p.src} alt={i >= photos.length ? '' : p.alt} loading="lazy" className="size-full object-cover transition duration-500 hover:scale-105" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
