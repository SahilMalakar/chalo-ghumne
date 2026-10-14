import { useEffect, useRef, useState } from "react"

import { paintDithered } from "@/lib/dither"
import { cn } from "@/lib/utils"
import type { DitheredImageProps } from "@/types"

export function DitheredImage({
  src,
  alt,
  width,
  height,
  pixelSize = 3,
  intensity = 0.55,
  palette = [],
  className,
}: DitheredImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [failed, setFailed] = useState(false)
  const paletteKey = palette.join("|")
  const ready = palette.length > 1 && !failed

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || palette.length < 2) return

    let cancelled = false
    const image = new Image()
    image.onload = () => {
      if (cancelled) return
      try {
        paintDithered(canvas, image, { pixelSize, intensity, palette })
        setFailed(false)
      } catch {
        if (!cancelled) setFailed(true)
      }
    }
    image.onerror = () => {
      if (!cancelled) setFailed(true)
    }
    image.src = src

    return () => {
      cancelled = true
    }
  }, [intensity, palette, paletteKey, pixelSize, src])

  if (!ready) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("object-contain object-bottom", className)}
      />
    )
  }

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={alt}
      width={Math.floor(width / pixelSize)}
      height={Math.floor(height / pixelSize)}
      className={cn(
        "h-full w-full object-contain object-bottom [image-rendering:pixelated]",
        className,
      )}
    />
  )
}
