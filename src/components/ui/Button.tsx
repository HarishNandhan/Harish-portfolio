"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import React from "react"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25",
        secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm",
        outline: "border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white",
        ghost: "text-gray-300 hover:text-white hover:bg-white/10",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = "Button"