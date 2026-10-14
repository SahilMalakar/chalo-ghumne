import { Section } from "@/components/common/Section"
import { SectionHeader } from "@/components/common/SectionHeader"
import { travelPackages, packagesPage } from "@/data/packages"

import { PackageCard } from "./PackageCard"
import { PopularLocations } from "./PopularLocations"
import { ServiceList } from "./ServiceList"

export function PackagesSection() {
  return (
    <Section id="packages">
      <SectionHeader
        label={packagesPage.label}
        title={packagesPage.title}
        subtitle={packagesPage.subtitle}
      />
      <ul className="grid list-none grid-cols-1 items-stretch gap-[var(--space-grid)] p-0 lg:grid-cols-3">
        {travelPackages.map((pack) => (
          <li key={pack.id} className="min-w-0">
            <PackageCard pack={pack} />
          </li>
        ))}
      </ul>
      <PopularLocations />
      <SectionHeader
        className="section-gap"
        label={packagesPage.servicesLabel}
        title={packagesPage.servicesTitle}
        subtitle={packagesPage.servicesSubtitle}
      />
      <ServiceList />
    </Section>
  )
}
