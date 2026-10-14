import { useState } from "react"
import { Menu } from "lucide-react"

import { NavLinks } from "@/components/layout/NavLinks"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { bookTrip } from "@/data/nav"
import { site } from "@/lib/constants"
import type { NavItem } from "@/types"

type MobileNavProps = {
  items: NavItem[]
  activeId: string
}

export function MobileNav({ items, activeId }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            className="size-11 px-0 md:hidden"
            aria-label="Open menu"
          />
        }
      >
        <Menu />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{site.name}</SheetTitle>
          <SheetDescription>Menu –</SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile">
          <NavLinks
            items={items}
            activeId={activeId}
            onNavigate={() => setOpen(false)}
          />
        </nav>
        <Button
          className="mt-auto w-full"
          render={<a href={bookTrip.href} onClick={() => setOpen(false)} />}
        >
          {bookTrip.label}
        </Button>
      </SheetContent>
    </Sheet>
  )
}
