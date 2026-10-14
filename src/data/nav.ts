import type { NavItem } from "@/types"

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "destination", label: "Destination" },
  { id: "packages", label: "Packages" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
]

export const bookTrip = {
  label: "Book a trip",
  href: "#contact",
} as const
