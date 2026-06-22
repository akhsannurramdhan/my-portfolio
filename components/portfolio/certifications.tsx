'use client'

import { useState } from 'react'
import {
  Award,
  Trophy,
  Quote,
  BadgeCheck,
  Maximize2,
  ChevronUp,
  ChevronDown,
} from 'lucide-react'

import {
  CERTIFICATIONS,
  ACHIEVEMENTS,
  type Certification,
} from '@/lib/portfolio-data'

import { Reveal } from './reveal'
import { CertificationModal } from './certification-modal'

export function Certifications() {
  const [active, setActive] = useState<Certification | null>(null)
  const [startIndex, setStartIndex] = useState(0)

  const visibleCertifications = CERTIFICATIONS.slice(
    startIndex,
    startIndex + 4
  )

  const handleUp = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleDown = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, CERTIFICATIONS.length - 4)
    )
  }

  return (
    <section
      id="certifications"
      className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        {/* Certifications */}
        <Reveal className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-6 flex items-center gap-2 text-brand-blue">
            <BadgeCheck className="size-5" />
            <h2 className="text-xl font-semibold text-foreground">
              Certifications
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {/* UP BUTTON */}
            <button
              onClick={handleUp}
              disabled={startIndex === 0}
              className="flex h-10 items-center justify-center gap-2 rounded-xl border border-border bg-background/40 text-sm font-medium transition-all hover:border-brand-blue/40 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronUp className="size-4" />
              Up
            </button>

            {/* CERTIFICATION LIST */}
            <ul className="flex flex-col gap-3">
              {visibleCertifications.map((cert, i) => (
                <Reveal as="li" key={cert.title} delay={i}>
                  <button
                    type="button"
                    onClick={() => setActive(cert)}
                    aria-label={`View details for ${cert.title}`}
                    className="group flex w-full items-start gap-3 rounded-2xl border border-border bg-background/40 p-4 text-left transition-all hover:border-brand-blue/40 hover:bg-background/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60"
                  >
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 text-brand-blue">
                      <Award className="size-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold leading-snug">
                        {cert.title}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>

                    <Maximize2 className="mt-0.5 size-4 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-brand-blue" />
                  </button>
                </Reveal>
              ))}
            </ul>

            {/* DOWN BUTTON */}
            <button
              onClick={handleDown}
              disabled={startIndex >= CERTIFICATIONS.length - 4}
              className="flex h-10 items-center justify-center gap-2 rounded-xl border border-border bg-background/40 text-sm font-medium transition-all hover:border-brand-blue/40 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Down
              <ChevronDown className="size-4" />
            </button>

            {/* COUNTER */}
            <div className="pt-1 text-center text-xs text-muted-foreground">
              Showing {startIndex + 1}–
              {Math.min(startIndex + 4, CERTIFICATIONS.length)} of{' '}
              {CERTIFICATIONS.length}
            </div>
          </div>
        </Reveal>

        {/* Achievements + Quote */}
        <div className="flex flex-col gap-6">
          <Reveal className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl sm:p-8">
            <div className="mb-6 flex items-center gap-2 text-brand-purple">
              <Trophy className="size-5" />
              <h2 className="text-xl font-semibold text-foreground">
                Achievements
              </h2>
            </div>

            <ul className="flex flex-col gap-4">
              {ACHIEVEMENTS.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={i}
                  className="flex items-start gap-3"
                >
                  <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-purple/15 to-brand-blue/15 text-brand-purple">
                    <Trophy className="size-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold leading-snug">
                      {item.title}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal className="rounded-3xl border border-border bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 p-6 backdrop-blur-xl sm:p-8">
            <Quote className="size-6 text-brand-blue" />

            <p className="mt-3 text-pretty text-lg font-medium leading-relaxed">
              Life gave me many problems. Engineering taught me how to solve them.
            </p>

            <div className="mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple" />
          </Reveal>
        </div>
      </div>

      <CertificationModal
        certification={active}
        onClose={() => setActive(null)}
      />
    </section>
  )
}