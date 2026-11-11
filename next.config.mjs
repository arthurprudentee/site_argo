// No GitHub Pages o site é servido em https://<usuario>.github.io/<repositorio>/.
// O workflow define NEXT_PUBLIC_BASE_PATH=/<repositorio>. Em dev (ou com domínio
// próprio) a variável fica vazia e o site roda na raiz.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
