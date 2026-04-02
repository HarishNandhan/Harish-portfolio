"use client"

import { motion } from "framer-motion"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const reports = [
  { num: "01", name: "P&L Statement by Fiscal Months", question: "Which months are driving revenue and where are costs spiking?", pills: ["Net Sales", "COGS", "Gross Margin", "Quarter Drill-Down"] },
  { num: "02", name: "P&L Statement by Fiscal Years", question: "How has the business grown year over year from 2019 to 2021?", pills: ["YoY Growth %", "Net Sales", "Gross Margin %"] },
  { num: "03", name: "P&L by Different Markets", question: "Which countries are most profitable and where are margins shrinking?", pills: ["GM% by Market", "Net Sales by Region", "Sub-Zone Filter"] },
  { num: "04", name: "Customer Net Sales Performance", question: "Which customers are growing and which ones need attention?", pills: ["Customer Revenue", "YoY Growth %", "2021 vs 2020"] },
  { num: "05", name: "Gross Margin % by Quarters", question: "Where are margins dropping quarter by quarter across sub-zones?", pills: ["GM% Trend", "Quarter Breakdown", "Sub-Zone Segmentation"] },
  { num: "06", name: "Market Performance vs Target", question: "Which markets missed their targets and by how much?", pills: ["Actual vs Target", "Shortfall $", "Shortfall %"] },
]

export function AHReports() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">Reports Built</p>
          <h3 className="mt-2 font-heading text-2xl font-semibold text-[rgb(var(--text-1))] md:text-3xl">Six Business-Facing Analytics Reports</h3>
          <p className="mt-2 max-w-2xl text-sm text-[rgb(var(--text-2))]">Each report answers a specific business question for sales or finance leadership.</p>
        </motion.div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {reports.map((r, i) => (
            <motion.div key={r.num} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5, ease }}
              className="glass-panel interactive-lift rounded-xl border border-slate-200/75 p-5 dark:border-slate-700/70">
              <span className="font-heading text-2xl font-bold text-[rgba(var(--accent),0.3)]">{r.num}</span>
              <p className="mt-1 font-heading text-base font-semibold text-[rgb(var(--text-1))]">{r.name}</p>
              <p className="mt-1.5 text-xs text-[rgb(var(--muted))]">{r.question}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {r.pills.map((p) => (
                  <span key={p} className="rounded-full border border-slate-200/75 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-600/70 dark:bg-slate-900/55 dark:text-slate-300">{p}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}