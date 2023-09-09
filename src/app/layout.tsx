import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vasu Jhawar',
  description: 'A Software Engineer from India experienced in Java and Full Stack Web Development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-orange-50 via-stone-50 to-gray-50
      `}>
        {children}
      </body>
    </html>
  )
}
