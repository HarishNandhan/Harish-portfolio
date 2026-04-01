"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { aboutMe, personalInfo } from "@/data/portfolio"
import { MapPin, GraduationCap, Briefcase } from "lucide-react"

const aboutEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="About Me"
          subtitle="Get to know the person behind the code"
        />

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.78, ease: aboutEase }}
            className="relative"
          >
            <div className="glass-panel-strong interactive-lift relative mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-slate-200/75 p-8 dark:border-slate-700/70 md:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/25 blur-2xl dark:bg-cyan-500/20" />

              <div className="relative text-center">
                <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 p-[3px]">
                  <div className="h-full w-full overflow-hidden rounded-full border border-white/45 bg-white dark:border-slate-700/75 dark:bg-slate-900">
                    <Image
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  {personalInfo.fullName}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-300">
                  {personalInfo.role}
                </p>

                <div className="mt-7 space-y-3 text-left">
                  <div className="glass-panel flex items-center gap-3 rounded-xl border border-slate-200/70 p-3 dark:border-slate-700/65">
                    <div className="rounded-lg bg-cyan-100 p-2 dark:bg-cyan-500/15">
                      <MapPin size={16} className="text-cyan-700 dark:text-cyan-300" />
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">{personalInfo.location}</span>
                  </div>

                  <div className="glass-panel flex items-center gap-3 rounded-xl border border-slate-200/70 p-3 dark:border-slate-700/65">
                    <div className="rounded-lg bg-cyan-100 p-2 dark:bg-cyan-500/15">
                      <GraduationCap size={16} className="text-cyan-700 dark:text-cyan-300" />
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">MS Data Science @ CU Boulder</span>
                  </div>

                  <div className="glass-panel flex items-center gap-3 rounded-xl border border-slate-200/70 p-3 dark:border-slate-700/65">
                    <div className="rounded-lg bg-cyan-100 p-2 dark:bg-cyan-500/15">
                      <Briefcase size={16} className="text-cyan-700 dark:text-cyan-300" />
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">Seeking full time positions starting from May 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.78, ease: aboutEase }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.66, ease: aboutEase }}
              className="glass-panel rounded-[1.75rem] border border-slate-200/70 p-8 dark:border-slate-700/65 md:p-10"
            >
              <p className="whitespace-pre-line text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
                {aboutMe}
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { label: "Projects", value: "16+" },
                { label: "Technologies", value: "30+" },
                { label: "Internships", value: "4" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.55, ease: aboutEase }}
                  className="glass-panel interactive-lift rounded-2xl border border-slate-200/70 p-4 text-center dark:border-slate-700/65"
                >
                  <div className="font-heading text-3xl font-semibold gradient-text">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400 sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}