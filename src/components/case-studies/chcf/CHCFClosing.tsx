"use client"

import { motion } from "framer-motion"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function CHCFClosing() {
  return (
    <section className="pb-24 pt-8 md:pb-32 md:pt-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.78, ease }}
          className="text-center"
        >
          <p className="mx-auto max-w-3xl font-heading text-xl italic leading-relaxed text-[rgb(var(--accent))] md:text-2xl">
            &ldquo;Every dashboard I build here will help the Foundation raise more money for children who cannot wait.&rdquo;
          </p>
          <p className="mt-6 text-sm text-[rgb(var(--muted))]">
            Harish Nandhan Shanmugam — MS Data Science, CU Boulder, May 2026
          </p>
        </motion.div>
      </div>
    </section>
  )
}