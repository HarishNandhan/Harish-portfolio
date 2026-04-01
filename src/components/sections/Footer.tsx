"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/data/portfolio"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const footerEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ]

  return (
    <footer className="relative pb-12 pt-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass-panel flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200/75 px-6 py-7 dark:border-slate-700/70 md:flex-row md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.62, ease: footerEase }}
          >
            <a href="#home" className="font-heading text-xl font-semibold gradient-text">
              {personalInfo.name}
            </a>
          </motion.div>

          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel interactive-lift rounded-full border border-slate-200/75 p-3 text-slate-600 hover:text-cyan-700 dark:border-slate-700/65 dark:text-slate-300 dark:hover:text-cyan-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 24, mass: 0.72 }}
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.62, delay: 0.08, ease: footerEase }}
            className="flex items-center gap-1 text-center text-sm text-slate-500 dark:text-slate-400"
          >
            © {currentYear} {personalInfo.fullName}. Made with{" "}
            <Heart size={14} className="text-red-500 fill-red-500" /> All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}