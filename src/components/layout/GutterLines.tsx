export function GutterLines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 hidden md:block"
    >
      <span className="gutter-line absolute inset-y-0 left-0 w-px" />
      <span className="gutter-line absolute inset-y-0 right-0 w-px" />
    </div>
  )
}
