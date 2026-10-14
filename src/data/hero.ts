import mountain from "@/assets/Transparent Alpine Mountain Panorama.png"
import type { HeroLink, HeroStat } from "@/types"

export const hero = {
  word: "EXPLORE",
  meta: ["Destination  -", "Season  -", "Altitude"] as const,
  quotes: [
    "The mountains are calling and I must go.",
    "Not all those who wander are lost.",
    "Go where you feel most alive.",
  ] as const,
  primaryCta: {
    label: "Plan my journey",
    href: "#contact",
  } satisfies HeroLink,
  secondaryCta: {
    label: "View destinations",
    href: "#destination",
  } satisfies HeroLink,
  mountain: {
    src: mountain,
    alt: "Forested hills of Northeast India",
    width: 2172,
    height: 724,
  },
  stats: [
    { id: "routes", label: "Northeast routes", value: 8 },
    { id: "states", label: "States on the map", value: 4 },
    { id: "years", label: "Years", value: 9 },
    { id: "groups", label: "Guests in a group", value: 12 },
  ] satisfies HeroStat[],
}
