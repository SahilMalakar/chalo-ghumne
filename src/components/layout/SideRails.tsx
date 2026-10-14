import type { ReactNode } from "react"

import { useTheme } from "@/components/theme/ThemeProvider"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { useReducedMotion } from "@/hooks/useReducedMotion"

import { GutterLines } from "./GutterLines"

type SideRailsProps = {
  children: ReactNode
}

export function SideRails({ children }: SideRailsProps) {
  const reduced = useReducedMotion()
  const { theme } = useTheme()

  if (theme === "dark" && !reduced) {
    return <TracingBeam>{children}</TracingBeam>
  }

  return (
    <>
      <GutterLines />
      {children}
    </>
  )
}
