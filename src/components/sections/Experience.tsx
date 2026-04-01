"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { experience, education, events } from "@/data/portfolio"
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink, Linkedin } from "lucide-react"

const experienceEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function Experience() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Experience & Education"
          subtitle="My journey in data science and technology"
        />

        <div className="mb-16 md:mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.62, ease: experienceEase }}
            className="mb-8 flex items-center gap-3 font-heading text-2xl font-semibold text-slate-900 dark:text-slate-100"
          >
            <span className="rounded-xl bg-cyan-100 p-2.5 dark:bg-cyan-500/20">
              <Briefcase className="text-cyan-700 dark:text-cyan-300" size={20} />
            </span>
            Work Experience
          </motion.h3>

          <div className="relative md:pl-2">
            <div className="absolute bottom-0 left-3 top-0 hidden w-px bg-gradient-to-b from-cyan-500/80 via-sky-400/55 to-transparent md:block" />

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.62, ease: experienceEase }}
                className="relative pb-8 md:pl-12"
              >
                <div className="absolute left-0 top-6 hidden h-7 w-7 items-center justify-center rounded-full bg-cyan-500/15 ring-1 ring-cyan-500/45 md:flex">
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
                </div>

                <div className="glass-panel interactive-lift rounded-2xl border border-slate-200/75 p-6 dark:border-slate-700/70">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">{exp.period}</span>
                    <span className="text-slate-400">•</span>
                    <span className="rounded-full bg-cyan-100 px-2.5 py-1 text-xs font-medium text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-200">
                      {exp.type}
                    </span>
                  </div>
                  
                  <h4 className="font-heading text-xl font-semibold text-slate-900 dark:text-slate-100">{exp.role}</h4>
                  <p className="mb-1 mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-cyan-700 dark:text-cyan-300">{exp.company}</p>
                  
                  <div className="mb-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        <span className="mt-1.5 flex-shrink-0 text-cyan-500">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16 md:mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.62, ease: experienceEase }}
            className="mb-8 flex items-center gap-3 font-heading text-2xl font-semibold text-slate-900 dark:text-slate-100"
          >
            <span className="rounded-xl bg-sky-100 p-2.5 dark:bg-sky-500/20">
              <GraduationCap className="text-sky-700 dark:text-sky-300" size={20} />
            </span>
            Education
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.56, ease: experienceEase }}
                className="glass-panel interactive-lift rounded-2xl border border-slate-200/75 p-6 dark:border-slate-700/70"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 p-3 shadow-lg shadow-slate-900/10 flex-shrink-0">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="mb-1 text-sm font-semibold text-sky-700 dark:text-sky-300">{edu.period}</p>
                    <h4 className="font-heading text-lg font-semibold text-slate-900 dark:text-slate-100">{edu.degree}</h4>
                    <p className="mb-1 mt-1 text-sm font-semibold uppercase tracking-[0.06em] text-cyan-700 dark:text-cyan-300">{edu.institution}</p>
                    <div className="mb-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <MapPin size={14} />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                    {edu.description && (
                      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{edu.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.62, ease: experienceEase }}
            className="mb-8 flex items-center gap-3 font-heading text-2xl font-semibold text-slate-900 dark:text-slate-100"
          >
            <span className="rounded-xl bg-cyan-100 p-2.5 dark:bg-cyan-500/20">
              <Calendar className="text-cyan-700 dark:text-cyan-300" size={20} />
            </span>
            Events & Conferences
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.56, ease: experienceEase }}
                className="glass-panel overflow-hidden rounded-2xl border border-slate-200/75 dark:border-slate-700/70"
              >
                <motion.button
                  type="button"
                  className="group w-full cursor-pointer p-4 text-left transition-colors hover:bg-slate-100/45 dark:hover:bg-slate-800/40"
                  onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 290, damping: 24, mass: 0.72 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                      {event.image ? (
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Calendar size={24} className="text-cyan-500" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="line-clamp-2 font-heading text-base font-semibold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-slate-100 dark:group-hover:text-cyan-300">
                        {event.title}
                      </h4>
                      <p className="mt-1 flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                        <Linkedin size={14} className="text-blue-500" />
                        Click to view LinkedIn post
                      </p>
                    </div>
                    <ExternalLink size={18} className="flex-shrink-0 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300" />
                  </div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {expandedEvent === event.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.36, ease: experienceEase }}
                      className="border-t border-slate-200/75 dark:border-slate-700/65"
                    >
                      <div className="p-4">
                        <div className="rounded-xl border border-slate-200/75 bg-white/80 p-4 text-center dark:border-slate-700/65 dark:bg-slate-900/60">
                          <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
                            View the full post on LinkedIn
                          </p>
                          <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-6 py-3 font-medium text-white transition-colors hover:bg-[#004182]"
                          >
                            <Linkedin size={18} />
                            Open in LinkedIn
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}