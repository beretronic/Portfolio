import * as React from "react"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: number
    max?: number
    showValue?: boolean
    className?: string
    barClassName?: string
    size?: "default" | "sm" | "lg"
    variant?: "default" | "accent" | "primary" | "secondary"
  }
>(({ className, value, max = 100, showValue = false, barClassName, size = "default", variant = "default", ...props }, ref) => {
  const percentage = (value / max) * 100
  
  const sizeClasses = {
    default: "h-4",
    sm: "h-2",
    lg: "h-6"
  }
  
  const variantClasses = {
    default: "bg-primary",
    accent: "bg-accent",
    primary: "bg-primary",
    secondary: "bg-secondary"
  }
  
  return (
    <div
      ref={ref}
      className={cn("relative w-full overflow-hidden rounded-full bg-secondary", 
        sizeClasses[size], 
        className
      )}
      {...props}
    >
      <div
        className={cn("h-full w-full flex-1 transition-all", 
          variantClasses[variant],
          barClassName
        )}
        style={{ width: `${percentage}%` }}
      />
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-end pr-2">
          <span className="text-xs font-medium text-primary-foreground">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
    </div>
  )
})
Progress.displayName = "Progress"

export { Progress }
