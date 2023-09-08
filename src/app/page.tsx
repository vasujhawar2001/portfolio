import About from '@/components/about'
import Hero from '@/components/hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />

      <About />
    </main>
  )
}
