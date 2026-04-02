"use client"

import { AnimatedBackground } from "@/components/ui/AnimatedBackground"
import { CaseStudiesNav } from "@/components/sections/CaseStudiesNav"
import { BeaconHero } from "@/components/case-studies/beaconai/BeaconHero"
import { BeaconMetrics } from "@/components/case-studies/beaconai/BeaconMetrics"
import { BeaconContext } from "@/components/case-studies/beaconai/BeaconContext"
import { BeaconProject1 } from "@/components/case-studies/beaconai/BeaconProject1"
import { BeaconProject2 } from "@/components/case-studies/beaconai/BeaconProject2"
import { BeaconTakeaways } from "@/components/case-studies/beaconai/BeaconTakeaways"

export default function BeaconAICaseStudy() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900 dark:text-slate-100">
      <AnimatedBackground />
      <div className="relative z-10">
        <CaseStudiesNav />
        <BeaconHero />
        <BeaconMetrics />
        <BeaconContext />
        <BeaconProject1 />
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(var(--border),0.4)] to-transparent" />
        </div>
        <BeaconProject2 />
        <BeaconTakeaways />
      </div>
    </div>
  )
}