import "@/styles/grain.css"

export function GrainBackground() {
  return (
    <div
      className="grain-layer pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    >
      <div className="grain-noise" />
      <div className="grain-speckle" />
      <div className="grain-vignette" />
    </div>
  )
}
