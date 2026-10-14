import type { FaqItem } from "@/types"

export const faqs = [
  {
    id: "booking",
    question: "How do I book?",
    answer:
      "Write through the contact form with dates and a package, or a blank page if you want a custom route. We reply with a hold and a fare before anything is charged.",
  },
  {
    id: "payments",
    question: "How do payments work?",
    answer:
      "A deposit holds the dates. The balance is due before departure. Cards and bank transfer are both fine; we send a single invoice, not a stack of extras.",
  },
  {
    id: "cancellations",
    question: "What if I need to cancel?",
    answer:
      "There is a window on each ticket. Inside it, the deposit moves to a later departure. Outside it, we keep only what suppliers keep. The terms sit on the invoice.",
  },
  {
    id: "visas",
    question: "Do you arrange Inner Line Permits?",
    answer:
      "Yes. We list what Arunachal, Nagaland, and the other restricted areas need, check the file, and tell you when to submit. We do not stamp the permit; we keep the paperwork from stalling the trip.",
  },
  {
    id: "groups",
    question: "How large are the groups?",
    answer:
      "Most departures sit between six and twelve. Expedition days can be smaller on trail. If a date fills, we open another rather than stretch the table.",
  },
  {
    id: "insurance",
    question: "Is insurance included?",
    answer:
      "No. We ask for travel and medical cover before you fly, and we can point to policies that match the route. We do not sell the policy ourselves.",
  },
  {
    id: "custom",
    question: "Can you build a custom trip?",
    answer:
      "Yes. Send the days you have and the places you care about. We draw a route, a fare, and a list of what is in. Packages are a starting point, not a fence.",
  },
] satisfies FaqItem[]
