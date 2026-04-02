"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, ArrowRight, Send, BarChart3, Table, FileText, Bot, User } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const howItWorks = [
  "Revenue manager types a question in plain English inside the dashboard interface",
  "RAG pipeline converts the question into a SQL query using vector search and Gemini Pro",
  "SQL executes against the Redshift warehouse in the backend",
  "Results return as three outputs: a data table, a visual chart, and a 3-line plain English summary",
]

const tags = ["RAG", "Vector Database", "Gemini Pro", "LangChain", "Amazon Redshift", "Python"]

const flowSteps = [
  "Manager types question",
  "RAG + Vector DB converts to SQL",
  "SQL runs on Redshift",
  "Results: Table + Chart + Summary",
]

// Demo conversation data
const demoQuestion = "What was our RevPAR trend for downtown properties last quarter?"

const demoSQL = `SELECT p.property_name, d.month_name,
  SUM(f.revenue) / SUM(f.available_rooms) AS revpar
FROM fact_hotel_performance f
JOIN dim_property p ON f.property_id = p.property_id
JOIN dim_date d ON f.date_id = d.date_id
WHERE p.location = 'Downtown'
  AND d.quarter = 'Q3 2025'
GROUP BY p.property_name, d.month_name
ORDER BY d.month_num;`

const demoTableData = [
  { property: "Grand Plaza Downtown", jul: "$142", aug: "$158", sep: "$134" },
  { property: "Harbor View Suites", jul: "$128", aug: "$145", sep: "$121" },
  { property: "City Center Inn", jul: "$98", aug: "$112", sep: "$95" },
]

const demoChartBars = [
  { label: "Jul", values: [142, 128, 98] },
  { label: "Aug", values: [158, 145, 112] },
  { label: "Sep", values: [134, 121, 95] },
]

const demoSummary = [
  "Downtown RevPAR peaked in August at $138 average across all three properties",
  "Grand Plaza consistently outperformed portfolio average by 15-18%",
  "September showed a seasonal dip of 10-12% — consider targeted promotions for Q4",
]

export function RamsiProject2() {
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
            Project 02
          </p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-[rgb(var(--text-1))] md:text-3xl">
            Natural Language Analytics Interface
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[rgb(var(--text-2))] md:text-base">
            A ChatGPT-style query interface that lets revenue managers ask questions in plain English and get instant data answers.
          </p>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.68, ease }}
          className="mt-10 glass-panel rounded-2xl border border-slate-200/75 p-6 dark:border-slate-700/70 md:p-8"
        >
          <div className="mb-5 flex items-center gap-2">
            <MessageSquare size={18} className="text-[rgb(var(--accent))]" />
            <h3 className="font-heading text-lg font-semibold text-[rgb(var(--text-1))]">How It Works</h3>
          </div>
          <ul className="space-y-3">
            {howItWorks.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-[rgb(var(--text-2))]">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(var(--accent),0.15)] text-[10px] font-bold text-[rgb(var(--accent))]">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Animated Demo Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.68, ease }}
          className="mt-10"
        >
          <h3 className="mb-5 font-heading text-base font-semibold text-[rgb(var(--text-1))]">
            Live Demo
          </h3>
          <NLQueryDemo />
        </motion.div>

        {/* Simple Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.68, ease }}
          className="mt-10"
        >
          <h3 className="mb-5 font-heading text-base font-semibold text-[rgb(var(--text-1))]">
            Flow
          </h3>
          <div className="glass-panel overflow-x-auto rounded-2xl border border-slate-200/75 p-5 dark:border-slate-700/70 md:p-6">
            <div className="flex min-w-[560px] items-center justify-between gap-2">
              {flowSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="rounded-xl border border-slate-200/75 bg-white/80 px-4 py-3 text-center dark:border-slate-600/70 dark:bg-slate-900/55">
                    <p className="text-xs font-semibold text-[rgb(var(--text-1))]">{step}</p>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <ArrowRight size={16} className="flex-shrink-0 text-[rgb(var(--muted))]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease }}
          className="mt-8"
        >
          <h3 className="mb-4 font-heading text-base font-semibold text-[rgb(var(--text-1))]">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200/75 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-600/70 dark:bg-slate-900/55 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Animated NL Query Demo ── */

type DemoPhase = "idle" | "typing" | "processing" | "sql" | "table" | "chart" | "summary" | "done"

function NLQueryDemo() {
  const [phase, setPhase] = useState<DemoPhase>("idle")
  const [typedText, setTypedText] = useState("")
  const [started, setStarted] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startDemo = () => {
    if (started) return
    setStarted(true)
    setPhase("typing")
    setTypedText("")

    let charIndex = 0
    intervalRef.current = setInterval(() => {
      if (charIndex < demoQuestion.length) {
        setTypedText(demoQuestion.slice(0, charIndex + 1))
        charIndex++
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setTimeout(() => setPhase("processing"), 400)
        setTimeout(() => setPhase("sql"), 1400)
        setTimeout(() => setPhase("table"), 2800)
        setTimeout(() => setPhase("chart"), 3800)
        setTimeout(() => setPhase("summary"), 4800)
        setTimeout(() => setPhase("done"), 5800)
      }
    }, 35)
  }

  const resetDemo = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setStarted(false)
    setPhase("idle")
    setTypedText("")
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className="glass-panel-strong overflow-hidden rounded-2xl border border-slate-200/75 dark:border-slate-700/70">
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-slate-200/75 px-5 py-3 dark:border-slate-700/65">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
            <div className="h-3 w-3 rounded-full bg-green-400/60" />
          </div>
          <span className="ml-3 text-xs font-medium text-[rgb(var(--muted))]">Ramsi Analytics — NL Query Interface</span>
        </div>
        {phase === "done" && (
          <button
            onClick={resetDemo}
            className="rounded-full border border-slate-200/75 px-3 py-1 text-[11px] font-medium text-[rgb(var(--muted))] transition-colors hover:text-[rgb(var(--text-1))] dark:border-slate-600/70"
          >
            Replay
          </button>
        )}
      </div>

      {/* Chat area */}
      <div className="min-h-[420px] p-5 md:p-6">
        {/* Idle state */}
        {phase === "idle" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-[380px] flex-col items-center justify-center text-center"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(var(--accent),0.12)]">
              <Bot size={28} className="text-[rgb(var(--accent))]" />
            </div>
            <p className="font-heading text-lg font-semibold text-[rgb(var(--text-1))]">Ask anything about your hotel data</p>
            <p className="mt-1 text-sm text-[rgb(var(--muted))]">Powered by RAG + Gemini Pro + Redshift</p>
            <button
              onClick={startDemo}
              className="mt-6 flex items-center gap-2 rounded-full bg-[rgb(var(--accent))] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
            >
              <Send size={15} />
              Run Demo Query
            </button>
          </motion.div>
        )}

        {/* Active conversation */}
        {phase !== "idle" && (
          <div className="space-y-4">
            {/* User message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease }}
              className="flex items-start gap-3"
            >
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700">
                <User size={16} className="text-slate-600 dark:text-slate-300" />
              </div>
              <div className="glass-panel max-w-lg rounded-2xl rounded-tl-sm border border-slate-200/75 px-4 py-3 dark:border-slate-700/65">
                <p className="text-sm text-[rgb(var(--text-1))]">
                  {typedText}
                  {phase === "typing" && <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-[rgb(var(--accent))]" />}
                </p>
              </div>
            </motion.div>

            {/* Processing indicator */}
            <AnimatePresence>
              {phase === "processing" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(var(--accent),0.15)]">
                    <Bot size={16} className="text-[rgb(var(--accent))]" />
                  </div>
                  <div className="glass-panel rounded-2xl rounded-tl-sm border border-slate-200/75 px-4 py-3 dark:border-slate-700/65">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-[rgb(var(--accent))]" style={{ animationDelay: "0ms" }} />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-[rgb(var(--accent))]" style={{ animationDelay: "150ms" }} />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-[rgb(var(--accent))]" style={{ animationDelay: "300ms" }} />
                      </div>
                      <span className="text-xs text-[rgb(var(--muted))]">Searching vector DB & generating SQL...</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* AI Response */}
            {(phase === "sql" || phase === "table" || phase === "chart" || phase === "summary" || phase === "done") && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease }}
                className="flex items-start gap-3"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(var(--accent),0.15)]">
                  <Bot size={16} className="text-[rgb(var(--accent))]" />
                </div>
                <div className="flex-1 space-y-3">
                  {/* SQL Block */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="overflow-hidden rounded-xl border border-slate-200/75 dark:border-slate-700/65"
                  >
                    <div className="flex items-center gap-2 border-b border-slate-200/75 bg-slate-50/80 px-3 py-2 dark:border-slate-700/65 dark:bg-slate-800/60">
                      <FileText size={12} className="text-[rgb(var(--accent))]" />
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[rgb(var(--muted))]">Generated SQL</span>
                    </div>
                    <pre className="overflow-x-auto p-3 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                      <code>{demoSQL}</code>
                    </pre>
                  </motion.div>

                  {/* Table */}
                  {(phase === "table" || phase === "chart" || phase === "summary" || phase === "done") && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden rounded-xl border border-slate-200/75 dark:border-slate-700/65"
                    >
                      <div className="flex items-center gap-2 border-b border-slate-200/75 bg-slate-50/80 px-3 py-2 dark:border-slate-700/65 dark:bg-slate-800/60">
                        <Table size={12} className="text-[rgb(var(--accent))]" />
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[rgb(var(--muted))]">Results</span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="border-b border-slate-200/75 dark:border-slate-700/65">
                              <th className="px-3 py-2 font-semibold text-[rgb(var(--text-1))]">Property</th>
                              <th className="px-3 py-2 font-semibold text-[rgb(var(--text-1))]">Jul</th>
                              <th className="px-3 py-2 font-semibold text-[rgb(var(--text-1))]">Aug</th>
                              <th className="px-3 py-2 font-semibold text-[rgb(var(--text-1))]">Sep</th>
                            </tr>
                          </thead>
                          <tbody>
                            {demoTableData.map((row, i) => (
                              <tr key={i} className="border-b border-slate-100/75 last:border-0 dark:border-slate-800/50">
                                <td className="px-3 py-2 text-[rgb(var(--text-2))]">{row.property}</td>
                                <td className="px-3 py-2 font-medium text-[rgb(var(--text-1))]">{row.jul}</td>
                                <td className="px-3 py-2 font-medium text-[rgb(var(--accent))]">{row.aug}</td>
                                <td className="px-3 py-2 font-medium text-[rgb(var(--text-1))]">{row.sep}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}

                  {/* Chart */}
                  {(phase === "chart" || phase === "summary" || phase === "done") && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden rounded-xl border border-slate-200/75 dark:border-slate-700/65"
                    >
                      <div className="flex items-center gap-2 border-b border-slate-200/75 bg-slate-50/80 px-3 py-2 dark:border-slate-700/65 dark:bg-slate-800/60">
                        <BarChart3 size={12} className="text-[rgb(var(--accent))]" />
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[rgb(var(--muted))]">Visual</span>
                      </div>
                      <div className="p-4">
                        <MiniBarChart />
                      </div>
                    </motion.div>
                  )}

                  {/* Summary */}
                  {(phase === "summary" || phase === "done") && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="rounded-xl border border-[rgba(var(--accent),0.3)] bg-[rgba(var(--accent),0.06)] p-4"
                    >
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[rgb(var(--accent))]">Summary</p>
                      <ul className="space-y-1.5">
                        {demoSummary.map((s, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.3, ease }}
                            className="flex items-start gap-2 text-xs leading-relaxed text-[rgb(var(--text-2))]"
                          >
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[rgb(var(--accent))]" />
                            {s}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Input bar */}
      <div className="border-t border-slate-200/75 px-5 py-3 dark:border-slate-700/65">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200/75 bg-white/80 px-4 py-2.5 dark:border-slate-600/70 dark:bg-slate-900/55">
          <span className="flex-1 text-sm text-[rgb(var(--muted))]">
            {phase === "idle" ? "Ask a question about your hotel data..." : demoQuestion}
          </span>
          <Send size={16} className="text-[rgb(var(--muted))]" />
        </div>
      </div>
    </div>
  )
}

/* ── Mini Bar Chart ── */

function MiniBarChart() {
  const maxVal = 158
  const colors = [
    "bg-[rgb(var(--accent))]",
    "bg-sky-400 dark:bg-sky-500",
    "bg-slate-400 dark:bg-slate-500",
  ]
  const labels = ["Grand Plaza", "Harbor View", "City Center"]

  return (
    <div>
      {/* Legend */}
      <div className="mb-3 flex flex-wrap gap-3">
        {labels.map((l, i) => (
          <div key={l} className="flex items-center gap-1.5">
            <div className={`h-2.5 w-2.5 rounded-sm ${colors[i]}`} />
            <span className="text-[10px] text-[rgb(var(--muted))]">{l}</span>
          </div>
        ))}
      </div>

      {/* Bars */}
      <div className="flex items-end gap-4">
        {demoChartBars.map((month) => (
          <div key={month.label} className="flex flex-1 flex-col items-center gap-1">
            <div className="flex w-full items-end justify-center gap-1" style={{ height: 100 }}>
              {month.values.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${(val / maxVal) * 100}%` }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease }}
                  className={`w-4 rounded-t-sm ${colors[i]}`}
                />
              ))}
            </div>
            <span className="text-[10px] font-medium text-[rgb(var(--muted))]">{month.label}</span>
          </div>
        ))}
      </div>

      {/* Y-axis hint */}
      <div className="mt-2 flex justify-between text-[9px] text-[rgb(var(--muted))]">
        <span>RevPAR ($)</span>
        <span>Q3 2025</span>
      </div>
    </div>
  )
}