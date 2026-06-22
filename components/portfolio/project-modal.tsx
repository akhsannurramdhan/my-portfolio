'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import {
  X,
  Calendar,
  UserRound,
  ExternalLink,
  Check,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

import { Github } from './brand-icons'
import type { Project } from '@/lib/portfolio-data'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
 const [showImageViewer, setShowImageViewer] = useState(false)
 const [currentImage, setCurrentImage] = useState(0)

 const images =
  project?.images && project.images.length > 0
    ? project.images
    : project
      ? [project.image]
      : []

const nextImage = () => {
  if (!images.length) return

  setCurrentImage((prev) => (prev + 1) % images.length)
}

const prevImage = () => {
  if (!images.length) return

  setCurrentImage(
    (prev) => (prev - 1 + images.length) % images.length
  )
}
  useEffect(() => {
  setCurrentImage(0)
}, [project])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        if (showImageViewer) {
          setShowImageViewer(false)
        } else {
          onClose()
        }
      }
    }

    if (project) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose, showImageViewer])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Main Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <button
              type="button"
              aria-label="Close project details"
              onClick={onClose}
              className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 26,
              }}
              className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 z-30 inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-md transition-colors hover:bg-background"
              >
                <X className="size-4" />
              </button>

              {/* Scrollable Content */}
              <div className="max-h-[90vh] overflow-y-auto">
                {/* Project Image */}
                <div className="relative h-56 w-full bg-background/50">
                  <button
                    type="button"
                    onClick={() => setShowImageViewer(true)}
                    className="absolute inset-0 z-10"
                    aria-label="View project image"
                  />

                  <Image
                    src={images[currentImage] || '/placeholder.svg'}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-contain p-4"
                    priority
                    />
                    {images.length > 1 && (
                  <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg backdrop-blur"
                >
                  <ChevronLeft className="size-4" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg backdrop-blur"
                >
                  <ChevronRight className="size-4" />
                </button>
              </>
            )}

                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />

                  
                    {images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                        {images.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              setCurrentImage(idx)
                            }}
                            className={`h-2 rounded-full transition-all ${
                              currentImage === idx
                                ? 'w-6 bg-white'
                                : 'w-2 bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  

                    {project.featured && (
                      <span className="absolute top-4 left-4 z-20 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-2.5 py-1 text-xs font-medium text-white shadow-lg">
                      Featured
                      </span>
                     )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2
                    id="project-modal-title"
                    className="text-xl font-semibold text-balance text-foreground"
                  >
                    {project.title}
                  </h2>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    {project.year && (
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="size-4 text-brand-blue" />
                        {project.year}
                      </span>
                    )}

                    {project.role && (
                      <span className="inline-flex items-center gap-1.5">
                        <UserRound className="size-4 text-brand-blue" />
                        {project.role}
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {project.longDescription || project.description}
                  </p>

                  {project.highlights?.length ? (
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-foreground">
                        Key Highlights
                      </h3>

                      <ul className="mt-3 grid gap-2">
                        {project.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                          >
                            <Check className="mt-0.5 size-4 shrink-0 text-brand-blue" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-foreground">
                      Tech Stack
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
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

                  {(project.github || project.demo) && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand-blue/40 hover:text-brand-blue"
                        >
                          <Github className="size-4" />
                          View Code
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-2 text-sm font-medium text-white shadow-lg transition-opacity hover:opacity-90"
                        >
                          <ExternalLink className="size-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Fullscreen Image Viewer */}
          <AnimatePresence>
            {showImageViewer && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button
                  type="button"
                  onClick={() => setShowImageViewer(false)}
                  className="absolute inset-0"
                  aria-label="Close image viewer"
                />

                <button
                  type="button"
                  onClick={() => setShowImageViewer(false)}
                  className="absolute top-6 right-6 z-20 rounded-full bg-white/10 p-3 backdrop-blur-md"
                >
                  <X className="size-5 text-white" />
                </button>

                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  className="relative z-10 h-[90vh] w-[90vw]"
                >
                  {images.length > 1 && (
  <>
    <button
      type="button"
      onClick={prevImage}
      className="absolute left-6 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur"
    >
      <ChevronLeft className="size-5 text-white" />
    </button>

    <button
      type="button"
      onClick={nextImage}
      className="absolute right-6 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur"
    >
      <ChevronRight className="size-5 text-white" />
    </button>
  </>
)}
                  <Image
  src={images[currentImage] || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  )
}