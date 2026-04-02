"use client"

import { motion } from "framer-motion"
import { Filter, GitBranch, Cpu, BarChart3, Target, TrendingUp } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const cards = [
  { icon: Filter, label: "Power Query ETL Pipeline", desc: "Cleaned and transformed 800K+ rows connecting fact sales, targets, and finance tables" },
  { icon: GitBranch, label: "Star Schema Data Model", desc: "Built relational model linking fact_sales_monthly, ns_targets, and add_finance_data" },
  { icon: Cpu, label: "DAX Measures", desc: "Calculated Net Sales, COGS, Gross Margin %, YoY growth, and variance measures" },
  { icon: BarChart3, label: "P&L Dashboards", desc: "Monthly and yearly P&L with quarter drill-down, dynamic filters, and YoY comparison" },
  { icon: Target, label: "Sales vs Target Tracking", desc: "Market-level actual vs target with shortfall in both dollar and percentage" },
  { icon: TrendingUp, label: "Customer Performance View", desc: "Customer-wise Net Sales trends with YoY % growth across 3 fiscal years" },
]

export function AHBuilt() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">What I Built</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-[rgb(var(--text-1))] md:text-4xl">From Raw CSV Files to Executive Financial Dashboards</h2>
        </motion.div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {cards.map((c, i) => (
            <motion.div key={c.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5, ease }}
              className="glass-panel interactive-lift group flex items-start gap-4 rounded-xl border border-slate-200/75 p-5 dark:border-slate-700/70">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[rgba(var(--accent),0.12)] transition-colors group-hover:bg-[rgba(var(--accent),0.2)]"><c.icon size={20} className="text-[rgb(var(--accent))]" /></div>
              <div><p className="font-heading text-sm font-semibold text-[rgb(var(--text-1))]">{c.label}</p><p className="mt-0.5 text-xs text-[rgb(var(--muted))]">{c.desc}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}