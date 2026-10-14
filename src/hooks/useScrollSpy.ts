
import { useEffect, useState } from "react"

export function useScrollSpy(ids: readonly string[]) {
  const key = ids.join(",")
  const [activeId, setActiveId] = useState(ids[0] ?? "")

  useEffect(() => {
    const sectionIds = key.split(",").filter(Boolean)
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)

    if (sections.length === 0) return

    let frame = 0

    const updateActive = () => {
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      )

      // The final section must remain active at the bottom of the page.
      if (maxScroll > 0 && window.scrollY >= maxScroll - 2) {
        setActiveId(sections[sections.length - 1]?.id ?? "")
        return
      }

      // Track the section crossing a consistent line in the viewport.
      const activationLine = Math.min(window.innerHeight * 0.3, 220)
      let current: HTMLElement | undefined

      for (const section of sections) {
        const rect = section.getBoundingClientRect()

        if (rect.top <= activationLine && rect.bottom > activationLine) {
          current = section
          break
        }
      }

      // Handle gaps or transitions between sections.
      if (!current) {
        current =
          sections.find(
            (section) =>
              section.getBoundingClientRect().top > activationLine,
          ) ?? sections[sections.length - 1]
      }

      if (current) {
        setActiveId(current.id)
      }
    }

    const scheduleUpdate = () => {
      if (frame) window.cancelAnimationFrame(frame)

      frame = window.requestAnimationFrame(() => {
        frame = 0
        updateActive()
      })
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate)
    window.addEventListener("hashchange", scheduleUpdate)
    window.addEventListener("pageshow", scheduleUpdate)

    updateActive()

    return () => {
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
      window.removeEventListener("hashchange", scheduleUpdate)
      window.removeEventListener("pageshow", scheduleUpdate)

      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [key])

  return activeId
}
