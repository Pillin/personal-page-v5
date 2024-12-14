import { Github, Linkedin, Globe, Code2, Server } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';

export const useData = () => {
  const { t } = useLanguage();

  const menuItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#speaking', label: t('nav.speaking') },
    { href: '#mentorship', label: t('nav.mentorship') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const hero = {
    greeting: t('hero.greeting'),
    title: t('hero.title'),
    subtitle: t('hero.subtitle'),
    ctaButton: {
      label: t('hero.cta')
    }
  }

  const about = {
    title: t('about.title'),
    summary: t('about.summary'),
    experience: t('about.experience'),
    funFact: {
      img: {
        alt: '',
        src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800'
      },
      description: t('about.funFact')
    },
    links: [
      { icon: Linkedin, href: `https://linkedin.com/in/`, label: 'LinkedIn' },
      { icon: Github, href: `https://github.com/`, label: 'GitHub' },
      { icon: Globe, href: 'https://pillippa.dev', label: 'Website' },
    ],
    skills: [
      { icon: Code2, label: 'Frontend', items: ['JavaScript', 'TypeScript', 'React'] },
      { icon: Server, label: 'Backend', items: ['Python', 'Django', 'Node.js'] },
      { icon: Globe, label: 'Other', items: ['Git', 'GraphQL', 'Accessibility'] },
    ]
  }

  const experiences = [
    {
      title: t('exp.doordash.title'),
      company: t('exp.doordash.company'),
      date: t('exp.doordash.date'),
      description: t('exp.doordash.description'),
    },
    {
      title: t('exp.smartbiz.title'),
      company: t('exp.smartbiz.company'),
      date: t('exp.smartbiz.date'),
      description: t('exp.smartbiz.description'),
    },
  ];

  const experience = {
    title: t('exp.title'),
    experiences
  }

  const mentorship = {
    title: t('mentorship.title'),
    volunteers: [
      {
        id: 'wtm',
        title: t('mentorship.wtm.title'),
        organization: t('mentorship.wtm.org'),
        date: t('mentorship.wtm.date'),
        description: t('mentorship.wtm.description'),
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
        link: 'https://developers.google.com/womentechmakers',
      },
      {
        id: 'js-chile',
        title: 'Event Organizer',
        organization: 'JavaScript Chile',
        date: 'March 2023 - May 2024',
        description: 'Coordinating events to promote learning and professional growth in the Chilean programming community.',
        image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=800',
        link: 'https://javascript.cl',
      },
      {
        id: 'jsconf-chile',
        title: 'Event Organizer',
        organization: 'JSConf Chile',
        date: 'February 2022 - May 2024',
        description: 'Communication and coordination with speakers, volunteers, and schedule planning.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
        link: 'https://jsconf.cl',
      },
      {
        id: 'ninas-pro-coord',
        title: 'Call and Follow-up Coordinator',
        organization: 'Corporación NiñasPro',
        date: 'March 2020 - October 2020',
        description: 'Managed class schedules and student attendance tracking for programming courses.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
        link: 'https://ninaspro.org',
      },
      {
        id: 'ninas-pro-vol',
        title: 'Course Volunteer',
        organization: 'Corporación NiñasPro',
        date: 'April 2019 - October 2020',
        description: 'Supported students in understanding exercises, provided mentorship, and delivered programming classes.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
        link: 'https://ninaspro.org',
      },
    ]
  }

  const speaking = {
    title: 'as',
    description: 'asd',
    talks: [
      {
        title: 'Building Real-Time Surveys with SolidJS',
        event: 'React & Remix Meetup',
        date: 'October 15, 2023',
        location: 'San Francisco, CA',
        description: 'A deep dive into building real-time applications with SolidJS, focusing on performance and state management.',
        videoUrl: 'https://youtube.com',
        slidesUrl: 'https://slides.com',
      },
      {
        title: 'A World Without Limits: Making Videos Accessible',
        event: 'JSConf España',
        date: 'September 1, 2023',
        location: 'Madrid, Spain',
        description: 'Exploring techniques and best practices for creating accessible video experiences on the web.',
        videoUrl: 'https://youtube.com',
        slidesUrl: 'https://slides.com',
      },
    ]
  }

  const projects = {
    title: t('projects.title'),
    subtitle: t('projects.subtitle'),
    projects: [
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
  ]
  }


  return {
    menuItems,
    hero,
    about,
    experience,
    mentorship,
    speaking,
    projects
  }

}
