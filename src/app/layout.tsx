import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Blog de Cursos | Dona Tulipa',
  description:
    'Transforme criatividade em renda com nossos cursos artesanais presenciais. Saboaria, velas, cosméticos e muito mais.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Blog de Cursos | Dona Tulipa',
    description: 'Transforme criatividade em renda com nossos cursos artesanais.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased bg-white text-berry-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

