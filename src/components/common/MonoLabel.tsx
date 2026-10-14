import { cn } from "@/lib/utils"
import type { MonoLabelProps } from "@/types"

export function MonoLabel({ children, id, className }: MonoLabelProps) {
  return (
    <p
      id={id}
      className={cn(
        "font-mono text-[13px] tracking-[0.14em] text-muted uppercase",
        className,
      )}
    >
      {children}
    </p>
  )
}
