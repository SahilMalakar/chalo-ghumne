import type { Service } from "@/types"

export const services = [
  {
    id: "tours",
    title: "Guided tours",
    summary: "Walks and city days with people who live there.",
    icon: "compass",
  },
  {
    id: "visa",
    title: "Permits & documents",
    summary: "Inner Line Permits listed, checked, and filed before you travel.",
    icon: "files",
  },
  {
    id: "flights",
    title: "Flights & stays",
    summary: "Seats and rooms held as one itinerary, not a pile of tabs.",
    icon: "plane",
  },
  {
    id: "local",
    title: "Local experiences",
    summary: "Meals, markets, and small rooms that do not sit on a coach loop.",
    icon: "sparkles",
  },
  {
    id: "support",
    title: "24/7 trip support",
    summary: "A desk that answers when a connection slips or a bag does not.",
    icon: "headset",
  },
  {
    id: "custom",
    title: "Custom itineraries",
    summary: "A route drawn for the days you have, not a brochure week.",
    icon: "map",
  },
] satisfies Service[]
