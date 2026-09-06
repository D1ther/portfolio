import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import uk from './locales/uk.json';
import pl from './locales/pl.json';
import ru from './locales/ru.json';

export const SUPPORTED_LANGUAGES = ['en', 'uk', 'pl', 'ru'];

/**
 * Detects the user's preferred language from the browser.
 *
 * Uses the modern `navigator.language` / `navigator.languages` APIs when
 * available and falls back to `navigator.language` (the widely supported
 * singular form). The region suffix (e.g. "uk-UA") is stripped and the
 * language code is matched against the supported set, defaulting to English.
 */
export function detectLanguage(): string {
  const nav = navigator as Navigator & {
    language?: string;
    languages?: readonly string[];
  };

  const raw = nav.language ?? nav.languages?.[0] ?? 'en';
  const code = raw.split(/[-_]/)[0].toLowerCase();

  return SUPPORTED_LANGUAGES.includes(code) ? code : 'en';
}

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: detectLanguage(),
  resources: {
    en: { translation: en },
    uk: { translation: uk },
    pl: { translation: pl },
    ru: { translation: ru },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;