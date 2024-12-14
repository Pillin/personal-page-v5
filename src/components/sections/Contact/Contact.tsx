import React from 'react';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}