import type { Metadata } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans'
});

export const metadata: Metadata = {
  title: 'EasyCovers - Product Comparisons & Reviews',
  description: 'Honest product comparisons and reviews. Discover the pros and cons of every product you want to buy.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
