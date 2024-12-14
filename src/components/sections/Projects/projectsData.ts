import { useLanguage } from '../../../contexts/LanguageContext';

export function useProjectsData() {
  const { t } = useLanguage();

  return [
    {
      title: 'Insight Manager Tool',
      description: 'Enhanced filtering capabilities and user experience for DoorDash\'s store insights platform.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tags: ['React', 'TypeScript', 'Prism Design System'],
      demoUrl: 'https://doordash.com',
    },
    {
      title: 'Loan Platform Enhancement',
      description: 'Optimized loan application flow with Plaid integration and new borrower experience.',
      image: 'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?auto=format&fit=crop&q=80&w=800',
      tags: ['React', 'GraphQL', 'Chakra UI'],
      demoUrl: 'https://smartbizloans.com',
    },
    {
      title: 'Design System Implementation',
      description: 'Built a comprehensive design system using Bit and Chakra UI for consistent UI development.',
      image: 'https://images.unsplash.com/photo-1545670723-196ed0954986?auto=format&fit=crop&q=80&w=800',
      tags: ['TypeScript', 'Bit', 'Chakra UI'],
      githubUrl: 'https://github.com/Pillin',
    },
    {
      title: 'Product Administrator',
      description: 'Developed a robust product management system with NextJS and ExpressJS.',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
      tags: ['NextJS', 'ExpressJS', 'Contentful'],
      githubUrl: 'https://github.com/Pillin',
    },
    {
      title: 'Medical Appointment System',
      description: 'Built a medical appointment scheduling platform with React and modern UI components.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
      tags: ['React', 'BitBucket Pipelines', 'KrakenJS'],
      githubUrl: 'https://github.com/Pillin',
    },
    {
      title: 'Language Course Platform',
      description: 'Developed a search system for language courses abroad with Django and Angular.',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
      tags: ['Django', 'Angular', 'Nginx'],
      githubUrl: 'https://github.com/Pillin',
    },
    {
      title: 'Language Magazine CMS',
      description: 'Created a content management system for a Spanish learning blog using Django.',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800',
      tags: ['Django REST', 'Wagtail', 'PostgreSQL'],
      githubUrl: 'https://github.com/Pillin',
    },
    {
      title: 'BCI Accessibility Project',
      description: 'Implemented accessibility features for BCI website, tested with screen readers.',
      image: 'https://images.unsplash.com/photo-1617471346061-5d329ab9c574?auto=format&fit=crop&q=80&w=800',
      tags: ['Angular', 'Accessibility', 'WCAG'],
      githubUrl: 'https://github.com/Pillin',
    },
    {
      title: 'Healthcare Search Tool',
      description: 'Developed filters for evidence-based healthcare search using AngularJS.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      tags: ['AngularJS', 'MongoDB', 'Search'],
      githubUrl: 'https://github.com/Pillin',
    },
    {
      title: 'Mobile User Administration',
      description: 'Built user management system for mobile application with Django REST.',
      image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=800',
      tags: ['Django', 'REST API', 'Mobile'],
      githubUrl: 'https://github.com/Pillin',
    },
  ];
}