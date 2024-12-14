interface Volunteer {
  id: string
  title: string
  organization: string
  date: string
  description: string
  image: string
  link: string
}

export interface MentorshipProps { 
  title: string
  volunteers: Volunteer[]
}