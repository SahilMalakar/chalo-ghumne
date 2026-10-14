import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"
import { useReducedMotion } from "@/hooks/useReducedMotion"

export function NightSky() {
  const reduced = useReducedMotion()

  if (reduced) return <div className="absolute inset-0 bg-bg" />

  return (
    <div className="absolute inset-0">
      <StarsBackground />
      <ShootingStars
        minDelay={250}
        maxDelay={1000}
        starColor="var(--gold)"
        trailColor="var(--text)"
      />
    </div>
  )
}
