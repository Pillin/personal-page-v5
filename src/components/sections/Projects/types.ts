interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  index: number;
}

export type ProjectCardProps = Project

export interface ProjectsProps {
  title: string
  subtitle: string
  projects: Project[]
}