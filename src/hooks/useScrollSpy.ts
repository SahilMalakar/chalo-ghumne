import { useEffect, useState } from "react"

export function useScrollSpy(ids: readonly string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "")
  const key = ids.join(",")

  useEffect(() => {
    const list = key.split(",").filter(Boolean)
    const elements = list
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const nextId = visible[0]?.target.id
        if (nextId) {
          setActiveId(nextId)
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    )

    for (const el of elements) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [key])

  return activeId
}
