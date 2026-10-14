import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import type { Destination } from "@/types"

import { DestinationCard } from "./DestinationCard"

type DestinationGridProps = {
  items: Destination[]
}

export function DestinationGrid({ items }: DestinationGridProps) {
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    setShowAll(false)
  }, [items])

  return (
    <div>
      <ul className="grid list-none grid-cols-1 gap-[var(--space-grid)] p-0 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((destination, index) => (
          <li
            key={destination.id}
            className={cn("min-w-0", index >= 6 && !showAll && "max-md:hidden")}
          >
            <DestinationCard
              destination={destination}
              index={index}
              total={items.length}
            />
          </li>
        ))}
      </ul>
      {items.length > 6 && !showAll ? (
        <a
          href="#destination"
          className="mt-[var(--space-card)] inline-flex min-h-11 items-center text-base text-text underline decoration-gold underline-offset-4 md:hidden"
          onClick={(event) => {
            event.preventDefault()
            setShowAll(true)
          }}
        >
          View all
        </a>
      ) : null}
    </div>
  )
}
