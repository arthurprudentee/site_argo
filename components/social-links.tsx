const socials = [
  {
    name: 'Instagram',
    handle: '@argo.gym',
    href: 'https://instagram.com/argo.gym',
    path: 'M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z',
  },
  {
    name: 'TikTok',
    handle: '@argopersonalgym',
    href: 'https://tiktok.com/@argopersonalgym',
    path: 'M16.6 2h-3.2v13.2a2.8 2.8 0 1 1-2-2.67V9.3a6 6 0 1 0 5.2 5.9V8.6a7.4 7.4 0 0 0 4.3 1.4V6.8A4.3 4.3 0 0 1 16.6 2Z',
  },
  {
    name: 'YouTube',
    handle: 'ARGO Personal Gym',
    href: 'https://youtube.com/@argopersonalgym',
    path: 'M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.3 5 12 5 12 5s-6.3 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.76 2 12 2 12s0 3.24.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.7 19 12 19 12 19s6.3 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.24 22 12 22 12s0-3.24-.4-4.8ZM10 15V9l5.2 3L10 15Z',
  },
  {
    name: 'WhatsApp',
    handle: 'Fale com a equipe',
    href: '',
    path: 'M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3 .78.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06a6.7 6.7 0 0 1-3.3-2.88c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.42-.06-.12-.56-1.35-.76-1.85-.2-.48-.4-.42-.56-.43h-.47c-.16 0-.43.06-.65.3-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.16 1.75 2.67 4.24 3.75 1.58.68 2.2.74 3 .62.49-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.23-.16-.48-.28Z',
  },
]

/** Seção de redes sociais. Troque os links pelos perfis reais. */
export function SocialLinks({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <section id="redes" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div data-reveal className="text-center">
        <p className="eyebrow justify-center">Acompanhe a ARGO</p>
        <h2 className="section-title">Siga a gente nas <span>redes.</span></h2>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {socials.map((s, i) => (
          <a
            key={s.name}
            href={s.href || whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal="scale"
            data-delay={i * 100}
            className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#f4d20b]"
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-[#f4d20b] text-[#080808] transition group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
                <path d={s.path} />
              </svg>
            </span>
            <span className="flex flex-col">
              <strong className="font-display text-lg font-black uppercase">{s.name}</strong>
              <span className="text-sm text-white/50">{s.handle}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
