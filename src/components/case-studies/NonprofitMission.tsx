"use client"

import { motion } from "framer-motion"
import { Heart, Users } from "lucide-react"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const orgs = [
  {
    name: "Junior Red Cross",
    role: "SCHOOL VOLUNTEER",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_the_Red_Cross.svg",
    fallbackIcon: Heart,
    fallbackColor: "bg-red-500/10 text-red-500",
    bullets: [
      "Organized blood donation camps across multiple cities",
      "Conducted cancer awareness programs in communities with limited healthcare access",
      "Ran health check camps in underserved cities where clinical assistance was scarce",
    ],
    impact: "Direct healthcare access for underserved communities",
    impactColor: "bg-red-50 text-red-700 border-red-200/75 dark:bg-red-500/10 dark:text-red-300 dark:border-red-500/25",
  },
  {
    name: "Enactus",
    role: "COLLEGE MEMBER",
    image: "",
    fallbackIcon: Users,
    fallbackColor: "bg-emerald-500/10 text-emerald-500",
    bullets: [
      "Partnered with women from underprivileged villages to launch a candle-making business",
      "Provided seed funding and business mentorship to the village community",
      "Sold products to customers and returned 100% of profits to the community",
    ],
    impact: "100% of profits returned to village women entrepreneurs",
    impactColor: "bg-emerald-50 text-emerald-700 border-emerald-200/75 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/25",
  },
]

export function NonprofitMission() {
  return (
    <section className="relative py-20 md:py-24">
      {/* Warm background tint */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/40 via-orange-50/20 to-transparent dark:from-amber-500/[0.03] dark:via-orange-500/[0.02] dark:to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.74, ease }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
            Beyond the Dashboard
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-[rgb(var(--text-1))] md:text-4xl">
            Why Nonprofit Work Is Personal to Me
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[rgb(var(--text-2))]">
            Before I was a data engineer, I was a volunteer. That experience shapes how I think about impact.
          </p>
          <div className="mt-5 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
          </div>
        </motion.div>

        {/* Organization Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {orgs.map((org, i) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.68, ease }}
              className="glass-panel rounded-2xl border border-slate-200/75 p-6 dark:border-slate-700/70 md:p-8"
            >
              {/* Image / Logo */}
              <div className="mb-5 flex h-[120px] items-center justify-center overflow-hidden rounded-xl bg-white/80 dark:bg-slate-800/50">
                <ImageWithFallback
                  src={org.image}
                  alt={org.name}
                  FallbackIcon={org.fallbackIcon}
                  fallbackColor={org.fallbackColor}
                />
              </div>

              {/* Role */}
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[rgb(var(--muted))]">
                {org.role}
              </p>

              {/* Name */}
              <h3 className="mt-1 font-heading text-xl font-semibold text-[rgb(var(--text-1))]">
                {org.name}
              </h3>

              {/* Bullets */}
              <ul className="mt-4 space-y-2.5">
                {org.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed text-[rgb(var(--text-2))]">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500/60" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Impact pill */}
              <div className="mt-5">
                <span className={`inline-block rounded-full border px-3 py-1.5 text-xs font-medium ${org.impactColor}`}>
                  {org.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.68, ease }}
          className="mt-12 text-center"
        >
          <p className="mx-auto max-w-2xl text-base italic leading-relaxed text-[rgb(var(--text-2))] md:text-lg">
            &ldquo;Working with children&apos;s healthcare fundraising is not a career pivot for me. It is a continuation of work I started years ago.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Image with fallback ── */

function ImageWithFallback({
  src, alt, FallbackIcon, fallbackColor,
}: {
  src: string
  alt: string
  FallbackIcon: any // eslint-disable-line
  fallbackColor: string
}) {
  if (!src) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2">
        <div className={`flex h-16 w-16 items-center justify-center rounded-xl ${fallbackColor}`}>
          <FallbackIcon size={32} />
        </div>
        <span className="font-heading text-lg font-semibold text-[rgb(var(--text-1))]">{alt}</span>
      </div>
    )
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-16 w-auto object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.style.display = "none"
          const fallback = target.nextElementSibling as HTMLElement
          if (fallback) fallback.style.display = "flex"
        }}
      />
      <div
        className={`hidden h-16 w-16 items-center justify-center rounded-xl ${fallbackColor}`}
        style={{ display: "none" }}
      >
        <FallbackIcon size={32} />
      </div>
    </div>
  )
}