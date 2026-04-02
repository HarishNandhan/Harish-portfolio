"use client"

import { AnimatedBackground } from "@/components/ui/AnimatedBackground"
import { CaseStudiesNav } from "@/components/sections/CaseStudiesNav"
import { RamsiHero } from "@/components/case-studies/ramsi/RamsiHero"
import { RamsiMetrics } from "@/components/case-studies/ramsi/RamsiMetrics"
import { RamsiProject1 } from "@/components/case-studies/ramsi/RamsiProject1"
import { RamsiProject2 } from "@/components/case-studies/ramsi/RamsiProject2"
import { RamsiTakeaways } from "@/components/case-studies/ramsi/RamsiTakeaways"

export default function RamsiCaseStudy() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900 dark:text-slate-100">
      <AnimatedBackground />
      <div className="relative z-10">
        <CaseStudiesNav />
        <RamsiHero />
        <RamsiMetrics />
        <RamsiProject1 />
        {/* Divider */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(var(--border),0.4)] to-transparent" />
        </div>
        <RamsiProject2 />
        <RamsiTakeaways />
      </div>
    </div>
  )
}