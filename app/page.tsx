import {
  ArrowRight,
  Check,
  ChevronDown,
  Dumbbell,
  MessageCircle,
  Play,
  Quote,
  Star,
  Timer,
  Users,
  Zap,
} from 'lucide-react'

import { CountUp } from '../components/count-up'
import { ScrollReveal } from '../components/scroll-reveal'
import { SiteChrome } from '../components/site-chrome'

const whatsappUrl = 'https://wa.me/5511999999999?text=Olá!%20Quero%20conhecer%20a%20ARGO%20Personal%20Gym.'
const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-01%20at%2011.21.26-kLQXqq7WOdNz5Ye8HV10GySdjKKt10.jpeg'

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
      <section className="relative isolate overflow-hidden min-h-[720px] border-b border-white/10 bg-[#10110f]">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,17,15,.98)_0%,rgba(16,17,15,.82)_38%,rgba(16,17,15,.1)_100%),url('/images/argo-training.png')] bg-cover bg-center hero-bg" />
        <div className="mx-auto flex min-h-[720px] max-w-7xl flex-col px-6 py-7 lg:px-10">
          <header data-reveal="down" className="flex items-center justify-between">
            <a href="#inicio" className="flex items-center gap-3" aria-label="ARGO Personal Gym início">
              <img src={logoUrl} alt="ARGO Personal Gym" className="size-12 rounded-full object-cover" />
              <span className="font-display text-xl font-black uppercase tracking-[-.04em]">ARGO <span className="text-[#f4d20b]">PERSONAL GYM</span></span>
            </a>
            <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
              <a href="#metodo" className="transition hover:text-white">O método</a>
              <a href="#planos" className="transition hover:text-white">Planos</a>
              <a href="#depoimentos" className="transition hover:text-white">Resultados</a>
            </nav>
            <a href={whatsappUrl} className="hidden items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-bold transition hover:border-[#f4d20b] hover:text-[#f4d20b] sm:flex">Fale com a equipe <ArrowRight /></a>
          </header>

          <div id="inicio" className="flex flex-1 items-center py-20">
            <div className="max-w-2xl">
              <div data-reveal data-delay="150" className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-[#f4d20b]"><span className="h-px w-10 bg-[#f4d20b]" /> Treino para quem leva a sério</div>
              <h1 className="font-display max-w-3xl text-6xl font-black uppercase leading-[.92] tracking-[-.065em] sm:text-7xl lg:text-[6.7rem]">
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
              <div data-reveal="fade" data-delay="750" className="mt-12 flex items-center gap-5 text-sm text-white/55"><div className="flex -space-x-2"><span className="size-9 rounded-full border-2 border-[#080808] bg-[#bd9b78]" /><span className="size-9 rounded-full border-2 border-[#080808] bg-[#686d53]" /><span className="size-9 rounded-full border-2 border-[#080808] bg-[#c7b29b]" /></div><span><strong className="text-white">+<CountUp to={2000} /> pessoas</strong> já treinam com propósito</span></div>
            </div>
          </div>
          <div data-reveal="fade" data-delay="1000" className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-white/40"><ChevronDown className="animate-bounce" /> Role para descobrir</div>
        </div>
      </section>

      <section id="metodo" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div data-reveal><p className="eyebrow">Por que a ARGO</p><h2 className="section-title">Mais do que <span>treinar.</span><br />É se transformar.</h2></div><p data-reveal data-delay="200" className="max-w-md text-lg leading-relaxed text-white/55">Você não precisa de mais uma academia. Precisa de um lugar que respeite seu objetivo e te dê as ferramentas certas para chegar lá.</p></div>
        <div className="mt-16 grid gap-4 md:grid-cols-3">{benefits.map(({ icon: Icon, title, text }, index) => <article key={title} data-reveal data-delay={index * 150} className="group border-t border-white/15 pt-6 transition duration-300 hover:-translate-y-1.5 hover:border-[#f4d20b]"><span className="mb-12 flex size-12 items-center justify-center rounded-full border border-white/15 text-[#f4d20b]"><Icon /></span><p className="mb-3 text-sm text-[#f4d20b]">0{index + 1}</p><h3 className="font-display text-2xl font-bold uppercase tracking-tight">{title}</h3><p className="mt-4 text-base leading-relaxed text-white/50">{text}</p></article>)}</div>
      </section>

      <section className="border-y border-white/10 bg-[#f4d20b] px-6 py-10 text-[#080808]"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 md:flex-row md:items-center"><p data-reveal="left" className="font-display text-3xl font-black uppercase tracking-tight md:text-5xl">Disciplina muda tudo.</p><div data-reveal data-delay="250" className="flex items-center gap-3 text-sm font-bold"><Timer /> Seu resultado começa no próximo treino.</div></div></section>

      <section id="planos" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div data-reveal className="max-w-2xl"><p className="eyebrow">Escolha seu ritmo</p><h2 className="section-title">Um plano para cada <span>ambição.</span></h2><p className="mt-6 text-lg text-white/55">Comece do seu jeito. Evolua no seu tempo. Quando estiver pronto para acelerar, a gente acelera junto.</p></div><div className="mt-14 grid gap-5 lg:grid-cols-2">{plans.map((plan) => <article key={plan.name} data-reveal="scale" data-delay={plan.featured ? 200 : 0} className={`relative flex flex-col rounded-2xl border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_-24px_rgba(244,210,11,.3)] lg:p-10 ${plan.featured ? 'border-[#f4d20b] bg-[#17140a]' : 'border-white/15 bg-white/[.03]'}`}>{plan.featured && <span className="absolute right-6 top-6 rounded-full bg-[#f4d20b] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#080808]">Mais escolhido</span>}<p className="eyebrow">{plan.eyebrow}</p><h3 className="mt-4 font-display text-4xl font-black uppercase">{plan.name}</h3><p className="mt-4 max-w-sm text-white/55">{plan.description}</p><div className="my-8 flex items-end gap-1 border-b border-white/10 pb-8"><span className="text-sm text-white/45">R$</span><strong className="font-display text-6xl font-black tracking-tight">{plan.price}</strong><span className="mb-2 text-white/45">{plan.period}</span></div><ul className="flex flex-col gap-4 text-sm text-white/75">{plan.features.map((feature) => <li key={feature} className="flex items-center gap-3"><Check className="text-[#f4d20b]" />{feature}</li>)}</ul><a href={whatsappUrl} className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-bold ${plan.featured ? 'bg-[#f4d20b] text-[#080808] hover:bg-[#ffe45c]' : 'border border-white/20 text-white hover:border-[#f4d20b] hover:text-[#f4d20b]'}`}>Quero esse plano <ArrowRight /></a></article>)}</div></section>

      <section id="depoimentos" className="bg-[#17140a] px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><div data-reveal="left"><p className="eyebrow">Quem vive, recomenda</p><h2 className="section-title">Resultados que <span>falam.</span></h2><div className="mt-7 flex gap-1 text-[#f4d20b]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="fill-current" />)}</div></div><div data-reveal data-delay="200" className="relative max-w-2xl"><Quote className="absolute -left-3 -top-10 size-20 text-[#f4d20b]/15" /><blockquote className="font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">“Eu já tinha tentado várias academias. Na Iron House, pela primeira vez, eu consegui manter o ritmo e ver meu corpo mudando de verdade.”</blockquote><p className="mt-7 text-sm font-bold uppercase tracking-widest text-[#f4d20b]">Marina Alves <span className="ml-3 text-white/35">Aluna há 2 anos</span></p></div></div></section>

      <section className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-36"><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_50%,rgba(244,210,11,.16),transparent_30%)]" /><div data-reveal="scale" className="mx-auto max-w-4xl text-center"><p className="eyebrow justify-center">A sua vez</p><h2 className="font-display text-5xl font-black uppercase leading-[.95] tracking-[-.06em] sm:text-7xl">Pare de adiar a versão que você quer <span className="text-[#f4d20b]">ser.</span></h2><p className="mx-auto mt-7 max-w-xl text-lg text-white/55">Fale com nossa equipe no WhatsApp e descubra qual plano faz sentido para o seu objetivo.</p><a href={whatsappUrl} className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#f4d20b] px-8 py-5 text-lg font-bold text-[#080808] transition hover:bg-[#ffe45c]"><MessageCircle /> Quero começar agora</a><p className="mt-5 text-xs text-white/35">Sem compromisso. Resposta rápida da nossa equipe.</p></div></section>

      <footer data-reveal="fade" className="border-t border-white/10 px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm text-white/40 sm:flex-row"><a href="#inicio" className="flex items-center gap-2 font-display text-lg font-black uppercase text-white"><img src={logoUrl} alt="ARGO Personal Gym" className="size-8 rounded-full object-cover" /> ARGO Personal Gym</a><p>© 2026 ARGO Personal Gym. Treine com propósito.</p><a href="#inicio" className="flex items-center gap-2 hover:text-white">@ironhousegym</a></div></footer>
    </main>
  )
}
