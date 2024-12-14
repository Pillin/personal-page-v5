import { ContactForm } from './ContactForm';
import { ContactProps } from './types';

export function Contact({ title, description }: ContactProps) {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {description}
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}