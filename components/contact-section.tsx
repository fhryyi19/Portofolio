"use client"

import { useState, type FormEvent } from "react"
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const socials = [
  {
    label: "Email",
    value: "muhammadfachrim236@gmail.com",
    href: "mailto:muhammadfachrim236@gmail.com",
    icon: <Mail size={20} />,
  },
  {
    label: "WhatsApp",
    value: "+62 815 7266 5866",
    href: "https://wa.me/6281572665866",
    icon: <MessageCircle size={20} />,
  },
  {
    label: "GitHub",
    value: "github.com/fhryyi19",
    href: "https://github.com/fhryyi19",
    icon: <Github size={20} />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/fahri",
    href: "https://linkedin.com/in/fahri",
    icon: <Linkedin size={20} />,
  },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const { ref, isVisible } = useScrollReveal()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-6xl">
        <h2
          className={`font-heading text-3xl font-bold text-foreground sm:text-4xl scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
        >
          Contact
          <span className="text-primary">.</span>
        </h2>
        <p
          className={`mt-3 text-base text-muted-foreground scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          {"Let's work together or just say hi"}
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Social links */}
          <div className="flex flex-col gap-4">
            {socials.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass group flex items-center gap-4 rounded-xl p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-x-1 scroll-hidden-left ${isVisible ? "scroll-visible-left" : ""}`}
                style={{ transitionDelay: `${0.15 + i * 0.08}s` }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  {s.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {s.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{s.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className={`glass flex flex-col gap-4 rounded-xl p-8 scroll-hidden-right ${isVisible ? "scroll-visible-right" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/5"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/5"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Your message..."
                className="w-full resize-none rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/5"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95 disabled:opacity-50"
              disabled={submitted}
            >
              {submitted ? (
                "Message Sent!"
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
