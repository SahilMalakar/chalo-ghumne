import { MonoLabel } from "@/components/common/MonoLabel"
import { hero } from "@/data/hero"

export function HeroTitle() {
  return (
    <div className="relative z-30 flex justify-center px-4 pt-24">
      <div className="flex max-w-full flex-wrap items-center justify-center gap-x-5 gap-y-1 rounded-full bg-surface/95 px-4 py-2 text-text shadow-sm">
        {hero.meta.map((item) => (
          <MonoLabel key={item} className="text-text">
            {item}
          </MonoLabel>
        ))}
      </div>
    </div>
  )
}
