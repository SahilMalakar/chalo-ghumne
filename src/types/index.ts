import type { ReactNode } from "react"

export type ClassNameProps = {
  className?: string
}

export type ContainerProps = ClassNameProps & {
  children: ReactNode
}

export type SectionProps = ClassNameProps & {
  id: string
  label?: string
  children: ReactNode
}

export type SectionHeadingProps = ClassNameProps & {
  label: string
  title: string
  subtitle?: string
}

export type MonoLabelProps = ClassNameProps & {
  id?: string
  children: ReactNode
}

export type RevealProps = ClassNameProps & {
  delay?: number
  children: ReactNode
}

export type NavItem = {
  id: string
  label: string
}

export type HeroStat = {
  id: string
  label: string
  value: number
  suffix?: string
  grouped?: boolean
  live?: boolean
}

export type HeroLink = {
  label: string
  href: string
}

export type DestinationTag = "Mountains" | "Culture" | "Adventure"

export type DestinationFilterId = "all" | "mountains" | "culture" | "adventure"

export type Destination = {
  id: string
  name: string
  country: string
  tagline: string
  image: string
  season: string
  startingPrice: number
  tags: DestinationTag[]
}

export type DestinationsPage = {
  label: string
  title: string
  subtitle: string
}

export type PackageCta = {
  label: string
  href: string
}

export type TravelPackage = {
  id: string
  name: string
  duration: string
  price: number
  featured?: boolean
  featuredLabel?: string
  locations: string[]
  inclusions: string[]
  cta: PackageCta
}

export type PopularLocation = {
  id: string
  name: string
  price: number
}

export type PackagesPage = {
  label: string
  title: string
  subtitle: string
  servicesLabel: string
  servicesTitle: string
  servicesSubtitle: string
  popularLabel: string
}

export type ServiceIcon =
  | "compass"
  | "files"
  | "plane"
  | "sparkles"
  | "headset"
  | "map"

export type Service = {
  id: string
  title: string
  summary: string
  icon: ServiceIcon
}

export type AboutReason = {
  index: string
  title: string
  body: string
}

export type AboutPage = {
  label: string
  statement: string
  stamp: string
  year: string
  testimonialsLabel: string
  testimonialsTitle: string
  testimonialsSubtitle: string
  faqLabel: string
  faqTitle: string
  faqSubtitle: string
}

export type Testimonial = {
  id: string
  name: string
  location: string
  trip: string
  quote: string
  rating: number
}

export type ContactPage = {
  label: string
  title: string
  subtitle: string
  email: string
  phone: string
  address: string
}

export type FaqItem = {
  id: string
  question: string
  answer: string
}

export type DitheredImageProps = ClassNameProps & {
  src: string
  alt: string
  width: number
  height: number
  pixelSize?: number
  intensity?: number
  palette?: readonly string[]
}
