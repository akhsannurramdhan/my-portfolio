'use client'

import { Sparkles } from 'lucide-react'
import { SKILL_GROUPS } from '@/lib/portfolio-data'
import { Reveal } from './reveal'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-8 flex items-center gap-2 text-brand-blue">
          <Sparkles className="size-5" />
          <h2 className="text-2xl font-semibold text-foreground">Skills</h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i}
              className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-xl"
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-background/50 px-3 py-1.5 text-sm transition-colors hover:border-brand-blue/40 hover:text-brand-blue"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
