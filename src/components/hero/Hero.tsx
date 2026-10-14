import { Button } from "@/components/ui/button"
import { hero } from "@/data/hero"

import { ExploreWord } from "./ExploreWord"
import { HeroQuote } from "./HeroQuote"
import { HeroScene } from "./HeroScene"
import { HeroStats } from "./HeroStats"
import { HeroTitle } from "./HeroTitle"

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative isolate min-h-[100svh] scroll-mt-24 overflow-hidden"
    >
      <div className="relative flex min-h-[100svh] flex-col">
        <HeroScene />
        <HeroTitle />
        <ExploreWord />
        <div className="relative z-40 mt-auto px-5 pt-8 pb-10 md:px-8 md:pb-12">
          <div className="flex flex-col gap-6 md:gap-7">
            <HeroQuote />
            <div className="flex flex-wrap gap-3">
              <Button render={<a href={hero.primaryCta.href} />}>
                {hero.primaryCta.label}
              </Button>
              <Button
                variant="ghost"
                render={<a href={hero.secondaryCta.href} />}
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
            <HeroStats />
          </div>
        </div>
      </div>
    </section>
  )
}
