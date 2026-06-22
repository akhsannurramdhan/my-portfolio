'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { PROFILE } from '@/lib/portfolio-data'
import { Github, Linkedin, Instagram } from './brand-icons'

const socialLinks = [
  { icon: Github, href: PROFILE.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: PROFILE.socials.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${PROFILE.email}`, label: 'Email' },
  { icon: Instagram, href: PROFILE.socials.instagram, label: 'Instagram' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-36"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 size-[28rem] rounded-full bg-brand-blue/20 blur-[140px]" />
        <div className="absolute top-20 right-0 size-[26rem] rounded-full bg-brand-purple/20 blur-[140px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium tracking-wider text-muted-foreground uppercase backdrop-blur"
          >
            {PROFILE.label}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-5xl font-bold tracking-tight text-balance sm:text-6xl"
          >
            <span className="block">{PROFILE.firstName}</span>
            <span className="block text-gradient">{PROFILE.lastName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-xl font-medium text-foreground/90"
          >
            {PROFILE.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground"
          >
            {PROFILE.heroText}
          </motion.p>

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.24 }}
  className="mt-8 flex flex-wrap items-center gap-3"
>
  <a
    href="#projects"
    className="group inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-5 text-sm font-medium text-white shadow-lg shadow-brand-blue/25 transition-transform hover:-translate-y-0.5"
  >
    View My Projects
    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
  </a>

  <a
    href="/resume/Muhammad_Akhsan_Nurramdhan_Resume.pdf"
    download
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card/60 px-5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-muted"
  >
    Download Resume
    <Download className="size-4" />
  </a>
</motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex items-center gap-3"
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur transition-colors hover:border-brand-blue/40 hover:text-foreground"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right - portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
        >
          {/* neon ring */}
          <div className="absolute aspect-square w-[88%] rounded-full bg-gradient-to-tr from-brand-blue via-brand-purple to-brand-blue opacity-70 blur-2xl" />
          <div className="absolute aspect-square w-[80%] rounded-full border-2 border-brand-blue/40 [mask-image:radial-gradient(circle,transparent_60%,black_72%)]" />

          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur">
            <Image
              src="/portrait.png"
              alt="Portrait of Muhammad Akhsan Nurramdhan"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 28rem"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* floating stat: GPA */}
         

          {/* floating stat: Focus */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="absolute right-0 bottom-8 rounded-2xl border border-border bg-card/80 px-4 py-3 text-right backdrop-blur-xl"
          >
            <div className="flex items-center justify-end gap-1.5">
              <p className="text-xs text-muted-foreground">Focus</p>
              <span className="size-1.5 rounded-full bg-brand-purple" />
            </div>
            <p className="text-sm font-semibold">ML · CV · DS</p>
            <p className="text-xs text-muted-foreground">Backend · IoT</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
