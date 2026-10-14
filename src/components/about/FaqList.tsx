import { SectionHeader } from "@/components/common/SectionHeader"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { aboutPage } from "@/data/about"
import { faqs } from "@/data/faq"

export function FaqList() {
  return (
    <div className="section-gap grid gap-[var(--space-head)] lg:grid-cols-2 lg:items-start">
      <SectionHeader
        label={aboutPage.faqLabel}
        title={aboutPage.faqTitle}
        subtitle={aboutPage.faqSubtitle}
      />
      <Accordion defaultValue={[faqs[0]?.id ?? ""]} className="min-w-0">
        {faqs.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-line">
            <AccordionTrigger className="min-h-11 rounded-none py-3 text-left text-base leading-snug font-semibold text-text hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-base leading-relaxed text-muted">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
