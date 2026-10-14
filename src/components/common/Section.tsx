import { cn } from "@/lib/utils"
import type { SectionProps } from "@/types"

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("section", className)}>
      <div className="container-x">{children}</div>
    </section>
  )
}
