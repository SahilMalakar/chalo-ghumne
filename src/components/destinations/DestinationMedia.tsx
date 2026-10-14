import { cn } from "@/lib/utils"

type DestinationMediaProps = {
  src: string
  alt: string
  name: string
}

export function DestinationMedia({ src, alt, name }: DestinationMediaProps) {
  const mediaClass = cn(
    "absolute inset-0 h-full w-full object-cover object-center",
    "transition-transform duration-300 ease-out group-hover:scale-[1.03]",
    "motion-reduce:transition-none motion-reduce:group-hover:scale-100",
  )

  if (!src) {
    return (
      <div className="absolute inset-0 flex flex-col justify-end bg-surface-2 p-5">
        <p className="font-mono text-[13px] tracking-[0.08em] text-muted uppercase">
          Image –
        </p>
        <p className="card-title mt-2 text-text">{name}</p>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      width={960}
      height={1200}
      loading="lazy"
      className={mediaClass}
    />
  )
}
