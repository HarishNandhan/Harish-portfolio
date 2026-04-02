"use client"

import { motion } from "framer-motion"
import { Package, AlertTriangle, BarChart3 } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const items = [
  { icon: Package, label: "The Business", text: "Atliq Hardware sells hardware products across global markets with customers, regions, and seasonal demand patterns", accent: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  { icon: AlertTriangle, label: "The Problem", text: "Raw sales and cost data spread across multiple files with no unified view of P&L, margins, or performance vs targets", accent: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
  { icon: BarChart3, label: "What This Solves", text: "One Power BI solution connecting all data sources into interactive drill-down dashboards for sales and finance teams", accent: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
]

export function AHContext() {
  return (
    <section className="pb-8 md:pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6, ease }}
              className="glass-panel interactive-lift rounded-2xl border border-slate-200/75 p-5 dark:border-slate-700/70">
              <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${item.accent.split(" ")[0]}`}><item.icon size={18} className={item.accent.split(" ").slice(1).join(" ")} /></div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[rgb(var(--muted))]">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--text-2))]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}