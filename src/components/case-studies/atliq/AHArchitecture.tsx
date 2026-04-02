"use client"

import { motion } from "framer-motion"
import { FileSpreadsheet, Filter, GitBranch, Cpu, BarChart3, Users } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const archNodes = [
  { layer: "EXTRACT", title: "Raw Data Sources", iconComp: FileSpreadsheet,
    pills: ["fact_sales_monthly_with_cost.csv (800K rows)", "ns_targets_2021.csv (276 records)", "add_finance_data.xlsx"],
    accent: "border-blue-400/40 dark:border-blue-400/30", accentBg: "bg-blue-500/10", accentText: "text-blue-600 dark:text-blue-400",
    note: "Three separate files containing sales transactions, targets, and finance records" },
  { layer: "TRANSFORM", title: "Power Query Editor", iconComp: Filter,
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    pills: ["Data Cleaning", "Table Joins", "Column Transformations", "Data Type Fixing", "Null Handling"],
    accent: "border-yellow-400/40 dark:border-yellow-400/30", accentBg: "bg-yellow-500/10", accentText: "text-yellow-600 dark:text-yellow-400",
    note: "Power Query connects all three sources, cleans data, and prepares analytics-ready tables" },
  { layer: "MODEL", title: "Power BI Data Model", iconComp: GitBranch,
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    pills: ["Star Schema", "Fact: Sales Monthly", "Dims: Customer, Product, Market, Date"],
    accent: "border-yellow-400/40 dark:border-yellow-400/30", accentBg: "bg-yellow-500/10", accentText: "text-yellow-600 dark:text-yellow-400",
    note: "Relational model with fact table at center and dimension tables for slicing and filtering" },
  { layer: "CALCULATE", title: "DAX Measures Layer", iconComp: Cpu,
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    pills: ["Net Sales", "COGS", "Gross Margin %", "YoY Growth", "Variance vs Target", "GM by Quarter"],
    accent: "border-orange-400/40 dark:border-orange-400/30", accentBg: "bg-orange-500/10", accentText: "text-orange-600 dark:text-orange-400",
    note: "All business KPIs defined as DAX measures on top of the data model" },
  { layer: "VISUALIZE", title: "Power BI Dashboard", iconComp: BarChart3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    pills: ["6 Interactive Reports", "Drill-Down Filters", "Dynamic Slicers", "Cross-Report Navigation"],
    accent: "border-amber-400/40 dark:border-amber-400/30", accentBg: "bg-amber-500/10", accentText: "text-amber-600 dark:text-amber-400",
    note: "Executive-ready dashboards with drill-down from yearly to monthly to market to customer level" },
  { layer: "CONSUME", title: "Sales & Finance Teams", iconComp: Users,
    pills: ["P&L Decisions", "Market Planning", "Customer Strategy", "Pricing Reviews"],
    accent: "border-emerald-400/40 dark:border-emerald-400/30", accentBg: "bg-emerald-500/10", accentText: "text-emerald-600 dark:text-emerald-400",
    note: "Sales and finance leaders use reports for quarterly planning, target reviews, and margin analysis" },
]

const arrowLabels = [
  "Raw files loaded into Power Query",
  "Clean, joined tables loaded into data model",
  "Data model ready for DAX measure layer",
  "Measures powering all report visuals",
  "Insights delivered to business teams",
]

export function AHArchitecture() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <h3 className="mb-6 font-heading text-lg font-semibold text-[rgb(var(--text-1))]">Architecture</h3>
        </motion.div>
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