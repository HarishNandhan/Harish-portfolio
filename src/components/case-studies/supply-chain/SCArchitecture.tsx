"use client"

import { motion } from "framer-motion"
import { FileSpreadsheet, Radio, Database, Cloud, GitBranch, Cpu, BarChart3, Server, Box, Eye } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const archNodes = [
  { layer: "EXTRACT", title: "Google Sheets", iconComp: FileSpreadsheet,
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg",
    pills: ["Shipment Records", "Incremental Row Processing", "Airflow Triggered"],
    accent: "border-emerald-400/40 dark:border-emerald-400/30", accentBg: "bg-emerald-500/10", accentText: "text-emerald-600 dark:text-emerald-400",
    note: "One row processed per pipeline run, tracking last processed index" },
  { layer: "STREAM", title: "Apache Kafka", iconComp: Radio,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka.svg",
    pills: ["Topic: supply_chain", "Event Buffering", "Fault Tolerant Queue"],
    accent: "border-slate-400/40 dark:border-slate-400/30", accentBg: "bg-slate-500/10", accentText: "text-slate-600 dark:text-slate-400",
    note: "Each record streamed through Kafka for reliable, observable ingestion" },
  { layer: "STAGE", title: "MongoDB Atlas", iconComp: Database,
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    pills: ["Nested JSON Storage", "Processing Status Tracking", "Stage: success"],
    accent: "border-emerald-400/40 dark:border-emerald-400/30", accentBg: "bg-emerald-500/10", accentText: "text-emerald-600 dark:text-emerald-400",
    note: "Raw event stored with status flag before loading to warehouse" },
  { layer: "LOAD", title: "Google BigQuery", iconComp: Cloud,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Google_BigQuery_Logo.png",
    pills: ["shipments_raw Table", "Partitioned by Date", "Columnar Storage"],
    accent: "border-blue-400/40 dark:border-blue-400/30", accentBg: "bg-blue-500/10", accentText: "text-blue-600 dark:text-blue-400",
    note: "Flattened records land in BigQuery, partitioned for fast analytics queries" },
  { layer: "TRANSFORM", title: "dbt", iconComp: GitBranch,
    logo: "https://seeklogo.com/images/D/dbt-logo-500AB0BAA7-seeklogo.com.png",
    pills: ["stg_shipments View", "shipment_metrics Model", "40+ Engineered Features"],
    accent: "border-orange-400/40 dark:border-orange-400/30", accentBg: "bg-orange-500/10", accentText: "text-orange-600 dark:text-orange-400",
    note: "dbt builds temporal, interaction, and categorical features on top of raw data" },
  { layer: "PREDICT", title: "BigQuery ML", iconComp: Cpu,
    pills: ["delay_regressor_v6", "Linear Regression", "DELAYED / ON_TIME / EARLY"],
    accent: "border-purple-400/40 dark:border-purple-400/30", accentBg: "bg-purple-500/10", accentText: "text-purple-600 dark:text-purple-400",
    note: "Model trained inside BigQuery scores each shipment without moving data" },
  { layer: "CONSUME", title: "Streamlit Analytics Dashboard", iconComp: BarChart3,
    logo: "https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.png",
    pills: ["Admin KPI Portal", "Real-time Shipment Monitoring", "Delay Risk Flags"],
    accent: "border-red-400/40 dark:border-red-400/30", accentBg: "bg-red-500/10", accentText: "text-red-600 dark:text-red-400",
    note: "Operations team sees live delay predictions and shipment KPIs in one dashboard" },
]

const arrowLabels = [
  "Raw shipment record extracted",
  "Streamed record passed to storage",
  "Staged records with status: success loaded",
  "Raw table ready for transformation",
  "Feature-rich table ready for ML",
  "Predictions appended to analytics table",
]

export function SCArchitecture() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <h3 className="mb-6 font-heading text-lg font-semibold text-[rgb(var(--text-1))]">Architecture</h3>
        </motion.div>
        <div className="glass-panel-strong overflow-hidden rounded-2xl border border-slate-200/75 dark:border-slate-700/70">
          <div className="relative px-6 py-8 md:px-10 md:py-10">
            <div className="mx-auto flex max-w-lg flex-col items-center gap-0">
              {archNodes.map((node, i) => (
                <div key={node.layer + i} className="w-full">
                  <ArchNode node={node} index={i} />
                  {i < archNodes.length - 1 && <ArchArrow label={arrowLabels[i]} delay={i * 0.15 + 0.1} />}
                </div>
              ))}
            </div>

            {/* Airflow side node — desktop */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1, duration: 0.6, ease }}
              className="absolute right-6 top-[15%] hidden xl:block" style={{ height: "45%" }}>
              <div className="flex h-full items-start gap-3">
                {/* Animated dotted vertical line */}
                <svg width="2" className="h-full overflow-visible">
                  <line x1="1" y1="0" x2="1" y2="100%" stroke="rgb(var(--muted))" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[dash_1.5s_linear_infinite]" />
                </svg>
                <div className="glass-panel rounded-xl border-2 border-dashed border-teal-300/50 p-4 dark:border-teal-500/35">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-500/15"><Server size={14} className="text-teal-600 dark:text-teal-400" /></div>
                    <p className="text-xs font-semibold text-[rgb(var(--text-1))]">Apache Airflow</p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {["supply_chain_pipeline DAG", "Retry Logic", "Status Tracking", "Incremental Processing"].map((p) => (
                      <span key={p} className="rounded-full border border-slate-200/75 bg-white/80 px-2 py-0.5 text-[10px] font-medium text-slate-500 dark:border-slate-600/70 dark:bg-slate-900/55 dark:text-slate-400">{p}</span>
                    ))}
                  </div>
                  <p className="mt-2 text-center text-[10px] italic text-[rgb(var(--muted))]">Orchestration Layer</p>
                </div>
              </div>
            </motion.div>

            {/* Airflow — mobile */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.5, ease }} className="mt-6 xl:hidden">
              <div className="glass-panel mx-auto max-w-lg rounded-xl border border-dashed border-teal-300/50 p-4 text-center dark:border-teal-500/35">
                <div className="flex items-center justify-center gap-2"><Server size={14} className="text-teal-600 dark:text-teal-400" /><p className="text-xs font-semibold text-[rgb(var(--text-1))]">Apache Airflow</p></div>
                <p className="mt-1.5 text-[11px] text-[rgb(var(--muted))]">supply_chain_pipeline DAG · Retry Logic · Status Tracking · Incremental Processing</p>
                <p className="mt-1 text-[10px] italic text-[rgb(var(--muted))]">Orchestration Layer</p>
              </div>
            </motion.div>

            {/* Docker Infrastructure Banner */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.6, ease }} className="mt-6">
              <div className="glass-panel rounded-2xl border-2 border-slate-300/40 bg-slate-100/40 p-5 dark:border-slate-600/35 dark:bg-slate-800/30">
                <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/15"><Box size={20} className="text-blue-600 dark:text-blue-400" /></div>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Containerized & Deployed</p>
                    <p className="font-heading text-base font-semibold text-[rgb(var(--text-1))]">Docker Compose</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5 sm:justify-end">
                    {["Docker Compose", "Airflow Services", "Reproducible Builds", "Local & Cloud Ready"].map((p) => (
                      <span key={p} className="rounded-full border border-slate-300/60 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-600/50 dark:bg-slate-900/55 dark:text-slate-300">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

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