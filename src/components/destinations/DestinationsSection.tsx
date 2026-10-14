import { useMemo, useState } from "react"

import { Section } from "@/components/common/Section"
import { SectionHeader } from "@/components/common/SectionHeader"
import {
  destinations,
  destinationsPage,
  filterDestinations,
} from "@/data/destinations"
import type { DestinationFilterId } from "@/types"

import { DestinationFilter } from "./DestinationFilter"
import { DestinationGrid } from "./DestinationGrid"

export function DestinationsSection() {
  const [filter, setFilter] = useState<DestinationFilterId>("all")

  const items = useMemo(
    () => filterDestinations(destinations, filter),
    [filter],
  )

  return (
    <Section id="destination">
      <SectionHeader
        label={destinationsPage.label}
        title={destinationsPage.title}
        subtitle={destinationsPage.subtitle}
      />
      <DestinationFilter value={filter} onChange={setFilter} />
      <DestinationGrid items={items} />
    </Section>
  )
}
