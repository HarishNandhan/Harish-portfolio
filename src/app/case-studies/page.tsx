"use client"

import { AnimatedBackground } from "@/components/ui/AnimatedBackground"
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid"
import { CaseStudiesNav } from "@/components/sections/CaseStudiesNav"
import { NonprofitMission } from "@/components/case-studies/NonprofitMission"

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900 dark:text-slate-100">
      <AnimatedBackground />
      <div className="relative z-10">
        <CaseStudiesNav />
        <NonprofitMission />
        <CaseStudyGrid />
      </div>
    </div>
  )
}