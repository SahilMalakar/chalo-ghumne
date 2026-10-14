import { hero } from "@/data/hero"

export function ExploreWord() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[22%] z-30 px-4 md:top-[26%]">
      <div className="relative mx-auto w-fit max-w-full">
        <div className="hero-scrim" aria-hidden="true" />
        <h1
          id="home-title"
          className="display relative text-center text-[clamp(3rem,11vw,8rem)] text-text"
        >
          {hero.word}
        </h1>
      </div>
    </div>
  )
}
