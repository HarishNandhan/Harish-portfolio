"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const rows = [
  { need: "ETL pipelines from CRM into Power BI", proof: "Ramsi — Built AWS Lambda ETL pipeline loading into Redshift, directly connected to Power BI dashboards. Daily automated refresh. CloudWatch monitoring.", link: "/case-studies/ramsi", honest: false },
  { need: "Design, build, and maintain Power BI dashboards", proof: "CU Boulder & Ramsi — Built live KPI dashboards for operations leadership and revenue managers. Dynamic slicers, cross-filtering, drill-through.", link: "/case-studies/cu-boulder", honest: false },
  { need: "DAX, Power Query, and data modeling in Power BI", proof: "Atliq Hardware — Built star schema data model with 800K+ rows. Wrote DAX measures for YoY growth, Gross Margin %, and Market vs Target variance.", link: "/case-studies/atliq-hardware", honest: false },
  { need: "Manage data gateways, warehouses, and connections", proof: "Ramsi — Managed Amazon Redshift warehouse, scheduled Lambda ingestion, and Power BI gateway connections across multiple data sources.", link: "/case-studies/ramsi", honest: false },
  { need: "Analyze donor trends, campaign performance, and revenue metrics", proof: "Atliq Hardware — Built six business-facing reports including Customer Net Sales Performance and Market Performance vs Target. Same pattern as donor and campaign analytics.", link: "/case-studies/atliq-hardware", honest: false },
  { need: "Develop segmentation strategies to support fundraising goals", proof: "Supply Chain — Engineered 40+ features including categorical segmentation buckets for risk classification. Same segmentation logic applies to donor tier and lapse risk analysis.", link: "/case-studies/supply-chain", honest: false },
  { need: "Train staff on interpreting dashboards and leveraging data", proof: "CU Boulder — Ran training sessions with non-technical operations managers. Got them using Power BI reports in weekly planning meetings independently.", link: "/case-studies/cu-boulder", honest: false },
  { need: "Establish documentation for data processes and reporting standards", proof: "BeaconAI — Built structured pipeline documentation and audit logging across all four operational automation agents deployed on GKE.", link: "/case-studies/beaconai", honest: false },
  { need: "Secure data handling and compliance practices", proof: "BeaconAI — Deployed containerized microservices with health monitoring, access controls, and audit trails. Production-grade reliability by design.", link: "/case-studies/beaconai", honest: false },
]

export function CHCFMapping() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">Direct Skill Mapping</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-[rgb(var(--text-1))] md:text-4xl">What the Foundation Needs. What I Bring.</h2>
          <p className="mt-3 max-w-2xl text-base text-[rgb(var(--text-2))]">Every requirement in the Data Analyst job description maps directly to proven work in my portfolio.</p>
        </motion.div>

        <div className="mt-10 space-y-4">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55, ease }}
            >
              <Link href={row.link} className="block">
                <div className={`group grid gap-3 rounded-2xl border p-4 transition-all duration-300 hover:shadow-lg md:grid-cols-[1fr_auto_1fr] md:items-center md:p-5 ${
                  row.honest
                    ? "border-amber-300/50 bg-amber-50/40 hover:border-amber-400/60 hover:shadow-amber-500/10 dark:border-amber-500/25 dark:bg-amber-500/[0.04] dark:hover:border-amber-400/40"
                    : "glass-panel border-slate-200/75 hover:border-[rgba(var(--accent),0.4)] hover:shadow-[rgba(var(--accent),0.1)] dark:border-slate-700/70"
                }`}>
                  {/* Left — What they need */}
                  <div className={`rounded-xl p-4 ${
                    row.honest
                      ? "bg-amber-100/60 dark:bg-amber-500/10"
                      : "bg-[rgba(var(--accent),0.06)]"
                  }`}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[rgb(var(--muted))]">Foundation Needs</p>
                    <p className={`mt-1 font-heading text-sm font-semibold ${
                      row.honest ? "text-amber-800 dark:text-amber-300" : "text-[rgb(var(--text-1))]"
                    }`}>{row.need}</p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden items-center justify-center md:flex">
                    <ArrowRight size={18} className="text-[rgb(var(--muted))] transition-colors group-hover:text-[rgb(var(--accent))]" />
                  </div>

                  {/* Right — What I bring */}
                  <div className="rounded-xl bg-white/60 p-4 dark:bg-slate-800/40">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[rgb(var(--accent))]">What I Bring</p>
                    <p className="mt-1 text-sm leading-relaxed text-[rgb(var(--text-2))]">{row.proof}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}