import { BarcodeStrip } from "@/components/common/BarcodeStrip"
import { site } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="relative px-5 py-10 md:px-8">
      <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-8 md:flex-row md:items-end">
        <p className="font-mono text-[13px] tracking-[0.14em] text-muted uppercase">
          {site.copyright}
        </p>
        <BarcodeStrip />
      </div>
    </footer>
  )
}
