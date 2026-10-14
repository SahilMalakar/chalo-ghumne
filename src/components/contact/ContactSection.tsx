import { Section } from "@/components/common/Section"
import { SectionHeader } from "@/components/common/SectionHeader"
import { contactPage } from "@/data/contact"

import { ContactForm } from "./ContactForm"
import { ContactInfo } from "./ContactInfo"

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="grid gap-[var(--space-head)] lg:grid-cols-2 lg:items-start">
        <div className="min-w-0">
          <SectionHeader
            label={contactPage.label}
            title={contactPage.title}
            subtitle={contactPage.subtitle}
          />
          <ContactInfo />
        </div>
        <ContactForm />
      </div>
    </Section>
  )
}
