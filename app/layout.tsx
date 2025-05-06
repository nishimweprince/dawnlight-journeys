import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dawnlight Journeys',
  description: 'Dawnlight Journeys is a travel agency that specializes in providing unforgettable safari experiences in Uganda and Rwanda.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
