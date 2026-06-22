'use client'

import Image from 'next/image'
import { UserRound, MapPin, GraduationCap } from 'lucide-react'
import { FEATURES, PROFILE } from '@/lib/portfolio-data'
import { Reveal } from './reveal'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          {/* Profile photo */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-background/40 shadow-2xl">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/front-profile.png"
                  alt={`Portrait of ${PROFILE.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 380px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-lg font-semibold text-foreground">
                  {PROFILE.name}
                </p>
                <p className="text-sm text-brand-blue">{PROFILE.label}</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-brand-blue" />
                    {PROFILE.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="size-3.5 text-brand-blue" />
                    GPA {PROFILE.gpa}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* About text + features */}
          <div>
            <div className="flex items-center gap-2 text-brand-blue">
              <UserRound className="size-5" />
              <h2 className="text-xl font-semibold text-foreground">About Me</h2>
            </div>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              {PROFILE.about}
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {FEATURES.map((feature, i) => (
                <Reveal
                  key={feature.title}
                  delay={i}
                  className="group rounded-2xl border border-border bg-background/40 p-5 transition-colors hover:border-brand-blue/40"
                >
                  <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 text-brand-blue">
                    <feature.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
