import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  //title: 'ELIYAS | Solutions Engineer',
title: "llyaz.me", 
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
  themeColor: '#c6c6c6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="text-on-background min-h-screen">
        <div className="page-frame">
          {children}
        </div>
      </body>
    </html>
  )
}
