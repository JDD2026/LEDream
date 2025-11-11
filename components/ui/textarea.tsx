import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-md border border-neutral-white/20 bg-dark-navy px-4 py-3 text-sm text-neutral-white",
          "placeholder:text-neutral-white/50",
          "focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-neon-blue",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-none",
          "transition-all duration-normal",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }

