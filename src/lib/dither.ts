type Rgb = readonly [number, number, number]

export type DitherSettings = {
  pixelSize: number
  intensity: number
  palette: readonly string[]
}

const BAYER_4X4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
] as const

const cache = new Map<string, HTMLCanvasElement>()

function parseColor(input: string): Rgb | null {
  const value = input.trim()
  if (value.startsWith("#")) {
    const hex = value.slice(1)
    const full =
      hex.length === 3
        ? hex
            .split("")
            .map((channel) => channel + channel)
            .join("")
        : hex
    if (full.length !== 6) return null
    return [
      Number.parseInt(full.slice(0, 2), 16),
      Number.parseInt(full.slice(2, 4), 16),
      Number.parseInt(full.slice(4, 6), 16),
    ]
  }

  const match = value.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/i)
  if (!match) return null
  return [Number(match[1]), Number(match[2]), Number(match[3])]
}

function luminance(red: number, green: number, blue: number) {
  return 0.299 * red + 0.587 * green + 0.114 * blue
}

function rankedPalette(colors: readonly string[]) {
  return colors
    .map(parseColor)
    .filter((color): color is Rgb => color !== null)
    .map((rgb) => ({ rgb, lum: luminance(rgb[0], rgb[1], rgb[2]) }))
    .sort((a, b) => a.lum - b.lum)
}

function createDitheredCanvas(image: HTMLImageElement, settings: DitherSettings) {
  const ranked = rankedPalette(settings.palette)
  if (ranked.length < 2) throw new Error("palette")

  const pixelSize = Math.min(3, Math.max(2, Math.round(settings.pixelSize)))
  const canvas = document.createElement("canvas")
  canvas.width = Math.max(1, Math.floor(image.naturalWidth / pixelSize))
  canvas.height = Math.max(1, Math.floor(image.naturalHeight / pixelSize))

  const context = canvas.getContext("2d", { willReadFrequently: true })
  if (!context) throw new Error("canvas")

  context.imageSmoothingEnabled = false
  context.drawImage(image, 0, 0, canvas.width, canvas.height)
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
  const pixels = imageData.data
  const intensity = Math.min(1, Math.max(0, settings.intensity))

  for (let y = 0; y < canvas.height; y += 1) {
    for (let x = 0; x < canvas.width; x += 1) {
      const index = (y * canvas.width + x) * 4
      const alpha = pixels[index + 3] ?? 0
      if (alpha < 16) {
        pixels[index + 3] = 0
        continue
      }

      const red = pixels[index] ?? 0
      const green = pixels[index + 1] ?? 0
      const blue = pixels[index + 2] ?? 0
      const lum = luminance(red, green, blue) / 255
      const shadow = 1 - lum
      const sky = Math.max(0, (blue - Math.max(red, green)) / 80)
      const weight = Math.min(1, intensity * (0.22 + shadow * 0.95 + sky * 0.7))
      const threshold = (BAYER_4X4[y % 4]?.[x % 4] ?? 0) / 16 - 0.5
      const shifted = Math.min(1, Math.max(0, lum + threshold * weight))
      const paletteIndex = Math.round(shifted * (ranked.length - 1))
      const picked = ranked[paletteIndex]?.rgb
      if (!picked) continue

      pixels[index] = Math.round(red * (1 - weight) + picked[0] * weight)
      pixels[index + 1] = Math.round(green * (1 - weight) + picked[1] * weight)
      pixels[index + 2] = Math.round(blue * (1 - weight) + picked[2] * weight)
    }
  }

  context.putImageData(imageData, 0, 0)
  return canvas
}

export function paintDithered(
  target: HTMLCanvasElement,
  image: HTMLImageElement,
  settings: DitherSettings,
) {
  const key = [
    image.src,
    settings.pixelSize,
    settings.intensity,
    settings.palette.join("|"),
    image.naturalWidth,
    image.naturalHeight,
  ].join(":")

  const cached = cache.get(key) ?? createDitheredCanvas(image, settings)
  cache.set(key, cached)

  target.width = cached.width
  target.height = cached.height
  const context = target.getContext("2d")
  if (!context) throw new Error("canvas")
  context.imageSmoothingEnabled = false
  context.clearRect(0, 0, target.width, target.height)
  context.drawImage(cached, 0, 0)
}
