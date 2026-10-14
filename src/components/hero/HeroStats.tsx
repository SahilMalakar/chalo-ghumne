import { StatBlock } from "@/components/common/StatBlock"
import { hero } from "@/data/hero"

export function HeroStats() {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
      {hero.stats.map((stat) => (
        <li key={stat.id}>
          <StatBlock stat={stat} />
        </li>
      ))}
    </ul>
  )
}
