'use client'

import { Briefcase, CheckCircle2, Database, Brain, Eye, Code2 } from 'lucide-react'
import { EXPERIENCES } from '@/lib/portfolio-data'
import { Reveal } from './reveal'

const CORE_COMPETENCIES = [
  {
    title: 'AI & Data Quality',
    description: 'Annotation review, dataset validation, guideline compliance',
    icon: CheckCircle2,
  },
  {
    title: 'Machine Learning',
    description: 'Model training, evaluation, optimization, Deep Learning',
    icon: Brain,
  },
  {
    title: 'Computer Vision',
    description: 'YOLOv8, object detection, image processing, OpenCV',
    icon: Eye,
  },
  {
    title: 'Backend & Database',
    description: 'PHP, CodeIgniter, MySQL, SQL, dashboard integration',
    icon: Database,
  },
  {
    title: 'Software Engineering',
    description: 'System design, web development, documentation, testing',
    icon: Code2,
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-8 flex items-center gap-2 text-brand-blue">
          <Briefcase className="size-5" />
          <h2 className="text-2xl font-semibold text-foreground">Experience</h2>
        </Reveal>

        <Reveal className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr]">
            {/* Timeline */}
            <ol className="relative">
              <div className="absolute top-1 bottom-1 left-[5px] w-px bg-border" />

              {EXPERIENCES.map((exp, i) => (
                <Reveal
                  as="li"
                  key={exp.role}
                  delay={i}
                  className="relative pb-10 pl-8 last:pb-0"
                >
                  <span className="absolute top-1 left-0 grid size-3 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple ring-4 ring-background" />

                  <p className="text-xs font-medium text-brand-blue">
                    {exp.period}
                  </p>

                  <h3 className="mt-1 text-base font-semibold leading-snug text-foreground">
                    {exp.role}
                  </h3>

                  <p className="text-sm text-muted-foreground">{exp.company}</p>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                    {exp.description}
                  </p>
                </Reveal>
              ))}
            </ol>

            {/* Core competencies */}
            <div className="rounded-2xl border border-border bg-background/40 p-5">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Core Competencies
              </h3>

              <div className="space-y-4">
                {CORE_COMPETENCIES.map((item, i) => {
                  const Icon = item.icon

                  return (
                    <Reveal
                      key={item.title}
                      delay={i}
                      className="group rounded-2xl border border-border bg-card/50 p-4 transition hover:border-brand-blue/40 hover:bg-card/80"
                    >
                      <div className="flex gap-3">
                        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                          <Icon className="size-5" />
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-foreground">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}