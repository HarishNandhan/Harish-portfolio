"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  subtitle?: string
}

const sectionRevealEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.74, ease: sectionRevealEase }}
      className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
    >
      <h2 className="font-heading text-4xl font-semibold leading-tight text-slate-900 dark:text-slate-50 md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <div className="section-divider" />
      </div>
    </motion.div>
  )
}