interface Talk {
  title: string
  event: string
  date: string
  location: string
  description: string
  videoUrl: string
  slidesUrl: string
}

export interface SpeakingCardProps {
  title: string;
  event: string;
  date: string;
  location: string;
  description: string;
  videoUrl?: string;
  slidesUrl?: string;
  index: number;
}

export interface SpeakingEventProps {
  title: string;
  event: string;
  date: string;
  location: string;
  description: string;
  videoUrl?: string;
  slidesUrl?: string;
}

export interface SpeakingProps {
  title: string
  description: string
  talks: Talk[]
}
