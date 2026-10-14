import { cn } from "@/lib/utils"
import type { ClassNameProps } from "@/types"

export function BarcodeStrip({ className }: ClassNameProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "h-8 w-32 bg-[repeating-linear-gradient(90deg,var(--color-ink)_0_1px,transparent_1px_3px,var(--color-ink)_3px_6px,transparent_6px_8px,var(--color-ink)_8px_9px,transparent_9px_13px,var(--color-ink)_13px_16px,transparent_16px_18px)]",
        className,
      )}
    />
  )
}
