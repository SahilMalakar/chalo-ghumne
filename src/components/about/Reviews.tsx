import { SectionHeader } from "@/components/common/SectionHeader"
import { aboutPage } from "@/data/about"
import { testimonials } from "@/data/testimonials"
import { cn } from "@/lib/utils"

import { ReviewCard } from "./ReviewCard"

export function Reviews() {
  return (
    <div className="section-gap">
      <SectionHeader
        label={aboutPage.testimonialsLabel}
        title={aboutPage.testimonialsTitle}
        subtitle={aboutPage.testimonialsSubtitle}
      />
      <ul className="flex list-none flex-col gap-(--space-grid) p-0 md:grid md:grid-cols-2">
        {testimonials.map((review, index) => (
          <li
            key={review.id}
            className={cn(
              "w-[85%] shrink-0 snap-start rounded-lg border border-black/50 p-5 dark:border-white/50 md:w-auto",
              index === 0 && "md:col-span-2",
            )}
          >
            <ReviewCard review={review} featured={index === 0} />
          </li>
        ))}
      </ul>
    </div>
  )
}
