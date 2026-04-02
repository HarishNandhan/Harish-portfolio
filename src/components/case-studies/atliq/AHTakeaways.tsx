"use client"

import { motion } from "framer-motion"
import { Lightbulb } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const takeaways = [
  "A clean star schema in Power BI makes every DAX measure faster and more reliable.",
  "Business users need answers to specific questions, not raw data dumps.",
  "Variance reporting (actual vs target) is where analytics creates direct business value.",
]

export function AHTakeaways() {
  return (
    <section className="pb-24 pt-8 md:pb-32 md:pt-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}
          className="glass-panel-strong mx-auto max-w-3xl rounded-2xl border border-slate-200/75 p-6 dark:border-slate-700/70 md:p-8">
          <div className="mb-5 flex items-center gap-2">
            <Lightbulb size={18} className="text-[rgb(var(--accent))]" />
            <h3 className="font-heading text-lg font-semibold text-[rgb(var(--text-1))]">Key Takeaways</h3>
          </div>
          <ul className="space-y-3">
            {takeaways.map((t, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5, ease }}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-[rgb(var(--text-2))] md:text-base">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[rgb(var(--accent))]" />
                {t}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}