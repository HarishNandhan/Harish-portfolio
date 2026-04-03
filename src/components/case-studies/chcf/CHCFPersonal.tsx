"use client"

import { motion } from "framer-motion"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function CHCFPersonal() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.78, ease }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-rose-50/60 via-amber-50/40 to-emerald-50/40 p-8 dark:from-rose-500/[0.05] dark:via-amber-500/[0.03] dark:to-emerald-500/[0.04] md:p-12"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">Beyond the Data</p>

          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <p className="text-base leading-relaxed text-[rgb(var(--text-2))] md:text-lg">
              I started my community service with the Junior Red Cross, running health camps in cities where clinical care was almost nonexistent.
            </p>
            <p className="text-base leading-relaxed text-[rgb(var(--text-2))] md:text-lg">
              Working for the Foundation is not a career move. It is a continuation of something I started years ago.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-rose-200/75 bg-rose-50/80 px-4 py-1.5 text-xs font-medium text-rose-700 dark:border-rose-500/25 dark:bg-rose-500/10 dark:text-rose-300">
              Junior Red Cross — Volunteer
            </span>
            <span className="rounded-full border border-emerald-200/75 bg-emerald-50/80 px-4 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-300">
              Enactus — Community Impact Member
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}