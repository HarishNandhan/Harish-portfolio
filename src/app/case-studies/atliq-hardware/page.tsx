"use client"

import { AnimatedBackground } from "@/components/ui/AnimatedBackground"
import { CaseStudiesNav } from "@/components/sections/CaseStudiesNav"
import { AHHero } from "@/components/case-studies/atliq/AHHero"
import { AHMetrics } from "@/components/case-studies/atliq/AHMetrics"
import { AHContext } from "@/components/case-studies/atliq/AHContext"
import { AHBuilt } from "@/components/case-studies/atliq/AHBuilt"
import { AHArchitecture } from "@/components/case-studies/atliq/AHArchitecture"
import { AHReports } from "@/components/case-studies/atliq/AHReports"
import { AHDax } from "@/components/case-studies/atliq/AHDax"
import { AHDataModel } from "@/components/case-studies/atliq/AHDataModel"
import { AHTakeaways } from "@/components/case-studies/atliq/AHTakeaways"

export default function AtliqHardwareCaseStudy() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900 dark:text-slate-100">
      <AnimatedBackground />
      <div className="relative z-10">
        <CaseStudiesNav />
        <AHHero />
        <AHMetrics />
        <AHContext />
        <AHBuilt />
        <AHArchitecture />
        <AHReports />
        <AHDax />
        <AHDataModel />
        <AHTakeaways />
      </div>
    </div>
  )
}