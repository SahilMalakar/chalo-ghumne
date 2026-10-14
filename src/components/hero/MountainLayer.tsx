import type { CSSProperties } from "react"

import { ChromaticImageBentoFeaturesDemo } from "@/components/chromatic-image-bento-features-demo"
import { hero } from "@/data/hero"

import { ExploreWord } from "./ExploreWord"

const grainMask: CSSProperties = {
  maskImage: `url("${hero.mountain.src}")`,
  WebkitMaskImage: `url("${hero.mountain.src}")`,
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
  maskPosition: "center bottom",
  WebkitMaskPosition: "center bottom",
  maskSize: "cover",
  WebkitMaskSize: "cover",
}

export function MountainLayer() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[24%] bottom-0 z-10 md:top-[22%]">
      <ExploreWord />
      <div className="relative z-20 h-full overflow-hidden">
        <ChromaticImageBentoFeaturesDemo />
        <div
          className="grain-noise absolute inset-0 opacity-[0.12] mix-blend-multiply"
          style={grainMask}
        />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent via-paper/70 to-paper" />
      </div>
    </div>
  )
}
