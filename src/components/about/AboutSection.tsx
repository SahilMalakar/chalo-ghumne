import { Section } from "@/components/common/Section"

import { FaqList } from "./FaqList"
import { Reviews } from "./Reviews"
import { WhyChooseUs } from "./WhyChooseUs"

export function AboutSection() {
  return (
    <Section id="about">
      <WhyChooseUs />
      <Reviews />
      <FaqList />
    </Section>
  )
}
