"use client"

import { motion } from "framer-motion"
import { Truck, AlertTriangle, Zap } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const items = [
  { icon: Truck, label: "The Problem", text: "No real-time visibility into shipment status, delays only discovered after they happened", accent: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  { icon: AlertTriangle, label: "Why It Is Hard", text: "Delay signals buried across live events, weather feeds, carrier data, and historical patterns", accent: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
  { icon: Zap, label: "What This Solves", text: "Automated pipeline from raw data to delay risk score, with a live analytics dashboard for operations teams", accent: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
]

export function SCContext() {
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