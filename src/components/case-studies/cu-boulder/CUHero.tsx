"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Briefcase } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const tags = [
  "ServiceNow", "Power BI", "DAX", "Python", "ETL",
  "AI Classification", "SQL", "Automated Reporting", "Pandas",
]

export function CUHero() {
  return (
    <section className="relative pb-16 pt-32 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.74, ease }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-[rgb(var(--muted))]">
            <span className="flex items-center gap-1.5"><Briefcase size={14} />CU Boulder Parking Services</span>
            <span className="h-1 w-1 rounded-full bg-[rgb(var(--muted))]" />
            <span className="flex items-center gap-1.5"><Calendar size={14} />Aug 2024 – Present</span>
            <span className="h-1 w-1 rounded-full bg-[rgb(var(--muted))]" />
            <span className="flex items-center gap-1.5"><MapPin size={14} />Boulder, CO</span>
          </div>

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[rgb(var(--accent))]">
            Student Data Engineer
          </p>

          <h1 className="font-heading text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            <span className="gradient-text">Operational Analytics & AI Classification</span>
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[rgb(var(--text-2))] md:text-lg">
            Built the automation and analytics infrastructure that reduced manual processing by 35% and improved planning accuracy by 25%.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-200/75 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-600/70 dark:bg-slate-900/55 dark:text-slate-300">
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}