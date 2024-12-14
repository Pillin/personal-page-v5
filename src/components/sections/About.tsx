import React from 'react';
import { Link } from '../ui/Link';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300">
              As a Frontend Developer at DoorDash and Google Women TechMakers Ambassador, 
              I specialize in creating accessible and animated web experiences that delight users.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Born and raised in Chile, I bring a unique perspective to my work, 
              combining South American creativity with Silicon Valley innovation.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com" variant="default" className="p-2">
                <GithubIcon className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com" variant="default" className="p-2">
                <LinkedinIcon className="w-6 h-6" />
              </Link>
              <Link href="https://twitter.com" variant="default" className="p-2">
                <TwitterIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800"
              alt="Pillippa coding"
              className="rounded-lg shadow-xl animate-fade-in"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg animate-slide-up delay-200">
              <p className="text-sm font-medium">Fun fact: I have two cats named Batman and Corchito! 🐱</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}