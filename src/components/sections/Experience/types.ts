interface Experience {
  title: string
  company: string
  date: string
  description: string
}

export interface ExperienceProps {
  title: string
  experiences: Experience[]
}