"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  BarChart3, Building2, Bot, Truck, ShoppingCart, Heart,
} from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap: Record<string, any> = {  // eslint-disable-line
  BarChart3,
  Building2,
  Bot,
  Truck,
  ShoppingCart,
  Heart,
}

const tileEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface CaseStudyTileProps {
  id: string
  icon: string
  companyLabel: string
  title: string
  description: string
  keyMetric: string
  secondaryMetric: string
  techBadges: string[]
  href: string
  special: boolean
  index: number
}

export function CaseStudyTile({
  icon,
  companyLabel,
  title,
  description,
  keyMetric,
  secondaryMetric,
  techBadges,
  href,
  special,
  index,
}: CaseStudyTileProps) {
  const Icon = iconMap[icon] || BarChart3

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.68, ease: tileEase }}
    >
      <Link href={href} className="block h-full">
        <div
          className={cn(
            "interactive-lift group flex h-full flex-col rounded-[1.7rem] border p-6 transition-all duration-300 md:p-8",
            special
              ? "glass-panel-strong border-l-[3px] border-l-[rgb(var(--accent))] border-t-slate-200/75 border-r-slate-200/75 border-b-slate-200/75 bg-[rgba(var(--accent),0.04)] dark:border-l-[rgb(var(--accent))] dark:border-t-slate-700/70 dark:border-r-slate-700/70 dark:border-b-slate-700/70 dark:bg-[rgba(var(--accent),0.06)]"
              : "glass-panel border-slate-200/75 dark:border-slate-700/70"
          )}
        >
          {/* Icon + Company Label */}
          <div className="mb-4 flex items-center gap-3">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl shadow-lg shadow-slate-900/10",
                special
                  ? "bg-gradient-to-br from-[rgb(var(--accent))] to-[rgb(var(--accent-soft))]"
                  : "bg-gradient-to-br from-slate-700 to-slate-900 dark:from-cyan-500 dark:to-sky-500"
              )}
            >
              <Icon size={20} className="text-white" />
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.1em] text-[rgb(var(--muted))]">
              {companyLabel}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading text-xl font-semibold text-[rgb(var(--text-1))] md:text-2xl">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-3 flex-1 text-sm leading-relaxed text-[rgb(var(--text-2))] md:text-base">
            {description}
          </p>

          {/* Metrics */}
          <div className="mt-5 flex flex-col gap-1">
            <span
              className={cn(
                "font-heading text-lg font-semibold md:text-xl",
                special
                  ? "text-[rgb(var(--accent))]"
                  : "gradient-text"
              )}
            >
              {keyMetric}
            </span>
            <span className="text-sm text-[rgb(var(--muted))]">
              {secondaryMetric}
            </span>
          </div>

          {/* Tech Badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-200/75 bg-white/80 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-600/70 dark:bg-slate-900/55 dark:text-slate-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}