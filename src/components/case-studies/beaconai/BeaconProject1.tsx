"use client"

import { motion } from "framer-motion"
import {
  Search, Clock, TrendingDown, FileX, Database, Cpu, FileCheck, Send,
  Globe, Layers, FileText, Users, ShieldCheck, Server
} from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const problems = [
  { icon: Search, label: "Manual Research", desc: "Sales team spent hours manually researching each prospect company" },
  { icon: Clock, label: "Slow Turnaround", desc: "Company analysis reports took days to prepare by hand" },
  { icon: TrendingDown, label: "Lost Conversions", desc: "Slow insights meant deals went cold before reps could act" },
  { icon: FileX, label: "Inconsistent Output", desc: "Every analyst produced reports in a different format and depth" },
]

const built = [
  { icon: Database, label: "Company Data Ingestion Pipeline", desc: "ETL pipeline pulling structured and unstructured company data into a vector store" },
  { icon: Cpu, label: "RAG Analysis Engine", desc: "Retrieval pipeline using Claude 3.5 Sonnet to analyze company data against AI readiness criteria" },
  { icon: FileCheck, label: "Automated Report Generation", desc: "Structured intelligence reports auto-generated with scores, findings, and recommendations" },
  { icon: Send, label: "Sales Team Delivery", desc: "Reports delivered automatically to sales reps the moment a new company is ingested" },
]

const archNodes = [
  { layer: "EXTRACT", title: "Company Data Sources", logo: null, iconComp: Globe,
    pills: ["Company Website", "Business Filings", "Industry Data", "Prospect CRM Records"],
    accent: "border-blue-400/40 dark:border-blue-400/30", accentBg: "bg-blue-500/10", accentText: "text-blue-600 dark:text-blue-400",
    note: "Unstructured and structured data pulled for each prospect company" },
  { layer: "TRANSFORM", title: "Python ETL & Chunking Layer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    pills: ["Text Extraction", "Data Cleaning", "Semantic Chunking", "Embedding Generation"],
    accent: "border-blue-400/40 dark:border-blue-400/30", accentBg: "bg-blue-500/10", accentText: "text-blue-600 dark:text-blue-400",
    note: "Raw content broken into searchable chunks and converted to vector embeddings" },
  { layer: "LOAD", title: "Vector Database", logo: null, iconComp: Layers,
    pills: ["Embeddings Stored", "Semantic Index Built", "Company Knowledge Base"],
    accent: "border-purple-400/40 dark:border-purple-400/30", accentBg: "bg-purple-500/10", accentText: "text-purple-600 dark:text-purple-400",
    note: "All company knowledge stored as searchable vectors for retrieval" },
  { layer: "ANALYZE", title: "RAG Analysis Engine", logo: null, useAIBadge: true,
    pills: ["Context Retrieval", "AI Readiness Scoring", "Gap Analysis", "Recommendation Generation"],
    accent: "border-indigo-400/40 dark:border-indigo-400/30", accentBg: "bg-indigo-500/10", accentText: "text-indigo-600 dark:text-indigo-400",
    note: "Claude 3.5 Sonnet analyzes retrieved context against AI readiness framework" },
  { layer: "DELIVER", title: "Automated Report Output", logo: null, iconComp: FileText,
    pills: ["Readiness Score", "Key Findings", "Recommended Actions", "Formatted PDF Report"],
    accent: "border-teal-400/40 dark:border-teal-400/30", accentBg: "bg-teal-500/10", accentText: "text-teal-600 dark:text-teal-400",
    note: "Complete intelligence report generated without any human involvement" },
  { layer: "CONSUME", title: "Sales Team", logo: null, iconComp: Users,
    pills: ["Instant Company Intelligence", "Faster Qualification", "Higher Conversion Rate"],
    accent: "border-emerald-400/40 dark:border-emerald-400/30", accentBg: "bg-emerald-500/10", accentText: "text-emerald-600 dark:text-emerald-400",
    note: "Sales reps act on structured insights instead of raw research" },
]

const arrowLabels = [
  "Raw company data extracted",
  "Vectorized, searchable company knowledge",
  "Relevant context retrieved for analysis",
  "Structured analysis output generated",
  "Report delivered to sales team",
]

const techStack = [
  { icon: Server, name: "Python", desc: "ETL, extraction, chunking, embeddings" },
  { icon: Layers, name: "Vector Database", desc: "Semantic embedding storage & retrieval" },
  { icon: Cpu, name: "Claude 3.5 Sonnet", desc: "AI reasoning tool within the pipeline" },
  { icon: Database, name: "RAG Pipeline", desc: "Retrieval-augmented generation flow" },
  { icon: Globe, name: "Google Cloud", desc: "Production infrastructure" },
  { icon: Database, name: "Redis", desc: "Caching & pipeline state management" },
]

export function BeaconProject1() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">Project 01</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-[rgb(var(--text-1))] md:text-4xl">Automated Company Analysis & Reporting Pipeline</h2>
          <p className="mt-3 max-w-2xl text-base text-[rgb(var(--text-2))]">Built the data pipeline that automatically ingests company data, analyzes it, and delivers structured intelligence reports to the sales team.</p>
        </motion.div>

        {/* Problem */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.68, ease }} className="mt-12">
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.68, ease }} className="mt-12">
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
                {archNodes.map((node, i) => (
                  <div key={node.layer + i} className="w-full">
                    <ArchNode node={node} index={i} />
                    {i < archNodes.length - 1 && <ArchArrow label={arrowLabels[i]} delay={i * 0.15 + 0.1} />}
                  </div>
                ))}
              </div>
              {/* Data Quality side node — desktop */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.9, duration: 0.6, ease }}
                className="absolute right-6 top-[22%] hidden xl:block">
                <div className="flex items-center gap-3">
                  <svg width="60" height="2" className="overflow-visible"><line x1="0" y1="1" x2="60" y2="1" stroke="rgb(var(--muted))" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[dash_1.5s_linear_infinite]" /></svg>
                  <div className="glass-panel rounded-xl border-2 border-dashed border-slate-300/60 p-4 dark:border-slate-600/50">
                    <div className="flex items-center gap-2"><div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-200/80 dark:bg-slate-700/60"><ShieldCheck size={14} className="text-[rgb(var(--muted))]" /></div><p className="text-xs font-semibold text-[rgb(var(--text-1))]">Data Validation Layer</p></div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {["Schema Validation", "Completeness Check", "Duplicate Detection"].map((p) => (
                        <span key={p} className="rounded-full border border-slate-200/75 bg-white/80 px-2 py-0.5 text-[10px] font-medium text-slate-500 dark:border-slate-600/70 dark:bg-slate-900/55 dark:text-slate-400">{p}</span>
                      ))}
                    </div>
                    <p className="mt-2 text-center text-[10px] italic text-[rgb(var(--muted))]">Data Quality Gate</p>
                  </div>
                </div>
              </motion.div>
              {/* Data Quality — mobile */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.5, ease }} className="mt-6 xl:hidden">
                <div className="glass-panel mx-auto max-w-lg rounded-xl border border-dashed border-slate-300/60 p-4 text-center dark:border-slate-600/50">
                  <div className="flex items-center justify-center gap-2"><ShieldCheck size={14} className="text-[rgb(var(--muted))]" /><p className="text-xs font-semibold text-[rgb(var(--text-1))]">Data Validation Layer</p></div>
                  <p className="mt-1.5 text-[11px] text-[rgb(var(--muted))]">Schema Validation · Completeness Check · Duplicate Detection</p>
                  <p className="mt-1 text-[10px] italic text-[rgb(var(--muted))]">Data Quality Gate</p>
                </div>
              </motion.div>
            </div>
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
        ) : node.useAIBadge ? (
          <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${node.accentBg}`}>
            <span className={`text-[10px] font-bold ${node.accentText}`}>AI</span>
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