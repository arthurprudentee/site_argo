import { MapPin, Navigation, Phone } from 'lucide-react'

const addressLines = ['Rua do Comércio, 328', 'Centro', 'Concórdia - SC', 'CEP 89700-000']
const address = addressLines.join(', ') // usado no mapa e nos links de rota
const phone = '(49) 3011-0482'
const phoneHref = 'tel:+554930110482'

const q = encodeURIComponent(address)
const mapEmbed = `https://www.google.com/maps?q=${q}&output=embed`
const googleDirections = `https://www.google.com/maps/dir/?api=1&destination=${q}`
const wazeUrl = `https://waze.com/ul?q=${q}&navigate=yes`

export function LocationSection() {
  return (
    <section id="localizacao" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div data-reveal className="max-w-2xl">
        <p className="eyebrow">Venha nos visitar</p>
        <h2 className="section-title">Onde <span>estamos.</span></h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div data-reveal className="flex flex-col justify-center gap-6 rounded-2xl border border-white/15 bg-white/[.03] p-8">
          <div className="flex gap-4">
            <MapPin className="mt-1 size-5 shrink-0 text-[#f4d20b]" />
            <div>
              <strong className="font-display text-lg font-black uppercase">Endereço</strong>
              <p className="mt-1 flex flex-col text-white/60">
                {addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="mt-1 size-5 shrink-0 text-[#f4d20b]" />
            <div>
              <strong className="font-display text-lg font-black uppercase">Telefone</strong>
              <a href={phoneHref} className="mt-1 block text-white/60 transition hover:text-[#f4d20b]">{phone}</a>
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a
              href={googleDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#f4d20b] px-6 py-3 font-bold text-[#080808] transition hover:bg-[#ffe45c]"
            >
              <Navigation className="size-4" /> Como chegar
            </a>
            <a
              href={wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-bold transition hover:border-[#f4d20b] hover:text-[#f4d20b]"
            >
              Abrir no Waze
            </a>
          </div>
        </div>

        <div data-reveal="scale" className="min-h-[360px] overflow-hidden rounded-2xl border border-white/15">
          <iframe
            title="Mapa com a localização da ARGO Personal Gym"
            src={mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="size-full min-h-[360px] border-0 grayscale invert-[.92] contrast-[.9]"
          />
        </div>
      </div>
    </section>
  )
}
