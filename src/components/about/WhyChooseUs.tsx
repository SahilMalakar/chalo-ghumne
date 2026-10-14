import { MonoLabel } from "@/components/common/MonoLabel"
import { aboutPage, reasons } from "@/data/about"

import { YearStamp } from "./YearStamp"

export function WhyChooseUs() {
  return (
    <div className="grid gap-[var(--space-head)] lg:grid-cols-2 lg:items-start">
      <div className="flex min-w-0 flex-col gap-[var(--space-card)] sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <MonoLabel>{aboutPage.label}</MonoLabel>
          <h2 className="section-title mt-[var(--space-title)]">
            {aboutPage.statement}
          </h2>
        </div>
        <YearStamp className="size-24 shrink-0" />
      </div>
      <ol className="m-0 grid list-none gap-[var(--space-card)] p-0">
        {reasons.map((reason) => (
          <li key={reason.index} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4">
            <p className="font-mono text-[13px] tracking-[0.08em] text-text">
              {reason.index}
            </p>
            <div className="min-w-0">
              <h3 className="card-title text-text">{reason.title}</h3>
              <p className="mt-[var(--space-tight)] text-base leading-relaxed text-muted">
                {reason.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
