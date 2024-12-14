import { Github, Linkedin, Globe, Code2, Server, File } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';

export const useData = () => {
  const { t } = useLanguage();

  const menuItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#speaking', label: t('nav.speaking') },
    { href: '#mentorship', label: t('nav.mentorship') },
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
        alt: t('about.funFact.img.alt'),
        src: 'https://pub-fd15ed33e4cd4464955d571fb920a8c7.r2.dev/bigotitos.jpg'
      },
      description: t('about.funFact.description')
    },
    links: [
      { icon: Linkedin, href: `https://www.linkedin.com/in/ignaciapons/`, label: 'LinkedIn' },
      { icon: Github, href: `https://github.com/Pillin`, label: 'GitHub' },
      { icon: Globe, href: 'https://pillippa.dev', label: 'Website' },
      { icon: File, href: 'https://docs.google.com/document/d/1OM09GgIH2GSJKkdXCQ5fZLAUMVmVlTk_9zFR2-8QRw0/edit?usp=sharing', label: 'Resume' }
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
      url: 'https://www.doordash.com/'
    },
    {
      title: t('exp.smartbiz.title'),
      company: t('exp.smartbiz.company'),
      date: t('exp.smartbiz.date'),
      description: t('exp.smartbiz.description'),
      url: 'https://smartbizloans.com/'
    },
    {
      title: t('exp.reign.title'),
      company: t('exp.reign.company'),
      date: t('exp.reign.date'),
      description: t('exp.reign.description'),
      url: 'https://www.applydigital.com/reign/'
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
        link: 'https://jschile.org/',
      },
      {
        id: 'jsconf-chile',
        title: 'Event Organizer',
        organization: 'JSConf Chile',
        date: 'February 2022 - May 2024',
        description: 'Communication and coordination with speakers, volunteers, and schedule planning.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
        link: 'https://2023.jsconf.cl/',
      },
      {
        id: 'ninas-pro-coord',
        title: 'Call and Follow-up Coordinator',
        organization: 'Corporación NiñasPro',
        date: 'March 2020 - October 2020',
        description: 'Managed class schedules and student attendance tracking for programming courses.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
        link: 'https://ninaspro.cl/#/',
      },
      {
        id: 'ninas-pro-vol',
        title: 'Course Volunteer',
        organization: 'Corporación NiñasPro',
        date: 'April 2019 - October 2020',
        description: 'Supported students in understanding exercises, provided mentorship, and delivered programming classes.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
        link: 'https://ninaspro.cl/#/',
      },
    ]
  }

  const speaking = {
    title: t('speaking.title'),
    description: t('speaking.description'),
    talks: [
      {
        title: 'A World Without Limits: Making Videos Accessible to All with React and Cloudflare in Atlanta Dev',
        event: 'Atlanta DevConference',
        date: 'September 21, 2024',
        location: 'Atlanta, EEUU',
        description: 'Exploring techniques and best practices for creating accessible video experiences on the web.',
        slidesUrl: 'https://www.linkedin.com/posts/ignaciapons_atlantadevcon-webaccessibility-reactjs-activity-7240763299313672192-OMLU/',
      },
      {
        title: 'Building Real-Time Surveys with SolidJS and PartyKit: A Practical Approach',
        event: 'React & Remix Meetup',
        date: 'Aug 29, 2024',
        location: 'San Francisco, CA, EEUU',
        description: 'A deep dive into building real-time applications with SolidJS, focusing on performance and state management.',
        slidesUrl: 'https://github.com/Pillin/presentation-v0',
      },
      {
        title: 'Server Components to the Rescue: Turbocharging and Empowering Your React Apps with Style',
        event: 'React Submit NewYork',
        date: 'Nov 15, 2023',
        location: 'New York, EEUU',
        description: 'React Server Components',
        slidesUrl: 'https://gitnation.com/contents/server-components-to-the-rescue-turbocharging-and-empowering-your-react-apps-with-style-1633',
      },
      {
        title: 'Gatitos en Sólido: Introduction to SolidJs',
        event: 'FreecodecampBa',
        date: 'Jun 20, 2020',
        location: 'Online',
        description: 'Introduction to SolidJs',
        slidesUrl: 'https://www.youtube.com/live/Sk0dh_Uz31o?si=PWrpfGVHG57lXfh4&t=14048',
      },
    ]
  }

  const projects = {
    title: t('projects.title'),
    subtitle: t('projects.subtitle'),
    projects: []
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
