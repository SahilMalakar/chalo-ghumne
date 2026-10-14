import dawki from "@/assets/dawki-umngot.webp"
import dzukou from "@/assets/dzukou-valley.webp"
import hornbill from "@/assets/hornbill-festival.webp"
import laitlum from "@/assets/laitlum-canyon.webp"
import rootBridge from "@/assets/living-root-bridge.webp"
import nohkalikai from "@/assets/nohkalikai-falls.webp"
import tawang from "@/assets/tawang-monastery.webp"
import ziro from "@/assets/ziro-valley.webp"
import type {
  Destination,
  DestinationFilterId,
  DestinationTag,
  DestinationsPage,
} from "@/types"

export const destinationsPage = {
  label: "Destinations –",
  title: "Destinations for an unforgettable journey",
  subtitle:
    "Eight routes through the hills of the Northeast: bridges, rivers, monasteries, and a festival week.",
} satisfies DestinationsPage

export const destinationFilters: {
  id: DestinationFilterId
  label: string
}[] = [
  { id: "all", label: "All" },
  { id: "mountains", label: "Mountains" },
  { id: "culture", label: "Culture" },
  { id: "adventure", label: "Adventure" },
]

export const destinations = [
  {
    id: "living-root-bridge",
    name: "Living Root Bridge",
    country: "Meghalaya",
    tagline: "A double-decker bridge grown from the forest itself.",
    image: rootBridge,
    season: "Winter",
    startingPrice: 42000,
    tags: ["Adventure", "Culture"],
  },
  {
    id: "dawki-umngot",
    name: "Dawki, Umngot River",
    country: "Meghalaya",
    tagline: "A boat on water clear enough to read the stones.",
    image: dawki,
    season: "Winter",
    startingPrice: 38000,
    tags: ["Adventure"],
  },
  {
    id: "laitlum-canyon",
    name: "Laitlum Canyon",
    country: "Meghalaya",
    tagline: "Green ridges and a canyon that fills with mist.",
    image: laitlum,
    season: "Autumn",
    startingPrice: 32000,
    tags: ["Mountains"],
  },
  {
    id: "nohkalikai-falls",
    name: "Nohkalikai Falls",
    country: "Meghalaya",
    tagline: "A long drop from forested cliffs after the rain.",
    image: nohkalikai,
    season: "Monsoon",
    startingPrice: 35000,
    tags: ["Mountains", "Adventure"],
  },
  {
    id: "tawang-monastery",
    name: "Tawang Monastery",
    country: "Arunachal Pradesh",
    tagline: "A monastery set against the high Himalaya.",
    image: tawang,
    season: "Autumn",
    startingPrice: 68000,
    tags: ["Culture", "Mountains"],
  },
  {
    id: "dzukou-valley",
    name: "Dzukou Valley",
    country: "Nagaland",
    tagline: "Rolling green hills and a long walk between them.",
    image: dzukou,
    season: "Monsoon",
    startingPrice: 45000,
    tags: ["Mountains", "Adventure"],
  },
  {
    id: "ziro-valley",
    name: "Ziro Valley",
    country: "Arunachal Pradesh",
    tagline: "Terraced rice and a village laid out on the floor.",
    image: ziro,
    season: "Autumn",
    startingPrice: 52000,
    tags: ["Culture"],
  },
  {
    id: "hornbill-festival",
    name: "Hornbill Festival",
    country: "Nagaland",
    tagline: "A week of dance, drums, and the tribes at one ground.",
    image: hornbill,
    season: "Winter",
    startingPrice: 48000,
    tags: ["Culture"],
  },
] satisfies Destination[]

export function filterDestinations(
  items: Destination[],
  filter: DestinationFilterId,
) {
  if (filter === "all") return items
  const tag = destinationFilters.find((item) => item.id === filter)?.label
  if (!tag || tag === "All") return items
  return items.filter((item) => item.tags.includes(tag as DestinationTag))
}
