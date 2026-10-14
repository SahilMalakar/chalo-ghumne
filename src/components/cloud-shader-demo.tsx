import { CloudShader } from "@/components/ui/cloud-shader"
import { useThemePalette } from "@/hooks/useThemePalette"

export function CloudShaderDemo() {
  const palette = useThemePalette()
  const paper = palette[0]
  const sky = palette[3]
  const skyDeep = palette[4]

  if (!paper || !sky || !skyDeep) {
    return null
  }

  return (
    <CloudShader
      className="h-full min-h-0 w-full"
      speed={0.55}
      count={4}
      cloudColor={paper}
      skyTopColor={skyDeep}
      skyBottomColor={sky}
    />
  )
}
