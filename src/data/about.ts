import type { AboutPage, AboutReason } from "@/types"

export const aboutPage = {
  label: "About –",
  statement: "Travel slower. Remember longer.",
  stamp: "Since 2017 · Wayfar · Since 2017 · ",
  year: "2017",
  testimonialsLabel: "Notes –",
  testimonialsTitle: "From the road",
  testimonialsSubtitle: "A few letters after the trip, not a survey.",
  faqLabel: "FAQ –",
  faqTitle: "Questions",
  faqSubtitle: "The short answers. Write if yours is not here.",
} satisfies AboutPage

export const reasons = [
  {
    index: "01",
    title: "Local guides",
    body: "Walks and days run by people who live there, not a script from a coach.",
  },
  {
    index: "02",
    title: "Small groups",
    body: "Enough company for a table, few enough that a street still feels like a street.",
  },
  {
    index: "03",
    title: "Transparent pricing",
    body: "The fare on the ticket is the fare. Meals and transfers listed, not added later.",
  },
  {
    index: "04",
    title: "Flexible cancellation",
    body: "Plans change. We hold a window so a delay does not take the whole trip with it.",
  },
] satisfies AboutReason[]
