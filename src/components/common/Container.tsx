import { cn } from "@/lib/utils"
import type { ContainerProps } from "@/types"

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("w-full px-5 md:px-8", className)}>
      {children}
    </div>
  )
}
