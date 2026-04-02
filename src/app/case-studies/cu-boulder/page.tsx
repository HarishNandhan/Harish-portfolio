"use client"

import { AnimatedBackground } from "@/components/ui/AnimatedBackground"
import { CaseStudiesNav } from "@/components/sections/CaseStudiesNav"
import { CUHero } from "@/components/case-studies/cu-boulder/CUHero"
import { CUMetrics } from "@/components/case-studies/cu-boulder/CUMetrics"
import { CUContext } from "@/components/case-studies/cu-boulder/CUContext"
import { CUProject1 } from "@/components/case-studies/cu-boulder/CUProject1"
import { CUProject2 } from "@/components/case-studies/cu-boulder/CUProject2"
import { CUTakeaways } from "@/components/case-studies/cu-boulder/CUTakeaways"

export default function CUBoulderCaseStudy() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900 dark:text-slate-100">
      <AnimatedBackground />
      <div className="relative z-10">
        <CaseStudiesNav />
        <CUHero />
        <CUMetrics />
        <CUContext />
        <CUProject1 />
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(var(--border),0.4)] to-transparent" />
        </div>
        <CUProject2 />
        <CUTakeaways />
      </div>
    </div>
  )
}