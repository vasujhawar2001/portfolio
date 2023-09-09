import About from '@/components/about'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-6 md:px-0">
      <Hero />

      <About />

      <Projects />
    </main>
  )
}
