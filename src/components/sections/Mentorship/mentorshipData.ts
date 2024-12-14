import { useLanguage } from '../../../contexts/LanguageContext';

export function useMentorshipData() {
  const { t } = useLanguage();

  return [
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
  ];
}