import Header from '@/components/header'
import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs by Vasu',
  description: 'TechNotes and Features written in MD.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
