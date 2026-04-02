"use client"

import { motion } from "framer-motion"
import { Server, GitBranch, Cloud, Cpu, Radio, Database, Code, Box } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const tech = [
  { icon: Server, name: "Apache Airflow", desc: "Pipeline orchestration, scheduling, retry logic, incremental processing" },
  { icon: GitBranch, name: "dbt", desc: "SQL-based feature engineering and data transformation layer" },
  { icon: Cloud, name: "Google BigQuery", desc: "Data warehouse storing raw, staged, and transformed shipment tables" },
  { icon: Cpu, name: "BigQuery ML", desc: "In-warehouse ML model training and real-time delay scoring" },
  { icon: Radio, name: "Apache Kafka", desc: "Streaming ingestion layer for reliable event processing" },
  { icon: Database, name: "MongoDB Atlas", desc: "Raw event staging store with processing status tracking" },
  { icon: Code, name: "Python", desc: "Pipeline scripting, data extraction, and Streamlit dashboard" },
  { icon: Box, name: "Docker", desc: "Containerized Airflow deployment for consistent local and cloud runs" },
]

export function SCTechStack() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <h3 className="mb-6 font-heading text-lg font-semibold text-[rgb(var(--text-1))]">Tech Stack</h3>
        </motion.div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {tech.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04, duration: 0.5, ease }}
              className="glass-panel flex items-center gap-3 rounded-xl border border-slate-200/75 p-3 dark:border-slate-700/70">
              <t.icon size={18} className="flex-shrink-0 text-[rgb(var(--accent))]" />
              <div className="min-w-0"><p className="text-sm font-semibold text-[rgb(var(--text-1))]">{t.name}</p><p className="truncate text-xs text-[rgb(var(--muted))]">{t.desc}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}