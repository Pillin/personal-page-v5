import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero/Hero';
import { About } from './components/sections/About/About';
import { Experience } from './components/sections/Experience/Experience';
import { Projects } from './components/sections/Projects/Projects';
import { Speaking } from './components/sections/Speaking/Speaking';
import { Mentorship } from './components/sections/Mentorship/Mentorship';
import { useData } from './data'

export default function App() {
  const { menuItems, hero, about, experience, projects, speaking, mentorship } = useData()
  const onHeroClick = () => document.getElementById('projects')?.scrollIntoView()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navigation menuItems={menuItems}/>
      <div className="pt-16">
        <main>
          <Hero {...{ ...hero, ctaButton: { label: hero.ctaButton.label, onClick: onHeroClick }}} />
          <About {...about } />
          <Experience {...experience } />
          <Projects {...projects } />
          <Speaking {...speaking } />
          <Mentorship {...mentorship }/>
        </main>
      </div>
    </div>
  );
}