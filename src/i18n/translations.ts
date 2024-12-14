export type Language = 'en' | 'es';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const translations: Translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.speaking': 'Speaking',
    'nav.mentorship': 'Mentorship',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': "Hi, I'm Pillippa Pérez Pons",
    'hero.title': 'Software Engineer',
    'hero.location': 'Oakland, CA',
    'hero.subtitle': 'Bringing ideas to life with code and creativity',
    'hero.cta': 'Explore My Work',

    // About
    'about.title': 'About Me',
    'about.summary': "I'm a curious person who loves learning about most things. I feel that everything you can learn can be applied in one way or another. I love volunteering in different activities such as events and workshops in the JavaScript community.",
    'about.experience': 'Experience with JavaScript, TypeScript, Python, CSS, HTML, ReactJS, and Django.',
    'about.currentRole': 'Currently enhancing and optimizing the Insight Manager at DoorDash',
    'about.funFact': 'When not coding, I enjoy cycling, hiking, and playing sports like soccer and basketball.',

    // Experience
    'exp.title': 'Experience',
    'exp.doordash.title': 'Software Engineer (Frontend Focus)',
    'exp.doordash.company': 'DoorDash',
    'exp.doordash.date': 'March 2024 - Present',
    'exp.doordash.description': 'Enhancing and optimizing the Insight Manager tool using TypeScript and React',

    'exp.smartbiz.title': 'Software Engineer (Frontend Focus)',
    'exp.smartbiz.company': 'Smartbiz',
    'exp.smartbiz.date': 'Apr 2022 - Nov 2023',
    'exp.smartbiz.description': 'Optimized loan platform and implemented new user experience flows using GraphQL and React',

    // Speaking
    'speaking.title': 'Speaking',
    'speaking.upcoming': 'Upcoming Talks',
    'speaking.past': 'Past Talks',
    'speaking.react.title': 'A World Without Limits: Making Videos Accessible',
    'speaking.react.event': 'React Bay Area & Atlanta Developers Conference',
    'speaking.react.date': 'September 2024',
    'speaking.summit.title': 'Server Components to the Rescue',
    'speaking.summit.event': 'React Summit NY',
    'speaking.summit.date': 'November 2023',

    // Mentorship
    'mentorship.title': 'Community Involvement',
    'mentorship.wtm.title': 'Women TechMakers Ambassador',
    'mentorship.wtm.org': 'Google WTM',
    'mentorship.wtm.date': 'Aug 2024 - Present',
    'mentorship.wtm.description': 'Empowering communities through events, speaking, and mentoring',
    
    'mentorship.jsChile.title': 'Event Organizer',
    'mentorship.jsChile.org': 'JavaScript Chile',
    'mentorship.jsChile.date': 'March 2023 - May 2024',
    'mentorship.jsChile.description': 'Coordinating events to promote learning in the Chilean programming community',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.email': 'ignacia.pp@gmail.com',
    'contact.linkedin': 'Pillippa Pérez',
    'contact.github': 'Pillin',
    'contact.codesandbox': 'Pillin',
    'contact.message': 'Message',
    'contact.send': 'Send Message',

    // Languages
    'languages.title': 'Languages',
    'languages.english': 'English - Proficient (C2)',
    'languages.french': 'French - Basic',
    'languages.spanish': 'Spanish - Native'
  },
  es: {
    // Navigation
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.speaking': 'Charlas',
    'nav.mentorship': 'Mentoría',
    'nav.contact': 'Contacto',

    // Hero
    'hero.greeting': 'Hola, soy Pillippa Pérez Pons',
    'hero.title': 'Ingeniera de Software',
    'hero.location': 'Oakland, CA',
    'hero.subtitle': 'Dando vida a ideas con código y creatividad',
    'hero.cta': 'Explora mi trabajo',

    // About
    'about.title': 'Sobre mí',
    'about.summary': 'Soy una persona curiosa que ama aprender sobre la mayoría de las cosas. Siento que todo lo que puedes aprender se puede aplicar de una forma u otra. Me encanta ser voluntaria en diferentes actividades como eventos y talleres en la comunidad JavaScript.',
    'about.experience': 'Experiencia con JavaScript, TypeScript, Python, CSS, HTML, ReactJS y Django.',
    'about.currentRole': 'Actualmente mejorando y optimizando el Insight Manager en DoorDash',
    'about.funFact': 'Cuando no estoy programando, disfruto andar en bicicleta, hacer senderismo y jugar deportes como fútbol y básquetbol.',

    // Experience
    'exp.title': 'Experiencia',
    'exp.doordash.title': 'Ingeniera de Software (Frontend)',
    'exp.doordash.company': 'DoorDash',
    'exp.doordash.date': 'Marzo 2024 - Presente',
    'exp.doordash.description': 'Mejorando y optimizando la herramienta Insight Manager usando TypeScript y React',

    'exp.smartbiz.title': 'Ingeniera de Software (Frontend)',
    'exp.smartbiz.company': 'Smartbiz',
    'exp.smartbiz.date': 'Abril 2022 - Noviembre 2023',
    'exp.smartbiz.description': 'Optimización de plataforma de préstamos e implementación de nuevos flujos de experiencia de usuario usando GraphQL y React',

    // Speaking
    'speaking.title': 'Charlas',
    'speaking.upcoming': 'Próximas Charlas',
    'speaking.past': 'Charlas Anteriores',
    'speaking.react.title': 'Un Mundo Sin Límites: Haciendo Videos Accesibles',
    'speaking.react.event': 'React Bay Area & Atlanta Developers Conference',
    'speaking.react.date': 'Septiembre 2024',
    'speaking.summit.title': 'Server Components al Rescate',
    'speaking.summit.event': 'React Summit NY',
    'speaking.summit.date': 'Noviembre 2023',

    // Mentorship
    'mentorship.title': 'Participación Comunitaria',
    'mentorship.wtm.title': 'Embajadora de Women TechMakers',
    'mentorship.wtm.org': 'Google WTM',
    'mentorship.wtm.date': 'Agosto 2024 - Presente',
    'mentorship.wtm.description': 'Empoderando comunidades a través de eventos, charlas y mentoría',
    
    'mentorship.jsChile.title': 'Organizadora de Eventos',
    'mentorship.jsChile.org': 'JavaScript Chile',
    'mentorship.jsChile.date': 'Marzo 2023 - Mayo 2024',
    'mentorship.jsChile.description': 'Coordinando eventos para promover el aprendizaje en la comunidad de programación chilena',

    // Contact
    'contact.title': 'Contacto',
    'contact.email': 'ignacia.pp@gmail.com',
    'contact.linkedin': 'Pillippa Pérez',
    'contact.github': 'Pillin',
    'contact.codesandbox': 'Pillin',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',

    // Languages
    'languages.title': 'Idiomas',
    'languages.english': 'Inglés - Avanzado (C2)',
    'languages.french': 'Francés - Básico',
    'languages.spanish': 'Español - Nativo'
  }
};