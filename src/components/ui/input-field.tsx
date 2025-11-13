import type React from "react"
import { forwardRef } from "react"
import { cn } from "../../../lib/utils"


export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, label, error, type = "text", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && <label className="text-sm font-medium text-foreground">{label}</label>}
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "transition-colors",
            error && "border-destructive focus-visible:ring-destructive",
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="text-xs text-destructive">{error}</span>}
      </div>
    )
  },
)

InputField.displayName = "InputField"
