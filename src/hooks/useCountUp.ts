import { useEffect, useRef, useState } from "react"

import { useReducedMotion } from "@/hooks/useReducedMotion"

export function useCountUp(target: number) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (reduced) return

    const node = ref.current
    if (!node) return

    let frame = 0
    let started = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started) return
        started = true
        observer.disconnect()

        const start = performance.now()
        const duration = 1100
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration)
          const eased = 1 - (1 - progress) ** 3
          setValue(Math.round(target * eased))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [reduced, target])

  return { ref, value: reduced ? target : value }
}
