'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'motion/react'
import { FolderGit2, ArrowRight, Maximize2 } from 'lucide-react'
import { PROJECTS, type Project } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { ProjectModal } from './project-modal'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
const [startIndex, setStartIndex] = useState(0)

const visibleProjects = Array.from({ length: 4 }, (_, i) => {
  return PROJECTS[(startIndex + i) % PROJECTS.length]
})

const nextProjects = () => {
  setStartIndex((prev) => (prev + 1) % PROJECTS.length)
}

const prevProjects = () => {
  setStartIndex(
    (prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length
  )
}

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-brand-blue">
            <FolderGit2 className="size-5" />
            <h2 className="text-2xl font-semibold text-foreground">
              Featured Projects
            </h2>
          </div>
          
        </Reveal>

        <div className="relative px-12">
  {/* Previous */}
  <button
    onClick={prevProjects}
    className="absolute left-0 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-3 shadow-lg backdrop-blur transition hover:border-brand-blue/40"
  >
    <ChevronLeft className="size-5" />
  </button>

  {/* Next */}
  <button
    onClick={nextProjects}
    className="absolute right-0 top-1/2 z-20 translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-3 shadow-lg backdrop-blur transition hover:border-brand-blue/40"
  >
    <ChevronRight className="size-5" />
  </button>

  <motion.div
    key={startIndex}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.25 }}
    className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
  >
    {visibleProjects.map((project, i) => (
      <Reveal
        as="article"
        key={`${project.title}-${startIndex}`}
        delay={i}
        className="h-full"
      >
        <motion.button
          type="button"
          onClick={() => setActive(project)}
          whileHover={{ y: -6 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 24,
          }}
          aria-label={`View details for ${project.title}`}
          className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 text-left backdrop-blur-xl transition-colors hover:border-brand-blue/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-lg">
                <Maximize2 className="size-3.5 text-brand-blue" />
                View Details
              </span>
            </div>

            {project.featured && (
              <span className="absolute top-3 left-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-2.5 py-1 text-xs font-medium text-white shadow-lg">
                Featured
              </span>
            )}
          </div>

          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-semibold leading-snug text-balance">
              {project.title}
            </h3>

            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-background/50 px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.button>
      </Reveal>
    ))}
  </motion.div>
</div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
