'use client'

import { GraduationCap } from 'lucide-react'
import { EDUCATIONS } from '@/lib/portfolio-data'
import { Reveal } from './reveal'

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-8 flex items-center gap-2 text-brand-blue">
          <GraduationCap className="size-5" />
          <h2 className="text-2xl font-semibold text-foreground">
            Education
          </h2>
        </Reveal>

        <Reveal className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl sm:p-10">
          <ol className="relative">
            <div className="absolute top-1 bottom-1 left-[5px] w-px bg-border" />

            {EDUCATIONS.map((edu, i) => (
              <Reveal
                as="li"
                key={edu.institution}
                delay={i}
                className="relative pb-10 pl-8 last:pb-0"
              >
                <span className="absolute top-1 left-0 grid size-3 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple ring-4 ring-background" />

                <p className="text-xs font-medium text-brand-blue">
                  {edu.period}
                </p>

                <h3 className="mt-1 text-base font-semibold">
                  {edu.institution}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {edu.degree}
                </p>

                {'gpa' in edu && edu.gpa && (
                  <p className="mt-1 text-sm text-brand-purple">
                    GPA: {edu.gpa}
                  </p>
                )}

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {edu.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}