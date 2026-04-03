"use client"

import { AnimatedBackground } from "@/components/ui/AnimatedBackground"
import { CaseStudiesNav } from "@/components/sections/CaseStudiesNav"
import { CHCFHero } from "@/components/case-studies/chcf/CHCFHero"
import { CHCFMission } from "@/components/case-studies/chcf/CHCFMission"
import { CHCFMapping } from "@/components/case-studies/chcf/CHCFMapping"
import { CHCFContext } from "@/components/case-studies/chcf/CHCFContext"
import { CHCFLearn } from "@/components/case-studies/chcf/CHCFLearn"
import { CHCFPersonal } from "@/components/case-studies/chcf/CHCFPersonal"
import { CHCFClosing } from "@/components/case-studies/chcf/CHCFClosing"

export default function CHCFVisionPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900 dark:text-slate-100">
      <AnimatedBackground />
      <div className="relative z-10">
        <CaseStudiesNav />
        <CHCFHero />
        <CHCFMission />
        <CHCFMapping />
        <CHCFContext />
        <CHCFLearn />
        <CHCFPersonal />
        <CHCFClosing />
      </div>
    </div>
  )
}