"use client"

import { motion } from "framer-motion"
import { Users, Calendar, BarChart3, TrendingUp, Shield, FileText } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const cards = [
  { icon: Users, label: "Donor Societies", desc: "Gates Society ($1M+), Boettcher Society ($250K+), Children's Circle of Care ($10K+/year) — each tier needs its own retention dashboard" },
  { icon: Calendar, label: "Signature Events", desc: "Courage Classic, Children's Gala, Philanthropy on the Farm — event ROI tracking connects registration data to gift outcomes" },
  { icon: BarChart3, label: "Campaign Analytics", desc: "Every appeal and campaign in Blackbaud generates data: response rate, average gift, cost per dollar raised — all reportable in Power BI" },
  { icon: TrendingUp, label: "Donor Retention", desc: "Lapse risk identification, YoY giving comparison, upgrade and downgrade tracking — the reports that protect annual revenue" },
  { icon: Shield, label: "Colorado Enterprise Zone", desc: "Tax credit eligibility reporting adds a layer of donor data that needs clean fund designation tracking in Blackbaud" },
  { icon: FileText, label: "Board & Hospital Reports", desc: "Leadership and hospital board reports compiled manually today — the biggest opportunity to save time through automation" },
]

export function CHCFContext() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">Foundation Context</p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-[rgb(var(--text-1))] md:text-3xl">I Have Done My Research. Here Is What I See.</h2>
          <p className="mt-3 max-w-2xl text-sm text-[rgb(var(--text-2))]">This is not generic. This is specific to how the Foundation raises money.</p>
        </motion.div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div key={c.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.55, ease }}
              className="glass-panel interactive-lift rounded-xl border border-slate-200/75 p-5 dark:border-slate-700/70">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(var(--accent),0.12)]"><c.icon size={18} className="text-[rgb(var(--accent))]" /></div>
              <p className="font-heading text-sm font-semibold text-[rgb(var(--text-1))]">{c.label}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-[rgb(var(--muted))]">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}