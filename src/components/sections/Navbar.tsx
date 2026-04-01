"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { navItems, personalInfo } from "@/data/portfolio"
import { cn } from "@/lib/utils"

const revealEase: [number, number, number, number] = [0.22, 1, 0.36, 1]
const navSpring = {
  type: "spring",
  stiffness: 300,
  damping: 27,
  mass: 0.72,
} as const

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navItems.map(item => item.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
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
        <motion.a
          href="#home"
          className="font-heading text-base font-semibold tracking-tight gradient-text md:text-lg"
          whileHover={{ y: -1 }}
          transition={navSpring}
        >
          {personalInfo.name}
        </motion.a>

        <div className="hidden md:flex items-center gap-4">
          <div className="glass-panel flex items-center rounded-full border border-slate-200/70 p-1 dark:border-slate-700/70">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "")

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-slate-900 dark:text-slate-100"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  )}
                  whileHover={{ y: -1 }}
                  transition={navSpring}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-full border border-cyan-300/70 bg-white/85 dark:border-cyan-400/35 dark:bg-slate-900/80"
                      transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.75 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </motion.a>
              )
            })}
          </div>

          {/* Case Studies link */}
          <motion.a
            href="/Harish-portfolio/case-studies/"
            className="rounded-full border border-slate-200/70 bg-white/75 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-cyan-300/70 hover:text-cyan-700 dark:border-slate-700/70 dark:bg-slate-900/55 dark:text-slate-300 dark:hover:border-cyan-300/45 dark:hover:text-cyan-300"
            whileHover={{ y: -1 }}
            transition={navSpring}
          >
            Case Studies
          </motion.a>
          
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

        <div className="md:hidden flex items-center gap-4">
          {mounted && (
            <motion.button
              onClick={toggleTheme}
              className="glass-panel rounded-full border border-slate-200/75 p-2.5 text-slate-700 dark:border-slate-700/70 dark:text-slate-200"
              whileTap={{ scale: 0.95 }}
              transition={navSpring}
            >
              {resolvedTheme === "dark" ? (
                <Sun size={17} className="text-amber-300" />
              ) : (
                <Moon size={17} />
              )}
            </motion.button>
          )}
          <motion.button
            className="glass-panel rounded-xl border border-slate-200/75 p-2.5 text-slate-700 dark:border-slate-700/70 dark:text-slate-200"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            transition={navSpring}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.38, ease: revealEase }}
            className="glass-panel-strong mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-slate-200/70 md:hidden dark:border-slate-700/70"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.3, ease: revealEase }}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-2 text-base font-medium",
                    activeSection === item.href.replace("#", "")
                      ? "bg-white/80 text-slate-900 dark:bg-slate-900/80 dark:text-slate-100"
                      : "text-slate-600 dark:text-slate-300"
                  )}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="/Harish-portfolio/case-studies/"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.06, duration: 0.3, ease: revealEase }}
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-cyan-300/50 px-3 py-2 text-base font-medium text-cyan-700 dark:border-cyan-400/30 dark:text-cyan-300"
              >
                Case Studies
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}