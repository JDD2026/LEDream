import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-md border border-neutral-white/20 bg-dark-navy px-4 py-2 text-sm text-neutral-white",
          "placeholder:text-neutral-white/50",
          "focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-neon-blue",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "transition-all duration-normal",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

