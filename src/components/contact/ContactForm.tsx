import { useState, type FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { contactPage } from "@/data/contact"

const fieldClass =
  "min-h-11 w-full border border-line bg-surface px-3 text-base text-text"

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "")
    const email = String(data.get("email") ?? "")
    const message = String(data.get("message") ?? "")
    const body = `${message}\n\n${name}\n${email}`
    window.location.href = `mailto:${contactPage.email}?subject=${encodeURIComponent(`Trip enquiry from ${name}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form className="grid gap-[var(--space-card)]" onSubmit={onSubmit}>
      <label className="grid gap-[var(--space-tight)] text-[13px] text-text">
        Name
        <input name="name" required autoComplete="name" className={fieldClass} />
      </label>
      <label className="grid gap-[var(--space-tight)] text-[13px] text-text">
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </label>
      <label className="grid gap-[var(--space-tight)] text-[13px] text-text">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className={`${fieldClass} min-h-32 py-3`}
        />
      </label>
      <Button type="submit" className="w-full sm:w-fit">
        Send
      </Button>
      {sent ? (
        <p className="text-base text-muted" role="status">
          Your mail app should open with this note. If it does not, write to {contactPage.email}.
        </p>
      ) : null}
    </form>
  )
}
