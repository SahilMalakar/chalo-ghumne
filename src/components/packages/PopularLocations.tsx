import { MonoLabel } from "@/components/common/MonoLabel"
import { packagesPage, popularLocations } from "@/data/packages"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { formatInr } from "@/lib/formatInr"

function LocationChip({ name, price }: { name: string; price: number }) {
  return (
    <p className="font-mono text-[13px] tracking-[0.08em] text-text uppercase">
      {name} — from {formatInr(price)}
    </p>
  )
}

export function PopularLocations() {
  const reduced = useReducedMotion()
  const loop = [...popularLocations, ...popularLocations]

  return (
    <div className="mt-[var(--space-head)]">
      <MonoLabel className="mb-[var(--space-card)]">
        {packagesPage.popularLabel}
      </MonoLabel>
      {reduced ? (
        <ul className="flex list-none gap-[var(--space-grid)] overflow-x-auto p-0 pb-2">
          {popularLocations.map((place) => (
            <li
              key={place.id}
              className="shrink-0 border border-line bg-surface px-4 py-3 whitespace-nowrap"
            >
              <LocationChip name={place.name} price={place.price} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="marquee">
          <ul className="marquee-track list-none p-0">
            {loop.map((place, index) => (
              <li
                key={`${place.id}-${index}`}
                aria-hidden={index >= popularLocations.length}
                className="shrink-0 border border-line bg-surface px-4 py-3 whitespace-nowrap"
              >
                <LocationChip name={place.name} price={place.price} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
