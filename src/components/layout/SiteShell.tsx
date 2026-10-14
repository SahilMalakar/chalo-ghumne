import type { ReactNode } from "react"

import { Footer } from "./Footer"
import { GrainBackground } from "./GrainBackground"
import { Navbar } from "./Navbar"
import { SideRails } from "./SideRails"

type SiteShellProps = {
  children: ReactNode
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <GrainBackground />
      <div className="relative min-h-svh overflow-x-clip px-4 md:px-[14%] min-[1280px]:px-[22%]">
        <div className="relative min-h-svh bg-bg/35">
          <Navbar />
          <SideRails>
            <main>{children}</main>
            <Footer />
          </SideRails>
        </div>
      </div>
    </>
  )
}
