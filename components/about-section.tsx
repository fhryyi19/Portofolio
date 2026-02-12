"use client"

import { Code2, Palette, Rocket } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const cards = [
  {
    icon: Code2,
    title: "Frontend Dev",
    desc: "Building responsive UIs with modern frameworks",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Creating intuitive and beautiful user experiences",
  },
  {
    icon: Rocket,
    title: "Real Projects",
    desc: "Hands-on experience with production-level apps",
  },
]

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-6xl">
        <h2
          className={`font-heading text-3xl font-bold text-foreground sm:text-4xl scroll-hidden-left ${isVisible ? "scroll-visible-left" : ""}`}
        >
          About Me
          <span className="text-primary">.</span>
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div
            className={`scroll-hidden-left ${isVisible ? "scroll-visible-left" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            <p className="text-base leading-relaxed text-muted-foreground">
              {
                "I'm a passionate student currently pursuing Information Technology, with a strong interest in frontend development, UI/UX design, and building real-world web projects. I love turning ideas into clean, functional, and accessible digital experiences."
              }
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {
                "When I'm not coding, you'll find me exploring new design trends, learning about emerging technologies, or collaborating with fellow developers on open-source projects. My goal is to grow into a full-stack developer who creates meaningful products."
              }
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`glass group rounded-xl p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
                style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
              >
                <card.icon
                  size={28}
                  className="text-primary transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="mt-4 font-heading text-sm font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
