import { Check } from "lucide-react"

import { MonoLabel } from "@/components/common/MonoLabel"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { TravelPackage } from "@/types"

import { PriceTag } from "./PriceTag"

type PackageCardProps = {
  pack: TravelPackage
}

export function PackageCard({ pack }: PackageCardProps) {
  const featured = Boolean(pack.featured)

  return (
    <article
      className={cn(
        "flex h-full min-w-0 flex-col overflow-hidden p-[var(--space-card)]",
        featured ? "bg-featured text-on-featured" : "bg-surface text-text",
      )}
    >
      <MonoLabel className={featured ? "text-on-featured" : undefined}>
        {pack.featuredLabel ? `${pack.featuredLabel} –` : "Ticket –"}
      </MonoLabel>
      <h3 className="card-title mt-[var(--space-tight)]">{pack.name}</h3>
      <p className="mt-[var(--space-tight)] font-mono text-[13px] tracking-[0.08em] uppercase">
        Duration – {pack.duration}
      </p>
      <div className="mt-[var(--space-card)]">
        <PriceTag amount={pack.price} inverted={featured} />
      </div>
      <ul className="mt-[var(--space-card)] space-y-[var(--space-tight)]">
        {pack.locations.map((place) => (
          <li
            key={place}
            className="font-mono text-[13px] tracking-[0.08em] uppercase"
          >
            {place}
          </li>
        ))}
      </ul>
      <ul className="mt-[var(--space-card)] space-y-[var(--space-tight)] border-t border-current/20 pt-[var(--space-card)]">
        {pack.inclusions.map((item) => (
          <li key={item} className="flex items-start gap-2 text-base leading-snug">
            <Check className="mt-1 size-4 shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <Button
        className="mt-auto w-full pt-[var(--space-card)]"
        variant={featured ? "primary" : "outline"}
        render={<a href={pack.cta.href} />}
      >
        {pack.cta.label}
      </Button>
    </article>
  )
}
