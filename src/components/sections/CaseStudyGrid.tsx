"use client"

import { motion } from "framer-motion"
import { caseStudies } from "@/data/portfolio"
import { CaseStudyTile } from "@/components/ui/CaseStudyTile"

const revealEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function CaseStudyGrid() {
  const liveCaseStudies = caseStudies.filter((study) => study.isLive !== false)

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.74, ease: revealEase }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <h1 className="font-heading text-4xl font-semibold leading-tight text-slate-900 dark:text-slate-50 md:text-5xl">
            <span className="gradient-text">Work Portfolio</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
            End-to-end data analytics, pipeline engineering, and AI systems I&apos;ve designed and delivered
          </p>
          <p className="mt-3 text-sm text-[rgb(var(--muted))]">
            Click any case study to explore the full story
          </p>
          <div className="mt-6 flex justify-center">
            <div className="section-divider" />
          </div>
        </motion.div>

        {/* Tiles Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {liveCaseStudies.map((study, index) => (
            <CaseStudyTile
              key={study.id}
              id={study.id}
              icon={study.icon}
              companyLabel={study.companyLabel}
              title={study.title}
              description={study.description}
              keyMetric={study.keyMetric}
              secondaryMetric={study.secondaryMetric}
              techBadges={study.techBadges}
              href={study.href}
              special={study.special}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}