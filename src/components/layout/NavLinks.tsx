import { cn } from "@/lib/utils"
import type { NavItem } from "@/types"

type NavLinksProps = {
  items: NavItem[]
  activeId: string
  onNavigate?: () => void
}

export function NavLinks({ items, activeId, onNavigate }: NavLinksProps) {
  return (
    <ul className="flex flex-col gap-5 md:flex-row md:items-center md:gap-7">
      {items.map((item) => {
        const isActive = item.id === activeId

        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              onClick={onNavigate}
              className={cn(
                "inline-flex min-h-11 items-center font-mono text-[13px] tracking-[0.14em] uppercase transition-colors",
                isActive
                  ? "text-text underline decoration-gold decoration-2 underline-offset-8"
                  : "text-muted hover:text-text",
              )}
            >
              {item.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
