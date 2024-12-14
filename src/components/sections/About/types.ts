import { LucideIcon } from 'lucide-react';

interface Link {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface Skill {
  icon: LucideIcon,
  label: string,
  items: string[]
}

export interface AboutProps {
  title: string
  summary: string
  experience: string
  links: Link[]
  skills: Skill[]
  funFact: {
    description: string
    img: {
      src: string
      alt: string
    }
  }
}

export interface SkillsProps {
  skills: Skill[]
}

export interface SocialLinksProps { 
  links: Link[]
}



