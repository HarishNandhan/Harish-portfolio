"use client"

import { motion } from "framer-motion"
import { TrendingDown, Target, Send, Users } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const metrics = [
  { icon: TrendingDown, label: "Manual Processing Reduction", value: "35% less" },
  { icon: Target, label: "Planning Accuracy Improvement", value: "25% better" },
  { icon: Send, label: "Report Distribution", value: "Fully automated" },
  { icon: Users, label: "Teams Served", value: "Operations, Finance, Enforcement, Leadership" },
]

export function CUMetrics() {
  return (
    <section className="pb-12 md:pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease }}
              className="glass-panel interactive-lift rounded-2xl border border-slate-200/75 p-5 dark:border-slate-700/70"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[rgb(var(--accent))] to-[rgb(var(--accent-soft))] shadow-lg shadow-slate-900/10">
                <m.icon size={18} className="text-white" />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-[rgb(var(--muted))]">{m.label}</p>
              <p className="mt-1 font-heading text-lg font-semibold text-[rgb(var(--text-1))]">{m.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}