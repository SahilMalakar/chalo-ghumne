import { hero } from "@/data/hero"

export function ChromaticImageBentoFeaturesDemo() {
  return (
    <img
      src={hero.mountain.src}
      alt={hero.mountain.alt}
      width={hero.mountain.width}
      height={hero.mountain.height}
      className="mountain-chromatic block h-full w-full object-cover object-[center_45%]"
    />
  )
}
