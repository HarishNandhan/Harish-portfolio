"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const measures = [
  { name: "Net Sales", dax: "SUMX", desc: "Total revenue after discounts across all transactions" },
  { name: "COGS", dax: "SUMX", desc: "Total cost of goods sold combining freight and manufacturing cost" },
  { name: "Gross Margin", dax: "Net Sales - COGS", desc: "Absolute profit before operating expenses" },
  { name: "Gross Margin %", dax: "DIVIDE", desc: "Gross Margin as a percentage of Net Sales" },
  { name: "YoY Net Sales Growth", dax: "DIVIDE + SAMEPERIODLASTYEAR", desc: "Year over year revenue growth percentage" },
  { name: "Net Sales vs Target", dax: "Actual - Target", desc: "Dollar variance between actual performance and sales target" },
  { name: "Target Shortfall %", dax: "DIVIDE", desc: "Percentage gap between actual and target sales" },
  { name: "GM% by Quarter", dax: "CALCULATE + DATEADD", desc: "Gross margin percentage filtered to specific fiscal quarter" },
]

export function AHDax() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">Key DAX Measures</p>
          <h3 className="mt-2 font-heading text-2xl font-semibold text-[rgb(var(--text-1))] md:text-3xl">Business Logic Built in DAX</h3>
          <p className="mt-2 max-w-2xl text-sm text-[rgb(var(--text-2))]">Every number in the dashboards is driven by a defined DAX measure, not a hard-coded value.</p>
        </motion.div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {measures.map((m, i) => (<DaxCard key={m.name} m={m} index={i} />))}
        </div>
      </div>
    </section>
  )
}

function DaxCard({ m, index }: { m: typeof measures[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: 0.5, ease }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="glass-panel interactive-lift relative cursor-default overflow-hidden rounded-xl border border-slate-200/75 p-5 dark:border-slate-700/70">
      <div className="transition-opacity duration-250" style={{ opacity: hovered ? 0.15 : 1 }}>
        <p className="font-heading text-sm font-semibold text-[rgb(var(--text-1))]">{m.name}</p>
        <span className="mt-2 inline-block rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-medium text-[rgb(var(--accent))] dark:bg-slate-800">{m.dax}</span>
        <p className="mt-2 text-xs leading-relaxed text-[rgb(var(--muted))]">{m.desc}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-5 transition-opacity duration-250" style={{ opacity: hovered ? 1 : 0 }}>
        <div className="text-center">
          <span className="inline-block rounded-md bg-[rgba(var(--accent),0.15)] px-3 py-1 font-mono text-sm font-semibold text-[rgb(var(--accent))]">{m.dax}</span>
          <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--text-2))]">{m.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}