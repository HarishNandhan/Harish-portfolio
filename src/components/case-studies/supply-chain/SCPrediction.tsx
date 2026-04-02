"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const steps = [
  { num: "01", title: "Record Arrives", desc: "Airflow extracts one row from Google Sheets and sends it through Kafka into MongoDB" },
  { num: "02", title: "Features Built", desc: "dbt engineers 40+ features including hour of day, traffic bucket, weather severity, port congestion, and interaction terms" },
  { num: "03", title: "Model Scores It", desc: "BigQuery ML runs delay_regressor_v6 on the feature set and outputs predicted delay hours" },
  { num: "04", title: "Dashboard Updates", desc: "Streamlit reads the prediction table and flags the shipment as DELAYED, ON_TIME, or EARLY in real time" },
]

export function SCPrediction() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">How the Prediction Works</p>
        </motion.div>
        <div className="mt-8 glass-panel overflow-x-auto rounded-2xl border border-slate-200/75 p-5 dark:border-slate-700/70 md:p-6">
          <div className="flex min-w-[700px] items-stretch gap-3">
            {steps.map((step, i) => (
              <div key={step.num} className="flex flex-1 items-center gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5, ease }}
                  className="glass-panel interactive-lift flex-1 rounded-xl border border-slate-200/75 p-4 dark:border-slate-700/65"
                >
                  <span className="font-heading text-2xl font-bold text-[rgba(var(--accent),0.3)]">{step.num}</span>
                  <p className="mt-1 font-heading text-sm font-semibold text-[rgb(var(--text-1))]">{step.title}</p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-[rgb(var(--muted))]">{step.desc}</p>
                </motion.div>
                {i < steps.length - 1 && (
                  <ArrowRight size={16} className="flex-shrink-0 text-[rgb(var(--muted))]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}