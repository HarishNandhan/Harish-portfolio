"use client"

import { motion } from "framer-motion"

const ambientEase: [number, number, number, number] = [0.65, 0, 0.35, 1]

export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background:
            "radial-gradient(circle at 18% 14%, rgba(125, 211, 252, 0.3) 0%, transparent 36%), radial-gradient(circle at 86% 10%, rgba(45, 212, 191, 0.22) 0%, transparent 40%), linear-gradient(180deg, #f8fbff 0%, #eef4fb 52%, #e4edf9 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(circle at 18% 14%, rgba(56, 189, 248, 0.25) 0%, transparent 36%), radial-gradient(circle at 86% 10%, rgba(6, 182, 212, 0.2) 0%, transparent 40%), linear-gradient(180deg, #040a14 0%, #091426 52%, #0d1a30 100%)",
        }}
      />

      <div className="absolute inset-0 opacity-50 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <motion.div
        className="absolute -left-20 top-24 h-[30rem] w-[30rem] rounded-full bg-cyan-300/35 blur-[110px] dark:bg-sky-500/20"
        animate={{
          x: [0, 36, 0],
          y: [0, -34, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: ambientEase,
        }}
      />
      <motion.div
        className="absolute -right-16 bottom-16 h-[28rem] w-[28rem] rounded-full bg-sky-300/30 blur-[105px] dark:bg-cyan-500/18"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: ambientEase,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 34%, rgba(2, 6, 23, 0.16) 100%)",
        }}
      />
    </div>
  )
}