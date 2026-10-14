import { AboutSection } from "@/components/about/AboutSection"
import { ContactSection } from "@/components/contact/ContactSection"
import { DestinationsSection } from "@/components/destinations/DestinationsSection"
import { Hero } from "@/components/hero/Hero"
import { SiteShell } from "@/components/layout/SiteShell"
import { PackagesSection } from "@/components/packages/PackagesSection"

export function App() {
  return (
    <SiteShell>
      <Hero />
      <DestinationsSection />
      <PackagesSection />
      <AboutSection />
      <ContactSection />
    </SiteShell>
  )
}
