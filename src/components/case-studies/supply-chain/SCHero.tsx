"use client"

import { motion } from "framer-motion"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const tags = ["Apache Kafka", "dbt", "Apache Airflow", "Google BigQuery", "BigQuery ML", "Python", "MongoDB", "Streamlit", "ETL", "Docker"]

export function SCHero() {
  return (
    <section className="relative pb-16 pt-32 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.74, ease }} className="max-w-4xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full border border-slate-300/75 bg-slate-100/80 px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-600/70 dark:bg-slate-800/55 dark:text-slate-400">Academic Project</span>
          </div>
          <h1 className="font-heading text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            <span className="gradient-text">Supply Chain Analytics Engine</span>
          </h1>
          <p className="mt-3 font-heading text-lg text-[rgb(var(--text-2))] md:text-xl">End-to-end ETL pipeline with real-time analytics dashboard and ML-powered shipment delay prediction</p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[rgb(var(--text-2))] md:text-lg">
            Built a production-grade ETL pipeline that processes live shipment data, models it with dbt, stores it in BigQuery, and predicts delays with 85%+ accuracy.
          </p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6, ease }} className="mt-7 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full border border-slate-200/75 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-600/70 dark:bg-slate-900/55 dark:text-slate-300">{t}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}