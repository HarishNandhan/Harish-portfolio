"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { projects } from "@/data/portfolio"
import { Github, ExternalLink } from "lucide-react"

const categories = ["All", "Data Engineering", "Data Analytics", "LLM-RAG-GenAI", "ML & DL"]
const projectsRevealEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  )

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Projects"
          subtitle="A showcase of my work in data science, ML, and AI"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, ease: projectsRevealEase }}
          className="mb-12 flex justify-center"
        >
          <div className="glass-panel flex max-w-full flex-wrap justify-center gap-2 rounded-2xl border border-slate-200/75 p-2 dark:border-slate-700/70">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 md:px-5 ${
                  activeFilter === category
                    ? "bg-slate-900 text-white shadow-[0_10px_24px_-14px_rgba(2,6,23,0.8)] dark:bg-cyan-400 dark:text-slate-950"
                    : "text-slate-600 hover:bg-white hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/85 dark:hover:text-slate-100"
                }`}
                whileHover={{ y: -1.5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 24, mass: 0.7 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 14, scale: 0.98 }}
                transition={{ duration: 0.42, delay: index * 0.035, ease: projectsRevealEase }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.995 }}
                className="glass-panel-strong interactive-lift group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-slate-200/75 dark:border-slate-700/70"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full border border-white/20 bg-slate-900/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-md dark:bg-slate-800/75">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-heading text-lg font-semibold text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  <p className="mt-3 text-sm italic text-cyan-700 dark:text-cyan-300">
                    💡 {project.impact}
                  </p>

                  <div className="mb-4 mt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span 
                        key={tech} 
                        className="rounded-full border border-slate-200/75 bg-white/80 px-2 py-1 text-xs text-slate-600 dark:border-slate-600/70 dark:bg-slate-900/50 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="rounded-full border border-slate-200/75 bg-white/80 px-2 py-1 text-xs text-slate-600 dark:border-slate-600/70 dark:bg-slate-900/50 dark:text-slate-300">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 border-t border-slate-200/75 pt-4 dark:border-slate-700/65">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-300"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-300"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}