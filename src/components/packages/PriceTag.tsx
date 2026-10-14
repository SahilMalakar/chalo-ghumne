import { formatInr } from "@/lib/formatInr"
import { cn } from "@/lib/utils"

type PriceTagProps = {
  amount: number
  unit?: string
  inverted?: boolean
}

export function PriceTag({
  amount,
  unit = "/ person",
  inverted = false,
}: PriceTagProps) {
  return (
    <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span
        className={cn(
          "font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-none font-bold",
          inverted ? "text-on-featured" : "text-text",
        )}
      >
        {formatInr(amount)}
      </span>
      <span className="font-mono text-[13px] tracking-[0.08em] uppercase">
        {unit}
      </span>
    </p>
  )
}
