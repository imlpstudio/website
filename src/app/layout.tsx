import type { Metadata } from 'next'
import './globals.css'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plusjakarta',
})

export const metadata: Metadata = {
  title: 'IMLP Studio – Product Design & Engineering',
  description:
    'Portfolio of Irving Lamadrid. Human-centered product design, engineering, and prototypes.',
  metadataBase: new URL('https://imlpstudio.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'IMLP Studio',
    description:
      'Human-centered product design, engineering, and prototypes.',
    url: 'https://imlpstudio.com',
    siteName: 'IMLP Studio',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen font-[var(--font-plusjakarta)]">
        <div className="container-px maxw">
          {children}
        </div>
      </body>
    </html>
  )
}
