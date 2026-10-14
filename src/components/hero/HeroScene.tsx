import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { CloudShaderDemo } from "@/components/cloud-shader-demo"
import { useTheme } from "@/components/theme/ThemeProvider"
import { hero } from "@/data/hero"
import { useReducedMotion } from "@/hooks/useReducedMotion"

import { NightSky } from "./NightSky"

export function HeroScene() {
  const reduced = useReducedMotion()
  const { theme } = useTheme()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const cloudY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])
  const mountainY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const mistY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"])
  const shift = reduced ? undefined : { cloudY, mountainY, mistY }

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="hero-wash" />
      {theme === "dark" ? (
        <NightSky />
      ) : (
        <motion.div
          className="absolute inset-x-0 top-0 h-[58%] [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
          style={shift ? { y: shift.cloudY } : undefined}
        >
          <CloudShaderDemo />
        </motion.div>
      )}
      <motion.div
        className="absolute inset-x-0 top-[18%] bottom-0"
        style={shift ? { y: shift.mountainY } : undefined}
      >
        <img
          src={hero.mountain.src}
          alt=""
          width={hero.mountain.width}
          height={hero.mountain.height}
          className="hero-photo h-full w-full object-cover object-[center_40%]"
        />
      </motion.div>
      <motion.div
        className="absolute inset-x-0 bottom-[20%] h-36 bg-gradient-to-t from-bg/40 to-transparent"
        style={shift ? { y: shift.mistY } : undefined}
      />
      <div className="absolute inset-0 hidden bg-gradient-to-b from-bg/60 via-bg/25 to-bg dark:block" />
      <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-b from-transparent via-bg/80 to-bg" />
    </div>
  )
}
