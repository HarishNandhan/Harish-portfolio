"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { personalInfo } from "@/data/portfolio"
import { cn } from "@/lib/utils"

const revealEase: [number, number, number, number] = [0.22, 1, 0.36, 1]
const navSpring = {
  type: "spring",
  stiffness: 300,
  damping: 27,
  mass: 0.72,
} as const

export function CaseStudiesNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.72, ease: revealEase }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 md:px-6",
          scrolled
            ? "glass-panel-strong border-slate-200/70 dark:border-slate-700/70"
            : "glass-panel border-slate-200/60 dark:border-slate-700/55"
        )}
      >
        {/* Back to portfolio */}
        <div className="flex items-center gap-4">
          <motion.a
            href="/Harish-portfolio/"
            className="flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/75 px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-cyan-300/70 hover:text-cyan-700 dark:border-slate-700/70 dark:bg-slate-900/55 dark:text-slate-300 dark:hover:border-cyan-300/45 dark:hover:text-cyan-300"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={navSpring}
          >
            <ArrowLeft size={16} />
            Portfolio
          </motion.a>

          <motion.span
            className="font-heading text-base font-semibold tracking-tight gradient-text md:text-lg"
            whileHover={{ y: -1 }}
            transition={navSpring}
          >
            {personalInfo.name}
          </motion.span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <span className="hidden text-sm font-medium text-[rgb(var(--muted))] sm:block">
            Work Portfolio
          </span>

          {mounted && (
            <motion.button
              onClick={toggleTheme}
              className="glass-panel rounded-full border border-slate-200/75 p-2.5 text-slate-700 transition-colors hover:text-cyan-700 dark:border-slate-700/70 dark:text-slate-200 dark:hover:text-cyan-300"
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={navSpring}
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun size={17} className="text-amber-300" />
              ) : (
                <Moon size={17} />
              )}
            </motion.button>
          )}
        </div>
      </nav>
    </motion.header>
  )
}