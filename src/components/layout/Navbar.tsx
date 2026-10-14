import {
  Compass,
  Home,
  Info,
  Mail,
  Package,
} from "lucide-react"

import { ModeToggle } from "@/components/theme/ModeToggle"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { bookTrip, navItems } from "@/data/nav"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import { site } from "@/lib/constants"

import { MobileNav } from "./MobileNav"

const icons = {
  home: <Home className="size-4" />,
  destination: <Compass className="size-4" />,
  packages: <Package className="size-4" />,
  about: <Info className="size-4" />,
  contact: <Mail className="size-4" />,
} as const

export function Navbar() {
  const activeId = useScrollSpy(navItems.map((item) => item.id))

  return (
    <>
      <FloatingNav
        className="max-md:hidden"
        extra={<ModeToggle />}
        navItems={navItems.map((item) => ({
          name: item.label,
          link: `#${item.id}`,
          icon: icons[item.id as keyof typeof icons],
        }))}
        cta={{ label: bookTrip.label, href: bookTrip.href }}
      />
      <div className="fixed inset-x-0 top-0 z-[5000] flex items-center justify-between gap-3 border-b border-line bg-bg/90 px-4 py-2 backdrop-blur-md md:hidden">
        <a href="#home" className="font-display text-lg font-bold text-text">
          {site.name}
        </a>
        <div className="flex items-center gap-1">
          <ModeToggle />
          <MobileNav items={navItems} activeId={activeId} />
        </div>
      </div>
    </>
  )
}
