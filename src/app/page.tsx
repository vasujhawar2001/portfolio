import About from '@/components/about'
import Contact from '@/components/contact'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Skills from '@/components/skills'


export default function Home() {
  return (
    <main className="flex flex-col items-center px-6 md:px-0">
      <Header />
      <Hero />

      <About />

      <Projects />

      <Skills />

      <Contact />
    </main>
  )
}
