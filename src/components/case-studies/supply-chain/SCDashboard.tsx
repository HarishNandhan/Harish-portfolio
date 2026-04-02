"use client"

import { motion } from "framer-motion"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const kpis = [
  { name: "Total Shipments", desc: "All active shipments tracked in real time" },
  { name: "Delayed Count", desc: "Shipments predicted to arrive more than 0.5 hours late" },
  { name: "On-Time Count", desc: "Shipments within the ±0.5 hour threshold" },
  { name: "Early Count", desc: "Shipments predicted to arrive ahead of schedule" },
  { name: "Delay Probability Score", desc: "ML-generated risk score per shipment from BigQuery ML" },
  { name: "Categorical Breakdown", desc: "Delays segmented by traffic, weather, port congestion buckets" },
]

export function SCDashboard() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">Analytics Dashboard — What Operations Teams Saw</p>
          <h3 className="mt-2 font-heading text-2xl font-semibold text-[rgb(var(--text-1))] md:text-3xl">Real-Time KPIs Tracked in the Admin Portal</h3>
          <p className="mt-2 max-w-2xl text-sm text-[rgb(var(--text-2))]">Every metric below updated live from BigQuery predictions.</p>
        </motion.div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kpis.map((kpi, i) => (
            <motion.div key={kpi.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5, ease }}
              className="glass-panel interactive-lift rounded-xl border border-slate-200/75 p-5 dark:border-slate-700/70">
              <p className="font-heading text-sm font-semibold text-[rgb(var(--text-1))]">{kpi.name}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-[rgb(var(--muted))]">{kpi.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}