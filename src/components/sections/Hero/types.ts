export interface HeroProps {
  title: string
  greeting: string
  subtitle: string
  ctaButton: {
    label: string
    onClick: () => void
  }
}
