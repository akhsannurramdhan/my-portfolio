'use client'

import { Mail, MapPin } from 'lucide-react'
import { PROFILE } from '@/lib/portfolio-data'
import { Github, Linkedin } from './brand-icons'
import { Reveal } from './reveal'

const socials = [
  { icon: Github, href: PROFILE.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: PROFILE.socials.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${PROFILE.email}`, label: 'Email' },
]

export function Contact() {
  return (
    <footer id="contact" className="scroll-mt-24 px-4 pt-16 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Let&apos;s Connect</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                I&apos;m open to opportunities and collaborations.
              </p>
            </div>

            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-start gap-3 transition-colors hover:text-brand-blue"
            >
              <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 text-brand-blue">
                <Mail className="size-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium break-all">{PROFILE.email}</p>
              </div>
            </a>

            <div className="flex items-start gap-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 text-brand-blue">
                <MapPin className="size-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">{PROFILE.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple text-white shadow-lg shadow-brand-blue/20 transition-transform hover:-translate-y-0.5"
                >
                  <s.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
