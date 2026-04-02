"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  EyeOff, FileText, Send, TrendingUp, Database, BarChart3,
  FileCheck, Server, Users, LayoutDashboard, FileCog, RefreshCw
} from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const problems = [
  { icon: EyeOff, label: "No Visibility", desc: "Leadership had no real-time view of operational KPIs" },
  { icon: FileText, label: "Manual Reports", desc: "Equipment planning documents written by hand for every event" },
  { icon: Send, label: "Manual Distribution", desc: "Reports emailed manually to operations and enforcement teams" },
  { icon: TrendingUp, label: "No Planning Data", desc: "No historical data to forecast equipment needs accurately" },
]

const built = [
  { icon: Database, label: "ETL Pipeline", desc: "Connected ServiceNow event data, financial records, and enforcement metrics into one pipeline" },
  { icon: BarChart3, label: "Power BI Dashboard", desc: "Live KPI dashboard for leadership with real-time operational visibility" },
  { icon: FileCheck, label: "AI Equipment Drafts", desc: "AI reads event specs and auto-generates equipment requirement documents" },
  { icon: Send, label: "Automated Distribution", desc: "Reports auto-sent to operations and enforcement teams on schedule" },
]

const archNodes = [
  { layer: "EXTRACT", title: "Data Sources", logo: null, useGrid: true,
    pills: ["ServiceNow Event Data", "Financial Records", "Enforcement Metrics"],
    accent: "border-blue-400/40 dark:border-blue-400/30", accentBg: "bg-blue-500/10", accentText: "text-blue-600 dark:text-blue-400",
    note: "Three separate operational systems feeding one pipeline" },
  { layer: "TRANSFORM", title: "Python ETL Layer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    pills: ["Data Cleaning", "Schema Normalization", "Table Joins", "KPI Calculation"],
    accent: "border-blue-400/40 dark:border-blue-400/30", accentBg: "bg-blue-500/10", accentText: "text-blue-600 dark:text-blue-400",
    note: "All three sources unified into one clean data model" },
  { layer: "LOAD", title: "Power BI Data Model",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    pills: ["Star Schema", "DAX Measures", "Scheduled Refresh", "Row-Level Security"],
    accent: "border-yellow-400/40 dark:border-yellow-400/30", accentBg: "bg-yellow-500/10", accentText: "text-yellow-600 dark:text-yellow-400",
    note: "Semantic layer with all KPI measures defined in DAX" },
  { layer: "VISUALIZE", title: "Leadership Dashboard", logo: null, iconComp: LayoutDashboard,
    pills: ["Event KPIs", "Financial Metrics", "Enforcement Stats", "Bottleneck Alerts"],
    accent: "border-teal-400/40 dark:border-teal-400/30", accentBg: "bg-teal-500/10", accentText: "text-teal-600 dark:text-teal-400",
    note: "Leadership monitors campus operations in real time" },
]

const branchNodes = [
  { layer: "AUTOMATE", title: "AI Equipment Report Generator", logo: null, iconComp: FileCog,
    pills: ["Event Spec Parsing", "Equipment Draft Generation", "Auto-Distribution"],
    accent: "border-purple-400/40 dark:border-purple-400/30", accentBg: "bg-purple-500/10", accentText: "text-purple-600 dark:text-purple-400",
    note: "AI reads event details and drafts equipment needs automatically" },
  { layer: "CONSUME", title: "Operations & Enforcement Teams", logo: null, iconComp: Users,
    pills: ["Equipment List", "Setup Instructions", "Enforcement Schedule"],
    accent: "border-emerald-400/40 dark:border-emerald-400/30", accentBg: "bg-emerald-500/10", accentText: "text-emerald-600 dark:text-emerald-400",
    note: null },
]

const mainArrowLabels = ["Raw operational data extracted", "Clean, joined, structured records", "Dashboard published and auto-refreshing"]
const branchArrowLabels = ["Event specs trigger report generation", "Report sent to field teams"]

const kpis = [
  { name: "Total Events This Month", dax: "COUNT", desc: "How many events are running across campus", why: "Gives leadership a pulse on campus activity volume" },
  { name: "Revenue per Event", dax: "DIVIDE", desc: "Average financial return per permitted event", why: "Measures whether events are financially sustainable" },
  { name: "Enforcement Actions", dax: "COUNTROWS", desc: "Total enforcement incidents logged in period", why: "Tracks compliance and safety across campus events" },
  { name: "Equipment Utilization Rate", dax: "DIVIDE", desc: "Equipment deployed vs total equipment available", why: "Prevents over-purchasing and identifies shortages" },
  { name: "Processing Time per Request", dax: "AVERAGE", desc: "Average time from submission to assignment", why: "Measures operational efficiency of the intake process" },
  { name: "Event Volume YoY", dax: "SAMEPERIODLASTYEAR", desc: "This year's event load vs same period last year", why: "Reveals growth trends for resource planning" },
  { name: "Bottleneck Score", dax: "IF + RANKX", desc: "Which workflows are falling behind target SLA", why: "Surfaces problems before they become visible to leadership" },
  { name: "Planning Accuracy", dax: "DIVIDE", desc: "Actual vs forecasted equipment needs per event", why: "Validates whether AI equipment drafts are improving over time" },
]

const techStack = [
  { icon: Server, name: "ServiceNow", desc: "Event data source" },
  { icon: Database, name: "Python ETL", desc: "Data pipeline & joins" },
  { icon: BarChart3, name: "Power BI", desc: "Dashboards & KPIs" },
  { icon: Database, name: "DAX", desc: "Measure calculations" },
  { icon: FileCog, name: "AI Report Gen", desc: "Equipment draft automation" },
  { icon: RefreshCw, name: "Scheduled Refresh", desc: "Daily auto-refresh" },
]

export function CUProject2() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">Project 02</p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-[rgb(var(--text-1))] md:text-3xl">Operations Analytics Dashboard & Automated Equipment Reports</h2>
          <p className="mt-3 max-w-2xl text-sm text-[rgb(var(--text-2))] md:text-base">Built the live dashboard leadership used to monitor campus event operations, and automated the equipment planning reports sent to field teams.</p>
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
            <div className="relative px-6 py-8 md:px-10 md:py-10">
              <div className="mx-auto flex max-w-lg flex-col items-center gap-0">
                {/* Main flow */}
                {archNodes.map((node, i) => (
                  <div key={node.layer + i} className="w-full">
                    <ArchNode node={node} index={i} />
                    {i < archNodes.length - 1 && <ArchArrow label={mainArrowLabels[i]} delay={i * 0.15 + 0.1} />}
                  </div>
                ))}

                {/* Branch arrow from Power BI */}
                <ArchArrow label={branchArrowLabels[0]} delay={archNodes.length * 0.15 + 0.1} />

                {/* Branch nodes */}
                {branchNodes.map((node, i) => (
                  <div key={node.layer} className="w-full">
                    <ArchNode node={node} index={archNodes.length + i} />
                    {i < branchNodes.length - 1 && <ArchArrow label={branchArrowLabels[1]} delay={(archNodes.length + i) * 0.15 + 0.1} />}
                  </div>
                ))}
              </div>

              {/* Monitoring side node — desktop */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1, duration: 0.6, ease }}
                className="absolute right-6 top-1/3 hidden -translate-y-1/2 xl:block">
                <div className="flex items-center gap-3">
                  <svg width="60" height="2" className="overflow-visible"><line x1="0" y1="1" x2="60" y2="1" stroke="rgb(var(--muted))" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[dash_1.5s_linear_infinite]" /></svg>
                  <div className="glass-panel rounded-xl border-2 border-dashed border-slate-300/60 p-4 dark:border-slate-600/50">
                    <div className="flex items-center gap-2"><div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-200/80 dark:bg-slate-700/60"><RefreshCw size={14} className="text-[rgb(var(--muted))]" /></div><p className="text-xs font-semibold text-[rgb(var(--text-1))]">Scheduled Refresh Monitor</p></div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {["Daily Refresh", "Data Freshness Check", "Alert on Failure"].map((p) => (
                        <span key={p} className="rounded-full border border-slate-200/75 bg-white/80 px-2 py-0.5 text-[10px] font-medium text-slate-500 dark:border-slate-600/70 dark:bg-slate-900/55 dark:text-slate-400">{p}</span>
                      ))}
                    </div>
                    <p className="mt-2 text-center text-[10px] italic text-[rgb(var(--muted))]">Reliability Layer</p>
                  </div>
                </div>
              </motion.div>

              {/* Monitoring — mobile */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.5, ease }} className="mt-6 xl:hidden">
                <div className="glass-panel mx-auto max-w-lg rounded-xl border border-dashed border-slate-300/60 p-4 text-center dark:border-slate-600/50">
                  <div className="flex items-center justify-center gap-2"><RefreshCw size={14} className="text-[rgb(var(--muted))]" /><p className="text-xs font-semibold text-[rgb(var(--text-1))]">Scheduled Refresh Monitor</p></div>
                  <p className="mt-1.5 text-[11px] text-[rgb(var(--muted))]">Daily Refresh · Data Freshness Check · Alert on Failure</p>
                  <p className="mt-1 text-[10px] italic text-[rgb(var(--muted))]">Reliability Layer</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* KPIs */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.68, ease }} className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">Power BI KPIs Built</p>
          <h3 className="mt-2 font-heading text-2xl font-semibold text-[rgb(var(--text-1))] md:text-3xl">What Leadership Could See</h3>
          <p className="mt-2 max-w-2xl text-sm text-[rgb(var(--text-2))]">Every metric below is a live DAX measure pulling from the unified data model in real time.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {kpis.map((kpi, i) => (<KPICard key={kpi.name} kpi={kpi} index={i} />))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.68, ease }} className="mt-12">
          <h3 className="mb-6 font-heading text-lg font-semibold text-[rgb(var(--text-1))]">Tech Stack</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {techStack.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04, duration: 0.5, ease }}
                className="glass-panel flex items-center gap-3 rounded-xl border border-slate-200/75 p-3 dark:border-slate-700/70">
                <t.icon size={18} className="flex-shrink-0 text-[rgb(var(--accent))]" />
                <div className="min-w-0"><p className="text-sm font-semibold text-[rgb(var(--text-1))]">{t.name}</p><p className="truncate text-xs text-[rgb(var(--muted))]">{t.desc}</p></div>
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
        ) : (
          <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${node.accentBg}`}><Server size={16} className={node.accentText} /></div>
        )}
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

/* ── KPI Card ── */

function KPICard({ kpi, index }: { kpi: typeof kpis[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: 0.5, ease }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="glass-panel interactive-lift relative cursor-default overflow-hidden rounded-xl border border-slate-200/75 p-5 dark:border-slate-700/70">
      <div className="transition-opacity duration-250" style={{ opacity: hovered ? 0 : 1 }}>
        <p className="font-heading text-sm font-semibold text-[rgb(var(--text-1))]">{kpi.name}</p>
        <span className="mt-2 inline-block rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-medium text-[rgb(var(--accent))] dark:bg-slate-800">{kpi.dax}</span>
        <p className="mt-2 text-xs leading-relaxed text-[rgb(var(--muted))]">{kpi.desc}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-5 transition-opacity duration-250" style={{ opacity: hovered ? 1 : 0 }}>
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[rgb(var(--accent))]">Why it matters</p>
          <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--text-2))]">{kpi.why}</p>
        </div>
      </div>
    </motion.div>
  )
}