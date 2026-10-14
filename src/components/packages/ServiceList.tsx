import type { LucideIcon } from "lucide-react"
import {
  Compass,
  FileCheck,
  Headset,
  Map,
  Plane,
  Sparkles,
} from "lucide-react"

import { services } from "@/data/services"
import type { ServiceIcon } from "@/types"

const icons: Record<ServiceIcon, LucideIcon> = {
  compass: Compass,
  files: FileCheck,
  plane: Plane,
  sparkles: Sparkles,
  headset: Headset,
  map: Map,
}

export function ServiceList() {
  return (
    <ul className="grid list-none grid-cols-1 gap-[var(--space-grid)] border-t border-line p-0 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = icons[service.icon]

        return (
          <li
            key={service.id}
            className="min-w-0 border-b border-line p-[var(--space-card)]"
          >
            <Icon className="size-5 text-gold" aria-hidden="true" />
            <h3 className="card-title mt-[var(--space-card)] text-text">
              {service.title}
            </h3>
            <p className="mt-[var(--space-tight)] text-base leading-relaxed text-muted">
              {service.summary}
            </p>
          </li>
        )
      })}
    </ul>
  )
}
