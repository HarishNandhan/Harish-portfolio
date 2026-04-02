"use client"

import { AnimatedBackground } from "@/components/ui/AnimatedBackground"
import { CaseStudiesNav } from "@/components/sections/CaseStudiesNav"
import { SCHero } from "@/components/case-studies/supply-chain/SCHero"
import { SCMetrics } from "@/components/case-studies/supply-chain/SCMetrics"
import { SCContext } from "@/components/case-studies/supply-chain/SCContext"
import { SCBuilt } from "@/components/case-studies/supply-chain/SCBuilt"
import { SCArchitecture } from "@/components/case-studies/supply-chain/SCArchitecture"
import { SCDashboard } from "@/components/case-studies/supply-chain/SCDashboard"
import { SCPrediction } from "@/components/case-studies/supply-chain/SCPrediction"
import { SCTechStack } from "@/components/case-studies/supply-chain/SCTechStack"
import { SCTakeaways } from "@/components/case-studies/supply-chain/SCTakeaways"

export default function SupplyChainCaseStudy() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900 dark:text-slate-100">
      <AnimatedBackground />
      <div className="relative z-10">
        <CaseStudiesNav />
        <SCHero />
        <SCMetrics />
        <SCContext />
        <SCBuilt />
        <SCArchitecture />
        <SCDashboard />
        <SCPrediction />
        <SCTechStack />
        <SCTakeaways />
      </div>
    </div>
  )
}