"use client"

import { motion } from "framer-motion"
import { BookOpen, LayoutDashboard, Users } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const cards = [
  {
    icon: BookOpen, label: "Learn the Blackbaud Data Model",
    accent: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    bullets: [
      "Sit with Justin to walk through how constituents, gifts, campaigns, appeals, and fund designations are structured",
      "Understand how the Foundation codes restricted vs unrestricted gifts and how that flows into reporting",
      "Map the existing Blackbaud tables to the Power BI reports the team currently uses",
    ],
  },
  {
    icon: LayoutDashboard, label: "Understand What Already Exists",
    accent: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    bullets: [
      "Audit the current Power BI dashboards to see what is working, what is outdated, and what is missing entirely",
      "Talk to Chelsey about the reporting priorities leadership cares about most",
      "Identify where staff are going around the data because the current reports do not answer their questions",
    ],
  },
  {
    icon: Users, label: "Listen to the People Who Use the Data",
    accent: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    bullets: [
      "Shadow fundraising officers, marketing managers, and event staff to understand what questions they ask every day",
      "Find out which reports they trust, which ones they ignore, and why",
      "Understand the donor conversations happening in the field so the dashboards reflect what actually matters",
    ],
  },
]

export function CHCFLearn() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">When I Join</p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-[rgb(var(--text-1))] md:text-3xl">Before I Build Anything, I Will Understand Everything.</h2>
          <p className="mt-3 max-w-2xl text-sm text-[rgb(var(--text-2))]">Good data work starts with listening, not building. Here is what I will focus on learning first.</p>
        </motion.div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div key={c.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6, ease }}
              className="glass-panel-strong rounded-2xl border border-slate-200/75 p-6 dark:border-slate-700/70">
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${c.accent.split(" ")[0]}`}>
                <c.icon size={20} className={c.accent.split(" ").slice(1).join(" ")} />
              </div>
              <h3 className="font-heading text-base font-semibold text-[rgb(var(--text-1))]">{c.label}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs leading-relaxed text-[rgb(var(--text-2))]">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[rgb(var(--accent))]" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}