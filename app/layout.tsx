import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Arimo, Barlow_Condensed } from 'next/font/google'
import './globals.css'

// Fontes servidas pelo próprio site (baixadas no build), para o visual ser
// idêntico em Windows, Linux, Mac e celular, sem depender das fontes do sistema.
// Barlow Condensed (títulos, com pesos 700–900 reais) | Arimo = métricas da Arial (texto)
const fontDisplay = Barlow_Condensed({ weight: ['700', '800', '900'], subsets: ['latin'], display: 'swap', variable: '--font-display-face' })
const fontSans = Arimo({ subsets: ['latin'], display: 'swap', variable: '--font-arimo' })

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL // ex.: https://argogym.com.br (sem barra no final)
const title = 'ARGO Personal Gym | Personal training com acompanhamento de verdade'
const description =
  'Treino personalizado com acompanhamento individual. Conheça os planos da ARGO Personal Gym e comece sua evolução.'

export const metadata: Metadata = {
  // Necessário para o Open Graph ter URL absoluta (WhatsApp/Instagram exigem).
  ...(siteUrl && { metadataBase: new URL(siteUrl) }),
  title,
  description,
  applicationName: 'ARGO Personal Gym',
  keywords: ['personal trainer', 'personal gym', 'academia', 'treino personalizado', 'ARGO'],
  icons: {
    icon: [
      { url: `${basePath}/favicon-argo.png`, type: 'image/png', sizes: '512x512' },
      { url: `${basePath}/favicon.ico`, sizes: '48x48' },
    ],
    apple: `${basePath}/apple-icon.png`,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ARGO Personal Gym',
    title,
    description,
    url: `${basePath}/`,
    images: [{ url: `${basePath}/images/hero-gym.png`, width: 1376, height: 768, alt: 'ARGO Personal Gym' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${basePath}/images/hero-gym.png`],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#10110f',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fontDisplay.variable} ${fontSans.variable}`}>
      <body className="antialiased">
        <noscript>
          <style>{'[data-reveal]{opacity:1!important}'}</style>
        </noscript>
        {children}
        {/* Analytics só funciona na Vercel; no GitHub Pages geraria erro 404 */}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  )
}
