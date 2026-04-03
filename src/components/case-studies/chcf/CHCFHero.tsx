"use client"

import { motion } from "framer-motion"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const tags = ["Power BI", "DAX", "ETL Pipelines", "Data Modeling", "SQL", "Blackbaud CRM", "Stakeholder Training", "Automated Reporting", "Donor Analytics"]

export function CHCFHero() {
  return (
    <section className="relative pb-16 pt-32 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.74, ease }} className="max-w-4xl">
          <h1 className="font-heading text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            <span className="gradient-text">What I Will Bring to Children&apos;s Hospital Colorado Foundation</span>
          </h1>
          <p className="mt-4 font-heading text-lg text-[rgb(var(--text-2))] md:text-xl">
            A direct mapping of my data engineering and BI skills to the Foundation&apos;s fundraising analytics needs
          </p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[rgb(var(--text-2))] md:text-lg">
            Every skill listed below has been proven in production. Every mapping below is specific to how the Foundation raises money for children&apos;s healthcare.
          </p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6, ease }} className="mt-7 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full border border-amber-300/60 bg-amber-50/80 px-3 py-1.5 text-xs font-medium text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">{t}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}