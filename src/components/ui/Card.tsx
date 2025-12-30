"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  glow?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, glow = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6",
          hover && "transition-all duration-300 hover:bg-white/10 hover:border-white/20",
          glow && "hover:shadow-lg hover:shadow-purple-500/20",
          className
        )}
        whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = "Card"