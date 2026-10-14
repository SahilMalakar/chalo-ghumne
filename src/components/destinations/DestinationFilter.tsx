import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { destinationFilters } from "@/data/destinations"
import type { DestinationFilterId } from "@/types"

type DestinationFilterProps = {
  value: DestinationFilterId
  onChange: (value: DestinationFilterId) => void
}

export function DestinationFilter({ value, onChange }: DestinationFilterProps) {
  return (
    <ToggleGroup
      value={[value]}
      onValueChange={(next) => {
        const selected = next[0]
        if (selected) onChange(selected as DestinationFilterId)
      }}
      aria-label="Filter destinations"
      variant="outline"
      spacing={0}
      className="mt-[var(--space-head)] flex-wrap border border-line"
    >
      {destinationFilters.map((filter) => (
        <ToggleGroupItem
          key={filter.id}
          value={filter.id}
          className="min-h-11 rounded-none border-0 border-r border-line font-mono text-[13px] tracking-[0.08em] text-text uppercase last:border-r-0 hover:bg-surface-2 data-[state=on]:bg-gold data-[state=on]:text-on-gold"
        >
          {filter.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
