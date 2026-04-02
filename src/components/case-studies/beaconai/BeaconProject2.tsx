"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  CalendarDays, Clock, DollarSign, AlertCircle,
  GitBranch, RefreshCw, Cloud, Database,
  Server, Cpu, FileOutput, Users
} from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const problems = [
  { icon: CalendarDays, label: "Manual Scheduling", desc: "Shift schedules built manually in spreadsheets every week" },
  { icon: Clock, label: "Timesheet Processing", desc: "Timesheets collected, verified, and calculated by hand" },
  { icon: DollarSign, label: "Payroll Preparation", desc: "Payroll data assembled manually from multiple disconnected sources" },
  { icon: AlertCircle, label: "Error Prone", desc: "Manual data entry across multiple systems caused frequent errors and rework" },
]

const built = [
  { icon: GitBranch, label: "Multi-Agent Data Pipeline", desc: "Separate pipeline agents handling scheduling, timesheets, shifts, and payroll as independent microservices" },
  { icon: RefreshCw, label: "Automated Data Flows", desc: "Each agent pulls operational data, processes it, and pushes outputs downstream automatically" },
  { icon: Cloud, label: "GKE Microservices Deployment", desc: "All pipeline agents containerized and deployed on Google Kubernetes Engine for reliability and scale" },
  { icon: Database, label: "Redis Data Orchestration", desc: "Redis used as the shared data layer coordinating state and task handoffs between agents" },
]

const archNodes = [
  { layer: "EXTRACT", title: "Operational Data Sources", iconComp: Server,
    pills: ["Employee Records", "Shift Logs", "Timesheet Submissions", "Payroll Inputs"],
    accent: "border-blue-400/40 dark:border-blue-400/30", accentBg: "bg-blue-500/10", accentText: "text-blue-600 dark:text-blue-400",
    note: "Live operational data from HR and scheduling systems" },
  { layer: "TRANSFORM", title: "Multi-Agent Processing Layer", iconComp: Cpu,
    pills: ["Scheduling Agent", "Timesheet Agent", "Shift Allocation Agent", "Payroll Prep Agent"],
    accent: "border-indigo-400/40 dark:border-indigo-400/30", accentBg: "bg-indigo-500/10", accentText: "text-indigo-600 dark:text-indigo-400",
    note: "Each agent handles one domain independently as a microservice" },
  { layer: "ORCHESTRATE", title: "Redis Data Layer",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg",
    pills: ["State Management", "Task Queue", "Agent Coordination", "Cache Layer"],
    accent: "border-red-400/40 dark:border-red-400/30", accentBg: "bg-red-500/10", accentText: "text-red-600 dark:text-red-400",
    note: "Redis coordinates data handoffs and task sequencing between all agents" },
  { layer: "DELIVER", title: "Automated Output Generation", iconComp: FileOutput,
    pills: ["Schedule Published", "Timesheets Verified", "Shift Roster Confirmed", "Payroll File Ready"],
    accent: "border-teal-400/40 dark:border-teal-400/30", accentBg: "bg-teal-500/10", accentText: "text-teal-600 dark:text-teal-400",
    note: "Each operational output auto-generated and distributed without manual intervention" },
  { layer: "CONSUME", title: "Operations Teams", iconComp: Users,
    pills: ["Ready-to-use Schedules", "Verified Timesheets", "Payroll Inputs Ready"],
    accent: "border-emerald-400/40 dark:border-emerald-400/30", accentBg: "bg-emerald-500/10", accentText: "text-emerald-600 dark:text-emerald-400",
    note: "Teams receive clean, processed outputs instead of raw data to wrangle" },
]

const arrowLabels = [
  "Raw operational records extracted",
  "Processed, validated operational outputs",
  "Coordinated outputs passed to delivery layer",
  "Outputs delivered to operations teams",
]

const projectMetrics = [
  { label: "Admin Workload Reduction", value: "28%", context: "Hours saved weekly across service operations teams" },
  { label: "Pipeline Agents Deployed", value: "4", context: "Scheduling, timesheets, shifts, payroll — each independent" },
  { label: "Deployment Environment", value: "Production", context: "Live on GKE, not a prototype" },
  { label: "Manual Steps Eliminated", value: "Full cycle", context: "From data collection to output delivery, zero manual steps" },
]

export function BeaconProject2() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">Project 02</p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-[rgb(var(--text-1))] md:text-3xl">Operational Data Automation & Cloud Infrastructure</h2>
          <p className="mt-3 max-w-2xl text-sm text-[rgb(var(--text-2))] md:text-base">Built the multi-agent data pipeline automating scheduling, timesheets, shift allocation, and payroll preparation, deployed on Google Kubernetes Engine.</p>
        </motion.div>

        {/* Problem */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.68, ease }} className="mt-10">
          <h3 className="mb-5 font-heading text-lg font-semibold text-[rgb(var(--text-1))]">The Problem</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p, i) => (
              <motion.div key={p.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5, ease }}
                className="glass-panel interactive-lift rounded-xl border border-slate-200/75 p-4 dark:border-slate-700/70">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10"><p.icon size={18} className="text-amber-600 dark:text-amber-400" /></div>
                <p className="text-sm font-semibold text-[rgb(var(--text-1))]">{p.label}</p>
                <p className="mt-1 text-xs text-[rgb(var(--muted))]">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What I Built */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.68, ease }} className="mt-10">
          <h3 className="mb-5 font-heading text-lg font-semibold text-[rgb(var(--text-1))]">What I Built</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {built.map((b, i) => (
              <motion.div key={b.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5, ease }}
                className="glass-panel interactive-lift group flex items-start gap-4 rounded-xl border border-slate-200/75 p-5 dark:border-slate-700/70">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[rgba(var(--accent),0.12)] transition-colors group-hover:bg-[rgba(var(--accent),0.2)]"><b.icon size={20} className="text-[rgb(var(--accent))]" /></div>
                <div><p className="font-heading text-sm font-semibold text-[rgb(var(--text-1))]">{b.label}</p><p className="mt-0.5 text-xs text-[rgb(var(--muted))]">{b.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Architecture */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.68, ease }} className="mt-12">
          <h3 className="mb-6 font-heading text-lg font-semibold text-[rgb(var(--text-1))]">Architecture</h3>
          <div className="glass-panel-strong overflow-hidden rounded-2xl border border-slate-200/75 dark:border-slate-700/70">
            <div className="px-6 py-8 md:px-10 md:py-10">
              <div className="mx-auto flex max-w-lg flex-col items-center gap-0">
                {archNodes.map((node, i) => (
                  <div key={node.layer + i} className="w-full">
                    <ArchNode node={node} index={i} />
                    {i < archNodes.length - 1 && <ArchArrow label={arrowLabels[i]} delay={i * 0.15 + 0.1} />}
                  </div>
                ))}
              </div>
              {/* GKE Infrastructure Banner */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1, duration: 0.6, ease }} className="mt-6">
                <div className="glass-panel rounded-2xl border-2 border-blue-400/30 bg-blue-500/5 p-5 dark:border-blue-400/25 dark:bg-blue-500/8">
                  <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/15">
                      <Cloud size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">Deployed On</p>
                      <p className="font-heading text-base font-semibold text-[rgb(var(--text-1))]">Google Kubernetes Engine</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-1.5 sm:justify-end">
                      {["Containerized Microservices", "Auto-scaling", "Health Monitoring", "Zero Downtime"].map((p) => (
                        <span key={p} className="rounded-full border border-blue-300/50 bg-blue-50/80 px-2.5 py-1 text-[11px] font-medium text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/15 dark:text-blue-300">{p}</span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-center text-[11px] italic text-[rgb(var(--muted))] sm:text-left">Every pipeline agent runs as an independent container, orchestrated by GKE in production</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.68, ease }} className="mt-12">
          <h3 className="mb-6 font-heading text-lg font-semibold text-[rgb(var(--text-1))]">Key Metrics</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {projectMetrics.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5, ease }}
                className="glass-panel interactive-lift rounded-xl border border-slate-200/75 p-5 dark:border-slate-700/70">
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-[rgb(var(--muted))]">{m.label}</p>
                <p className="mt-1 font-heading text-2xl font-semibold gradient-text">{m.value}</p>
                <p className="mt-1 text-xs text-[rgb(var(--muted))]">{m.context}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Shared Arch Components ── */

function ArchNode({ node, index }: { node: any; index: number }) { // eslint-disable-line
  const IconComp = node.iconComp
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15, duration: 0.6, ease }}
      className={`glass-panel interactive-lift group relative w-full rounded-2xl border-2 p-5 ${node.accent}`}>
      <p className={`text-[10px] font-bold uppercase tracking-[0.18em] ${node.accentText}`}>{node.layer}</p>
      <div className="mt-2 flex items-center gap-3">
        {node.logo ? (
          <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${node.accentBg}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={node.logo} alt={node.title} className="h-5 w-5 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }} />
          </div>
        ) : IconComp ? (
          <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${node.accentBg}`}><IconComp size={16} className={node.accentText} /></div>
        ) : null}
        <h4 className="font-heading text-base font-semibold text-[rgb(var(--text-1))]">{node.title}</h4>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {node.pills.map((pill: string) => (
          <span key={pill} className="rounded-full border border-slate-200/75 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition-all group-hover:border-[rgba(var(--accent),0.3)] dark:border-slate-600/70 dark:bg-slate-900/55 dark:text-slate-300">{pill}</span>
        ))}
      </div>
      {node.note && <p className="mt-2.5 text-[11px] italic text-[rgb(var(--muted))]">{node.note}</p>}
    </motion.div>
  )
}

function ArchArrow({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay, duration: 0.4, ease }} className="flex flex-col items-center py-2">
      <div className="h-5 w-px bg-[rgb(var(--border))]" />
      <p className="my-1 text-[10px] font-medium text-[rgb(var(--muted))]">{label}</p>
      <svg width="12" height="8" viewBox="0 0 12 8" className="text-[rgb(var(--border))]"><path d="M6 8L0 0h12L6 8z" fill="currentColor" /></svg>
    </motion.div>
  )
}