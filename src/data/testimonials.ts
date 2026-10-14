import type { Testimonial } from "@/types"

export const testimonials = [
  {
    id: "mira",
    name: "Mira Patel",
    location: "Guwahati",
    trip: "Explorer / Dawki",
    quote:
      "We had time to sit on the boat and watch the stones. That was the point, and they kept it.",
    rating: 5,
  },
  {
    id: "jonas",
    name: "Arjun Hazarika",
    location: "Shillong",
    trip: "Expedition / Tawang",
    quote:
      "The desk answered when the pass closed for a day. We reached the monastery the next morning.",
    rating: 5,
  },
  {
    id: "elena",
    name: "Elena Dutta",
    location: "Kolkata",
    trip: "Voyager / Kaziranga",
    quote:
      "Small group, slow roads, no rush to the next viewpoint. I still have the permit slip.",
    rating: 4,
  },
  {
    id: "kenji",
    name: "Kenji Mori",
    location: "Dimapur",
    trip: "Voyager / Ziro",
    quote:
      "Guides who live in the valley. We ate where they eat. That is the whole review.",
    rating: 5,
  },
] satisfies Testimonial[]
