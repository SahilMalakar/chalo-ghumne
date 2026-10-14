import { MonoLabel } from "@/components/common/MonoLabel"
import { cn } from "@/lib/utils"
import type { SectionHeadingProps } from "@/types"

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("section-head", className)}>
      <MonoLabel>{label}</MonoLabel>
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-lede">{subtitle}</p> : null}
    </header>
  )
}
