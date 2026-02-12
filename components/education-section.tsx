"use client"

import { GraduationCap, BookOpen, Award } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function EducationSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="education" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-6xl">
        <h2
          className={`font-heading text-3xl font-bold text-foreground sm:text-4xl scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
        >
          Education
          <span className="text-primary">.</span>
        </h2>
        <p
          className={`mt-3 text-base text-muted-foreground scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          My academic background
        </p>

        <div
          className={`mt-10 max-w-2xl scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="glass group rounded-xl p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 animate-pulse-glow">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  SMK Telkom Bandung
                </h3>
                <p className="mt-1 text-sm text-primary">
                  Software Engineering (Rekayasa Perangkat Lunak) — Currently Enrolled
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Focused on web development, programming fundamentals, database
                  management, and software engineering principles. Actively
                  building real-world projects to complement academic learning.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <BookOpen
                      size={18}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Key Courses
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Web Development, Database Systems, UI/UX Design, Data Structures
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award
                      size={18}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Focus Areas
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Frontend Development, Responsive Design, API Integration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
