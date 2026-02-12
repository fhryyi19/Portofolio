"use client"

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/fhryyi19",
    icon: <Github size={18} />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/fahri",
    icon: <Linkedin size={18} />,
  },
  {
    label: "Email",
    href: "mailto:muhammadfachrim236@gmail.com",
    icon: <Mail size={18} />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281572665866",
    icon: <MessageCircle size={18} />,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {"© 2026 Muhammad Fachri. All rights reserved."}
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
