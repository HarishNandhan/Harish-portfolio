"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { personalInfo } from "@/data/portfolio"

const heroEaseOut: [number, number, number, number] = [0.22, 1, 0.36, 1]
const heroEaseInOut: [number, number, number, number] = [0.65, 0, 0.35, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.18,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: heroEaseOut },
  },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.06fr_0.94fr] lg:items-center"
      >
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="glass-panel inline-flex rounded-full border border-slate-200/75 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700/70 dark:text-slate-200">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl font-semibold leading-tight text-slate-900 dark:text-slate-100 md:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-5 text-xl font-semibold text-slate-700 dark:text-slate-200 md:text-3xl"
          >
            {personalInfo.role}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 lg:mx-0 md:text-lg"
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <Button href="#projects" variant="primary" size="lg">
              View Projects
            </Button>
            <Button href={personalInfo.resumeUrl} variant="secondary" size="lg">
              <FileText size={19} />
              Resume
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center gap-4 lg:justify-start"
          >
            {[
              { icon: Github, href: personalInfo.social.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel interactive-lift rounded-2xl border border-slate-200/75 p-3 text-slate-600 hover:text-cyan-700 dark:border-slate-700/70 dark:text-slate-300 dark:hover:text-cyan-300"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 23, mass: 0.7 }}
                aria-label={label}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="relative order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[22rem] sm:max-w-[24rem] md:max-w-[27rem]">
            <motion.div
              className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-tr from-cyan-300/35 via-sky-300/10 to-cyan-200/35 blur-2xl dark:from-sky-500/30 dark:via-cyan-400/8 dark:to-teal-400/20"
              animate={{ rotate: [0, 5, 0], scale: [1, 1.04, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: heroEaseInOut }}
            />

            <motion.div
              className="glass-panel-strong relative h-full rounded-[2rem] border border-slate-200/80 p-3 dark:border-slate-700/70"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.8 }}
            >
              <div className="relative h-full overflow-hidden rounded-[1.55rem] border border-slate-200/80 dark:border-slate-700/75">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/18 via-transparent to-transparent dark:from-slate-950/42" />
              </div>
            </motion.div>

            <motion.div
              className="soft-focus-ring absolute -left-6 top-12 h-4 w-4 rounded-full bg-cyan-200 dark:bg-cyan-400"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: heroEaseInOut }}
            />
            <motion.div
              className="absolute -right-4 bottom-10 h-3.5 w-3.5 rounded-full bg-sky-300 dark:bg-sky-400"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: heroEaseInOut }}
            />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7, ease: heroEaseOut }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: heroEaseInOut }}
            className="flex flex-col items-center text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute left-6 top-1/4 h-72 w-72 rounded-full bg-cyan-300/20 blur-[110px] dark:bg-cyan-500/12" />
      <div className="pointer-events-none absolute bottom-1/4 right-8 h-80 w-80 rounded-full bg-sky-300/20 blur-[120px] dark:bg-sky-500/14" />
    </section>
  )
}