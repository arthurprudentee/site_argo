'use client'

import { ArrowRight, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

/** Header fixo (aparece ao rolar) + botão flutuante de WhatsApp. */
export function SiteChrome({ whatsappUrl, logoUrl }: { whatsappUrl: string; logoUrl: string }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#10110f]/80 backdrop-blur-md transition-all duration-500 ${
          scrolled ? 'translate-y-0 opacity-100' : 'invisible -translate-y-full opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3" aria-label="ARGO Personal Gym início">
            <img src={logoUrl} alt="" className="size-10 object-contain" />
            <span className="font-display text-lg font-black uppercase tracking-[-.04em]">
              ARGO <span className="text-[#f4d20b]">PERSONAL GYM</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#metodo" className="transition hover:text-white">O método</a>
            <a href="#planos" className="transition hover:text-white">Planos</a>
            <a href="#depoimentos" className="transition hover:text-white">Resultados</a>
          </nav>
          <a
            href={whatsappUrl}
            className="inline-flex items-center gap-2 rounded-full bg-[#f4d20b] px-5 py-2 text-sm font-bold text-[#080808] transition hover:bg-[#ffe45c]"
          >
            Começar <ArrowRight className="size-4" />
          </a>
        </div>
      </div>

      <a
        href={whatsappUrl}
        aria-label="Falar com a equipe no WhatsApp"
        className={`fixed bottom-5 right-5 z-50 transition-all duration-500 ${
          scrolled ? 'translate-y-0 opacity-100' : 'invisible translate-y-6 opacity-0'
        }`}
      >
        <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-40 motion-safe:animate-ping" />
        <span className="relative flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/40 transition hover:scale-110">
          <MessageCircle className="size-7" />
        </span>
      </a>
    </>
  )
}
