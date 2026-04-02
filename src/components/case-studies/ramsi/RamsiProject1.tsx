"use client"

import { motion } from "framer-motion"
import {
  AlertTriangle, Database as DbIcon, Cloud, BarChart3,
  Cpu, Eye, MessageSquare, Users, Server, Layers
} from "lucide-react"
import { useState } from "react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const problems = [
  "Revenue managers manually pulled data from multiple disconnected systems every morning",
  "No single source of truth for hotel performance metrics",
  "Reports were hours old before anyone could act on them",
  "No automated refresh or monitoring in place",
]

const builtCards = [
  { icon: DbIcon, label: "ETL Pipeline", desc: "Automated ingestion from 4 live data sources" },
  { icon: Cloud, label: "Redshift Warehouse", desc: "Star schema with hotel performance fact table" },
  { icon: BarChart3, label: "Power BI Dashboards", desc: "Real-time KPI dashboards for revenue teams" },
  { icon: Cpu, label: "DAX Measures", desc: "YoY comparisons, occupancy, RevPAR, ADR metrics" },
  { icon: Eye, label: "CloudWatch Alerts", desc: "Pipeline health monitoring and refresh tracking" },
  { icon: MessageSquare, label: "NL Query Interface", desc: "Plain English questions answered with live SQL" },
]

export function RamsiProject1() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.68, ease }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">
            Project 01
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-[rgb(var(--text-1))] md:text-4xl">
            Automated Revenue Reporting Pipeline
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[rgb(var(--text-2))]">
            Traditional ETL pipeline powering real-time Power BI dashboards for hotel revenue managers.
          </p>
        </motion.div>

        {/* The Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.68, ease }}
          className="mt-12 glass-panel rounded-2xl border border-slate-200/75 p-6 dark:border-slate-700/70 md:p-8"
        >
          <div className="mb-5 flex items-center gap-2">
            <AlertTriangle size={18} className="text-amber-500" />
            <h3 className="font-heading text-lg font-semibold text-[rgb(var(--text-1))]">The Problem</h3>
          </div>
          <ul className="space-y-3">
            {problems.map((p, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-[rgb(var(--text-2))]">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500/70" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* What I Built — Card Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.68, ease }}
          className="mt-12"
        >
          <h3 className="mb-6 font-heading text-lg font-semibold text-[rgb(var(--text-1))]">What I Built</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {builtCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease }}
                className="glass-panel interactive-lift group flex items-start gap-4 rounded-xl border border-slate-200/75 p-5 dark:border-slate-700/70"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[rgba(var(--accent),0.12)] transition-colors group-hover:bg-[rgba(var(--accent),0.2)]">
                  <card.icon size={20} className="text-[rgb(var(--accent))]" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-[rgb(var(--text-1))]">{card.label}</p>
                  <p className="mt-0.5 text-xs text-[rgb(var(--muted))]">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* KPIs Section */}
        <RamsiKPIs />

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.68, ease }}
          className="mt-16"
        >
          <h3 className="mb-6 font-heading text-lg font-semibold text-[rgb(var(--text-1))]">
            Architecture
          </h3>
          <div className="glass-panel-strong overflow-hidden rounded-2xl border border-slate-200/75 dark:border-slate-700/70">
            <ArchitectureDiagram />
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.68, ease }}
          className="mt-12"
        >
          <h3 className="mb-6 font-heading text-lg font-semibold text-[rgb(var(--text-1))]">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: Cloud, name: "AWS Lambda", desc: "Ingestion & transformation" },
              { icon: DbIcon, name: "Amazon Redshift", desc: "Data warehouse" },
              { icon: BarChart3, name: "Power BI", desc: "Dashboards & reporting" },
              { icon: Cpu, name: "DAX", desc: "KPI measures" },
              { icon: Server, name: "Python", desc: "Pipeline scripting" },
              { icon: Eye, name: "CloudWatch", desc: "Monitoring & alerts" },
              { icon: Layers, name: "SQL", desc: "Data modeling" },
              { icon: DbIcon, name: "Power Query", desc: "Data prep" },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5, ease }}
                className="glass-panel flex items-center gap-3 rounded-xl border border-slate-200/75 p-3 dark:border-slate-700/70"
              >
                <t.icon size={18} className="flex-shrink-0 text-[rgb(var(--accent))]" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[rgb(var(--text-1))]">{t.name}</p>
                  <p className="truncate text-xs text-[rgb(var(--muted))]">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── KPIs Section ── */

const kpis = [
  { name: "Total Revenue", dax: "SUM", desc: "Total room revenue across all properties", why: "The baseline number every revenue manager checks first" },
  { name: "Occupancy Rate", dax: "DIVIDE", desc: "Rooms sold vs total rooms available", why: "Shows how well the property fills its inventory" },
  { name: "ADR (Avg Daily Rate)", dax: "DIVIDE", desc: "Average revenue earned per occupied room", why: "Measures pricing effectiveness per room night" },
  { name: "RevPAR", dax: "DIVIDE", desc: "Revenue per available room, key performance indicator", why: "The single most important hotel performance metric" },
  { name: "YoY Revenue Change", dax: "SAMEPERIODLASTYEAR", desc: "This year vs same period last year", why: "Reveals growth trends and seasonal patterns" },
  { name: "Property Contribution %", dax: "ALLEXCEPT", desc: "Each property's share of total portfolio revenue", why: "Identifies top performers and underperformers" },
  { name: "Demand Forecast Score", dax: "custom ML", desc: "Predicted demand signal from external data", why: "Enables proactive pricing before demand shifts" },
  { name: "Selected KPI (Dynamic)", dax: "SWITCH + SELECTEDVALUE", desc: "Slicer-driven metric switching in one visual", why: "Lets managers explore any KPI without switching pages" },
]

function RamsiKPIs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.68, ease }}
      className="mt-16"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">
        Power BI KPIs Built
      </p>
      <h3 className="mt-2 font-heading text-2xl font-semibold text-[rgb(var(--text-1))] md:text-3xl">
        What Revenue Managers Could See
      </h3>
      <p className="mt-2 max-w-2xl text-sm text-[rgb(var(--text-2))]">
        Every metric below is a live DAX measure pulling from Redshift in real time.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {kpis.map((kpi, i) => (
          <KPICard key={kpi.name} kpi={kpi} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

function KPICard({ kpi, index }: { kpi: typeof kpis[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5, ease }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-panel interactive-lift relative cursor-default overflow-hidden rounded-xl border border-slate-200/75 p-5 dark:border-slate-700/70"
    >
      {/* Front */}
      <div
        className="transition-opacity duration-250"
        style={{ opacity: hovered ? 0 : 1 }}
      >
        <p className="font-heading text-sm font-semibold text-[rgb(var(--text-1))]">{kpi.name}</p>
        <span className="mt-2 inline-block rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-medium text-[rgb(var(--accent))] dark:bg-slate-800">
          {kpi.dax}
        </span>
        <p className="mt-2 text-xs leading-relaxed text-[rgb(var(--muted))]">{kpi.desc}</p>
      </div>

      {/* Hover — Why it matters */}
      <div
        className="absolute inset-0 flex items-center justify-center p-5 transition-opacity duration-250"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[rgb(var(--accent))]">
            Why it matters
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--text-2))]">{kpi.why}</p>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Architecture Diagram ── */

const archNodes = [
  {
    layer: "EXTRACT",
    title: "Data Sources",
    logo: null,
    pills: ["Hotel Ops System", "Competitor Pricing API", "Booking Platform", "Weather Feed"],
    accent: "border-blue-400/40 dark:border-blue-400/30",
    accentBg: "bg-blue-500/10",
    accentText: "text-blue-600 dark:text-blue-400",
    note: null,
  },
  {
    layer: "TRANSFORM",
    title: "AWS Lambda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Amazon_Lambda_architecture_logo.png",
    pills: ["Ingest", "Clean", "Normalize", "Validate"],
    accent: "border-orange-400/40 dark:border-orange-400/30",
    accentBg: "bg-orange-500/10",
    accentText: "text-orange-600 dark:text-orange-400",
    note: "Python scripts run on trigger",
  },
  {
    layer: "LOAD",
    title: "Amazon Redshift",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Amazon-Redshift-Logo.svg",
    pills: ["Star Schema", "Fact: Hotel Performance", "Dims: Date · Property · Segment · Competitor"],
    accent: "border-blue-400/40 dark:border-blue-400/30",
    accentBg: "bg-blue-500/10",
    accentText: "text-blue-600 dark:text-blue-400",
    note: "Columnar storage, optimized for BI queries",
  },
  {
    layer: "VISUALIZE",
    title: "Power BI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    pills: ["DAX Measures", "KPI Dashboards", "Scheduled Refresh", "Power Query"],
    accent: "border-yellow-400/40 dark:border-yellow-400/30",
    accentBg: "bg-yellow-500/10",
    accentText: "text-yellow-600 dark:text-yellow-400",
    note: "Dashboards auto-refresh from Redshift",
  },
  {
    layer: "CONSUME",
    title: "Revenue Managers",
    logo: null,
    pills: ["Pricing Decisions", "Demand Forecasting", "Market Benchmarking"],
    accent: "border-emerald-400/40 dark:border-emerald-400/30",
    accentBg: "bg-emerald-500/10",
    accentText: "text-emerald-600 dark:text-emerald-400",
    note: null,
  },
]

const arrowLabels = [
  "Raw data pulled on schedule",
  "Structured, clean records",
  "Query-ready data model",
  "Real-time insights delivered",
]

function ArchitectureDiagram() {
  return (
    <div className="relative px-6 py-8 md:px-10 md:py-10">
      <div className="mx-auto flex max-w-lg flex-col items-center gap-0">
        {archNodes.map((node, i) => (
          <div key={node.layer} className="w-full">
            {/* Node */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease }}
              className={`glass-panel interactive-lift group relative w-full rounded-2xl border-2 p-5 ${node.accent}`}
            >
              {/* Layer label */}
              <p className={`text-[10px] font-bold uppercase tracking-[0.18em] ${node.accentText}`}>
                {node.layer}
              </p>

              {/* Title row with logo */}
              <div className="mt-2 flex items-center gap-3">
                {node.logo ? (
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${node.accentBg}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={node.logo}
                      alt={node.title}
                      className="h-5 w-5 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        if (target.nextElementSibling) {
                          (target.nextElementSibling as HTMLElement).style.display = "flex"
                        }
                      }}
                    />
                    <span className={`hidden h-5 w-5 items-center justify-center rounded text-[9px] font-bold ${node.accentText}`}>
                      {node.title.charAt(0)}
                    </span>
                  </div>
                ) : node.layer === "EXTRACT" ? (
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${node.accentBg}`}>
                    <Server size={16} className={node.accentText} />
                  </div>
                ) : (
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${node.accentBg}`}>
                    <Users size={16} className={node.accentText} />
                  </div>
                )}
                <h4 className="font-heading text-base font-semibold text-[rgb(var(--text-1))]">
                  {node.title}
                </h4>
              </div>

              {/* Pills */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {node.pills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-slate-200/75 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition-all group-hover:border-[rgba(var(--accent),0.3)] dark:border-slate-600/70 dark:bg-slate-900/55 dark:text-slate-300"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              {/* Note */}
              {node.note && (
                <p className="mt-2.5 text-[11px] italic text-[rgb(var(--muted))]">{node.note}</p>
              )}
            </motion.div>

            {/* Arrow + Label */}
            {i < archNodes.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.1, duration: 0.4, ease }}
                className="flex flex-col items-center py-2"
              >
                <div className="h-5 w-px bg-[rgb(var(--border))]" />
                <p className="my-1 text-[10px] font-medium text-[rgb(var(--muted))]">
                  {arrowLabels[i]}
                </p>
                <svg width="12" height="8" viewBox="0 0 12 8" className="text-[rgb(var(--border))]">
                  <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* CloudWatch Side Node — Desktop */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6, ease }}
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 xl:block"
      >
        <div className="flex items-center gap-3">
          {/* Animated dotted line */}
          <svg width="60" height="2" className="overflow-visible">
            <line
              x1="0" y1="1" x2="60" y2="1"
              stroke="rgb(var(--muted))"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-[dash_1.5s_linear_infinite]"
            />
          </svg>
          <div className="glass-panel rounded-xl border-2 border-dashed border-slate-300/60 p-4 dark:border-slate-600/50">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-200/80 dark:bg-slate-700/60">
                <Eye size={14} className="text-[rgb(var(--muted))]" />
              </div>
              <p className="text-xs font-semibold text-[rgb(var(--text-1))]">AWS CloudWatch</p>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["Pipeline Health", "Refresh Alerts", "Failure Notifications"].map((p) => (
                <span key={p} className="rounded-full border border-slate-200/75 bg-white/80 px-2 py-0.5 text-[10px] font-medium text-slate-500 dark:border-slate-600/70 dark:bg-slate-900/55 dark:text-slate-400">
                  {p}
                </span>
              ))}
            </div>
            <p className="mt-2 text-center text-[10px] italic text-[rgb(var(--muted))]">Monitoring Layer</p>
          </div>
        </div>
      </motion.div>

      {/* CloudWatch — Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5, ease }}
        className="mt-6 xl:hidden"
      >
        <div className="glass-panel mx-auto max-w-lg rounded-xl border border-dashed border-slate-300/60 p-4 text-center dark:border-slate-600/50">
          <div className="flex items-center justify-center gap-2">
            <Eye size={14} className="text-[rgb(var(--muted))]" />
            <p className="text-xs font-semibold text-[rgb(var(--text-1))]">AWS CloudWatch</p>
          </div>
          <p className="mt-1.5 text-[11px] text-[rgb(var(--muted))]">
            Pipeline Health · Refresh Alerts · Failure Notifications
          </p>
          <p className="mt-1 text-[10px] italic text-[rgb(var(--muted))]">Connected to pipeline via monitoring</p>
        </div>
      </motion.div>
    </div>
  )
}