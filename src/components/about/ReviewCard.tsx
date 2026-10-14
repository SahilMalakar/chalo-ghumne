import { Star } from "lucide-react"

import { cn } from "@/lib/utils"
import type { Testimonial } from "@/types"

type ReviewCardProps = {
  review: Testimonial
  featured?: boolean
}

export function ReviewCard({ review, featured = false }: ReviewCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col bg-surface p-[var()--space-card]",
        featured && "md:p-8",
      )}
    >
      <p
        className="font-display text-6xl leading-none text-gold"
        aria-hidden="true"
      >
        “
      </p>
      <blockquote
        className={cn(
          "mt-(--space-tight) text-base leading-relaxed text-text",
          featured && "md:text-xl",
        )}
      >
        {review.quote}
      </blockquote>
      <p className="mt-(--space-tight) flex gap-1" aria-label={`${review.rating} out of 5`}>
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={cn(
              "size-4",
              index < review.rating ? "fill-gold text-gold" : "text-line",
            )}
            aria-hidden="true"
          />
        ))}
      </p>
      <p className="mt-(--space-tight) text-base text-text">{review.name}</p>
      <p className="text-[13px] text-muted">{review.location}</p>
      <p className="mt-(--space-tight) w-fit border border-line px-2 py-1 font-mono text-[13px] tracking-[0.08em] text-text uppercase">
        {review.trip}
      </p>
    </article>
  )
}
