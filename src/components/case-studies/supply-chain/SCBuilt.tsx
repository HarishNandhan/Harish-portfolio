"use client"

import { motion } from "framer-motion"
import { FileSpreadsheet, Radio, Database, Cloud, GitBranch, Cpu } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const cards = [
  { icon: FileSpreadsheet, label: "Data Extraction", desc: "Airflow reads shipment records from Google Sheets incrementally, row by row" },
  { icon: Radio, label: "Streaming Ingestion", desc: "Confluent Kafka streams each record through the pipeline as it arrives" },
  { icon: Database, label: "Raw Storage", desc: "MongoDB stores each event in nested JSON with processing status tracking" },
  { icon: Cloud, label: "BigQuery Data Warehouse", desc: "Flattened records loaded into BigQuery partitioned tables for analytics queries" },
  { icon: GitBranch, label: "dbt Transformation", desc: "40+ features engineered including temporal patterns, interaction terms, and categorical buckets" },
  { icon: Cpu, label: "BigQuery ML Prediction", desc: "Linear regression model trained inside BigQuery predicts delay hours per shipment" },
]

export function SCBuilt() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">What I Built</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-[rgb(var(--text-1))] md:text-4xl">Six-Stage Automated Pipeline</h2>
          <p className="mt-2 text-base text-[rgb(var(--text-2))]">From raw entry to prediction.</p>
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