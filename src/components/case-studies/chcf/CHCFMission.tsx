"use client"

import { motion } from "framer-motion"
import { Heart, TrendingUp } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function CHCFMission() {
  return (
    <section className="pb-12 md:pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.74, ease }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-rose-50/80 via-amber-50/50 to-teal-50/60 p-6 dark:from-rose-500/[0.06] dark:via-amber-500/[0.04] dark:to-teal-500/[0.06] md:p-8"
        >
          <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-rose-100 dark:bg-rose-500/15">
              <Heart size={24} className="text-rose-500" />
            </div>
            <p className="flex-1 text-base leading-relaxed text-[rgb(var(--text-2))] md:text-lg">
              The Foundation raises money so Children&apos;s Hospital Colorado can treat every child, regardless of a family&apos;s ability to pay. Better fundraising analytics means more donors reached, more gifts retained, and more children cared for.
            </p>
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-500/15">
              <TrendingUp size={24} className="text-teal-600 dark:text-teal-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}