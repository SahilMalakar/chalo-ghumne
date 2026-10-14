import { aboutPage } from "@/data/about"
import { cn } from "@/lib/utils"
import type { ClassNameProps } from "@/types"

export function YearStamp({ className }: ClassNameProps) {
  const pathId = "about-stamp-path"

  return (
    <svg
      viewBox="0 0 140 140"
      className={cn("-rotate-[12deg] text-ink", className)}
      aria-hidden="true"
    >
      <circle
        cx="70"
        cy="70"
        r="66"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle
        cx="70"
        cy="70"
        r="50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <defs>
        <path
          id={pathId}
          d="M 70,70 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
        />
      </defs>
      <text
        className="fill-ink uppercase"
        style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.22em" }}
      >
        <textPath href={`#${pathId}`}>{aboutPage.stamp}</textPath>
      </text>
      <text
        x="70"
        y="76"
        textAnchor="middle"
        className="fill-ink"
        style={{ fontFamily: "var(--font-mono)", fontSize: "13px", letterSpacing: "0.16em" }}
      >
        {aboutPage.year}
      </text>
    </svg>
  )
}
