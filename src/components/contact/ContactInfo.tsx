import { contactPage } from "@/data/contact"

const rows = [
  { label: "Email", value: contactPage.email, href: `mailto:${contactPage.email}` },
  { label: "Phone", value: contactPage.phone, href: `tel:${contactPage.phone.replace(/\s/g, "")}` },
  { label: "Desk", value: contactPage.address },
] as const

export function ContactInfo() {
  return (
    <ul className="grid list-none gap-[var(--space-card)] p-0">
      {rows.map((row) => (
        <li key={row.label}>
          <p className="font-mono text-[13px] tracking-[0.08em] text-muted uppercase">
            {row.label}
          </p>
          {"href" in row ? (
            <a
              href={row.href}
              className="inline-flex min-h-11 items-center text-base text-text underline decoration-gold underline-offset-4"
            >
              {row.value}
            </a>
          ) : (
            <p className="inline-flex min-h-11 items-center text-base text-text">
              {row.value}
            </p>
          )}
        </li>
      ))}
    </ul>
  )
}
