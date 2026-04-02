"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Briefcase } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const tags = ["Python", "RAG", "Vector Database", "GKE", "Redis", "Google Cloud", "ETL", "Power BI", "Data Pipelines", "Claude 3.5 Sonnet", "Microservices"]

export function BeaconHero() {
  return (
    <section className="relative pb-16 pt-32 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.74, ease }} className="max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-[rgb(var(--muted))]">
            <span className="flex items-center gap-1.5"><Briefcase size={14} />BeaconAI</span>
            <span className="h-1 w-1 rounded-full bg-[rgb(var(--muted))]" />
            <span className="flex items-center gap-1.5"><Calendar size={14} />Jun 2025 – Aug 2025</span>
            <span className="h-1 w-1 rounded-full bg-[rgb(var(--muted))]" />
            <span className="flex items-center gap-1.5"><MapPin size={14} />Denver, CO</span>
          </div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[rgb(var(--accent))]">Data Engineer Intern</p>
          <h1 className="font-heading text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            <span className="gradient-text">AI Implementation Intelligence Platform</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[rgb(var(--text-2))] md:text-lg">
            Built the data pipelines and automated reporting infrastructure that increased lead conversion by 30% and cut operational admin workload by 28%.
          </p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6, ease }} className="mt-7 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full border border-slate-200/75 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-600/70 dark:bg-slate-900/55 dark:text-slate-300">{t}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}