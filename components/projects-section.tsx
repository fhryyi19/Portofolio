"use client"

import { ExternalLink, Github, CloudSun, ShoppingBag, Bot, BarChart3 } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const projects = [
  {
    title: "Weather App",
    description:
      "A real-time weather application that uses the Open-Meteo API to display current conditions, forecasts, and an interactive map view.",
    icon: CloudSun,
    gradient: "from-sky-500/20 via-cyan-500/10 to-blue-600/20",
    tech: ["React", "Open-Meteo API", "Leaflet", "CSS"],
    demo: "#",
    github: "https://github.com/fhryyi19",
  },
  {
    title: "Skincare E-commerce",
    description:
      "A full-featured e-commerce website for skincare products with product browsing, cart management, and a responsive shopping experience.",
    icon: ShoppingBag,
    gradient: "from-pink-500/20 via-rose-500/10 to-fuchsia-600/20",
    tech: ["Next.js", "Tailwind CSS", "MySQL"],
    demo: "#",
    github: "https://github.com/fhryyi19",
  },
  {
    title: "AI Chatbot Website",
    description:
      "An AI-powered chatbot interface with real-time conversation, message history, and a sleek dark theme design.",
    icon: Bot,
    gradient: "from-violet-500/20 via-purple-500/10 to-indigo-600/20",
    tech: ["React", "Node.js", "AI API", "CSS"],
    demo: "#",
    github: "https://github.com/fhryyi19",
  },
  {
    title: "Trading Website",
    description:
      "A school project featuring a trading dashboard with real-time charts, portfolio tracking, and market data visualization.",
    icon: BarChart3,
    gradient: "from-emerald-500/20 via-green-500/10 to-teal-600/20",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    demo: "#",
    github: "https://github.com/fhryyi19",
  },
]

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="projects" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-6xl">
        <h2
          className={`font-heading text-3xl font-bold text-foreground sm:text-4xl scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
        >
          Projects
          <span className="text-primary">.</span>
        </h2>
        <p
          className={`mt-3 text-base text-muted-foreground scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          A selection of my recent work
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`glass group overflow-hidden rounded-xl transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className={`relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                <project.icon
                  size={64}
                  className="text-primary/40 transition-all duration-500 group-hover:scale-125 group-hover:text-primary/60"
                  strokeWidth={1.2}
                />
                <div className="absolute inset-0 bg-background/20 transition-opacity duration-300 group-hover:opacity-0" />
              </div>

              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold text-secondary-foreground transition-all duration-300 hover:border-primary/40 hover:scale-105"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
