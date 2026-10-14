import { destinations } from "@/data/destinations"
import type { PackagesPage, PopularLocation, TravelPackage } from "@/types"

export const packagesPage = {
  label: "Packages –",
  title: "What we offer",
  subtitle:
    "Three set itineraries through the Northeast. Pick a duration, a list of places, and a fare per person. We handle the rest.",
  servicesLabel: "Services –",
  servicesTitle: "Our services",
  servicesSubtitle:
    "The same desk whether you take a set package or ask for a route of your own.",
  popularLabel: "Popular locations –",
} satisfies PackagesPage

export const travelPackages = [
  {
    id: "explorer",
    name: "Explorer",
    duration: "7 days",
    price: 54900,
    locations: ["Shillong", "Dawki", "Cherrapunji"],
    inclusions: [
      "Guided day walks",
      "Three-star stays",
      "Breakfast each morning",
      "Airport transfers",
    ],
    cta: { label: "Book Explorer", href: "#contact" },
  },
  {
    id: "voyager",
    name: "Voyager",
    duration: "12 days",
    price: 96000,
    featured: true,
    featuredLabel: "Most booked",
    locations: ["Meghalaya", "Kaziranga", "Ziro"],
    inclusions: [
      "Private local guides",
      "Four-star stays",
      "Most meals",
      "Road transfers",
      "Airport pickup in Guwahati",
    ],
    cta: { label: "Book Voyager", href: "#contact" },
  },
  {
    id: "expedition",
    name: "Expedition",
    duration: "18 days",
    price: 148000,
    locations: ["Dawki", "Dzukou", "Tawang", "Hornbill"],
    inclusions: [
      "Local mountain guides",
      "Lodge and homestay mix",
      "Meals on trail days",
      "Inner Line Permit help",
      "Gear list and briefing",
      "24/7 trip desk",
    ],
    cta: { label: "Book Expedition", href: "#contact" },
  },
] satisfies TravelPackage[]

export const popularLocations = destinations.map((place) => ({
  id: place.id,
  name: place.name,
  price: place.startingPrice,
})) satisfies PopularLocation[]
