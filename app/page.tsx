import {
  ArrowRight,
  Check,
  ChevronDown,
  Dumbbell,
  MessageCircle,
  Play,
  Quote,
  Star,
  Users,
  Zap,
} from 'lucide-react'

import { asset } from '../lib/asset'
import { LocationSection } from '../components/location-section'
import { PhotoCarousel } from '../components/photo-carousel'
import { RunnerCarousel } from '../components/runner-carousel'
import { ScrollReveal } from '../components/scroll-reveal'
import { SiteChrome } from '../components/site-chrome'
import { SocialLinks } from '../components/social-links'

const whatsappUrl = 'https://wa.me/554930110482?text=Olá!%20Quero%20conhecer%20a%20ARGO%20Personal%20Gym.'
const logoUrl = asset('/favicon-argo.png')

const benefits = [
  { icon: Dumbbell, title: 'Estrutura que impõe respeito', text: 'Equipamentos premium, área de força completa e tudo o que você precisa para evoluir de verdade.' },
  { icon: Users, title: 'Comunidade que puxa você', text: 'Treine ao lado de pessoas focadas e encontre o ambiente certo para não desistir no meio do caminho.' },
  { icon: Zap, title: 'Método sem enrolação', text: 'Orientação prática para você executar melhor, acompanhar sua evolução e acelerar seus resultados.' },
]

const plans = [
  { name: 'Essencial', eyebrow: 'Para começar', price: '89', period: '/mês', description: 'O acesso inteligente para criar consistência e treinar no seu ritmo.', features: ['Acesso à musculação', 'Horários flexíveis', 'Avaliação inicial', 'App de treinos'], featured: false },
  { name: 'Performance', eyebrow: 'Mais escolhido', price: '297', period: '/mês', description: 'A experiência completa para quem quer resultado com direção e acompanhamento.', features: ['Tudo do plano Essencial', 'Personal 2x por semana', 'Plano alimentar estratégico', 'Reavaliação mensal'], featured: true },
]

export default function Page() {
  return (
    <main className="overflow-hidden bg-[#10110f] text-[#f4f1e9]">
      <ScrollReveal />
      <SiteChrome whatsappUrl={whatsappUrl} logoUrl={logoUrl} />
      <section className="relative isolate overflow-hidden min-h-[720px] bg-[#10110f]">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-[position:72%_center] lg:bg-center hero-bg"
          style={{ backgroundImage: `linear-gradient(90deg,rgba(16,17,15,.96) 0%,rgba(16,17,15,.78) 40%,rgba(16,17,15,.05) 100%),url(${asset('/images/hero-gym.png')})` }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-[#10110f]" />
        <div className="mx-auto flex min-h-[720px] max-w-7xl flex-col px-6 py-7 lg:px-10">
          <header data-reveal="down" className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#10110f]/55 px-5 py-3 shadow-lg shadow-black/30 backdrop-blur-md">
            <a href="#inicio" className="group flex items-center gap-3" aria-label="ARGO Personal Gym início">
              <img src={logoUrl} alt="ARGO Personal Gym" className="size-16 object-contain transition duration-300 ease-out group-hover:drop-shadow-[0_0_12px_rgba(244,210,11,.55)] motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-110" />
              <span className="font-display -skew-x-6 text-2xl font-black uppercase tracking-[.01em]">ARGO <span className="text-[#f4d20b]">PERSONAL GYM</span></span>
            </a>
            <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wider text-white/70 md:flex">
              <a href="#metodo" className="inline-block -skew-x-6 transition hover:text-white">O método</a>
              <a href="#planos" className="inline-block -skew-x-6 transition hover:text-white">Planos</a>
              <a href="#depoimentos" className="inline-block -skew-x-6 transition hover:text-white">Resultados</a>
            </nav>
            <a href={whatsappUrl} className="hidden items-center gap-2 rounded-full bg-[#f4d20b] px-5 py-2.5 text-sm font-bold text-[#080808] transition hover:bg-[#ffe45c] sm:flex">Fale com a equipe <ArrowRight /></a>
          </header>

          <div id="inicio" className="flex flex-1 items-center py-20">
            <div className="max-w-2xl">
              <div data-reveal data-delay="150" className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-[#f4d20b]"><span className="h-px w-10 bg-[#f4d20b]" /> Treino para quem leva a sério</div>
              <h1 className="font-display max-w-3xl text-6xl font-black uppercase leading-[.92] tracking-[.01em] sm:text-7xl lg:text-[6.7rem]">
                <span className="hero-word" style={{ '--d': '250ms' } as React.CSSProperties}>Seu</span>{' '}
                <span className="hero-word" style={{ '--d': '350ms' } as React.CSSProperties}>próximo</span>{' '}
                <span className="hero-word" style={{ '--d': '450ms' } as React.CSSProperties}>nível</span>{' '}
                <span className="hero-word" style={{ '--d': '550ms' } as React.CSSProperties}>começa</span>{' '}
                <span className="hero-word text-[#f4d20b]" style={{ '--d': '700ms' } as React.CSSProperties}>aqui.</span>
              </h1>
              <p data-reveal data-delay="400" className="mt-8 max-w-lg text-lg leading-relaxed text-white/65">A academia para quem cansou de começar na segunda e desistir na sexta. Estrutura, método e uma comunidade que transforma intenção em resultado.</p>
              <div data-reveal data-delay="550" className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappUrl} className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f4d20b] px-7 py-4 font-bold text-[#080808] transition hover:bg-[#ffe45c]">Quero conhecer a ARGO <ArrowRight /></a>
                <a href="#metodo" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 font-bold text-white transition hover:border-white/50"><Play className="fill-current" /> Como funciona</a>
              </div>
            </div>
          </div>
          <div data-reveal="fade" data-delay="1000" className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-white/40"><ChevronDown className="animate-bounce" /> Role para descobrir</div>
        </div>
      </section>

      <section id="metodo" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div data-reveal><p className="eyebrow">Por que a ARGO</p><h2 className="section-title">Mais do que <span>treinar.</span><br />É se transformar.</h2></div><p data-reveal data-delay="200" className="max-w-md text-lg leading-relaxed text-white/55">Você não precisa de mais uma academia. Precisa de um lugar que respeite seu objetivo e te dê as ferramentas certas para chegar lá.</p></div>
        <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-y-0">{benefits.map(({ icon: Icon, title, text }, index) => <article key={title} data-reveal data-delay={index * 150} className="group border-t border-white/15 pt-6 transition duration-300 md:row-span-4 md:grid md:grid-rows-subgrid hover:-translate-y-1.5 hover:border-[#f4d20b]"><span className="mb-12 flex size-12 items-center justify-center rounded-full border border-white/15 text-[#f4d20b]"><Icon /></span><p className="mb-3 text-sm text-[#f4d20b]">0{index + 1}</p><h3 className="font-display text-2xl font-bold uppercase tracking-[.01em]">{title}</h3><p className="mt-4 text-base leading-relaxed text-white/50">{text}</p></article>)}</div>
      </section>

      <section aria-label="Disciplina muda tudo. Seu resultado começa no próximo treino." className="overflow-hidden border-y border-white/10 bg-[#f4d20b] py-6 text-[#080808]">
        <div aria-hidden className="ticker-track">
          {Array.from({ length: 2 }).map((_, group) => (
            <div key={group} className="flex shrink-0 items-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex shrink-0 items-center">
                  <span className="font-display text-3xl font-black uppercase tracking-[.01em] md:text-5xl">Disciplina muda tudo.</span>
                  <Zap className="mx-8 size-7 fill-current md:size-9" />
                  <span className="font-display text-3xl font-black uppercase tracking-[.01em] md:text-5xl">Seu resultado começa no próximo treino.</span>
                  <Zap className="mx-8 size-7 fill-current md:size-9" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="planos" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div data-reveal className="max-w-2xl"><p className="eyebrow">Escolha seu ritmo</p><h2 className="section-title">Um plano para cada <span>ambição.</span></h2><p className="mt-6 text-lg text-white/55">Comece do seu jeito. Evolua no seu tempo. Quando estiver pronto para acelerar, a gente acelera junto.</p></div><div className="mt-14 grid gap-5 lg:grid-cols-2">{plans.map((plan) => <article key={plan.name} data-reveal="scale" data-delay={plan.featured ? 200 : 0} className={`relative flex flex-col rounded-2xl border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_-24px_rgba(244,210,11,.3)] lg:p-10 ${plan.featured ? 'border-[#f4d20b] bg-[#17140a]' : 'border-white/15 bg-white/[.03]'}`}>{plan.featured && <span className="absolute right-6 top-6 rounded-full bg-[#f4d20b] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#080808]">Mais escolhido</span>}<p className="eyebrow">{plan.eyebrow}</p><h3 className="mt-4 font-display text-4xl font-black uppercase">{plan.name}</h3><p className="mt-4 max-w-sm text-white/55">{plan.description}</p><div className="my-8 flex items-end gap-1 border-b border-white/10 pb-8"><span className="text-sm text-white/45">R$</span><strong className="font-display text-6xl font-black tracking-[.01em]">{plan.price}</strong><span className="mb-2 text-white/45">{plan.period}</span></div><ul className="flex flex-col gap-4 text-sm text-white/75">{plan.features.map((feature) => <li key={feature} className="flex items-center gap-3"><Check className="text-[#f4d20b]" />{feature}</li>)}</ul><a href={whatsappUrl} className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-bold ${plan.featured ? 'bg-[#f4d20b] text-[#080808] hover:bg-[#ffe45c]' : 'border border-white/20 text-white hover:border-[#f4d20b] hover:text-[#f4d20b]'}`}>Quero esse plano <ArrowRight /></a></article>)}</div></section>

      <section id="depoimentos" className="bg-gradient-to-b from-[#10110f] via-[#17140a] to-[#10110f] px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><div data-reveal="left"><p className="eyebrow">Quem vive, recomenda</p><h2 className="section-title">Resultados que <span>falam.</span></h2><div className="mt-7 flex gap-1 text-[#f4d20b]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="fill-current" />)}</div></div><div data-reveal data-delay="200" className="relative max-w-2xl"><Quote className="absolute -left-3 -top-10 size-20 text-[#f4d20b]/15" /><blockquote className="font-display text-3xl font-bold uppercase leading-tight tracking-[.01em] sm:text-4xl">“Eu já tinha tentado várias academias. Na ARGO, pela primeira vez, eu consegui manter o ritmo e ver meu corpo mudando de verdade.”</blockquote><p className="mt-7 text-sm font-bold uppercase tracking-widest text-[#f4d20b]">Marina Alves <span className="ml-3 text-white/35">Aluna há 2 anos</span></p></div></div></section>

      <section className="relative isolate overflow-hidden px-6 py-24 lg:px-10 lg:py-36"><div aria-hidden className="cta-bg pointer-events-none absolute inset-0 -z-10"><RunnerCarousel src={asset('/images/runner-tile.webp')} /><div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_75%_50%,rgba(244,210,11,.16),transparent)]" /></div><div data-reveal="scale" className="mx-auto max-w-4xl text-center"><p className="eyebrow justify-center">A sua vez</p><h2 className="font-display text-5xl font-black uppercase leading-[.95] tracking-[.01em] sm:text-7xl">Pare de adiar a versão que você quer <span className="text-[#f4d20b]">ser.</span></h2><p className="mx-auto mt-7 max-w-xl text-lg text-white/55">Fale com nossa equipe no WhatsApp e descubra qual plano faz sentido para o seu objetivo.</p><a href={whatsappUrl} className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#f4d20b] px-8 py-5 text-lg font-bold text-[#080808] transition hover:bg-[#ffe45c]"><MessageCircle /> Quero começar agora</a><p className="mt-5 text-xs text-white/35">Sem compromisso. Resposta rápida da nossa equipe.</p></div></section>

      <PhotoCarousel
        photos={[
          { src: asset('/images/imagens_carrossel/0I8A5225.jpg'), alt: 'Aluna agachando no smith com acompanhamento do personal' },
          { src: asset('/images/imagens_carrossel/0I8A5685.jpg'), alt: 'Personal orientando aluna em avanço com halteres' },
          { src: asset('/images/imagens_carrossel/0I8A5954.jpg'), alt: 'Personal auxiliando aluno no supino' },
          { src: asset('/images/imagens_carrossel/0I8A6461.jpg'), alt: 'Aluno sorrindo na esteira ao lado do personal' },
          { src: asset('/images/imagens_carrossel/0I8A6781.jpg'), alt: 'Personal corrigindo a postura de aluno na rosca' },
        ]}
      />

      <LocationSection />

      <SocialLinks whatsappUrl={whatsappUrl} />

      <footer data-reveal="fade" className="bg-gradient-to-b from-[#10110f] to-[#080808] px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm text-white/40 sm:flex-row"><a href="#inicio" className="flex items-center gap-2 font-display text-lg font-black uppercase text-white"><img src={logoUrl} alt="ARGO Personal Gym" className="size-9 object-contain" /> <span className="inline-block -skew-x-6">ARGO Personal Gym</span></a><p>© 2026 ARGO Personal Gym. Treine com propósito.</p><a href="https://instagram.com/argo.gym" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><span className="inline-block -skew-x-6">@argo.gym</span></a></div></footer>
    </main>
  )
}
