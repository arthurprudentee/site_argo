import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Argo Personal Gym',
  description: 'A academia para quem leva evolução a sério. Conheça nossos planos e comece sua transformação.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#10110f',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
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
