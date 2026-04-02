"use client"

import { motion } from "framer-motion"
import {
  Inbox, User, Clock, FileX, Database, Cpu, GitBranch, ShieldCheck,
  Server, Users, Eye
} from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const problems = [
  { icon: Inbox, label: "Manual Inbox", desc: "Every request read by hand, one by one" },
  { icon: User, label: "Manual Routing", desc: "Staff decided which manager to assign based on memory" },
  { icon: Clock, label: "Delays", desc: "Wrong assignments caused rework and processing delays" },
  { icon: FileX, label: "No Audit Trail", desc: "No record of why a request was assigned a certain way" },
]

const built = [
  { icon: Database, label: "Historical Data Pipeline", desc: "Pulled all past ServiceNow submissions and department assignment records" },
  { icon: Cpu, label: "AI Classification Model", desc: "Trained on historical mappings to predict correct operations manager" },
  { icon: GitBranch, label: "Auto-Routing Logic", desc: "New submissions automatically classified and assigned on arrival" },
  { icon: ShieldCheck, label: "Audit Logging", desc: "Every assignment decision logged with confidence score and reason" },
]

const techStack = [
  { icon: Server, name: "ServiceNow", desc: "Source system for event requests" },
  { icon: Cpu, name: "Python", desc: "Classification model & routing" },
  { icon: Database, name: "Pandas", desc: "Data preprocessing & features" },
  { icon: Cpu, name: "Scikit-learn", desc: "Classification model training" },
  { icon: Database, name: "SQL", desc: "Historical assignment queries" },
  { icon: ShieldCheck, name: "Audit Logging", desc: "Custom decision logging layer" },
]

const archNodes = [
  {
    layer: "EXTRACT", title: "ServiceNow",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg",
    pills: ["Incoming Event Requests", "Submission Form Data", "Historical Assignment Records"],
    accent: "border-emerald-400/40 dark:border-emerald-400/30", accentBg: "bg-emerald-500/10", accentText: "text-emerald-600 dark:text-emerald-400",
    note: "Live event requests submitted by campus departments",
  },
  {
    layer: "TRANSFORM", title: "Python Classification Engine",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    pills: ["Text Preprocessing", "Historical Pattern Matching", "Confidence Scoring", "Department Mapping"],
    accent: "border-blue-400/40 dark:border-blue-400/30", accentBg: "bg-blue-500/10", accentText: "text-blue-600 dark:text-blue-400",
    note: "NLP model trained on past assignments predicts correct manager",
  },
  {
    layer: "LOAD", title: "ServiceNow Assignment Engine",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg",
    pills: ["Auto-Assign to Manager", "Audit Log Entry", "Confirmation Notification"],
    accent: "border-emerald-400/40 dark:border-emerald-400/30", accentBg: "bg-emerald-500/10", accentText: "text-emerald-600 dark:text-emerald-400",
    note: "Request lands in the correct manager's queue automatically",
  },
  {
    layer: "CONSUME", title: "Operations Managers",
    logo: null,
    pills: ["Correct Queue", "No Manual Sorting", "Faster Response Time"],
    accent: "border-teal-400/40 dark:border-teal-400/30", accentBg: "bg-teal-500/10", accentText: "text-teal-600 dark:text-teal-400",
    note: "Managers see only their relevant requests, ready to act",
  },
]

const arrowLabels = [
  "Raw request text + metadata extracted",
  "Classified request with routing decision",
  "Routed to correct operations team",
]

export function CUProject1() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">Project 01</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-[rgb(var(--text-1))] md:text-4xl">AI-Powered Event Request Classification</h2>
          <p className="mt-3 max-w-2xl text-base text-[rgb(var(--text-2))]">Automated the manual process of reading incoming ServiceNow event requests and routing them to the correct operations manager.</p>
        </motion.div>

        {/* Problem */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.68, ease }} className="mt-12">
          <h3 className="mb-5 font-heading text-lg font-semibold text-[rgb(var(--text-1))]">The Problem</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p, i) => (
              <motion.div key={p.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5, ease }}
                className="glass-panel interactive-lift rounded-xl border border-slate-200/75 p-4 dark:border-slate-700/70">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10">
                  <p.icon size={18} className="text-amber-600 dark:text-amber-400" />
                </div>
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
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[rgba(var(--accent),0.12)] transition-colors group-hover:bg-[rgba(var(--accent),0.2)]">
                  <b.icon size={20} className="text-[rgb(var(--accent))]" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-[rgb(var(--text-1))]">{b.label}</p>
                  <p className="mt-0.5 text-xs text-[rgb(var(--muted))]">{b.desc}</p>
                </div>
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
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6, ease }}
                      className={`glass-panel interactive-lift group relative w-full rounded-2xl border-2 p-5 ${node.accent}`}>
                      <p className={`text-[10px] font-bold uppercase tracking-[0.18em] ${node.accentText}`}>{node.layer}</p>
                      <div className="mt-2 flex items-center gap-3">
                        {node.logo ? (
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${node.accentBg}`}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={node.logo} alt={node.title} className="h-5 w-5 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }} />
                          </div>
                        ) : (
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${node.accentBg}`}>
                            <Users size={16} className={node.accentText} />
                          </div>
                        )}
                        <h4 className="font-heading text-base font-semibold text-[rgb(var(--text-1))]">{node.title}</h4>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {node.pills.map((pill) => (
                          <span key={pill} className="rounded-full border border-slate-200/75 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition-all group-hover:border-[rgba(var(--accent),0.3)] dark:border-slate-600/70 dark:bg-slate-900/55 dark:text-slate-300">{pill}</span>
                        ))}
                      </div>
                      {node.note && <p className="mt-2.5 text-[11px] italic text-[rgb(var(--muted))]">{node.note}</p>}
                    </motion.div>
                    {i < archNodes.length - 1 && (
                      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 + 0.1, duration: 0.4, ease }} className="flex flex-col items-center py-2">
                        <div className="h-5 w-px bg-[rgb(var(--border))]" />
                        <p className="my-1 text-[10px] font-medium text-[rgb(var(--muted))]">{arrowLabels[i]}</p>
                        <svg width="12" height="8" viewBox="0 0 12 8" className="text-[rgb(var(--border))]"><path d="M6 8L0 0h12L6 8z" fill="currentColor" /></svg>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Audit side node — desktop */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.6, ease }}
                className="absolute right-6 top-1/2 hidden -translate-y-1/2 xl:block">
                <div className="flex items-center gap-3">
                  <svg width="60" height="2" className="overflow-visible"><line x1="0" y1="1" x2="60" y2="1" stroke="rgb(var(--muted))" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[dash_1.5s_linear_infinite]" /></svg>
                  <div className="glass-panel rounded-xl border-2 border-dashed border-slate-300/60 p-4 dark:border-slate-600/50">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-200/80 dark:bg-slate-700/60"><ShieldCheck size={14} className="text-[rgb(var(--muted))]" /></div>
                      <p className="text-xs font-semibold text-[rgb(var(--text-1))]">Audit Log</p>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {["Assignment Decision", "Confidence Score", "Timestamp", "Manager Assigned"].map((p) => (
                        <span key={p} className="rounded-full border border-slate-200/75 bg-white/80 px-2 py-0.5 text-[10px] font-medium text-slate-500 dark:border-slate-600/70 dark:bg-slate-900/55 dark:text-slate-400">{p}</span>
                      ))}
                    </div>
                    <p className="mt-2 text-center text-[10px] italic text-[rgb(var(--muted))]">Accountability Layer</p>
                  </div>
                </div>
              </motion.div>

              {/* Audit — mobile */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.5, ease }} className="mt-6 xl:hidden">
                <div className="glass-panel mx-auto max-w-lg rounded-xl border border-dashed border-slate-300/60 p-4 text-center dark:border-slate-600/50">
                  <div className="flex items-center justify-center gap-2"><ShieldCheck size={14} className="text-[rgb(var(--muted))]" /><p className="text-xs font-semibold text-[rgb(var(--text-1))]">Audit Log</p></div>
                  <p className="mt-1.5 text-[11px] text-[rgb(var(--muted))]">Assignment Decision · Confidence Score · Timestamp · Manager Assigned</p>
                  <p className="mt-1 text-[10px] italic text-[rgb(var(--muted))]">Accountability Layer</p>
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