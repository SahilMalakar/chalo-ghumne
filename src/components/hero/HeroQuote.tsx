import { useEffect, useState } from "react"

import { hero } from "@/data/hero"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { cn } from "@/lib/utils"

export function HeroQuote() {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % hero.quotes.length)
    }, 3800)
    return () => window.clearInterval(id)
  }, [reduced])

  return (
    <div className="relative min-h-16 max-w-xl">
      {hero.quotes.map((quote, quoteIndex) => {
        const active = quoteIndex === index
        return (
          <p
            key={quote}
            className={cn(
              "text-base leading-snug text-text transition-opacity duration-400 motion-reduce:transition-none md:text-lg",
              active ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0",
            )}
            aria-hidden={!active}
          >
            “{quote}”
          </p>
        )
      })}
    </div>
  )
}
