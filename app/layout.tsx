import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  //title: 'ELIYAS | Solutions Engineer',
	title: "llyaz", 
  description: 'Solutions Engineer specializing in building scalable distributed systems and high-performance web architectures.',
  keywords: 'solutions engineer, web architecture, distributed systems, software development',
  authors: [{ name: 'llyaz' }],
  openGraph: {
    title: 'llyaz | Solutions Engineer',
    description: 'Solutions Engineer specializing in building scalable distributed systems and high-performance web architectures.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  userScalable: true,
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="bg-background text-on-background">
        <div className="page-frame">
          {children}
        </div>
      </body>
    </html>
  )
}
