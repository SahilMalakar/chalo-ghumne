import { useState, type ReactNode } from "react"
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react"

import { useScrollSpy } from "@/hooks/useScrollSpy"
import { cn } from "@/lib/utils"

export type FloatingNavItem = {
  name: string
  link: string
  icon?: ReactNode
}

type FloatingNavProps = {
  navItems: FloatingNavItem[]
  className?: string
  cta?: {
    label: string
    href: string
  }
  extra?: ReactNode
}

export function FloatingNav({ navItems, className, cta, extra }: FloatingNavProps) {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true)
  const activeId = useScrollSpy(
    navItems.map((item) => item.link.replace(/^#/, "")),
  )

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current !== "number") return

    const previous = scrollYProgress.getPrevious() ?? 0
    const direction = current - previous

    if (scrollYProgress.get() < 0.05) {
      setVisible(true)
      return
    }

    setVisible(direction < 0)
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-4 z-[5000] mx-auto flex max-w-fit items-center justify-center md:top-6",
          className,
        )}
      >
        <nav
          aria-label="Primary"
          className="flex items-center justify-center gap-1 rounded-full border border-line bg-surface/90 px-3 py-1.5 shadow-lg backdrop-blur-md"
        >
          <div className="flex items-center gap-0.5">
            {navItems.map((navItem) => {
              const isActive = navItem.link === `#${activeId}`

              return (
                <a
                  key={navItem.link}
                  href={navItem.link}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative flex min-h-11 items-center gap-1 rounded-full px-3 py-2 font-mono text-[13px] font-medium tracking-[0.14em] uppercase transition-colors sm:px-4",
                    isActive
                      ? "text-text shadow-[inset_0_-2px_0_0_var(--gold)]"
                      : "text-muted hover:bg-surface-2 hover:text-text",
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block">{navItem.name}</span>
                </a>
              )
            })}
          </div>

          {extra}
          {cta ? (
            <>
              <div className="mx-1 h-5 w-px bg-line" aria-hidden="true" />
              <a
                href={cta.href}
                className="inline-flex min-h-11 items-center rounded-full bg-gold px-4 py-2 font-mono text-[13px] font-medium tracking-[0.14em] text-on-gold uppercase transition-transform hover:-translate-y-px"
              >
                {cta.label}
              </a>
            </>
          ) : null}
        </nav>
      </motion.div>
    </AnimatePresence>
  )
}
