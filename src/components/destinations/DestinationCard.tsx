import { ArrowUpRight } from "lucide-react"

import { MonoLabel } from "@/components/common/MonoLabel"
import { formatInr } from "@/lib/formatInr"
import { cn } from "@/lib/utils"
import type { Destination } from "@/types"

import { DestinationMedia } from "./DestinationMedia"

type DestinationCardProps = {
  destination: Destination
  index: number
  total: number
  className?: string
}

export function DestinationCard({
  destination,
  index,
  total,
  className,
}: DestinationCardProps) {
  const number = String(index + 1).padStart(2, "0")
  const count = String(total).padStart(2, "0")
  const alt = `${destination.name}, ${destination.country}`

  return (
    <article className={cn("group flex h-full min-w-0 flex-col", className)}>
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-2">
        <DestinationMedia
          src={destination.image}
          alt={alt}
          name={destination.name}
        />
      </div>
      <div className="flex min-w-0 flex-col gap-[var(--space-tight)] pt-[var(--space-card)]">
        <MonoLabel>
          No. {number} / {count}
        </MonoLabel>
        <p className="w-fit border border-line px-2 py-1 font-mono text-[13px] tracking-[0.08em] text-text uppercase">
          {destination.country}
        </p>
        <div className="flex min-w-0 items-start justify-between gap-3">
          <h3 className="card-title min-w-0 text-text">{destination.name}</h3>
          <ArrowUpRight
            className="mt-1 size-5 shrink-0 text-text"
            aria-hidden="true"
          />
        </div>
        <p className="text-[13px] leading-snug text-text">
          {destination.season} — from {formatInr(destination.startingPrice)}
        </p>
      </div>
    </article>
  )
}
