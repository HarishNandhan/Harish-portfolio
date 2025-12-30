"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import React from "react"

interface BadgeProps {
  variant?: "default" | "primary" | "secondary" | "outline"
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, onClick }, ref) => {
    const variants = {
      default: "bg-white/10 text-gray-300 border-white/10",
      primary: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      secondary: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      outline: "bg-transparent text-gray-400 border-gray-600",
    }

    return (
      <motion.span
        ref={ref}
        className={cn(
          "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
          variants[variant],
          className
        )}
        whileHover={{ scale: 1.05 }}
        onClick={onClick}
      >
        {children}
      </motion.span>
    )
  }
)

Badge.displayName = "Badge"