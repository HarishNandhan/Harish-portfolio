"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import React from "react"

const buttonSpring = {
  type: "spring",
  stiffness: 320,
  damping: 24,
  mass: 0.7,
} as const

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-60 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-slate-900 via-cyan-800 to-slate-900 text-white shadow-[0_14px_28px_-14px_rgba(14,116,144,0.72)] hover:-translate-y-0.5 hover:shadow-[0_20px_38px_-16px_rgba(8,47,73,0.75)] dark:from-cyan-500 dark:via-sky-500 dark:to-cyan-500 dark:text-slate-950",
        secondary:
          "border border-slate-300/75 dark:border-slate-500/40 bg-white/75 dark:bg-slate-900/52 text-slate-700 dark:text-slate-100 backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white dark:hover:bg-slate-900/78 hover:border-cyan-300/70 dark:hover:border-cyan-300/45",
        outline:
          "border border-cyan-700/35 dark:border-cyan-300/45 bg-transparent text-cyan-900 dark:text-cyan-200 hover:-translate-y-0.5 hover:bg-cyan-700/10 dark:hover:bg-cyan-300/10",
        ghost:
          "text-slate-600 dark:text-slate-300 hover:bg-white/65 dark:hover:bg-slate-800/65 hover:text-slate-900 dark:hover:text-slate-100",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm md:text-base",
        lg: "px-8 py-3.5 text-base md:text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href?: string
  className?: string
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, children, onClick, disabled, type = "button" }, ref) => {
    if (href) {
      return (
        <motion.a
          href={href}
          target={href?.startsWith("http") ? "_blank" : undefined}
          rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          className={cn(buttonVariants({ variant, size, className }))}
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.985 }}
          transition={buttonSpring}
        >
          {children}
        </motion.a>
      )
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn(buttonVariants({ variant, size, className }))}
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.985 }}
        transition={buttonSpring}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = "Button"