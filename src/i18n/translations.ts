import { en } from './en'
import { es } from './es'

export type Language = 'en' | 'es';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const translations: Translations = {
  en,
  es
};