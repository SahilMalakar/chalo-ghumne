import { MonoLabel } from "@/components/common/MonoLabel"
import { useCountUp } from "@/hooks/useCountUp"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import type { HeroStat } from "@/types"

function LiveDot() {
  const reduced = useReducedMotion()

  return (
    <span className="relative inline-flex size-1.5 shrink-0" aria-hidden="true">
      {reduced ? null : (
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-meadow opacity-70" />
      )}
      <span className="relative size-1.5 rounded-full bg-meadow" />
    </span>
  )
}

export function StatBlock({ stat }: { stat: HeroStat }) {
  const { ref, value } = useCountUp(stat.value)
  const figure = stat.grouped
    ? value.toLocaleString("en-IN")
    : String(value)

  return (
    <div ref={ref}>
      <p className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-none font-bold text-text">
        {figure}
        {stat.suffix ?? ""}
      </p>
      <MonoLabel className="mt-2 flex items-center gap-2 text-text">
        {stat.live ? <LiveDot /> : null}
        {stat.label}
      </MonoLabel>
    </div>
  )
}
