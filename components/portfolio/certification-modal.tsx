'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import {
  X,
  Calendar,
  Building2,
  ExternalLink,
  Check,
  Award,
} from 'lucide-react'
import type { Certification } from '@/lib/portfolio-data'

interface CertificationModalProps {
  certification: Certification | null
  onClose: () => void
}

export function CertificationModal({
  certification,
  onClose,
}: CertificationModalProps) {
  const [showImageViewer, setShowImageViewer] = useState(false)

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

    if (certification) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [certification, onClose, showImageViewer])

  return (
    <AnimatePresence>
      {certification && (
        <>
          {/* Main Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <button
              type="button"
              aria-label="Close certification details"
              onClick={onClose}
              className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            />

            {/* Dialog */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="certification-modal-title"
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
                className="absolute top-4 right-4 z-20 inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-md transition-colors hover:bg-background"
              >
                <X className="size-4" />
              </button>

              {/* Scrollable Content */}
              <div className="max-h-[90vh] overflow-y-auto">
                {/* Certificate Image */}
                <div
                  className="relative h-64 w-full cursor-zoom-in bg-background/50"
                  onClick={() => setShowImageViewer(true)}
                >
                  <Image
                    src={certification.image || '/placeholder.svg'}
                    alt={`${certification.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-contain"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />

                  <div className="absolute bottom-3 right-3 rounded-md border border-border bg-background/80 px-2 py-1 text-xs text-foreground backdrop-blur">
                    Click to enlarge
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 text-brand-blue">
                      <Award className="size-5" />
                    </div>

                    <h2
                      id="certification-modal-title"
                      className="text-xl font-semibold text-balance text-foreground"
                    >
                      {certification.title}
                    </h2>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="size-4 text-brand-blue" />
                      {certification.issuer}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="size-4 text-brand-blue" />
                      {certification.year}
                    </span>
                  </div>

                  {certification.description && (
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {certification.description}
                    </p>
                  )}

                  {certification.skills?.length ? (
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-foreground">
                        What I Learned
                      </h3>

                      <ul className="mt-3 grid gap-2">
                        {certification.skills.map((item) => (
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

                  {certification.credentialUrl && (
                    <div className="mt-6">
                      <a
                        href={certification.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-2 text-sm font-medium text-white shadow-lg transition-opacity hover:opacity-90"
                      >
                        <ExternalLink className="size-4" />
                        View Credential
                      </a>
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
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowImageViewer(false)}
              >
                <button
                  type="button"
                  aria-label="Close image viewer"
                  onClick={() => setShowImageViewer(false)}
                  className="absolute top-6 right-6 z-20 rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20"
                >
                  <X className="size-5" />
                </button>

                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative h-[90vh] w-full max-w-6xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={certification.image || '/placeholder.svg'}
                    alt={`${certification.title} certificate`}
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