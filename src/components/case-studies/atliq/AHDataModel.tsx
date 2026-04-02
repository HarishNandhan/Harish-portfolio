"use client"

import { motion } from "framer-motion"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const factTable = {
  name: "fact_sales_monthly",
  fields: ["date", "product_code", "customer_code", "Qty", "net_sales_amount", "freight_cost", "manufacturing_cost"],
}

const dims = [
  { name: "dim_customer", fields: ["customer_code", "customer_name", "market", "sub_zone", "region"], pos: "left" },
  { name: "dim_product", fields: ["product_code", "product_name", "division", "segment", "category"], pos: "right" },
  { name: "dim_market", fields: ["market", "sub_zone", "region"], pos: "bottom-left" },
  { name: "dim_date", fields: ["date", "month", "quarter", "fiscal_year"], pos: "bottom-right" },
  { name: "ns_targets", fields: ["market", "ns_target_2021"], pos: "top" },
]

export function AHDataModel() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.68, ease }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))]">Data Model</p>
          <h3 className="mt-2 font-heading text-2xl font-semibold text-[rgb(var(--text-1))] md:text-3xl">Star Schema Connecting Three Source Tables</h3>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.68, ease }}
          className="mt-8 glass-panel-strong overflow-x-auto rounded-2xl border border-slate-200/75 p-6 dark:border-slate-700/70 md:p-10">
          
          <div className="mx-auto min-w-[600px] max-w-3xl">
            {/* Top dim: ns_targets */}
            <div className="mb-4 flex justify-center">
              <DimNode name="ns_targets" fields={dims[4].fields} />
            </div>
            <div className="mb-4 flex justify-center">
              <div className="h-8 w-px bg-[rgb(var(--accent))]" />
            </div>

            {/* Middle row: dim_customer — FACT — dim_product */}
            <div className="flex items-center justify-center gap-4">
              <DimNode name="dim_customer" fields={dims[0].fields} />
              <div className="h-px w-8 bg-[rgb(var(--accent))]" />
              <FactNode name={factTable.name} fields={factTable.fields} />
              <div className="h-px w-8 bg-[rgb(var(--accent))]" />
              <DimNode name="dim_product" fields={dims[1].fields} />
            </div>

            {/* Bottom connectors */}
            <div className="mt-4 flex justify-center gap-32">
              <div className="flex flex-col items-center">
                <div className="h-8 w-px bg-[rgb(var(--accent))]" />
                <DimNode name="dim_market" fields={dims[2].fields} />
              </div>
              <div className="flex flex-col items-center">
                <div className="h-8 w-px bg-[rgb(var(--accent))]" />
                <DimNode name="dim_date" fields={dims[3].fields} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FactNode({ name, fields }: { name: string; fields: string[] }) {
  return (
    <div className="glass-panel rounded-xl border-2 border-[rgb(var(--accent))]/50 bg-[rgba(var(--accent),0.06)] p-4 text-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[rgb(var(--accent))]">Fact Table</p>
      <p className="mt-1 font-heading text-sm font-semibold text-[rgb(var(--text-1))]">{name}</p>
      <div className="mt-2 flex flex-wrap justify-center gap-1">
        {fields.map((f) => (
          <span key={f} className="rounded bg-slate-100/80 px-1.5 py-0.5 font-mono text-[9px] text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">{f}</span>
        ))}
      </div>
    </div>
  )
}

function DimNode({ name, fields }: { name: string; fields: string[] }) {
  return (
    <div className="glass-panel rounded-xl border border-slate-200/75 p-3 text-center dark:border-slate-700/70">
      <p className="font-heading text-xs font-semibold text-[rgb(var(--text-1))]">{name}</p>
      <div className="mt-1.5 flex flex-wrap justify-center gap-1">
        {fields.map((f) => (
          <span key={f} className="rounded bg-slate-100/80 px-1.5 py-0.5 font-mono text-[9px] text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">{f}</span>
        ))}
      </div>
    </div>
  )
}