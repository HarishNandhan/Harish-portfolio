"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { experience, education, events } from "@/data/portfolio"
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink, Linkedin } from "lucide-react"

export function Experience() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)

  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Experience & Education"
          subtitle="My journey in data science and technology"
        />

        {/* Experience Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white"
          >
            <Briefcase className="text-purple-500" />
            Work Experience
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 pb-10"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Briefcase size={14} className="text-white" />
                </div>

                <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">{exp.period}</span>
                    <span className="text-gray-400">•</span>
                    <span className="px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 text-xs font-medium">
                      {exp.type}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">{exp.company}</p>
                  
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-purple-500 mt-1.5 flex-shrink-0">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white"
          >
            <GraduationCap className="text-pink-500" />
            Education
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex-shrink-0">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-pink-600 dark:text-pink-400 text-sm font-semibold mb-1">{edu.period}</p>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-2">
                      <MapPin size={14} />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-sm font-semibold">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                    {edu.description && (
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-3">{edu.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Events & Conferences */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white"
          >
            <Calendar className="text-cyan-500" />
            Events & Conferences
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300"
              >
                {/* Event Card */}
                <div 
                  className="p-4 cursor-pointer"
                  onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {event.image ? (
                        <Image
                        src={event.image}
                        alt={event.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                      ) : (
                        <Calendar size={24} className="text-cyan-500" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors line-clamp-2">
                        {event.title}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 flex items-center gap-1">
                        <Linkedin size={14} className="text-blue-500" />
                        Click to view LinkedIn post
                      </p>
                    </div>
                    <ExternalLink size={18} className="text-gray-400 flex-shrink-0" />
                  </div>
                </div>

                {/* Expanded LinkedIn Embed */}
                <AnimatePresence>
                  {expandedEvent === event.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 dark:border-white/10"
                    >
                      <div className="p-4">
                        <div className="bg-gray-100 dark:bg-black/30 rounded-xl p-4 text-center">
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            View the full post on LinkedIn
                          </p>
                          <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A66C2] text-white font-medium hover:bg-[#004182] transition-colors"
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