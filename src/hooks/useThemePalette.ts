import { useEffect, useState } from "react"

import { useTheme } from "@/components/theme/ThemeProvider"

const PALETTE_VARS = [
  "--color-paper",
  "--color-meadow",
  "--color-valley",
  "--color-sky",
  "--color-sky-deep",
  "--color-ink",
] as const

function toHex(channel: number) {
  return Math.round(channel).toString(16).padStart(2, "0")
}

function readColor(variable: string) {
  const probe = document.createElement("span")
  probe.style.color = `var(${variable})`
  document.documentElement.append(probe)
  const rgb = getComputedStyle(probe).color
  probe.remove()
  const parts = rgb.match(/[\d.]+/g)?.slice(0, 3).map(Number)
  if (!parts || parts.length < 3) return "#000000"
  return `#${toHex(parts[0] ?? 0)}${toHex(parts[1] ?? 0)}${toHex(parts[2] ?? 0)}`
}

function readThemePalette() {
  return PALETTE_VARS.map((name) => readColor(name))
}

export function useThemePalette() {
  const { theme } = useTheme()
  const [palette, setPalette] = useState(readThemePalette)

  useEffect(() => {
    setPalette(readThemePalette())
  }, [theme])

  return palette
}
