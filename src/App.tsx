import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/sections/About/About';
import { Experience } from './components/sections/Experience/Experience';
import { Projects } from './components/sections/Projects/Projects';
import { Speaking } from './components/sections/Speaking/Speaking';
import { Mentorship } from './components/sections/Mentorship/Mentorship';
import { Contact } from './components/sections/Contact/Contact';
import { useData } from './data'

export default function App() {
  const { menuItems } = useData()


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navigation menuItems={menuItems}/>
      <div className="pt-16">
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Speaking />
          <Mentorship />
          <Contact />
        </main>
      </div>
    </div>
  );
}