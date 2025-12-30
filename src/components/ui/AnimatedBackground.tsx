"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient - light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-[#0f0f23] dark:via-[#1a1a3e] dark:to-[#0a0a0f]" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-purple-200/40 dark:bg-purple-600/20 blur-[80px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-pink-200/40 dark:bg-pink-600/20 blur-[80px]"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}