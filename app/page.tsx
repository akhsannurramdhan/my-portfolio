import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Education } from '@/components/portfolio/education'
import { Experience } from '@/components/portfolio/experience'
import { Projects } from '@/components/portfolio/projects'
import { Certifications } from '@/components/portfolio/certifications'
import { Skills } from '@/components/portfolio/skills'
import { Contact } from '@/components/portfolio/contact'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
    </main>
  )
}
