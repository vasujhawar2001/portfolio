import Header from '@/components/header'
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
      <body className={`${inter.className} bg-slate-100 text-gray-950 bg-gradient-to-r from-orange-50 via-stone-50 to-gray-50
      pt-24 sm:pt-32`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
