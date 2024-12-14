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

  return {
    menuItems
  }

}
