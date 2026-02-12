"use client"

import { ArrowDown, Mail, User } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useTypingEffect } from "@/hooks/use-typing-effect"

const phrases = [
  "I build modern websites",
  "I love UI/UX design",
  "I create responsive apps",
]

export function HeroSection() {
  const typedText = useTypingEffect(phrases, 80, 50, 2000)
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-28"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial glow */}
        <div className="absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[140px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

        {/* Floating shapes — pushed to edges to avoid overlapping content */}
        <div className="animate-float absolute left-[5%] top-[15%] h-16 w-16 rounded-xl border border-primary/10 bg-primary/5 hidden sm:block" />
        <div className="animate-float-slow absolute right-[8%] top-[25%] h-12 w-12 rounded-full border border-primary/10 bg-primary/5 hidden sm:block" />
        <div className="animate-float-reverse absolute left-[8%] bottom-[15%] h-10 w-10 rounded-lg border border-primary/10 bg-primary/5 rotate-45 hidden sm:block" />
        <div className="animate-float absolute right-[5%] bottom-[20%] h-14 w-14 rounded-full border border-primary/10 bg-primary/5 hidden sm:block" />
        <div className="animate-float-slow absolute left-[15%] top-[10%] h-8 w-8 rounded-md border border-primary/10 bg-primary/5 rotate-12 hidden md:block" />
        <div className="animate-float-reverse absolute right-[5%] top-[55%] h-6 w-6 rounded-full border border-primary/10 bg-primary/5 hidden md:block" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Profile Photo */}
        <div className="mb-10 opacity-0 animate-fade-in-up">
          <div className="relative inline-block">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/40 via-primary/15 to-primary/40 blur-xl animate-pulse-glow" />

            {/* Spinning border ring */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary via-primary/40 to-primary animate-spin-slow" />

            {/* Photo container */}
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-background sm:h-40 sm:w-40">
              {!imgError ? (
                <Image
                  src="/foto/profile.jpeg"
                  alt="Muhammad Fachri - Web Developer Student"
                  fill
                  priority
                  sizes="(max-width: 640px) 128px, 160px"
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-secondary">
                  <User size={56} className="text-primary/60" strokeWidth={1.2} />
                </div>
              )}
            </div>

            {/* Orbiting dots — contained within safe area */}
            <div className="absolute -inset-3 animate-spin-reverse-slow">
              <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-primary shadow-lg shadow-primary/50" />
              <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary/60" />
            </div>
            <div className="absolute -inset-5 animate-spin-slow">
              <div className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary/40" />
              <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary/70 shadow-lg shadow-primary/30" />
            </div>

            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-emerald-500 sm:h-6 sm:w-6">
              <div className="h-2 w-2 animate-ping rounded-full bg-emerald-300" />
            </div>
          </div>
        </div>

        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary opacity-0 animate-fade-in-up animation-delay-200">
          {"Hello, I'm"}
        </p>

        <h1 className="font-heading text-4xl font-bold leading-tight text-foreground opacity-0 animate-fade-in-up animation-delay-200 sm:text-5xl lg:text-7xl">
          Muhammad Fachri
        </h1>

        <h2 className="mt-4 font-heading text-xl font-semibold text-primary opacity-0 animate-fade-in-up animation-delay-400 sm:text-2xl lg:text-3xl">
          Web Developer Student
        </h2>

        {/* Typing animation */}
        <div className="mt-6 flex h-8 w-full max-w-md items-center justify-center opacity-0 animate-fade-in-up animation-delay-400">
          <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {typedText}
          </span>
          <span className="ml-0.5 inline-block h-5 w-0.5 bg-primary animate-blink" />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-600">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
          >
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            View Projects
          </a>

          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:scale-105"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator — positioned safely below content */}
      <div className="mt-auto pt-8 opacity-0 animate-fade-in-up animation-delay-600">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll</span>
          <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
            <div className="h-2 w-full rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
